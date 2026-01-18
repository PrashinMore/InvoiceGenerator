import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../components/InvoiceGenerator'), {
  ssr: false
});

export default function InvoiceGeneratorForFreelancers() {
  return (
    <>
      <Head>
        <title>Invoice Generator for Freelancers - Free Professional Invoice Creator</title>
        <meta name="description" content="Best invoice generator for freelancers. Create professional invoices for your freelance work. Free, no login required. Download PDF invoices instantly. Perfect for designers, developers, writers, and consultants." />
        <meta name="keywords" content="invoice generator for freelancers, freelancer invoice, freelance invoice creator, invoice maker for freelancers" />
      </Head>
      <div style={{ padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '15px' }}>
              Invoice Generator for Freelancers - Get Paid Faster
            </h1>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
              The perfect <strong>invoice generator for freelancers</strong>! Whether you're a designer, developer, writer, consultant, or any type of freelancer, our free invoice generator helps you create professional invoices that get you paid faster. No complicated software, no monthly subscriptions - just a simple, powerful tool that works instantly in your browser. Track hours, set rates, add multiple line items, and generate polished PDF invoices ready to send to clients.
            </p>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto 0' }}>
              As a <strong>freelancer invoice generator</strong>, we understand you need flexibility. That's why our tool supports multiple currencies, automatic calculations, tax handling (including GST for India), and customizable templates. Save your invoice data locally and continue working on it later. All completely free, no login required, and your data never leaves your device. Start invoicing like a pro today!
            </p>
          </div>
        </div>
      </div>
      <InvoiceGenerator />
    </>
  );
}

