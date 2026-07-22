import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'DocuSign Alternative Free — 100% Client-Side Privacy | MyDigitSign',
  description:
    'Looking for a free DocuSign alternative? MyDigitSign is a 100% private, free electronic signature platform where your files never leave your device.',
  keywords: [
    'docusign alternative',
    'free docusign alternative',
    'docusign competitor',
    'e-signature software free',
    'sign pdf free alternative',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare/docusign-alternative',
  },
  openGraph: {
    title: 'DocuSign Alternative Free — 100% Client-Side Privacy',
    description:
      'Looking for a free DocuSign alternative? MyDigitSign is a 100% private, free electronic signature platform where your files never leave your device.',
    url: 'https://mydigitsign.com/compare/docusign-alternative',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Compare', url: '/compare' },
  { name: 'DocuSign Alternative', url: '/compare/docusign-alternative' },
]);

const faqItems = [
  {
    question: 'Is MyDigitSign really a free alternative to DocuSign?',
    answer: 'Yes. While DocuSign limits free users to a certain number of documents per month and heavily restricts features, MyDigitSign is completely free forever. There are no monthly limits or hidden paywalls.',
  },
  {
    question: 'How is MyDigitSign more private than DocuSign?',
    answer: 'DocuSign requires you to upload your sensitive contracts to their remote servers to process the signature. MyDigitSign processes the signature locally in your browser using WebAssembly. Your file never touches our servers.',
  },
  {
    question: 'Are signatures made with MyDigitSign legally binding?',
    answer: 'Yes. Electronic signatures created with MyDigitSign comply with major international electronic signature laws, including the ESIGN Act and UETA in the US, and eIDAS in the EU, provided all other legal contract elements are met.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function DocuSignAlternativePage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Top Header */}
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🤝 The Smart Alternative for Teams & Individuals
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            The Best Free DocuSign Alternative in 2026
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Stop paying monthly subscription fees and uploading your private contracts to third-party servers. Switch to a faster, 100% client-side digital signature solution.
          </p>
        </section>

        {/* 1,500 Words Rich Content SEO Section */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Search for a DocuSign Alternative?
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            For years, DocuSign has been the default name in electronic signatures. However, for independent contractors, small business owners, and everyday individuals, traditional enterprise software presents significant drawbacks. From aggressive pricing tiers and hard limits on document generation to serious data privacy concerns regarding server-side file uploads, the market has outgrown the need for heavy, centralized PDF management. MyDigitSign was built specifically to address these pain points.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            The Privacy Problem with Traditional E-Signature Platforms
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            When you use cloud-based services like DocuSign, you are legally required to upload your unencrypted contracts, NDAs, and tax documents to their centralized servers. This creates a massive honeypot of sensitive corporate and personal data. If their servers are breached, or if a rogue employee accesses the database, your highly confidential documents are exposed.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            MyDigitSign utilizes a revolutionary <strong>100% Client-Side Architecture</strong>. We use advanced WebAssembly (WASM) and browser-based JavaScript to process, encrypt, and sign your PDFs directly inside your device's RAM. <strong>Your file never leaves your computer.</strong> We don't have servers that store your data, which means it is mathematically impossible for us to leak your contracts.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Pricing Comparison: Why Pay for Signatures?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            DocuSign's free plan restricts you to a handful of signatures before abruptly demanding a monthly subscription. If you only need to sign a lease agreement once a year, or process a few contractor invoices a month, spending hundreds of dollars annually on PDF software is inefficient.
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>DocuSign:</strong> Limits "envelopes" per month on basic plans, requiring expensive upgrades for volume.</li>
            <li><strong>MyDigitSign:</strong> 100% free forever. No account required. Sign unlimited documents locally.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Features That Match and Exceed Expectations
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Just because MyDigitSign is free doesn't mean it lacks enterprise features. Our built-in tools allow you to:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Draw Custom Signatures:</strong> Use your mouse, trackpad, or touchscreen to draw fluid, anti-aliased signatures.</li>
            <li><strong>Type in Cursive:</strong> Generate beautiful, professional calligraphy signatures by typing your name.</li>
            <li><strong>Add Cryptographic Certificates:</strong> Lock your document from future tampering using self-signed digital certificates.</li>
            <li><strong>Fill Out Forms:</strong> Easily add text, dates, and checkmarks to complex PDF forms before signing.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Is MyDigitSign Legally Binding?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Yes. The legality of an electronic signature does not depend on paying for a premium subscription. Under the U.S. Electronic Signatures in Global and National Commerce (ESIGN) Act, the Uniform Electronic Transactions Act (UETA), and the European Union's eIDAS regulation, an electronic signature carries the same legal weight as a handwritten signature in most business and personal contexts.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            MyDigitSign allows you to express your clear intent to sign a document, logically associates your signature with the PDF file, and preserves the document accurately for future reference—satisfying the core legal requirements for digital agreements.
          </p>
          
          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            The Environmental Impact
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            By eliminating the need for massive, power-hungry cloud servers to process simple PDF operations, MyDigitSign significantly reduces the carbon footprint of digital document management. Local computing is not only faster and more secure; it is a greener approach to modern web applications.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Ready to make the switch?</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Experience the fastest, most private way to sign documents.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign Your First PDF for Free
            </a>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>
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
