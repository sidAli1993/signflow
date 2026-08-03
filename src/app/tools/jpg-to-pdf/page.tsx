import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'JPG to PDF Online Free — Convert Images to PDF | MyDigitSign',
  description:
    'Convert JPG, PNG, or JPEG images to PDF online for free. Combine multiple images into one PDF document. 100% browser-based — no server uploads ever.',
  keywords: [
    'jpg to pdf online free',
    'jpg to pdf converter free',
    'image to pdf online free',
    'convert jpg to pdf free',
    'png to pdf online free',
    'photo to pdf converter free',
    'multiple images to pdf free',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/jpg-to-pdf',
  },
  openGraph: {
    title: 'JPG to PDF Online Free — Convert Images to PDF | MyDigitSign',
    description: 'Convert JPG, PNG, or JPEG images to PDF online free. Browser-based, no uploads, no account.',
    url: 'https://mydigitsign.com/tools/jpg-to-pdf',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — JPG to PDF Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PDF Online Free — Convert Images to PDF',
    description: 'Convert images to PDF free. No file uploads, no account, no limits.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'JPG to PDF', url: '/tools/jpg-to-pdf' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign JPG to PDF Converter',
  description: 'Convert JPG, PNG, and JPEG images to a PDF document directly in your browser — no server uploads required.',
  url: 'https://mydigitsign.com/tools/jpg-to-pdf',
  applicationCategory: 'UtilitiesApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Convert JPG to PDF Online Free',
  description: 'Turn JPG or PNG images into a PDF document in seconds, with no uploads to any server.',
  totalTime: 'PT1M',
  steps: [
    { name: 'Upload Your Images', text: 'Select one or more JPG, PNG, or JPEG files from your device. Files are processed locally in your browser.', url: 'https://mydigitsign.com/tools/jpg-to-pdf' },
    { name: 'Arrange Order', text: 'Drag images into the desired page order for your PDF document.', url: 'https://mydigitsign.com/tools/jpg-to-pdf' },
    { name: 'Download PDF', text: 'Click Convert & Download to save your combined PDF file directly to your device.', url: 'https://mydigitsign.com/tools/jpg-to-pdf' },
  ],
});

const faqItems = [
  { question: 'Can I convert multiple JPG images into one PDF?', answer: 'Yes. Upload multiple JPG or PNG images and they will be combined into a single PDF document in the order you arrange them.' },
  { question: 'Is the JPG to PDF converter free?', answer: 'Yes. MyDigitSign\'s image to PDF converter is completely free with no usage limits, no account, and no watermarks.' },
  { question: 'Do my images get uploaded to a server?', answer: 'No. The conversion happens entirely in your browser. Your image files never leave your device or get sent to any remote server.' },
  { question: 'What image formats does the converter support?', answer: 'The converter supports JPG (JPEG) and PNG image formats. All standard photo and document image types are supported.' },
  { question: 'Can I convert images to PDF on my iPhone or Android?', answer: 'Yes. The tool works on all modern mobile browsers — Safari on iPhone and Chrome on Android — with no app required.' },
];

const faqSchema = getFAQSchema(faqItems);

export default function JpgToPdfPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🖼️ Free · No Upload · Multiple Images Supported
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            JPG to PDF Online Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Convert one or multiple JPG, PNG, or JPEG images into a single PDF document. 100% browser-based — files stay on your device, no account needed.
          </p>
        </section>

        {/* Tool Area */}
        <section style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
          <div style={{ background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️→📄</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Image to PDF Converter</h2>
            <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Drop your JPG or PNG images here. Combine multiple images into one PDF.
            </p>
            <label htmlFor="jpg-to-pdf-input" style={{ display: 'inline-block', background: '#4f46e5', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
              Select Images
            </label>
            <input id="jpg-to-pdf-input" type="file" accept=".jpg,.jpeg,.png" multiple style={{ display: 'none' }} disabled />
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              🔒 Your images stay in your browser — zero server uploads
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '10px', border: '1px solid #bfdbfe' }}>
              <p style={{ color: '#1d4ed8', fontWeight: 600, margin: 0, fontSize: '0.9rem' }}>
                ⚡ JPG to PDF conversion coming soon. Try our <a href="/tools/sign-pdf-online" style={{ color: '#1d4ed8' }}>Sign PDF</a> or <a href="/tools/compress-pdf-online" style={{ color: '#1d4ed8' }}>Compress PDF</a> tools today.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>Why Convert Images to PDF?</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            PDFs are the universal document format for sharing professional content. Whether you&apos;ve scanned a physical document, taken photos of pages, or received images of forms that need to be compiled into a single file — converting JPG to PDF solves the problem instantly. A PDF is easier to email, print, sign, and archive than a collection of separate image files.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            Once your images are in PDF format, you can also use our other tools to <a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>sign the PDF</a>, <a href="/tools/compress-pdf-online" style={{ color: '#4f46e5' }}>compress it</a>, or <a href="/tools/protect-pdf-online" style={{ color: '#4f46e5' }}>password-protect it</a>.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>Common Use Cases</h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Scanned documents:</strong> Combine multiple scanned page photos into one PDF.</li>
            <li><strong>Receipts and invoices:</strong> Convert receipt photos into a PDF for expense reports.</li>
            <li><strong>Portfolio compilation:</strong> Combine design or artwork images into a single PDF portfolio.</li>
            <li><strong>ID document submission:</strong> Convert photos of ID pages into a combined PDF.</li>
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
              <li><a href="/tools/pdf-to-jpg" style={{ color: '#4f46e5' }}>PDF to JPG →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Online →</a></li>
              <li><a href="/tools/merge-pdf-online" style={{ color: '#4f46e5' }}>Merge PDF →</a></li>
              <li><a href="/tools/compress-pdf-online" style={{ color: '#4f46e5' }}>Compress PDF →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
