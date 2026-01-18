import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../components/InvoiceGenerator'), {
  ssr: false
});

export default function FreeInvoiceGenerator() {
  return (
    <>
      <Head>
        <title>Free Invoice Generator - Create Professional Invoices Online No Login</title>
        <meta name="description" content="Free invoice generator - create professional invoices online instantly. No login, no signup required. Download as PDF in seconds. Perfect for freelancers, small businesses, and consultants." />
        <meta name="keywords" content="free invoice generator, invoice generator online, create invoice, invoice maker, free invoice creator" />
      </Head>
      <div style={{ padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '15px' }}>
              Free Invoice Generator - No Login Required
            </h1>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
              Looking for a <strong>free invoice generator</strong>? You've found it! Our completely free invoice generator lets you create professional invoices online instantly without any login, registration, or signup. Simply fill in your details, add line items, and download your invoice as a professional PDF. Perfect for freelancers, small businesses, consultants, and anyone who needs to create invoices quickly and easily.
            </p>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto 0' }}>
              Our <strong>free invoice generator</strong> supports multiple currencies (₹, $, €), automatic tax calculations including GST for India, discount options, and customizable payment instructions. All data is stored locally in your browser - no server uploads, completely private and secure. Start creating professional invoices in seconds!
            </p>
          </div>
        </div>
      </div>
      <InvoiceGenerator />
    </>
  );
}

