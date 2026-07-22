import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Compress PDF Online Free — Reduce PDF File Size | MyDigitSign',
  description:
    'Compress PDF files online for free. Shrink PDF file size for email attachments without losing document sharpness. 100% private client-side processing.',
  keywords: [
    'compress pdf online free',
    'reduce pdf file size',
    'shrink pdf online',
    'pdf compressor free no upload',
    'compress pdf for email',
    'small pdf size reducer',
    'mydigitsign compress pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/compress-pdf-online',
  },
  openGraph: {
    title: 'Compress PDF Online Free — Reduce PDF File Size | MyDigitSign',
    description:
      'Compress PDF files online for free. Shrink PDF file size for email attachments without losing document sharpness.',
    url: 'https://mydigitsign.com/tools/compress-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Compress PDF Online', url: '/tools/compress-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Compressor',
  description: 'Reduce PDF file sizes instantly inside your web browser without uploading files.',
  url: 'https://mydigitsign.com/tools/compress-pdf-online',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Compress PDF Files Online for Free',
  description: 'Shrink large PDF documents to send via email attachments or web forms.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Select Your PDF File',
      text: 'Choose the large PDF document you want to shrink.',
      url: 'https://mydigitsign.com/tools/compress-pdf-online',
    },
    {
      name: 'Optimize Compression',
      text: 'Our browser engine optimizes vector fonts and image streams locally.',
      url: 'https://mydigitsign.com/tools/compress-pdf-online',
    },
    {
      name: 'Download Compressed PDF',
      text: 'Save your compressed, lightweight PDF file instantly to your device.',
      url: 'https://mydigitsign.com/tools/compress-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'Will compressing my PDF blur the text or images?',
    answer: 'No. Our compressor intelligent algorithm preserves crisp vector text fonts while optimizing uncompressed stream objects.',
  },
  {
    question: 'How much file size reduction can I expect?',
    answer: 'Depending on the original PDF structure and image content, file sizes are typically reduced by 30% to 75%.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function CompressPdfOnlinePage() {
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
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            ⚡ Free PDF Compressor • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Compress PDF Online — Reduce File Size Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Shrink heavy PDF documents for email attachments and portal uploads. 100% browser-based with zero file uploads.
          </p>
        </section>

        <HomeClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Compress PDF Documents with MyDigitSign?
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Large PDF files frequently bounce when emailed or fail during government portal and job application uploads. Compressing your document ensures fast delivery while keeping formatting intact. MyDigitSign compresses PDFs <strong>entirely inside your browser</strong>.
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
