import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../components/InvoiceGenerator'), {
  ssr: false
});

export default function InvoiceGeneratorIndia() {
  return (
    <>
      <Head>
        <title>Invoice Generator India - Free GST Invoice Creator for Indian Businesses</title>
        <meta name="description" content="Best invoice generator for India. Create GST-compliant invoices with Indian Rupee (₹) support. Free invoice generator for freelancers and businesses in India. No login required." />
        <meta name="keywords" content="invoice generator India, GST invoice generator, invoice generator for India, Indian invoice maker, freelancer invoice India" />
      </Head>
      <div style={{ padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '15px' }}>
              Invoice Generator India - GST Invoice Creator
            </h1>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
              The best <strong>invoice generator for India</strong>! Perfect for Indian freelancers, small businesses, and consultants. Our free invoice generator supports Indian Rupee (₹), GST tax calculations, and all features you need to create professional, GST-compliant invoices. Whether you need to create invoices for GST registration or simple business invoices, our tool makes it easy and fast.
            </p>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto 0' }}>
              As an <strong>invoice generator India</strong> solution, we support CGST, SGST, and IGST calculations. Simply add your GST percentage, and the invoice automatically calculates the tax amount. No complex software, no expensive subscriptions - just a free, simple tool that works in your browser. No login required, completely private, and your invoice data stays on your device. Create professional invoices for your Indian business today!
            </p>
          </div>
        </div>
      </div>
      <InvoiceGenerator />
    </>
  );
}

