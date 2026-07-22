import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Merge PDF Online Free — Combine PDF Files Client-Side | MyDigitSign',
  description:
    'Merge multiple PDF files into one clean document online for free. Visual page drag-and-drop reordering. 100% private client-side browser processing.',
  keywords: [
    'merge pdf online free',
    'combine pdf files',
    'join pdf online',
    'pdf merger free no upload',
    'combine pdfs client side',
    'merge multiple pdfs into one',
    'mydigitsign merge pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/merge-pdf-online',
  },
  openGraph: {
    title: 'Merge PDF Online Free — Combine PDF Files Client-Side | MyDigitSign',
    description:
      'Merge multiple PDF files into one clean document online for free. Visual page drag-and-drop reordering.',
    url: 'https://mydigitsign.com/tools/merge-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Merge PDF Online', url: '/tools/merge-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Merger',
  description: 'Combine multiple PDF files into a single document instantly inside your browser.',
  url: 'https://mydigitsign.com/tools/merge-pdf-online',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Merge PDF Files Online for Free',
  description: 'Combine multiple PDF documents into a single organized file in seconds.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Select PDF Files',
      text: 'Choose two or more PDF files from your computer or phone to merge.',
      url: 'https://mydigitsign.com/tools/merge-pdf-online',
    },
    {
      name: 'Reorder Pages Visually',
      text: 'Drag and drop page thumbnails to arrange document order exactly how you want.',
      url: 'https://mydigitsign.com/tools/merge-pdf-online',
    },
    {
      name: 'Download Merged PDF',
      text: 'Click Merge & Download to save your single combined PDF document instantly.',
      url: 'https://mydigitsign.com/tools/merge-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'How many PDF files can I combine at once?',
    answer: 'You can merge as many PDF files as you need. Because the merger operates in your browser memory, there are no artificial file limits.',
  },
  {
    question: 'Is it safe to merge confidential documents using this tool?',
    answer: 'Yes. MyDigitSign processes files 100% locally in your web browser. Your files are never uploaded to any remote server.',
  },
  {
    question: 'Does merging PDFs reduce visual quality or fonts?',
    answer: 'No. Our merger retains vector text fonts, high-res images, and embedded layouts with 100% fidelity.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function MergePdfOnlinePage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🧩 Free Visual PDF Merger • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Merge PDF Files Online — Fast, Free & Private
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Combine multiple PDF files into one organized document. Drag and drop to reorder pages. No server uploads.
          </p>
        </section>

        <HomeClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Use MyDigitSign Online PDF Merger?
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Combining multiple invoices, contract annexes, project reports, or scanned receipts into a single cohesive PDF file is a standard daily task for professionals, students, and business owners. Traditional PDF mergers upload your sensitive documents to distant cloud servers, creating potential privacy risks. MyDigitSign solves this by merging files <strong>100% in your browser</strong>.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Key Benefits of Our PDF Merger
          </h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Visual Drag-and-Drop Reordering:</strong> Drag page thumbnails to order pages exactly how you want before merging.</li>
            <li><strong>Lightning-Fast Browser Engine:</strong> Merges files in seconds regardless of internet connection speed.</li>
            <li><strong>100% Confidentiality Guarantee:</strong> Your documents never leave your computer or smartphone.</li>
            <li><strong>No Watermarks & Unlimited Use:</strong> Merge as many documents as you need without fees or subscription locks.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h3>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: '#0f172a' }}>{faq.question}</h4>
              <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
