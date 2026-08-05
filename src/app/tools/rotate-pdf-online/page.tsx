import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import RotatePdfClient from '@/components/tools/RotatePdfClient';
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Rotate PDF Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate PDF Online Free — Rotate PDF Pages 90 or 180 Degrees | MyDigitSign',
    description:
      'Rotate PDF pages online for free. Turn individual pages 90, 180, or 270 degrees. 100% private client-side processing.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
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
  {
    question: 'Will rotating a PDF reduce its quality?',
    answer: 'No. MyDigitSign rewrites the PDF rotation matrix without re-encoding the image content. The visual quality of your document remains identical after rotation.',
  },
  {
    question: 'Can I rotate a scanned PDF from my phone?',
    answer: 'Yes. MyDigitSign works on all mobile browsers including Safari on iPhone and Chrome on Android. Upload your scanned PDF, rotate the sideways pages, and download the corrected document directly to your phone.',
  },
  {
    question: 'Does rotating a PDF change the file size?',
    answer: 'No. Rotating only modifies the orientation metadata inside the PDF. The file size stays virtually the same because no image data is re-encoded.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function RotatePdfOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>Updated: July 25, 2026</p>
        </section>

        {/* Client Application Engine Component */}
        <RotatePdfClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            The Complete Guide to Rotating PDF Pages Online
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Scanned documents, smartphone photos converted to PDF, and incorrectly exported files often end up upside down or in landscape orientation when they should be portrait. Reading sideways documents is frustrating, and submitting them to professional portals or clients looks unprofessional. MyDigitSign lets you permanently fix page orientation <strong>100% in your browser</strong>. This comprehensive guide covers how to correctly rotate PDFs, the difference between viewing and saving rotations, and how to maintain file privacy.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Why PDFs End Up Upside Down
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            The Portable Document Format (PDF) is highly complex, storing not just visual data, but orientation metadata known as the "Rotate Matrix." When you scan a physical document upside down, or take a picture of a receipt with your phone tilted, the scanning software creates the PDF exactly as the lens saw it.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Many users open these files in basic PDF readers (like Apple Preview or Adobe Reader) and click "Rotate View" so they can read the text. However, this only rotates the <em>viewing angle</em> temporarily. When they attach that same PDF to an email and send it to their boss, the boss receives it sideways! To fix this permanently, you must rewrite the PDF's internal rotation matrix.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            The Power of Browser-Based Visual Rotation
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Before modern web technologies, permanently rotating a PDF required purchasing heavy desktop software. Free online rotators eventually emerged, but they required you to upload your sensitive tax documents to remote servers, waiting in line for a server farm to process your file.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            MyDigitSign brings enterprise-grade PDF manipulation directly to your local browser using WebAssembly. When you drop a file into our tool:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Visual Thumbnails:</strong> We instantly render visual previews of every single page. You aren't guessing which page is Page 4; you can see it clearly.</li>
            <li><strong>Zero Server Uploads:</strong> The file never leaves your computer. The orientation matrix is rewritten directly in your device's RAM, ensuring absolute privacy.</li>
            <li><strong>Permanent Matrix Edits:</strong> When you click download, the new PDF contains hard-coded rotation degrees (90, 180, or 270). The document will open correctly on any device, forever.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Step-by-Step: How to Permanently Rotate Pages
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Fixing your document takes only a few clicks. Here is the best way to utilize the visual page rotator:
          </p>
          <ol style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Select or Drop Your File:</strong> Choose the PDF file from your computer or mobile device. Wait a second for the visual thumbnails to generate.</li>
            <li><strong>Assess the Orientation:</strong> Look at the grid of pages. You will instantly see which pages are portrait, landscape, or completely upside down.</li>
            <li><strong>Rotate Individual Pages:</strong> Underneath each thumbnail, you will find rotation controls. Click the arrows to turn that specific page 90 degrees clockwise or counterclockwise until it looks correct.</li>
            <li><strong>Global Rotation (Optional):</strong> If the entire document was scanned sideways, use the global rotation buttons at the top to spin every page in the document simultaneously.</li>
            <li><strong>Apply and Download:</strong> Click the "Apply Changes" button. The engine will lock in the new orientation matrix and instantly download the corrected PDF to your device.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Common Scenarios for Rotating PDFs
          </h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Mobile Receipt Scanning:</strong> Taking photos of business expenses often results in a mix of portrait and landscape PDFs. Rotating them to a uniform portrait orientation makes life easier for the accounting department.</li>
            <li><strong>Mixed-Source Compilations:</strong> If you merge a digitally born Word-to-PDF file with a physical document scanned on an office copier, the orientations often clash. The rotator allows you to align all pages perfectly.</li>
            <li><strong>Legal Exhibits:</strong> Submitting evidence to courts requires strict formatting guidelines. Ensuring all pages are oriented correctly prevents rejection from digital filing systems.</li>
            <li><strong>Blueprints and Architectural Drawings:</strong> Large CAD exports are frequently landscape. Before printing or binding, rotating them properly ensures the margins align correctly on plotter printers.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Ensuring Perfect Document Hygiene
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            A correctly oriented document is the first step toward professional document presentation. Once your pages are aligned, consider these next steps:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Check File Size:</strong> Scanned documents are notoriously large. After rotating, run the file through our <a href="/tools/compress-pdf-online" style={{color: 'var(--color-primary)'}}>Free PDF Compressor</a> to make it email-friendly.</li>
            <li><strong>Secure the File:</strong> If the newly rotated document contains sensitive PII, lock it using our <a href="/tools/protect-pdf-online" style={{color: 'var(--color-primary)'}}>PDF Password Protector</a>.</li>
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
