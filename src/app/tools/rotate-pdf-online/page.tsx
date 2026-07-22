import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Rotate PDF Online Free — Rotate PDF Pages 90 or 180 Degrees | MyDigitSign',
  description:
    'Rotate PDF pages online for free. Turn individual pages 90, 180, or 270 degrees clockwise or counterclockwise. 100% private client-side processing.',
  keywords: [
    'rotate pdf online free',
    'turn pdf pages',
    'rotate pdf 90 degrees',
    'pdf page rotator free',
    'rotate upside down pdf',
    'mydigitsign rotate pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/rotate-pdf-online',
  },
  openGraph: {
    title: 'Rotate PDF Online Free — Rotate PDF Pages 90 or 180 Degrees | MyDigitSign',
    description:
      'Rotate PDF pages online for free. Turn individual pages 90, 180, or 270 degrees. 100% private client-side processing.',
    url: 'https://mydigitsign.com/tools/rotate-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Rotate PDF Online', url: '/tools/rotate-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Rotator',
  description: 'Rotate individual or all pages of a PDF document directly inside your web browser.',
  url: 'https://mydigitsign.com/tools/rotate-pdf-online',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Rotate PDF Pages Online for Free',
  description: 'Re-orient upside down or sideways PDF pages in seconds.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Select PDF Document',
      text: 'Open the PDF file containing pages you wish to rotate.',
      url: 'https://mydigitsign.com/tools/rotate-pdf-online',
    },
    {
      name: 'Rotate Page Thumbnails',
      text: 'Click the rotate button on individual pages or rotate all pages at once.',
      url: 'https://mydigitsign.com/tools/rotate-pdf-online',
    },
    {
      name: 'Save & Download',
      text: 'Save your permanently re-oriented PDF document to your device.',
      url: 'https://mydigitsign.com/tools/rotate-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'Can I rotate just one page in a multi-page PDF?',
    answer: 'Yes. You can rotate individual selected pages or apply rotation to all pages in the document simultaneously.',
  },
  {
    question: 'Are my rotated pages permanently saved?',
    answer: 'Yes. The downloaded PDF file saves the page orientation matrix permanently.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function RotatePdfOnlinePage() {
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
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(147, 51, 234, 0.1)', color: '#9333ea', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🔄 Free PDF Page Rotator • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Rotate PDF Online — Permanently Rotate PDF Pages
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Fix sideways or upside down scanned pages. Rotate single pages or whole documents 90° or 180°.
          </p>
        </section>

        <HomeClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Rotate PDF Pages with MyDigitSign?
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Scanned documents and smartphone photos converted to PDF often end up upside down or in landscape orientation when they should be portrait. MyDigitSign lets you permanently fix page orientation <strong>100% in your browser</strong>.
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
