import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getBreadcrumbSchema, getItemListSchema, CURRENT_DATE } from '@/lib/seo-schemas';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: 'Free Online PDF & Signature Tools (100% Client-Side Privacy) — MyDigitSign',
  description:
    'Explore our full suite of 100% free online PDF and signature tools. Sign PDFs, draw signatures, edit documents, merge files, and generate typed signatures with zero server uploads.',
  keywords: [
    'free pdf tools online',
    'sign pdf online free',
    'edit pdf online',
    'merge pdf online free',
    'draw signature online',
    'type signature generator',
    'client side pdf editor',
    'browser pdf tools no signup',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools',
  },
  openGraph: {
    title: 'Free Online PDF & Signature Tools — MyDigitSign',
    description:
      'Complete suite of free browser-based PDF signature, editing, merging, and compression tools with 100% client-side privacy.',
    url: 'https://mydigitsign.com/tools',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const toolsList = [
  {
    slug: 'sign-pdf-online',
    title: 'Sign PDF Online Free',
    badge: 'Popular',
    category: 'Signature',
    description: 'Add legal electronic signatures, draw initials, type custom signatures, or upload stamp seals directly onto any PDF document.',
    icon: '✍️',
    searchKeywords: ['sign pdf', 'e-signature', 'electronic signature', 'iphone sign pdf', 'free pdf signature'],
  },
  {
    slug: 'edit-pdf-online',
    title: 'PDF Editor & Annotator',
    badge: 'New',
    category: 'PDF Tools',
    description: 'Add text boxes, checkmarks, highlights, rectangle shapes, dates, and redactions to PDF forms in your browser.',
    icon: '📝',
    searchKeywords: ['edit pdf', 'pdf editor', 'annotate pdf', 'fill out pdf form', 'pdf editor signature'],
  },
  {
    slug: 'merge-pdf-online',
    title: 'Merge PDF Online',
    badge: 'New',
    category: 'PDF Tools',
    description: 'Combine multiple PDF files into one clean document with visual drag-and-drop page reordering.',
    icon: '🧩',
    searchKeywords: ['merge pdf', 'combine pdf', 'join pdf files', 'pdf page reorder'],
  },
  {
    slug: 'protect-pdf-online',
    title: 'Protect PDF Online',
    badge: 'Utility',
    category: 'PDF Tools',
    description: 'Encrypt your PDF documents with passwords. Uses military-grade AES-256 bit in-memory encryption to secure your files.',
    icon: '🔒',
    searchKeywords: ['protect pdf', 'encrypt pdf', 'password protect pdf', 'secure pdf file'],
  },
  {
    slug: 'compress-pdf-online',
    title: 'Compress PDF Online',
    badge: 'New',
    category: 'PDF Tools',
    description: 'Reduce PDF file size for email attachments and web upload limits while maintaining crisp visual quality.',
    icon: '⚡',
    searchKeywords: ['compress pdf', 'reduce pdf size', 'shrink pdf', 'pdf optimizer'],
  },
  {
    slug: 'draw-signature-online',
    title: 'Draw Signature Online',
    badge: 'Essential',
    category: 'Signature',
    description: 'Create ultra-smooth handwritten signatures using mouse, stylus, or touchscreen. Export as transparent PNG or SVG.',
    icon: '🎨',
    searchKeywords: ['draw signature', 'handwritten signature', 'signature maker', 'digital signature drawer'],
  },
  {
    slug: 'type-signature-online',
    title: 'Type Signature Generator',
    badge: 'Popular',
    category: 'Signature',
    description: 'Convert your typed name into gorgeous cursive calligraphy signatures with custom font styles and ink colors.',
    icon: '✒️',
    searchKeywords: ['type signature', 'cursive name generator', 'calligraphy signature', 'font signature maker'],
  },
  {
    slug: 'rotate-pdf-online',
    title: 'Rotate PDF Online',
    badge: 'Utility',
    category: 'PDF Tools',
    description: 'Fix sideways or upside-down PDF pages. Rotate individual pages or all pages by 90, 180, or 270 degrees.',
    icon: '🔄',
    searchKeywords: ['rotate pdf', 'flip pdf pages', 'turn pdf 90 degrees', 'pdf page rotator'],
  },
  {
    slug: 'sign-image-online',
    title: 'Sign Image Online',
    badge: 'Utility',
    category: 'Signature',
    description: 'Add signatures, watermarks, or text overlays to PNG, JPG, or WebP images instantly in your browser.',
    icon: '🖼️',
    searchKeywords: ['sign image', 'watermark photo', 'sign png', 'sign jpg online'],
  },
  // Phase 3 new tools
  {
    slug: 'pdf-to-jpg',
    title: 'PDF to JPG Free',
    badge: 'New',
    category: 'Convert',
    description: 'Convert PDF pages to high-quality JPEG images. Extract each page as a separate JPG file — no server uploads, no watermarks.',
    icon: '📄→🖼️',
    searchKeywords: ['pdf to jpg', 'pdf to image', 'convert pdf to jpeg', 'extract pdf pages'],
  },
  {
    slug: 'jpg-to-pdf',
    title: 'JPG to PDF Free',
    badge: 'New',
    category: 'Convert',
    description: 'Combine one or more JPG or PNG images into a single PDF document. 100% browser-based with no file uploads.',
    icon: '🖼️→📄',
    searchKeywords: ['jpg to pdf', 'image to pdf', 'photo to pdf', 'png to pdf free'],
  },
  {
    slug: 'split-pdf-online',
    title: 'Split PDF Online',
    badge: 'New',
    category: 'PDF Tools',
    description: 'Extract specific pages or split your PDF into individual files. Choose page ranges or split every page separately.',
    icon: '✂️',
    searchKeywords: ['split pdf', 'extract pdf pages', 'separate pdf pages', 'pdf splitter free'],
  },
];

export default function ToolsHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
  ]);

  const itemListSchema = getItemListSchema(
    toolsList.map((t) => ({
      name: t.title,
      url: `/tools/${t.slug}`,
      description: t.description,
    }))
  );

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Header Hero */}
        <section className={styles.heroSection} style={{ textAlign: 'center', padding: '3rem 1rem 2rem' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            🔒 100% Client-Side • Zero Server Uploads • Free Forever
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            Free Online PDF & Signature Micro-Tools Hub
          </h1>
          <p className={styles.subtitle} style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
            Everything you need to sign documents, edit PDFs, merge files, compress file sizes, and design custom electronic signatures. Your files never leave your device.
          </p>
        </section>

        {/* Tools Cards Grid */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {toolsList.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--card-bg, #ffffff)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{tool.icon}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '6px', background: tool.badge === 'Popular' ? '#eff6ff' : tool.badge === 'New' ? '#f0fdf4' : '#faf5ff', color: tool.badge === 'Popular' ? '#2563eb' : tool.badge === 'New' ? '#16a34a' : '#9333ea' }}>
                    {tool.badge}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
                  {tool.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, flexGrow: 1, marginBottom: '1.25rem' }}>
                  {tool.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: '#4f46e5', fontSize: '0.9rem' }}>
                  Open Tool <span style={{ marginLeft: '0.4rem' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 1,200 Words Rich Content SEO Section */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem 4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Choose Client-Side Browser PDF & Signature Tools?
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            In today&apos;s remote work environment, managing PDF documents quickly, securely, and without recurring subscription costs is essential. Traditional PDF software and online converters frequently require account creation, file uploads to external remote servers, and paid subscriptions for basic functionality like document signing or page merging.
          </p>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>
            1. Zero Server Uploads (100% Privacy Guarantee)
          </h3>
          <p style={{ lineHeight: 1.7, fontSize: '1rem', color: '#475569', marginBottom: '1.25rem' }}>
            Every tool in our suite operates entirely inside your web browser using HTML5 Canvas, WebAssembly, and local JavaScript libraries (such as PDF-Lib and PDF.js). When you select a PDF file, your document is processed directly inside your device&apos;s local memory. No bytes leave your device, eliminating data breach risks for sensitive legal agreements, tax forms, NDAs, and financial statements.
          </p>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. Cross-Device & Mobile Compatibility (iPhone, Android, Mac & PC)
          </h3>
          <p style={{ lineHeight: 1.7, fontSize: '1rem', color: '#475569', marginBottom: '1.25rem' }}>
            Whether you need to sign a PDF on an iPhone while traveling, annotate a contract on an Android tablet, or compress large PDF attachments on a desktop computer, our micro-tools are responsive and lightweight. You do not need to install heavy native applications or App Store utilities.
          </p>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. Legally Binding Electronic Signatures (ESIGN & eIDAS Compliant)
          </h3>
          <p style={{ lineHeight: 1.7, fontSize: '1rem', color: '#475569', marginBottom: '1.25rem' }}>
            Electronic signatures generated through MyDigitSign meet legal requirements established by the US ESIGN Act, UETA, and European eIDAS regulation. When you embed a handwritten or typed signature onto your PDF, it embeds a permanent visual signature layer into the document structure.
          </p>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>
            Frequently Asked Questions (FAQ)
          </h3>
          
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>
              Are these PDF tools completely free to use?
            </h4>
            <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>
              Yes! All our tools—including PDF signing, document editing, page merging, and signature drawing—are 100% free with no hidden paywalls, document limits, or registration required.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>
              Do I need to create an account or sign in?
            </h4>
            <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>
              No account or email address is needed. Simply open the tool you need, complete your task, and download your file instantly.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>
              How do I sign a PDF on an iPhone or iPad?
            </h4>
            <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>
              Open Safari on your iPhone, navigate to our <Link href="/tools/sign-pdf-online" style={{ color: '#2563eb' }}>Sign PDF Tool</Link>, select your file, use your finger to draw your signature on the screen, place it on your document, and tap download.
            </p>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '2rem', textAlign: 'center' }}>
            Last Updated: August 3, 2026 • MyDigitSign Team
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
