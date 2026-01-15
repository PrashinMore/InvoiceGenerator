import dynamic from 'next/dynamic';

// Dynamically import InvoiceGenerator with no SSR since it uses browser APIs
const InvoiceGenerator = dynamic(() => import('../components/InvoiceGenerator'), {
  ssr: false
});

export default function Home() {
  return <InvoiceGenerator />;
}

