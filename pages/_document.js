import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Invoice Generator",
    "description": "Free invoice generator without login. Create professional invoices online and download as PDF. Perfect for freelancers in India. GST invoice generator with no registration required.",
    "url": "https://prashinmore.github.io/InvoiceGenerator/",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Free invoice generator without login",
      "Create invoice online PDF",
      "GST invoice generator for India",
      "Freelancer invoice generator",
      "Multiple currency support",
      "PDF export",
      "No registration required"
    ]
  };

  return (
    <Html lang="en">
      <Head>
        <title>Free Invoice Generator - Create Invoice Online PDF Without Login | GST Invoice Generator India</title>
        <meta name="description" content="Free invoice generator without login. Create professional invoices online and download as PDF. Perfect for freelancers in India. GST invoice generator with no registration required." />
        <meta name="keywords" content="free invoice generator, invoice generator without login, create invoice online pdf, freelancer invoice generator india, gst invoice generator, invoice maker, invoice creator, online invoice, pdf invoice generator, invoice template, invoice software, free invoice maker, invoice generator online, invoice pdf, invoice creator free, invoice generator india, gst invoice, invoice without signup, invoice maker online, invoice generator app" />
        <meta name="author" content="Invoice Generator" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Invoice Generator - Create Invoice Online PDF Without Login" />
        <meta property="og:description" content="Generate professional invoices instantly. Free invoice generator without login. Create and download PDF invoices online. Perfect for freelancers and small businesses in India. GST invoice generator." />
        <meta property="og:url" content="https://prashinmore.github.io/InvoiceGenerator/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Invoice Generator - No Login Required" />
        <meta name="twitter:description" content="Create professional invoices online. Free invoice generator without login. Download as PDF instantly. GST invoice generator for India." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://prashinmore.github.io/InvoiceGenerator/" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

