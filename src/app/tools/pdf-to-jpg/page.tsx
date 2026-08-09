import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import PdfToJpgClient from '@/components/tools/PdfToJpgClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'PDF to JPG Online Free — Convert PDF Pages to Images | MyDigitSign',
  description:
    'Convert PDF to JPG online for free. Extract each page of your PDF as a high-quality JPEG image. 100% browser-based — your files never leave your device.',
  keywords: [
    'pdf to jpg online free',
    'pdf to jpeg online free',
    'convert pdf to image free',
    'extract pdf pages as images',
    'pdf page to jpg free',
    'pdf to png online free no upload',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/pdf-to-jpg',
  },
  openGraph: {
    title: 'PDF to JPG Online Free — Convert PDF Pages to Images | MyDigitSign',
    description:
      'Convert PDF pages to high-quality JPG images online for free. Browser-based, no file uploads, no account required.',
    url: 'https://mydigitsign.com/tools/pdf-to-jpg',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — PDF to JPG Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to JPG Online Free — Convert PDF Pages to Images',
    description: 'Convert PDF pages to high-quality JPG images for free. No file uploads to servers.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'PDF to JPG', url: '/tools/pdf-to-jpg' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign PDF to JPG Converter',
  description: 'Convert PDF pages to high-quality JPG images directly in your browser — no server uploads required.',
  url: 'https://mydigitsign.com/tools/pdf-to-jpg',
  applicationCategory: 'UtilitiesApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Convert a PDF to JPG Online Free',
  description: 'Extract PDF pages as high-quality JPEG images in seconds without uploading files to any server.',
  totalTime: 'PT1M',
  steps: [
    { name: 'Upload Your PDF', text: 'Select your PDF file. It is loaded locally in your browser — nothing is uploaded to any server.', url: 'https://mydigitsign.com/tools/pdf-to-jpg' },
    { name: 'Select Pages', text: 'Choose which pages to convert — all pages, or specific page numbers.', url: 'https://mydigitsign.com/tools/pdf-to-jpg' },
    { name: 'Download JPG Images', text: 'Download each page as a high-quality JPEG image file directly to your device.', url: 'https://mydigitsign.com/tools/pdf-to-jpg' },
  ],
});

const faqItems = [
  { question: 'Is the PDF to JPG converter completely free?', answer: 'Yes. MyDigitSign\'s PDF to JPG converter is 100% free with no usage limits, no account registration, and no watermarks on your output images.' },
  { question: 'Does my PDF get uploaded to a server?', answer: 'No. The conversion happens entirely inside your web browser using client-side JavaScript. Your PDF file never leaves your device or gets uploaded to any remote server, ensuring total privacy.' },
  { question: 'What quality are the converted JPG images?', answer: 'The converted images maintain high resolution, typical of a standard printer-friendly document. You can expect crisp text and clear visuals for presentations and digital archiving.' },
  { question: 'Can I convert a multi-page PDF to multiple JPGs?', answer: 'Yes. Each page of your PDF is extracted as a separate JPG image. You can download all pages as single images or select specific page numbers to convert.' },
  { question: 'Can I convert a PDF to JPG on my phone?', answer: 'Yes. The tool works on all modern mobile web browsers — Safari on iOS and Chrome on Android — without requiring any app installations.' },
  { question: 'Can I convert password-protected PDFs to JPG?', answer: 'For security reasons, our local converter requires the PDF to be unlocked. If your PDF is encrypted, you must enter the password first on your device before opening it in the tool.' },
  { question: 'Will my text become blurry after converting PDF to JPG?', answer: 'No. Our converter renders PDF vectors at high density. However, because JPG is a compressed image format, very small footnote text might experience slight compression. For maximum sharpness of small fonts, PNG is recommended.' },
  { question: 'How can I merge my JPG images back into a single PDF?', answer: 'If you need to compile multiple JPG photos or scanned receipts back into a single PDF, you can use our free JPG to PDF converter tool.' }
];

const faqSchema = getFAQSchema(faqItems);

export default function PdfToJpgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Hero */}
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🖼️ Free · No Upload · High Quality JPG Output
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            PDF to JPG Online Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Convert PDF pages to high-quality JPEG images in seconds. 100% client-side — your file never leaves your browser. No account, no watermarks, no limits.
          </p>
        </section>

        {/* Tool Area */}
        <section style={{ maxWidth: '900px', margin: '2rem auto 3rem', padding: '0 1rem' }}>
          <PdfToJpgClient />
        </section>

        {/* SEO Content */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>Why Convert PDF to JPG?</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            There are many reasons you might need to convert a PDF page to a JPG image. Sharing a single page from a report via email, WhatsApp, or Slack is much easier as an image than a multi-megabyte PDF. PowerPoint and Google Slides presentations often require image assets rather than document file embeds. Scanned forms or receipts may need to be shared as photo uploads on expense platforms. Whatever the reason, converting PDF to JPG is a common, everyday administrative task.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Security &amp; Client-Side Privacy: The WebAssembly Advantage</h3>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            Most online PDF-to-image converters require you to upload your files to a cloud server, wait for remote processing, and then download the results. Uploading sensitive files like bank statements, identification cards, tax records, or corporate agreements to external cloud servers poses a major security and data leakage risk.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            MyDigitSign skips the server upload completely. Using advanced client-side WebAssembly, our <strong>PDF to JPG converter</strong> renders and extracts pages locally in your browser cache. Your documents never leave your computer or mobile device, offering full enterprise-grade data privacy for free.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Practical Use Cases for PDF-to-JPG Conversions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>💼 Portfolios &amp; Resumes</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Extract certificates, letterheads, or visual portfolio designs from PDFs to display them directly on personal web pages or LinkedIn profiles.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>📱 Messaging &amp; Socials</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Share specific contract clauses, receipts, or data charts instantly via messaging apps that preview images natively, avoiding file downloads.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>📊 Slide Presentations</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Convert document pages to high-resolution JPEG images to embed them as figures or slides inside Google Slides, PowerPoint, or Keynote.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>How to Convert PDF to JPG Online — 3 Steps</h3>
          <ol style={{ lineHeight: 2, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Upload your PDF</strong> — Select the document file from your local device. No server upload occurs.</li>
            <li><strong>Choose pages</strong> — Select all pages or specific page numbers to extract as images.</li>
            <li><strong>Download JPGs</strong> — Each page is saved as a high-resolution JPEG image directly to your device.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>PDF to JPG vs PDF to PNG — Which Should You Choose?</h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            <strong>JPG (JPEG)</strong> is best for photographs, scanned pages with complex visual content, and situations where file size matters. JPGs use lossy compression that results in much smaller files, making them perfect for emailing or messaging.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            <strong>PNG</strong> is better for documents with text, charts, or vector diagrams where sharpness is critical. PNG uses lossless compression, so text remains perfectly crisp at any zoom level, though the file sizes are larger.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            For sharing reports, presentation slides, or receipts, JPG works perfectly. For documents with tiny fonts that must remain readable, PNG is preferable.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>What to Do with Your JPG Images After Conversion</h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Share directly:</strong> JPG images can be shared via WhatsApp, Slack, or email without any special software to open them.</li>
            <li><strong>Convert back to PDF:</strong> Need to create a PDF again after editing? Use our <a href="/tools/jpg-to-pdf" style={{color: 'var(--color-primary, #4f46e5)'}}>JPG to PDF converter →</a></li>
            <li><strong>Overlay your signature:</strong> If you need to sign a scanned form or receipt photo, use our <a href="/tools/sign-image-online" style={{color: 'var(--color-primary, #4f46e5)'}}>Sign Image Online tool →</a></li>
            <li><strong>E-sign documents:</strong> If you want to sign the original PDF document directly before converting, use our client-side <a href="/tools/sign-pdf-online" style={{color: 'var(--color-primary, #4f46e5)'}}>Sign PDF Online tool →</a></li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Frequently Asked Questions</h3>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: '#0f172a' }}>{faq.question}</h4>
              <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
          ))}

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/compress-pdf-online" style={{ color: '#4f46e5' }}>Compress PDF →</a></li>
              <li><a href="/tools/merge-pdf-online" style={{ color: '#4f46e5' }}>Merge PDF →</a></li>
              <li><a href="/tools/split-pdf-online" style={{ color: '#4f46e5' }}>Split PDF →</a></li>
              <li><a href="/tools/rotate-pdf-online" style={{ color: '#4f46e5' }}>Rotate PDF →</a></li>
              <li><a href="/tools/jpg-to-pdf" style={{ color: '#4f46e5' }}>JPG to PDF Converter →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: '#4f46e5' }}>Sign Image Online →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: '#4f46e5' }}>Edit PDF Fields Online →</a></li>
              <li><a href="/blog/how-to-sign-pdf-on-iphone-android-free" style={{ color: '#4f46e5' }}>Sign PDF on iPhone &amp; Android →</a></li>
              <li><a href="/blog/free-digital-signature-certificate" style={{ color: '#4f46e5' }}>Free Digital Signature Certificate →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
