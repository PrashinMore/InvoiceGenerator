import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../components/InvoiceGenerator'), {
  ssr: false
});

export default function InvoiceTemplates() {
  return (
    <>
      <Head>
        <title>Free Invoice Templates - Freelancer, Consultant, Professional Templates</title>
        <meta name="description" content="Free invoice templates for freelancers, consultants, and businesses. Download professional invoice templates. Use our free invoice generator with built-in templates. No login required." />
        <meta name="keywords" content="invoice templates, freelancer invoice template, consultant invoice template, free invoice templates, professional invoice template" />
      </Head>
      <div style={{ padding: '20px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ padding: '0 20px', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '20px', textAlign: 'center' }}>
            Free Invoice Templates - Choose Your Template
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            Choose from our collection of free, professional invoice templates. Each template is designed for specific business types and can be customized instantly using our free invoice generator. No download required - everything works online!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            {/* Freelancer Template */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid #667eea' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎨</div>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Freelancer Invoice Template</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Perfect for designers, developers, writers, and creative professionals. This template includes fields for project-based work, hourly rates, and service descriptions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#555' }}>
                <li style={{ marginBottom: '8px' }}>✓ Project/service-based billing</li>
                <li style={{ marginBottom: '8px' }}>✓ Hourly and fixed-rate support</li>
                <li style={{ marginBottom: '8px' }}>✓ Multiple line items</li>
                <li style={{ marginBottom: '8px' }}>✓ Payment terms section</li>
              </ul>
              <Link href="/#root" style={{ display: 'inline-block', padding: '12px 24px', background: '#667eea', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Use Freelancer Template →
              </Link>
            </div>

            {/* Consultant Template */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid #764ba2' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>💼</div>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Consultant Invoice Template</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Ideal for business consultants, advisors, and strategic service providers. Includes detailed service breakdowns and professional payment terms.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#555' }}>
                <li style={{ marginBottom: '8px' }}>✓ Strategic consulting billing</li>
                <li style={{ marginBottom: '8px' }}>✓ Detailed service descriptions</li>
                <li style={{ marginBottom: '8px' }}>✓ Tax calculations included</li>
                <li style={{ marginBottom: '8px' }}>✓ Professional formatting</li>
              </ul>
              <Link href="/#root" style={{ display: 'inline-block', padding: '12px 24px', background: '#764ba2', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Use Consultant Template →
              </Link>
            </div>

            {/* Small Business Template */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid #f093fb' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🏪</div>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Small Business Invoice Template</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Designed for small businesses selling products or services. Includes inventory tracking, shipping, and comprehensive payment options.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#555' }}>
                <li style={{ marginBottom: '8px' }}>✓ Product/service invoicing</li>
                <li style={{ marginBottom: '8px' }}>✓ Tax and discount support</li>
                <li style={{ marginBottom: '8px' }}>✓ Multiple payment methods</li>
                <li style={{ marginBottom: '8px' }}>✓ Business branding ready</li>
              </ul>
              <Link href="/#root" style={{ display: 'inline-block', padding: '12px 24px', background: '#f093fb', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Use Business Template →
              </Link>
            </div>

            {/* Simple Invoice Template */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid #4facfe' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>📄</div>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Simple Invoice Template</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Clean and minimalist invoice template for quick, straightforward billing. Perfect for one-time services or simple transactions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#555' }}>
                <li style={{ marginBottom: '8px' }}>✓ Minimalist design</li>
                <li style={{ marginBottom: '8px' }}>✓ Quick invoice creation</li>
                <li style={{ marginBottom: '8px' }}>✓ Easy to customize</li>
                <li style={{ marginBottom: '8px' }}>✓ Print-friendly format</li>
              </ul>
              <Link href="/simple-invoice-generator-no-login" style={{ display: 'inline-block', padding: '12px 24px', background: '#4facfe', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Use Simple Template →
              </Link>
            </div>

            {/* Professional Invoice Template */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid #43e97b' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>✨</div>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Professional Invoice Template</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Premium invoice template with all professional features. Includes GST support, multiple currencies, and comprehensive billing details.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#555' }}>
                <li style={{ marginBottom: '8px' }}>✓ GST/tax calculations</li>
                <li style={{ marginBottom: '8px' }}>✓ Multiple currencies (₹, $, €)</li>
                <li style={{ marginBottom: '8px' }}>✓ Complete billing details</li>
                <li style={{ marginBottom: '8px' }}>✓ Professional layout</li>
              </ul>
              <Link href="/invoice-generator-india" style={{ display: 'inline-block', padding: '12px 24px', background: '#43e97b', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Use Professional Template →
              </Link>
            </div>

            {/* GST Invoice Template for India */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid #fa709a' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🇮🇳</div>
              <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>GST Invoice Template (India)</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                GST-compliant invoice template specifically designed for Indian businesses. Includes CGST, SGST, IGST calculations and Indian Rupee support.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#555' }}>
                <li style={{ marginBottom: '8px' }}>✓ GST-compliant format</li>
                <li style={{ marginBottom: '8px' }}>✓ CGST/SGST/IGST support</li>
                <li style={{ marginBottom: '8px' }}>✓ Indian Rupee (₹) currency</li>
                <li style={{ marginBottom: '8px' }}>✓ UPI/bank payment options</li>
              </ul>
              <Link href="/invoice-generator-india" style={{ display: 'inline-block', padding: '12px 24px', background: '#fa709a', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
                Use GST Template →
              </Link>
            </div>
          </div>

          <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '30px', marginTop: '40px' }}>
            <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '15px' }}>How to Use Our Invoice Templates</h2>
            <ol style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Choose a template from the options above</li>
              <li style={{ marginBottom: '10px' }}>Click "Use [Template Name]" to access our invoice generator</li>
              <li style={{ marginBottom: '10px' }}>Click the corresponding preset button (Freelancer, Consultant, or Small Business) to auto-fill sample data</li>
              <li style={{ marginBottom: '10px' }}>Customize all fields with your actual business and client information</li>
              <li style={{ marginBottom: '10px' }}>Add your line items, set tax rates, and payment instructions</li>
              <li style={{ marginBottom: '10px' }}>Download your professional PDF invoice instantly</li>
            </ol>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginTop: '20px' }}>
              <strong>All templates are free to use with no login required!</strong> Your invoice data is saved locally in your browser for future edits.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#333', marginBottom: '30px' }}>
            Start Creating Your Invoice Now
          </h2>
          <InvoiceGenerator />
        </div>

        <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>More Resources</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/free-invoice-generator" style={{ color: '#667eea', textDecoration: 'none' }}>→ Free Invoice Generator</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/invoice-generator-for-freelancers" style={{ color: '#667eea', textDecoration: 'none' }}>→ Invoice Generator for Freelancers</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/blog/invoice-format-for-freelancers-template" style={{ color: '#667eea', textDecoration: 'none' }}>→ Invoice Format Guide</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

