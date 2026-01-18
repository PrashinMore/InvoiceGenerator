import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../../components/InvoiceGenerator'), {
  ssr: false
});

export default function HowToCreateInvoiceAsFreelancerIndia() {
  return (
    <>
      <Head>
        <title>How to Create Invoice as a Freelancer in India - Complete Guide 2024</title>
        <meta name="description" content="Complete guide on how to create invoice as a freelancer in India. Learn about GST invoices, invoice format, and use our free invoice generator. Step-by-step instructions." />
        <meta name="keywords" content="how to create invoice as freelancer India, invoice format for freelancers India, GST invoice freelancer, freelance invoice template India" />
      </Head>
      <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <article style={{ padding: '0 20px', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>
            How to Create Invoice as a Freelancer in India - Complete Guide
          </h1>
          
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
            <p>
              As a freelancer in India, creating professional invoices is essential for getting paid on time and maintaining proper records for tax purposes. Whether you're a designer, developer, writer, or consultant, knowing <strong>how to create invoice as a freelancer in India</strong> can make a significant difference in your business operations.
            </p>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>Why Proper Invoicing Matters for Indian Freelancers</h2>
            <p>
              Proper invoicing helps you maintain professional relationships with clients, ensures timely payments, and keeps your financial records organized for GST compliance. A well-structured invoice includes all necessary details that clients need to process payments quickly.
            </p>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>Essential Elements of a Freelancer Invoice in India</h2>
            <p>
              When creating an invoice as a freelancer in India, include these key elements:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Invoice number (unique for each invoice)</li>
              <li>Invoice date and due date</li>
              <li>Your business name, address, and contact details</li>
              <li>Client's name, address, and contact information</li>
              <li>Detailed description of services provided</li>
              <li>Quantity and rate for each service</li>
              <li>GST registration number (if applicable)</li>
              <li>GST amount (CGST, SGST, or IGST)</li>
              <li>Total amount due</li>
              <li>Payment instructions (UPI, bank transfer details, etc.)</li>
            </ul>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>GST Invoice Requirements for Freelancers in India</h2>
            <p>
              If you're registered under GST, your invoice must comply with GST rules. For <strong>invoice generator India</strong> purposes, include your GSTIN, break down the GST amount (CGST + SGST for intra-state, or IGST for inter-state), and ensure all calculations are accurate. Our free invoice generator supports automatic GST calculations.
            </p>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '30px', marginBottom: '15px' }}>Step-by-Step: Create Invoice as Freelancer</h2>
            <p>
              Use our free invoice generator below to create professional invoices instantly. No login required, completely free, and designed specifically for freelancers in India. Simply fill in your details, add line items, set GST rates if needed, and download as PDF.
            </p>

            <p style={{ marginTop: '20px', padding: '15px', background: '#f0f8ff', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <strong>Tip:</strong> Save your invoice template with your business details to save time on future invoices. Our tool saves data locally in your browser for quick access.
            </p>
          </div>
        </article>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#333', marginBottom: '30px' }}>
            Try Our Free Invoice Generator Now
          </h2>
          <InvoiceGenerator />
        </div>

        <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Related Resources</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/invoice-templates" style={{ color: '#667eea', textDecoration: 'none' }}>→ Free Invoice Templates for Freelancers</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/invoice-generator-india" style={{ color: '#667eea', textDecoration: 'none' }}>→ Invoice Generator for India (GST Support)</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

