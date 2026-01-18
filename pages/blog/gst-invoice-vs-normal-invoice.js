import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../../components/InvoiceGenerator'), {
  ssr: false
});

export default function GSTInvoiceVsNormalInvoice() {
  return (
    <>
      <Head>
        <title>GST Invoice vs Normal Invoice - Simple Explanation & Differences (2024)</title>
        <meta name="description" content="Learn the difference between GST invoice vs normal invoice. Simple explanation of GST invoice requirements, format, and when to use each. Use our free GST invoice generator." />
        <meta name="keywords" content="GST invoice vs normal invoice, GST invoice format, normal invoice, GST invoice generator, invoice types India" />
      </Head>
      <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <article style={{ padding: '0 20px', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>
            GST Invoice vs Normal Invoice - Simple Explanation
          </h1>
          
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
            <p>
              Understanding the difference between <strong>GST invoice vs normal invoice</strong> is essential for Indian businesses and freelancers. While both serve the same basic purpose of requesting payment, they have different legal requirements and use cases.
            </p>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>What is a Normal Invoice?</h2>
            <p>
              A <strong>normal invoice</strong> (also called a tax invoice or regular invoice) is a basic document used to request payment for goods or services. It includes essential information like invoice number, date, seller and buyer details, description of items, quantities, rates, and total amount. Normal invoices are used by businesses and individuals who are not registered under GST or for transactions that don't require GST compliance.
            </p>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>What is a GST Invoice?</h2>
            <p>
              A <strong>GST invoice</strong> is a special type of invoice required when the seller is registered under GST (Goods and Services Tax). It includes all the details of a normal invoice PLUS mandatory GST-related information. This includes:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>GSTIN (GST Identification Number) of the supplier</li>
              <li>GSTIN of the recipient (if registered)</li>
              <li>HSN (Harmonized System of Nomenclature) or SAC (Services Accounting Code)</li>
              <li>Taxable value and GST rate</li>
              <li>CGST and SGST amounts (for intra-state transactions)</li>
              <li>IGST amount (for inter-state transactions)</li>
              <li>Total invoice value including GST</li>
            </ul>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>Key Differences: GST Invoice vs Normal Invoice</h2>
            
            <div style={{ overflowX: 'auto', marginTop: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                  <tr style={{ background: '#667eea', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Aspect</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Normal Invoice</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>GST Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>GST Registration Required</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>No</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Yes</td>
                  </tr>
                  <tr style={{ background: '#f8f9fa' }}>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>GSTIN Display</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Not required</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Mandatory</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Tax Calculation</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Optional or other taxes</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>CGST/SGST or IGST required</td>
                  </tr>
                  <tr style={{ background: '#f8f9fa' }}>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>HSN/SAC Code</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Not required</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Mandatory for GST</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Legal Compliance</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Basic invoice requirements</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>GST Act compliance required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>When to Use Each Type?</h2>
            <p>
              <strong>Use a Normal Invoice when:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>You're not registered under GST</li>
              <li>Your annual turnover is below the GST threshold (currently ₹20 lakh for most businesses)</li>
              <li>You're providing services that are exempt from GST</li>
              <li>You need a simple invoice without tax complexity</li>
            </ul>

            <p style={{ marginTop: '15px' }}>
              <strong>Use a GST Invoice when:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>You're registered under GST</li>
              <li>Your annual turnover exceeds the GST threshold</li>
              <li>You're selling taxable goods or services</li>
              <li>Your client needs GST credit</li>
              <li>You want to claim GST input tax credit on purchases</li>
            </ul>

            <p style={{ marginTop: '30px', padding: '15px', background: '#d1ecf1', borderRadius: '8px', borderLeft: '4px solid #0c5460' }}>
              <strong>Note:</strong> Our free invoice generator supports both normal invoices and GST invoices. Simply add your GST rate (if applicable) and the tool will automatically calculate CGST, SGST, or IGST based on your needs.
            </p>
          </div>
        </article>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#333', marginBottom: '30px' }}>
            Create GST or Normal Invoice - Your Choice
          </h2>
          <InvoiceGenerator />
        </div>

        <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Related Topics</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/invoice-generator-india" style={{ color: '#667eea', textDecoration: 'none' }}>→ GST Invoice Generator for India</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/blog/how-to-create-invoice-as-freelancer-india" style={{ color: '#667eea', textDecoration: 'none' }}>→ How to Create Invoice as Freelancer in India</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

