import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Split PDF Online Free — Extract Pages from PDF | MyDigitSign',
  description:
    'Split a PDF into separate pages online for free. Extract specific pages or page ranges from any PDF. 100% browser-based — files never leave your device.',
  keywords: [
    'split pdf online free',
    'split pdf into pages',
    'extract pages from pdf free',
    'separate pdf pages free',
    'pdf splitter free no upload',
    'divide pdf online free',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/split-pdf-online',
  },
  openGraph: {
    title: 'Split PDF Online Free — Extract Pages from PDF | MyDigitSign',
    description: 'Split PDF files online free. Extract specific pages or all pages. Browser-based, no file uploads.',
    url: 'https://mydigitsign.com/tools/split-pdf-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Split PDF Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Split PDF Online Free — Extract Pages from PDF',
    description: 'Split PDF pages free. No server uploads, no account, no limits.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

import SplitPdfClient from '@/components/tools/SplitPdfClient';

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Split PDF Online', url: '/tools/split-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Splitter',
  description: 'Split PDF files into individual pages or extract specific page ranges directly in your browser — no server uploads.',
  url: 'https://mydigitsign.com/tools/split-pdf-online',
  applicationCategory: 'UtilitiesApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Split a PDF Online Free',
  description: 'Extract specific pages or split a PDF into individual pages in seconds without uploading to any server.',
  totalTime: 'PT1M',
  steps: [
    { name: 'Upload Your PDF', text: 'Select the PDF you want to split. The file is processed locally in your browser — nothing is uploaded.', url: 'https://mydigitsign.com/tools/split-pdf-online' },
    { name: 'Select Pages to Extract', text: 'Choose individual pages, a page range (e.g., pages 2–5), or split every page into a separate file.', url: 'https://mydigitsign.com/tools/split-pdf-online' },
    { name: 'Download Split PDF', text: 'Download the extracted pages as a new PDF or as individual PDF files directly to your device.', url: 'https://mydigitsign.com/tools/split-pdf-online' },
  ],
});

const faqItems = [
  { question: 'Is the PDF splitter completely free?', answer: 'Yes. MyDigitSign\'s PDF splitter is 100% free with no usage limits, no account required, and no watermarks.' },
  { question: 'Does splitting my PDF upload it to a server?', answer: 'No. All splitting operations are performed locally in your web browser using WebAssembly. Your PDF never leaves your device.' },
  { question: 'Can I extract just one page from a PDF?', answer: 'Yes. You can extract any specific page, multiple specific pages, or a continuous range of pages from your PDF.' },
  { question: 'What happens to large PDFs — is there a page limit?', answer: 'Because processing is local, there is no server-imposed page limit. Very large PDFs may take slightly longer to process depending on your device\'s RAM.' },
  { question: 'Can I split a PDF on my iPhone or Android?', answer: 'Yes. The PDF splitter works in all modern mobile browsers including Safari on iPhone and Chrome on Android without any app required.' },
];

const faqSchema = getFAQSchema(faqItems);

export default function SplitPdfOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            ✂️ Free · No Upload · Extract Any Page
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Split PDF Online Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Extract specific pages or split your entire PDF into individual files. 100% browser-based — your file never leaves your device. No account, no watermarks, no limits.
          </p>
        </section>

        {/* Tool Area */}
        <section style={{ maxWidth: '900px', margin: '2rem auto 3rem', padding: '0 1rem' }}>
          <SplitPdfClient />
        </section>


        {/* SEO Content */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>Why Split a PDF?</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            Splitting a PDF is one of the most common document management tasks. You might receive a long annual report but only need to share the financial summary on page 8. A client might send a 20-page contract with only 2 pages requiring your signature. Your bank statement PDF might include 12 months on 12 pages, but you only need one month for an application.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            In all these cases, splitting the PDF to extract exactly the pages you need saves time, reduces file size, and avoids sharing irrelevant information. MyDigitSign&apos;s free PDF splitter handles this in seconds, directly in your browser.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>How to Split a PDF Online — Step by Step</h2>
          <ol style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Open the tool above</strong> — no account, no download needed.</li>
            <li><strong>Upload your PDF</strong> — click &quot;Select PDF&quot; or drag and drop the file. It loads entirely in your browser.</li>
            <li><strong>Choose pages to extract</strong> — select individual pages, a range (e.g., 2–5), or choose &quot;Split all&quot; to create individual files per page.</li>
            <li><strong>Click &quot;Split PDF&quot;</strong> — processing is instant and happens locally.</li>
            <li><strong>Download the result</strong> — save your new extracted PDF directly to your device.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Splitting vs. Extracting — What&apos;s the Difference?</h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            <strong>Splitting</strong> typically means dividing a PDF into multiple separate files — for example, splitting a 12-page document into 12 individual one-page PDFs.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            <strong>Extracting</strong> means pulling specific pages out into a new PDF — for example, extracting pages 3, 7, and 11 into a new 3-page document.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            MyDigitSign supports both operations. You can split every page into its own file, or extract a custom selection of pages into a new PDF.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Common Use Cases for Splitting a PDF</h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Contracts:</strong> Extract only the signature pages from a multi-page legal agreement.</li>
            <li><strong>Bank statements:</strong> Pull out a single month from a year-long combined PDF statement.</li>
            <li><strong>Reports:</strong> Share a specific chapter or section of a long report without revealing the full document.</li>
            <li><strong>Academic papers:</strong> Extract bibliography or appendix pages from a research document.</li>
            <li><strong>Invoices:</strong> Separate individual invoices from a combined monthly billing PDF.</li>
            <li><strong>Presentations:</strong> Extract specific slides exported as PDF pages for sharing individually.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Frequently Asked Questions</h3>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: '#0f172a' }}>{faq.question}</h4>
              <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
          ))}

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Related tools:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/merge-pdf-online" style={{ color: '#4f46e5' }}>Merge PDF →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Online →</a></li>
              <li><a href="/tools/compress-pdf-online" style={{ color: '#4f46e5' }}>Compress PDF →</a></li>
              <li><a href="/tools/rotate-pdf-online" style={{ color: '#4f46e5' }}>Rotate PDF →</a></li>
              <li><a href="/tools/pdf-to-jpg" style={{ color: '#4f46e5' }}>PDF to JPG →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
