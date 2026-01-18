import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const InvoiceGenerator = () => {
  // Generate invoice number
  const generateInvoiceNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000);
    return `INV-${year}${month}-${random}`;
  };

  // Invoice Details
  const [invoiceNumber, setInvoiceNumber] = useState(generateInvoiceNumber());
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  const [currency, setCurrency] = useState('₹');

  // Sender Details
  const [senderName, setSenderName] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');

  // Client Details
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Line Items
  const [items, setItems] = useState([
    { id: 1, description: '', quantity: 1, rate: 0 }
  ]);

  // Tax & Discount
  const [taxRate, setTaxRate] = useState(0);
  const [discountType, setDiscountType] = useState('flat'); // 'flat' or 'percent'
  const [discountValue, setDiscountValue] = useState(0);

  // Notes & Payment
  const [notes, setNotes] = useState('Thank you for your business!');
  const [paymentInstructions, setPaymentInstructions] = useState('');

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedInvoice = localStorage.getItem('lastInvoice');
      if (savedInvoice) {
        try {
          const data = JSON.parse(savedInvoice);
          // Restore all state from saved data
          if (data.invoiceNumber) setInvoiceNumber(data.invoiceNumber);
          if (data.invoiceDate) setInvoiceDate(data.invoiceDate);
          if (data.dueDate) setDueDate(data.dueDate);
          if (data.currency) setCurrency(data.currency);
          if (data.senderName) setSenderName(data.senderName);
          if (data.senderAddress) setSenderAddress(data.senderAddress);
          if (data.senderEmail) setSenderEmail(data.senderEmail);
          if (data.senderPhone) setSenderPhone(data.senderPhone);
          if (data.clientName) setClientName(data.clientName);
          if (data.clientAddress) setClientAddress(data.clientAddress);
          if (data.clientEmail) setClientEmail(data.clientEmail);
          if (data.items && data.items.length > 0) setItems(data.items);
          if (data.taxRate !== undefined) setTaxRate(data.taxRate);
          if (data.discountType) setDiscountType(data.discountType);
          if (data.discountValue !== undefined) setDiscountValue(data.discountValue);
          if (data.notes) setNotes(data.notes);
          if (data.paymentInstructions) setPaymentInstructions(data.paymentInstructions);
        } catch (error) {
          console.error('Error loading saved invoice:', error);
        }
      }
    }
  }, []);

  // Save to localStorage
  const saveInvoice = () => {
    if (typeof window !== 'undefined') {
      const invoiceData = {
        invoiceNumber,
        invoiceDate,
        dueDate,
        currency,
        senderName,
        senderAddress,
        senderEmail,
        senderPhone,
        clientName,
        clientAddress,
        clientEmail,
        items,
        taxRate,
        discountType,
        discountValue,
        notes,
        paymentInstructions
      };
      localStorage.setItem('lastInvoice', JSON.stringify(invoiceData));
      alert('Invoice saved successfully!');
    }
  };

  // Load last invoice
  const loadLastInvoice = () => {
    if (typeof window !== 'undefined') {
      const savedInvoice = localStorage.getItem('lastInvoice');
      if (savedInvoice) {
        try {
          const data = JSON.parse(savedInvoice);
          if (data.invoiceNumber) setInvoiceNumber(data.invoiceNumber);
          if (data.invoiceDate) setInvoiceDate(data.invoiceDate);
          if (data.dueDate) setDueDate(data.dueDate);
          if (data.currency) setCurrency(data.currency);
          if (data.senderName) setSenderName(data.senderName);
          if (data.senderAddress) setSenderAddress(data.senderAddress);
          if (data.senderEmail) setSenderEmail(data.senderEmail);
          if (data.senderPhone) setSenderPhone(data.senderPhone);
          if (data.clientName) setClientName(data.clientName);
          if (data.clientAddress) setClientAddress(data.clientAddress);
          if (data.clientEmail) setClientEmail(data.clientEmail);
          if (data.items && data.items.length > 0) setItems(data.items);
          if (data.taxRate !== undefined) setTaxRate(data.taxRate);
          if (data.discountType) setDiscountType(data.discountType);
          if (data.discountValue !== undefined) setDiscountValue(data.discountValue);
          if (data.notes) setNotes(data.notes);
          if (data.paymentInstructions) setPaymentInstructions(data.paymentInstructions);
          alert('Last invoice loaded successfully!');
        } catch (error) {
          console.error('Error loading saved invoice:', error);
          alert('Error loading saved invoice.');
        }
      } else {
        alert('No saved invoice found.');
      }
    }
  };

  // Preset templates
  const applyPreset = (presetType) => {
    const today = new Date().toISOString().split('T')[0];
    const dueDateObj = new Date();
    dueDateObj.setDate(dueDateObj.getDate() + 30);
    const dueDateStr = dueDateObj.toISOString().split('T')[0];

    switch (presetType) {
      case 'freelancer':
        setSenderName('Your Name');
        setSenderAddress('123 Your Street\nYour City, State 12345');
        setSenderEmail('your.email@example.com');
        setSenderPhone('+1 (555) 123-4567');
        setClientName('Client Company Name');
        setClientAddress('456 Client Street\nClient City, State 67890');
        setClientEmail('client@example.com');
        setItems([
          { id: 1, description: 'Web Development Services', quantity: 40, rate: 75 },
          { id: 2, description: 'UI/UX Design', quantity: 20, rate: 60 }
        ]);
        setTaxRate(0);
        setDiscountType('flat');
        setDiscountValue(0);
        setNotes('Thank you for choosing my services! Payment is due within 30 days.');
        setPaymentInstructions('PayPal: your.paypal@example.com\nBank Transfer: Account #123456789');
        setCurrency('$');
        setDueDate(dueDateStr);
        break;

      case 'consultant':
        setSenderName('Consulting Firm LLC');
        setSenderAddress('789 Business Ave\nSuite 100\nBusiness City, BC 54321');
        setSenderEmail('info@consultingfirm.com');
        setSenderPhone('+1 (555) 987-6543');
        setClientName('Client Corporation');
        setClientAddress('321 Corporate Blvd\nCorporate City, CC 98765');
        setClientEmail('accounts@clientcorp.com');
        setItems([
          { id: 1, description: 'Strategic Consulting - 20 hours', quantity: 20, rate: 150 },
          { id: 2, description: 'Business Analysis', quantity: 10, rate: 125 },
          { id: 3, description: 'Report Preparation', quantity: 1, rate: 500 }
        ]);
        setTaxRate(10);
        setDiscountType('percent');
        setDiscountValue(0);
        setNotes('This invoice covers consulting services for the month. All deliverables have been completed and approved.');
        setPaymentInstructions('Wire Transfer:\nBank: Business Bank\nAccount: 987654321\nSWIFT: BBUSUS33');
        setCurrency('$');
        setDueDate(dueDateStr);
        break;

      case 'small-business':
        setSenderName('Small Business Co.');
        setSenderAddress('555 Main Street\nLocal City, LC 11111\nUnited States');
        setSenderEmail('sales@smallbusiness.com');
        setSenderPhone('+1 (555) 111-2222');
        setClientName('Customer Name');
        setClientAddress('999 Customer Lane\nCustomer Town, CT 22222');
        setClientEmail('customer@email.com');
        setItems([
          { id: 1, description: 'Product A - Quantity 10', quantity: 10, rate: 25.50 },
          { id: 2, description: 'Product B - Quantity 5', quantity: 5, rate: 45.00 },
          { id: 3, description: 'Shipping & Handling', quantity: 1, rate: 15.00 }
        ]);
        setTaxRate(8.5);
        setDiscountType('flat');
        setDiscountValue(50);
        setNotes('Thank you for your business! We appreciate your continued partnership.');
        setPaymentInstructions('Payment Methods:\n- Credit Card: Call (555) 111-2222\n- Check: Mail to address above\n- Online: www.smallbusiness.com/pay');
        setCurrency('$');
        setDueDate(dueDateStr);
        break;

      default:
        break;
    }
  };

  // Calculate totals
  const calculateItemTotal = (item) => {
    return item.quantity * item.rate;
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  };

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    if (discountType === 'flat') {
      return discountValue;
    } else {
      return (subtotal * discountValue) / 100;
    }
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    return ((subtotal - discount) * taxRate) / 100;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const tax = calculateTax();
    return subtotal - discount + tax;
  };

  // Format currency
  const formatCurrency = (amount) => {
    const symbols = {
      '₹': '₹',
      '$': '$',
      '€': '€'
    };
    return `${symbols[currency]}${amount.toFixed(2)}`;
  };

  // Add new item
  const addItem = () => {
    setItems([...items, {
      id: Date.now(),
      description: '',
      quantity: 1,
      rate: 0
    }]);
  };

  // Remove item
  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // Update item
  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: field === 'description' ? value : parseFloat(value) || 0 };
      }
      return item;
    }));
  };

  // Generate PDF
  const generatePDF = async () => {
    const invoiceElement = document.getElementById('invoice-preview');
    
    if (!invoiceElement) {
      alert('Invoice preview not found');
      return;
    }

    try {
      const canvas = await html2canvas(invoiceElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgWidthFinal = imgWidth * ratio;
      const imgHeightFinal = imgHeight * ratio;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidthFinal, imgHeightFinal);
      pdf.save(`Invoice-${invoiceNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="invoice-generator">
      <div className="invoice-container">
        <div className="invoice-form">
          <h1>Invoice Generator</h1>
          
          {/* Presets */}
          <section className="form-section presets-section">
            <h2>Quick Start Templates</h2>
            <div className="presets-buttons">
              <button 
                type="button" 
                onClick={() => applyPreset('freelancer')} 
                className="preset-btn"
              >
                🎨 Freelancer
              </button>
              <button 
                type="button" 
                onClick={() => applyPreset('consultant')} 
                className="preset-btn"
              >
                💼 Consultant
              </button>
              <button 
                type="button" 
                onClick={() => applyPreset('small-business')} 
                className="preset-btn"
              >
                🏪 Small Business
              </button>
            </div>
          </section>

          {/* Save/Load */}
          <section className="form-section save-section">
            <div className="save-buttons">
              <button 
                type="button" 
                onClick={saveInvoice} 
                className="btn-save"
              >
                💾 Save Invoice
              </button>
              <button 
                type="button" 
                onClick={loadLastInvoice} 
                className="btn-load"
              >
                📂 Load Last Invoice
              </button>
            </div>
          </section>
          
          {/* Invoice Details */}
          <section className="form-section">
            <h2>Invoice Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Invoice Number</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Invoice Date</label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Currency</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                  <option value="₹">₹ (INR)</option>
                  <option value="$">$ (USD)</option>
                  <option value="€">€ (EUR)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Sender Details */}
          <section className="form-section">
            <h2>Your Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Name / Business Name</label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name or Business"
                />
              </div>
              <div className="form-group full-width">
                <label>Address</label>
                <textarea
                  value={senderAddress}
                  onChange={(e) => setSenderAddress(e.target.value)}
                  placeholder="Your Address"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Phone (Optional)</label>
                <input
                  type="tel"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  placeholder="+1234567890"
                />
              </div>
            </div>
          </section>

          {/* Client Details */}
          <section className="form-section">
            <h2>Client Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Client Name</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Client Name"
                />
              </div>
              <div className="form-group full-width">
                <label>Client Address</label>
                <textarea
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="Client Address"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Client Email (Optional)</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="client@email.com"
                />
              </div>
            </div>
          </section>

          {/* Line Items */}
          <section className="form-section">
            <h2>Line Items</h2>
            <div className="items-table">
              <div className="items-header">
                <div className="item-col description">Description</div>
                <div className="item-col quantity">Quantity</div>
                <div className="item-col rate">Rate</div>
                <div className="item-col total">Total</div>
                <div className="item-col action">Action</div>
              </div>
              {items.map((item) => (
                <div key={item.id} className="items-row">
                  <div className="item-col description">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      placeholder="Item description"
                    />
                  </div>
                  <div className="item-col quantity">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                    />
                  </div>
                  <div className="item-col rate">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.rate}
                      onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                    />
                  </div>
                  <div className="item-col total">
                    {formatCurrency(calculateItemTotal(item))}
                  </div>
                  <div className="item-col action">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="btn-remove"
                      disabled={items.length === 1}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addItem} className="btn-add-item">
                + Add Item
              </button>
            </div>
          </section>

          {/* Tax & Discount */}
          <section className="form-section">
            <h2>Tax & Discount</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Tax Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              <div className="form-group">
                <label>Discount Type</label>
                <select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                >
                  <option value="flat">Flat Amount</option>
                  <option value="percent">Percentage (%)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Discount Value</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
            </div>
          </section>

          {/* Notes & Payment */}
          <section className="form-section">
            <h2>Notes & Payment Info</h2>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Additional notes..."
                  rows="3"
                />
              </div>
              <div className="form-group full-width">
                <label>Payment Instructions</label>
                <textarea
                  value={paymentInstructions}
                  onChange={(e) => setPaymentInstructions(e.target.value)}
                  placeholder="UPI / Bank Details / PayPal / etc."
                  rows="3"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button onClick={generatePDF} className="btn-primary">
              Download PDF
            </button>
          </div>
        </div>

        {/* Invoice Preview */}
        <div className="invoice-preview-container">
          <div id="invoice-preview" className="invoice-preview">
            <div className="invoice-header">
              <div className="invoice-title">INVOICE</div>
              <div className="invoice-number">#{invoiceNumber}</div>
            </div>

            <div className="invoice-dates">
              <div className="date-row">
                <span className="date-label">Invoice Date:</span>
                <span className="date-value">{invoiceDate || 'N/A'}</span>
              </div>
              {dueDate && (
                <div className="date-row">
                  <span className="date-label">Due Date:</span>
                  <span className="date-value">{dueDate}</span>
                </div>
              )}
            </div>

            <div className="invoice-parties">
              <div className="party-section">
                <h3>From:</h3>
                {senderName && <div className="party-name">{senderName}</div>}
                {senderAddress && <div className="party-address">{senderAddress}</div>}
                {senderEmail && <div className="party-email">{senderEmail}</div>}
                {senderPhone && <div className="party-phone">{senderPhone}</div>}
              </div>

              <div className="party-section">
                <h3>To:</h3>
                {clientName && <div className="party-name">{clientName}</div>}
                {clientAddress && <div className="party-address">{clientAddress}</div>}
                {clientEmail && <div className="party-email">{clientEmail}</div>}
              </div>
            </div>

            <div className="invoice-items">
              <table>
                <thead>
                  <tr>
                    <th className="col-desc">Description</th>
                    <th className="col-qty">Qty</th>
                    <th className="col-rate">Rate</th>
                    <th className="col-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="col-desc">{item.description || '-'}</td>
                      <td className="col-qty">{item.quantity}</td>
                      <td className="col-rate">{formatCurrency(item.rate)}</td>
                      <td className="col-total">{formatCurrency(calculateItemTotal(item))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="invoice-summary">
              <div className="summary-row">
                <span className="summary-label">Subtotal:</span>
                <span className="summary-value">{formatCurrency(calculateSubtotal())}</span>
              </div>
              {discountValue > 0 && (
                <div className="summary-row">
                  <span className="summary-label">
                    Discount {discountType === 'percent' ? `(${discountValue}%)` : ''}:
                  </span>
                  <span className="summary-value">-{formatCurrency(calculateDiscount())}</span>
                </div>
              )}
              {taxRate > 0 && (
                <div className="summary-row">
                  <span className="summary-label">Tax ({taxRate}%):</span>
                  <span className="summary-value">{formatCurrency(calculateTax())}</span>
                </div>
              )}
              <div className="summary-row total-row">
                <span className="summary-label">Total:</span>
                <span className="summary-value">{formatCurrency(calculateTotal())}</span>
              </div>
            </div>

            {notes && (
              <div className="invoice-notes">
                <h4>Notes:</h4>
                <p>{notes}</p>
              </div>
            )}

            {paymentInstructions && (
              <div className="invoice-payment">
                <h4>Payment Instructions:</h4>
                <p>{paymentInstructions}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEO Landing Content */}
      <div className="seo-content">
        <div className="seo-container">
          <section className="seo-hero">
            <h1>Free Invoice Generator - Create Invoice Online PDF Without Login</h1>
            <p className="seo-subtitle">
              The best <strong>free invoice generator</strong> that works as an <strong>invoice generator without login</strong>. 
              Create professional invoices online and download as PDF instantly. Perfect for freelancers in India, 
              small businesses, and anyone needing a <strong>GST invoice generator</strong>. No registration, no sign-up required.
            </p>
          </section>

          <section className="seo-use-cases">
            <h2>Who Can Use This Invoice Generator?</h2>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <div className="use-case-icon">🎨</div>
                <h3>Freelancer Invoice Generator India</h3>
                <p>
                  Perfect <strong>freelancer invoice generator India</strong> for designers, writers, developers, and consultants. 
                  Create professional invoices for your projects, track hours, set rates, and get paid faster. 
                  Generate GST-compliant invoices without any registration.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">💼</div>
                <h3>Consultants</h3>
                <p>
                  Generate detailed invoices for consulting services, project work, and advisory services. 
                  Include itemized billing and professional payment terms.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">🏪</div>
                <h3>Small Businesses</h3>
                <p>
                  Create invoices for product sales, services, or recurring billing. 
                  Support multiple currencies and tax calculations for global customers.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">👨‍💻</div>
                <h3>Contractors</h3>
                <p>
                  Invoice clients for construction, maintenance, or repair work. 
                  Add line items for materials, labor, and equipment.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">🎓</div>
                <h3>Educators & Trainers</h3>
                <p>
                  Bill for courses, workshops, tutoring sessions, or educational materials. 
                  Track multiple students or clients easily.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-icon">🛠️</div>
                <h3>Service Providers</h3>
                <p>
                  Create invoices for cleaning, landscaping, IT support, or any service-based business. 
                  Professional invoices help you get paid on time.
                </p>
              </div>
            </div>
          </section>

          <section className="seo-features">
            <h2>Why Choose Our Free Invoice Generator?</h2>
            <ul className="features-list">
              <li>✅ <strong>Invoice Generator Without Login</strong> - No account creation, no email signup required. Start creating invoices immediately.</li>
              <li>✅ <strong>Create Invoice Online PDF</strong> - Generate professional PDF invoices instantly. Download and share with clients in seconds.</li>
              <li>✅ <strong>GST Invoice Generator</strong> - Perfect for Indian businesses. Add GST tax rates and create GST-compliant invoices easily.</li>
              <li>✅ <strong>Freelancer Invoice Generator India</strong> - Specifically designed for freelancers in India. Support for ₹ (INR) currency and GST calculations.</li>
              <li>✅ <strong>Multiple Currencies</strong> - Support for ₹ (INR), $ (USD), and € (EUR). Switch currencies anytime.</li>
              <li>✅ <strong>Auto Calculations</strong> - Automatic subtotals, tax (including GST), and discount calculations. No manual math required.</li>
              <li>✅ <strong>PDF Export</strong> - Download professional PDF invoices ready to email or print. A4 format optimized for printing.</li>
              <li>✅ <strong>Customizable Templates</strong> - Quick-start templates for freelancers, consultants, and small businesses.</li>
              <li>✅ <strong>Save & Load</strong> - Save your work in browser and continue later. All data stays on your device.</li>
              <li>✅ <strong>100% Free</strong> - Completely free invoice generator. No hidden fees, no subscriptions, no credit card required.</li>
            </ul>
          </section>

          <section className="seo-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Is this a free invoice generator?</h3>
                <p>
                  Yes, absolutely! This is a completely <strong>free invoice generator</strong> with no hidden fees, 
                  no subscriptions, and no credit card required. You can create unlimited invoices without any cost. 
                  It's the best free invoice generator available online.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do I need to login or create an account?</h3>
                <p>
                  No! This is an <strong>invoice generator without login</strong>. No account creation, no email signup, 
                  no registration required. You can start using the invoice generator immediately. 
                  Your invoices are saved locally in your browser, so your data stays private and secure.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can I create invoice online PDF?</h3>
                <p>
                  Absolutely! You can <strong>create invoice online PDF</strong> instantly. Simply fill in your invoice details, 
                  click the "Download PDF" button, and get a professional PDF invoice ready to send to your clients. 
                  The PDF is optimized for printing and email sharing.
                </p>
              </div>
              <div className="faq-item">
                <h3>Is this a freelancer invoice generator for India?</h3>
                <p>
                  Yes! This <strong>freelancer invoice generator India</strong> is perfect for freelancers, consultants, 
                  and independent contractors in India. It supports Indian Rupee (₹), GST tax calculations, and 
                  all features needed for Indian businesses. No registration required.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can I use this as a GST invoice generator?</h3>
                <p>
                  Yes! This works as a <strong>GST invoice generator</strong>. You can add GST tax rates (CGST, SGST, or IGST) 
                  as a percentage, and the invoice will automatically calculate the tax amount. Perfect for creating 
                  GST-compliant invoices for your business in India.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can I customize the invoice design?</h3>
                <p>
                  Yes! You can customize all invoice fields including your business details, client information, 
                  line items, tax rates, discounts, notes, and payment instructions. The invoice preview updates 
                  in real-time as you type.
                </p>
              </div>
              <div className="faq-item">
                <h3>What currencies are supported?</h3>
                <p>
                  Currently, we support three major currencies: Indian Rupee (₹), US Dollar ($), and Euro (€). 
                  You can switch between currencies at any time, and all amounts will be displayed in your selected currency.
                </p>
              </div>
              <div className="faq-item">
                <h3>How do I create invoice online PDF?</h3>
                <p>
                  To <strong>create invoice online PDF</strong>, simply fill in all your invoice details, add line items, 
                  set tax rates (including GST if needed), and click the "Download PDF" button. The invoice will be 
                  generated as a high-quality PDF file that you can save, email, or print. The PDF uses a 
                  standard A4 format optimized for printing and professional presentation.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can I save my invoice and edit it later?</h3>
                <p>
                  Yes! Click the "Save Invoice" button to save your current invoice to your browser's local storage. 
                  When you return, click "Load Last Invoice" to restore all your data. Your invoice data never 
                  leaves your device.
                </p>
              </div>
              <div className="faq-item">
                <h3>Are there invoice templates available?</h3>
                <p>
                  Yes! We provide three quick-start templates: Freelancer, Consultant, and Small Business. 
                  Click any template button to auto-fill sample data that you can then customize to your needs.
                </p>
              </div>
              <div className="faq-item">
                <h3>Is my data secure and private?</h3>
                <p>
                  Absolutely. All invoice data is stored locally in your browser using localStorage. 
                  We don't collect, store, or transmit any of your information to our servers. 
                  Your invoices remain completely private and secure on your device.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can I use this for multiple clients?</h3>
                <p>
                  Yes! You can create invoices for as many clients as you need. Simply change the client 
                  information for each new invoice. There's no limit on the number of invoices you can create.
                </p>
              </div>
              <div className="faq-item">
                <h3>Does this work on mobile devices?</h3>
                <p>
                  Yes, our invoice generator is fully responsive and works on desktop computers, tablets, 
                  and mobile phones. You can create and download invoices from any device with a modern web browser.
                </p>
              </div>
            </div>
          </section>

          <section className="seo-keywords">
            <h2>Best Free Invoice Generator - No Login Required</h2>
            <div className="keywords-content">
              <p>
                Looking for a <strong>free invoice generator</strong>? You've found it! Our invoice generator works completely 
                <strong> without login</strong> - no email, no registration, no signup required. Start creating professional 
                invoices in seconds.
              </p>
              <p>
                Need to <strong>create invoice online PDF</strong>? Our tool lets you generate PDF invoices instantly. 
                Simply fill in your details, add line items, and download your invoice as a professional PDF file. 
                Perfect for sending to clients via email or printing.
              </p>
              <p>
                Are you a freelancer in India? Our <strong>freelancer invoice generator India</strong> is designed specifically 
                for you. Support for Indian Rupee (₹), GST calculations, and all the features you need to create professional 
                invoices for your clients.
              </p>
              <p>
                Need a <strong>GST invoice generator</strong>? Our tool supports GST tax calculations, making it easy to 
                create GST-compliant invoices. Add your GST percentage, and the invoice automatically calculates CGST, SGST, 
                or IGST as needed.
              </p>
              <p>
                <strong>Why choose our invoice generator?</strong> It's completely free, requires no login, works offline after 
                first load, supports multiple currencies, generates professional PDFs, and is perfect for freelancers, 
                small businesses, and consultants in India and worldwide.
              </p>
            </div>
          </section>

          <section className="seo-cta">
            <h2>Ready to Create Your First Invoice?</h2>
            <p>Start generating professional invoices now - it's free and takes less than a minute!</p>
            <a href="#root" className="cta-button">Get Started Free - No Login Required</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;

