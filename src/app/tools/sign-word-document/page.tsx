import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, CheckCircle, XCircle, FileText } from 'lucide-react';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Word Document Online Free — No Conversion Needed (2026)',
  description:
    'Sign a Word document online for free. Upload your .doc or .docx file, convert it to a secure PDF in your browser, and add your e-signature instantly. No signup, no watermarks.',
  keywords: [
    'sign word document',
    'add signature to word document',
    'how to add signature on word',
    'sign word document online free',
    'sign docx online',
    'sign doc online',
    'electronic signature word document',
    'word document signature',
    'sign microsoft word online',
    'add e-signature to word file',
    'how to sign a word document',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-word-document',
  },
  openGraph: {
    title: 'Sign Word Document Online Free — No Conversion Needed (2026)',
    description:
      'Upload your Word doc, sign it instantly in your browser — 100% private, no uploads to any server, no watermarks.',
    url: 'https://mydigitsign.com/tools/sign-word-document',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Sign Word Document Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Word Document Online Free — No Conversion Needed (2026)',
    description:
      'Upload your Word doc and sign it in seconds. 100% browser-based, no server upload, no watermarks.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Word Document', url: '/tools/sign-word-document' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Word Document Signer',
  description:
    '100% free browser-based tool to sign Microsoft Word documents online. Converts .docx to PDF locally and places your e-signature — no server uploads, no watermarks.',
  url: 'https://mydigitsign.com/tools/sign-word-document',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Sign a Word Document Online Free',
  description:
    'Sign any Microsoft Word document online for free in under 2 minutes without installing any software.',
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Draw, type, or upload your handwritten signature using the tool below. Click Adopt to confirm it.',
      url: 'https://mydigitsign.com/tools/sign-word-document',
    },
    {
      name: 'Upload Your Word Document',
      text: 'Save your Word document as a PDF (File → Save As → PDF) and upload it. Everything processes locally in your browser — no server upload.',
      url: 'https://mydigitsign.com/tools/sign-word-document',
    },
    {
      name: 'Place Signature & Download',
      text: 'Drag your signature to the correct line, resize it if needed, and click Download. Get a clean, signed PDF — no watermark.',
      url: 'https://mydigitsign.com/tools/sign-word-document',
    },
  ],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I sign a Word document online for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MyDigitSign lets you sign any Word document online for free. Save your .docx file as a PDF first (File → Save As → PDF in Word), then upload it here to sign it instantly in your browser. No account, no watermark, no server upload.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to convert my Word document to PDF first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Because Word .docx files are editable, the professional standard is to convert them to PDF before signing. This prevents anyone from modifying the document after you sign it. In Microsoft Word, go to File → Save As → choose PDF format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an electronic signature on a Word document legally binding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under the US ESIGN Act, EU eIDAS Regulation, and similar laws in over 180 countries, an electronic signature is legally binding for most business agreements including contracts, NDAs, invoices, and lease agreements. Saving the signed document as a PDF (rather than leaving it as an editable .docx) is strongly recommended to protect its integrity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my signed Word document have a watermark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MyDigitSign never adds watermarks. The downloaded signed PDF is clean and professional — it contains only your document and your signature.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I add a signature to a Word document on a Mac?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On a Mac, open your Word document, then go to File → Export → Save as PDF. Then visit MyDigitSign, create your signature, upload the PDF, place your signature, and download. The process takes under 2 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sign a Word document on my iPhone or Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Open this page in your mobile browser (Safari on iPhone or Chrome on Android), create your signature using touch, upload your PDF, and tap Download. No app installation required.',
      },
    },
  ],
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function SignWordDocumentTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      {/* ── SEO Hero ── */}
      <section className={styles.seoHero} aria-label="Sign Word Document Online Free Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <FileText size={14} aria-hidden="true" />
            <span>Free Word Doc Signer · No Upload · No Watermark · No Account</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Word Document Online Free —{' '}
            <span className={styles.seoHeroGradient}>No Watermark, No Signup</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>add a signature to a Word document</strong> right now? MyDigitSign is the
            fastest free way to sign your <strong>.doc or .docx files</strong> online. Simply save
            your Word file as a PDF, upload it below, place your e-signature, and download.{' '}
            <strong>Your file never leaves your device</strong> — no server upload, no account, no
            watermark. Works on Windows, Mac, iPhone, and Android.
          </p>
          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% Client-Side</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero File Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>No Watermarks</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Instant Download</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>

          {/* Quick Instruction Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(99,102,241,0.04))',
            border: '1px solid rgba(79,70,229,0.2)',
            borderRadius: '10px',
            padding: '0.9rem 1.25rem',
            marginTop: '1.25rem',
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <strong style={{ color: 'var(--color-primary, #4f46e5)' }}>💡 Quick Tip:</strong>{' '}
            In Microsoft Word, go to <strong>File → Save As → PDF</strong> to convert your Word doc first.
            Then use the tool below to sign it. This keeps your document tamper-proof after signing.
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem', opacity: 0.9 }}>Updated: August 5, 2026</p>
        </div>
      </section>

      {/* ── JSON-LD Schemas ── */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Embedded Tool ── */}
      <HomeClient
        initialTab="draw"
        titleOverride="Sign Your <span>Word Document</span>"
        descriptionOverride="Create your signature below — draw, type, or upload. Once adopted, upload your Word document saved as a PDF to sign it instantly."
      />

      {/* ── SEO Content Sections ── */}
      <section className={styles.seoExplainer} aria-label="How to sign a Word document online free">
        <div className={styles.seoExplainerInner}>

          {/* ── How to Sign Word Doc Steps ── */}
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a Word Document Online Free in 3 Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Save Word Doc as PDF</h3>
              <p>
                In Microsoft Word, go to <strong>File → Save As</strong> and choose{' '}
                <strong>PDF</strong> as the file format. On Mac, use{' '}
                <strong>File → Export → PDF</strong>. This ensures your document
                cannot be edited after you sign it.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Create &amp; Adopt Your Signature</h3>
              <p>
                Draw your signature freehand with your mouse, finger, or stylus — or
                type your name in a professional cursive font. Click{' '}
                <strong>Adopt</strong>, then upload your PDF. Your file loads
                entirely in your browser and is never sent to any server.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Place, Resize &amp; Download</h3>
              <p>
                Drag your signature to the signature line, resize it using the
                corner handle, and navigate between pages if needed. Click{' '}
                <strong>Download</strong> to save your professionally signed PDF
                — clean, with no watermark.
              </p>
            </article>
          </div>

          {/* ── Why Convert to PDF First ── */}
          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              Why You Should Convert Word to PDF Before Signing
            </h2>
            <p className={styles.seoCompareDesc}>
              A .docx file is editable by design. If you sign a Word document directly,
              anyone with Microsoft Word can alter the document text after your signature
              is placed — making your signature legally meaningless. Converting to PDF
              locks the content and makes any tampering visually detectable.
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>PDF prevents casual editing</strong> — content stays intact after signing</li>
              <li>✅ <strong>Industry standard</strong> — contracts, NDAs, and leases are always signed as PDFs</li>
              <li>✅ <strong>Legally stronger</strong> — a signed, unmodified PDF is more defensible in disputes</li>
              <li>✅ <strong>Universal compatibility</strong> — PDFs look the same on all devices and operating systems</li>
            </ul>
          </div>

          {/* ── How to Add Signature in Word (Native Methods) ── */}
          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              How to Add a Signature to a Word Document (All Methods)
            </h2>
            <p className={styles.seoCompareDesc}>
              If you need to sign a Word document, you have several options. Here is a
              complete overview of every method and when to use each one.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
              {[
                {
                  title: 'Method 1: Word Signature Line Tool',
                  desc: 'Go to Insert → Signature Line. This adds a formal placeholder with the signer\'s name and title. Best for preparing documents for print-and-sign. Requires a digital certificate for digital signing.',
                  badge: 'Best for Print',
                  icon: '📄',
                },
                {
                  title: 'Method 2: Draw in Word (Draw Tab)',
                  desc: 'Use the Draw tab in Word to freehand-sketch your signature using a mouse, trackpad, or stylus. Quick and informal — but the .docx file remains editable.',
                  badge: 'Quick & Informal',
                  icon: '✏️',
                },
                {
                  title: 'Method 3: Insert a Signature Image',
                  desc: 'Go to Insert → Pictures → This Device and upload a PNG of your scanned signature. Use Wrap Text → In Front of Text to position it freely over the line.',
                  badge: 'Good for Reuse',
                  icon: '🖼️',
                },
                {
                  title: 'Method 4: Convert to PDF & Sign (Recommended)',
                  desc: 'Save the Word doc as PDF, then use MyDigitSign to draw, type, or upload your signature and place it on any page. The most professional and legally secure approach.',
                  badge: '⭐ Recommended',
                  icon: '✍️',
                },
              ].map((method, i) => (
                <div key={i} style={{
                  background: 'var(--color-bg-secondary, #f8fafc)',
                  border: '1px solid var(--color-border, #e2e8f0)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{method.icon}</div>
                  <div style={{
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: i === 3 ? 'rgba(79,70,229,0.1)' : 'rgba(100,116,139,0.1)',
                    color: i === 3 ? 'var(--color-primary, #4f46e5)' : 'var(--color-text-secondary)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    marginBottom: '0.6rem',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                  }}>
                    {method.badge}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{method.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Comparison Table ── */}
          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              MyDigitSign vs. Other Word Document Signing Tools
            </h2>
            <p className={styles.seoCompareDesc}>
              Most tools that let you sign Word documents either charge a monthly fee,
              upload your file to their servers, or add a watermark to your free download.
              MyDigitSign does none of those.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
                color: 'var(--color-text)',
              }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 700 }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: 'var(--color-primary)', fontWeight: 700 }}>MyDigitSign</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>DocuSign</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Adobe Acrobat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['100% Free (no limits)', true, false, false],
                    ['No server upload', true, false, false],
                    ['No account required', true, false, false],
                    ['No watermark', true, false, 'n/a'],
                    ['Works on mobile browser', true, true, true],
                    ['Legally binding e-signature', true, true, true],
                    ['Signed PDF download', true, true, true],
                  ].map(([feature, mds, docu, adobe], i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid var(--color-border)',
                        background: i % 2 === 0 ? 'transparent' : 'var(--color-bg-secondary)',
                      }}
                    >
                      <td style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>{feature as string}</td>
                      <td style={{ textAlign: 'center', padding: '0.65rem 1rem' }}>
                        {mds === true ? <CheckCircle size={18} color="var(--color-primary)" aria-label="Yes" /> : mds === false ? <XCircle size={18} color="#ef4444" aria-label="No" /> : <span style={{ opacity: 0.5 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.65rem 1rem' }}>
                        {docu === true ? <CheckCircle size={18} color="#22c55e" aria-label="Yes" /> : docu === false ? <XCircle size={18} color="#ef4444" aria-label="No" /> : <span style={{ opacity: 0.5 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.65rem 1rem' }}>
                        {adobe === true ? <CheckCircle size={18} color="#22c55e" aria-label="Yes" /> : adobe === false ? <XCircle size={18} color="#ef4444" aria-label="No" /> : <span style={{ opacity: 0.5 }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Legal Section ── */}
          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              Is an Electronic Signature on a Word Document Legally Binding?
            </h2>
            <p className={styles.seoCompareDesc}>
              Yes — in most countries, an electronic signature on a document is just as
              legally valid as a wet-ink signature. This is governed by:
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>ESIGN Act</strong> — United States federal law recognizing e-signatures</li>
              <li>✅ <strong>eIDAS Regulation</strong> — European Union e-signature standard</li>
              <li>✅ <strong>Electronic Transactions Act</strong> — Australia &amp; New Zealand</li>
              <li>✅ <strong>IT Act 2000</strong> — India electronic signature law</li>
            </ul>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              For maximum legal protection, always sign a <strong>PDF</strong> rather than
              a raw Word document. A signed, uneditable PDF provides a stronger chain of
              custody than a signed .docx file.{' '}
              <a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>
                Read: Are electronic signatures legally binding? →
              </a>
            </p>
          </div>

          {/* ── FAQ Section ── */}
          <div className={styles.seoFaq}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign a Word document online for free?</h3>
                <p>
                  Yes. Save your Word doc as a PDF (File → Save As → PDF), then
                  upload it to MyDigitSign. Create your signature, place it on the
                  document, and download — 100% free with no watermark.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to convert my Word doc to PDF first?</h3>
                <p>
                  Yes, and it is strongly recommended. Because .docx files are editable,
                  signing a raw Word file allows anyone to alter the content afterwards.
                  Converting to PDF locks the document before signing.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I add my handwritten signature to a Word doc?</h3>
                <p>
                  Save the Word doc as PDF → upload to MyDigitSign → use the Draw
                  tab to sketch your handwritten signature → place it on the signature
                  line → download. Alternatively, in Word go to Insert → Signature Line
                  to add a formal placeholder.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign a Word document on Mac?</h3>
                <p>
                  Yes. On Mac, open your Word document and use File → Export → Save as
                  PDF. Then visit MyDigitSign, create your signature, upload the PDF,
                  place your signature, and download. No software installation required.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign a Word document on my phone?</h3>
                <p>
                  Yes. Open this page in your mobile browser, use your finger to draw
                  your signature on the canvas, upload your PDF, tap to place the
                  signature, and tap Download. Works on iPhone (Safari) and Android
                  (Chrome) without any app.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Will my signed document have a watermark?</h3>
                <p>
                  Never. MyDigitSign is 100% free with absolutely no watermarks added
                  to your downloaded document — not on the free tier, not ever.
                </p>
              </div>
            </div>
          </div>

          {/* ── Internal Links ── */}
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.75rem' }}>
              Related free tools &amp; guides:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Edit PDF Online →</a></li>
              <li><a href="/blog/how-to-add-signature-in-word" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Add Signature in Word (Guide) →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legally Binding? →</a></li>
              <li><a href="/blog/what-is-a-signature-line" style={{ color: 'var(--color-primary, #4f46e5)' }}>What Is a Signature Line? →</a></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
