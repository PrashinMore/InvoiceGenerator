# Invoice Generator

A modern, frontend-only invoice generator built with Next.js. Create professional invoices and export them as PDFs.

## Features

✅ **Invoice Details**
- Auto-generated invoice number (editable)
- Invoice date and due date
- Currency selector (₹ / $ / €)

✅ **Sender & Client Information**
- Complete sender/business details
- Client information fields
- Optional email and phone fields

✅ **Line Items Management**
- Add/remove multiple items
- Quantity and rate per item
- Auto-calculated totals per row
- Real-time subtotal calculation

✅ **Tax & Discount**
- Optional tax percentage
- Flat amount or percentage discount
- Automatic final total calculation

✅ **Notes & Payment Info**
- Custom notes section
- Payment instructions (UPI, Bank, PayPal, etc.)

✅ **PDF Export**
- Clean A4 layout
- Download as PDF
- Print-friendly design
- Uses jsPDF + html2canvas

✅ **Quick Start Presets**
- Freelancer template
- Consultant template
- Small Business template
- Auto-fills common fields and sample items

✅ **Save & Load**
- Save invoices to browser localStorage
- Load last saved invoice
- No backend required - all data stays local

✅ **SEO Optimized**
- Landing page content
- Use cases section
- Comprehensive FAQs
- Helps with search engine indexing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Quick Start
1. Click a preset button (Freelancer, Consultant, or Small Business) to auto-fill sample data
2. Customize the fields as needed
3. Click "Download PDF" to generate and download the invoice

### Manual Entry
1. Fill in the invoice details (invoice number, dates, currency)
2. Enter your business/sender information
3. Enter client details
4. Add line items (description, quantity, rate)
5. Set tax rate and discount if needed
6. Add notes and payment instructions
7. Click "Save Invoice" to save your work to browser
8. Click "Download PDF" to generate and download the invoice

### Saving & Loading
- Click "Save Invoice" to save your current invoice to browser localStorage
- Click "Load Last Invoice" to restore your saved invoice data
- All data is stored locally in your browser - no server required

## Technologies Used

- **Next.js** - React framework with SSR support
- **React** - UI library
- **jsPDF** - PDF generation
- **html2canvas** - HTML to canvas conversion for PDF

## Project Structure

```
InvoiceGenerator/
├── pages/
│   ├── _app.js
│   └── index.js
├── components/
│   ├── InvoiceGenerator.js
│   └── InvoiceGenerator.css
├── styles/
│   └── globals.css
├── public/
├── next.config.js
├── package.json
└── README.md
```

## Build for Production

```bash
npm run build
```

This creates an optimized production build. To start the production server:

```bash
npm start
```

The production build will be in the `.next` folder.

## License

MIT

