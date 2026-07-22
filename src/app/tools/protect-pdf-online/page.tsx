import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Protect PDF Online Free — Encrypt & Password Protect PDFs | MyDigitSign',
  description:
    'Protect PDF files with password encryption online for free. Prevent unauthorized reading, copying, or printing. 100% private client-side processing.',
  keywords: [
    'protect pdf online free',
    'password protect pdf',
    'encrypt pdf online',
    'pdf protection free no upload',
    'secure pdf file',
    'mydigitsign protect pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/protect-pdf-online',
  },
  openGraph: {
    title: 'Protect PDF Online Free — Encrypt & Password Protect PDFs | MyDigitSign',
    description:
      'Protect PDF files with password encryption online for free. 100% private client-side processing.',
    url: 'https://mydigitsign.com/tools/protect-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Protect PDF Online', url: '/tools/protect-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Protector',
  description: 'Add password encryption to PDF files directly in your web browser.',
  url: 'https://mydigitsign.com/tools/protect-pdf-online',
  applicationCategory: 'SecurityApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Password Protect a PDF Online',
  description: 'Encrypt your PDF documents with passwords in seconds.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Upload PDF Document',
      text: 'Select the PDF file you want to encrypt.',
      url: 'https://mydigitsign.com/tools/protect-pdf-online',
    },
    {
      name: 'Enter Secure Password',
      text: 'Type a strong password to lock the document.',
      url: 'https://mydigitsign.com/tools/protect-pdf-online',
    },
    {
      name: 'Download Encrypted PDF',
      text: 'Save your password-protected PDF directly to your device.',
      url: 'https://mydigitsign.com/tools/protect-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'Is my password sent to any remote server?',
    answer: 'No. Password encryption is executed locally inside your web browser using WebAssembly. Your password and PDF file never leave your device.',
  },
  {
    question: 'What encryption algorithm is used?',
    answer: 'Standard AES-128 and AES-256 bit encryption compliant with Adobe PDF security standards.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function ProtectPdfOnlinePage() {
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
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(225, 29, 72, 0.1)', color: '#e11d48', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🔒 Free PDF Encryption • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Protect PDF Online — Password Protect PDF Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Encrypt sensitive PDF documents with secure passwords. 100% browser-based with zero file uploads.
          </p>
        </section>

        <HomeClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Password Protect Your PDFs with MyDigitSign?
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Securing confidential business documents, tax filings, legal agreements, and personal IDs with passwords is critical when sharing files via email or cloud storage. MyDigitSign encrypts your files <strong>100% locally in your browser</strong>.
          </p>

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
