import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../components/InvoiceGenerator'), {
  ssr: false
});

export default function SimpleInvoiceGeneratorNoLogin() {
  return (
    <>
      <Head>
        <title>Simple Invoice Generator No Login - Create Invoices Instantly Free</title>
        <meta name="description" content="Simple invoice generator with no login required. Create professional invoices instantly without registration or signup. Free invoice maker that works immediately. Download PDF invoices in seconds." />
        <meta name="keywords" content="simple invoice generator, invoice generator no login, invoice creator no signup, free invoice maker no registration" />
      </Head>
      <div style={{ padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '15px' }}>
              Simple Invoice Generator - No Login Required
            </h1>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
              The simplest <strong>invoice generator with no login</strong>! Tired of creating accounts and providing email addresses just to create an invoice? Our simple invoice generator requires zero registration, zero signup, and zero login. Start creating professional invoices immediately - just open the tool, fill in your details, and download your PDF invoice. That's it!
            </p>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto 0' }}>
              Our <strong>simple invoice generator no login</strong> approach means instant access. No forms to fill, no email verification, no waiting. Everything works right in your browser - your invoice data is saved locally and never uploaded to any server. Perfect for privacy-conscious users who want a simple, straightforward invoice creation tool. Completely free, forever. Start creating invoices now!
            </p>
          </div>
        </div>
      </div>
      <InvoiceGenerator />
    </>
  );
}

