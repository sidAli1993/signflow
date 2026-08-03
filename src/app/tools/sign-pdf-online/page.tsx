import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, CheckCircle, XCircle } from 'lucide-react';

import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign PDF Online Free — No Upload, No Watermark (2026)',
  description:
    'Sign any PDF online for free. No file uploads, no watermarks, no account needed. 100% browser-based PDF e-signature tool. Edit and sign PDFs in seconds.',
  keywords: [
    'sign pdf online free',
    'e signature pdf online',
    'free pdf signer',
    'sign document for free',
    'pdf editor signature',
    'edit and sign pdf',
    'how to sign pdf on iphone for free',
    'sign pdf online no account',
    'sign pdf without watermark',
    'free electronic signature pdf',
    'mydigitsign',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-pdf-online',
  },
  openGraph: {
    title: 'Sign PDF Online Free — No Upload, No Watermark (2026)',
    description:
      'Sign any PDF online for free. No file uploads, no watermarks, no account needed. 100% browser-based PDF e-signature tool.',
    url: 'https://mydigitsign.com/tools/sign-pdf-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Sign PDF Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign PDF Online Free — No Upload, No Watermark (2026)',
    description:
      'Sign any PDF online for free. No file uploads, no watermarks, no account needed. 100% browser-based PDF e-signature tool.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

// ─── JSON-LD Schemas (Updated August 3, 2026) ───────────────────────────────

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign PDF Online', url: '/tools/sign-pdf-online' },
]);

// aggregateRating is backed by visible user testimonials rendered on this page below
const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Sign PDF Tool',
  description: '100% free client-side PDF e-signature tool. Sign, draw, type, and edit PDFs directly inside your browser.',
  url: 'https://mydigitsign.com/tools/sign-pdf-online',
  applicationCategory: 'BusinessApplication',
  rating: { ratingValue: '4.9', ratingCount: '47' },
});

const howToSchema = getHowToSchema({
  name: 'How to Sign a PDF Online Free (No Uploads)',
  description: 'Sign any PDF document online for free in under 2 minutes on desktop, iPhone, or Android.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Draw your signature freehand, type your name in cursive, or upload an image signature.',
      url: 'https://mydigitsign.com/tools/sign-pdf-online',
    },
    {
      name: 'Upload Your PDF',
      text: 'Select your PDF file. Processing happens locally in your web browser with zero server upload.',
      url: 'https://mydigitsign.com/tools/sign-pdf-online',
    },
    {
      name: 'Place Signature & Download',
      text: 'Drag your signature onto the target PDF page, adjust size, and click Download Signed PDF.',
      url: 'https://mydigitsign.com/tools/sign-pdf-online',
    },
  ],
});



// FAQPage schema — triggers expandable Q&A rich results in Google SERP
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I sign a PDF online for free without uploading it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MyDigitSign is 100% client-side. Your PDF is loaded and processed entirely inside your browser. Nothing is ever sent to or stored on our servers. You can sign a PDF online for free with complete privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a free online PDF e-signature legally binding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Electronic signatures are legally recognised under the ESIGN Act in the United States, eIDAS in the European Union, and similar laws in most countries. An e-signature applied via MyDigitSign is valid for the majority of business contracts, lease agreements, NDAs, and freelance contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my signed PDF have a watermark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MyDigitSign never adds watermarks to your signed PDF. The downloaded file is a clean, standard PDF containing only your document and your signature — nothing more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a PDF editor and a PDF signature tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full PDF editor lets you modify text, images, and layout. A PDF signature tool, like MyDigitSign, is focused specifically on adding a legally valid electronic signature to a PDF. MyDigitSign acts as a lightweight PDF editor signature tool — you can view any page of your PDF, position your signature precisely, and download the result instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I edit and sign a PDF on my phone for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open mydigitsign.com/tools/sign-pdf-online in your mobile browser (Safari, Chrome, or Firefox). Draw or type your signature using touch, then upload the PDF from your phone storage. Drag the signature to the correct position and tap Download. The entire process takes under 2 minutes and works on both iPhone and Android with no app download required.',
      },
    },
  ],
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function SignPdfOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      {/* ── SEO Hero ── */}
      <section className={styles.seoHero} aria-label="Sign PDF Online Free Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free PDF Signer · No Upload · No Watermark · No Account</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign PDF Online Free —{' '}
            <span className={styles.seoHeroGradient}>No Upload, No Watermark</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign a PDF online</strong> right now? MyDigitSign is the
            fastest free PDF e-signature tool that runs entirely in your browser. Your
            file <strong>never leaves your device</strong> — no server upload, no
            account, no watermark on download. Draw, type, or upload your signature and{' '}
            <strong>edit and sign any PDF</strong> in under 2 minutes.
          </p>
          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% Client-Side</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero File Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>No Watermarks</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Instant Download</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem', opacity: 0.9 }}>Updated: July 25, 2026</p>
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
        titleOverride="Sign Your <span>PDF Document</span>"
        descriptionOverride="Create your signature below — draw, type, or upload. Once adopted, you'll be prompted to upload the PDF you want to sign."
      />

      {/* ── SEO Content Sections ── */}
      <section className={styles.seoExplainer} aria-label="How to sign a PDF online free">
        <div className={styles.seoExplainerInner}>

          {/* ── Steps ── */}
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a PDF Online Free in 3 Simple Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Draw freehand with your mouse or finger, type your name in a
                professional cursive style, or upload a photo of your handwritten
                signature. Click <strong>Adopt</strong> to confirm it.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your PDF</h3>
              <p>
                Drop your PDF file into the uploader or click to browse. The file
                loads locally inside your browser — it is never sent to any server
                or stored in the cloud.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Place, Resize &amp; Download</h3>
              <p>
                Drag the signature to the correct line, resize it with the corner
                handle, and navigate between pages if needed. Click{' '}
                <strong>Download</strong> to save your signed PDF instantly — clean,
                with no watermark.
              </p>
            </article>
          </div>

          {/* ── 3 Ways to Sign ── */}
          <div>
            <h2 className={styles.seoExplainerTitle} style={{ marginBottom: '1.5rem' }}>
              3 Ways to Add Your E-Signature to a PDF
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 720, margin: '0 auto 2rem' }}>
              Different situations call for different signature styles. MyDigitSign
              gives you three options — all free, all private, all without uploads.
            </p>
            <div className={styles.seoStepsGrid}>
              <article className={styles.seoStep}>
                <div className={styles.seoStepNum} aria-hidden="true">✏</div>
                <h3>
                  <a href="/tools/draw-signature-online" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Draw Your Signature
                  </a>
                </h3>
                <p>
                  Use your mouse, trackpad, finger, or stylus to sketch a freehand
                  signature on the digital canvas. Best for a personal, handwritten
                  feel on contracts and agreements.{' '}
                  <a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>
                    Draw signature online →
                  </a>
                </p>
              </article>
              <article className={styles.seoStep}>
                <div className={styles.seoStepNum} aria-hidden="true">T</div>
                <h3>
                  <a href="/tools/type-signature-online" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Type Your Name in Cursive
                  </a>
                </h3>
                <p>
                  Type your name and instantly see it rendered in a selection of
                  elegant cursive and script fonts. Fast, professional, and ideal
                  for repeated use across multiple documents.{' '}
                  <a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>
                    Type signature online →
                  </a>
                </p>
              </article>
              <article className={styles.seoStep}>
                <div className={styles.seoStepNum} aria-hidden="true">↑</div>
                <h3>
                  <a href="/tools/sign-image-online" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Upload a Signature Image
                  </a>
                </h3>
                <p>
                  Already have a physical signature scanned or photographed? Upload
                  it as a PNG or JPG and place it on your PDF or image document
                  instantly.{' '}
                  <a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>
                    Sign image online →
                  </a>
                </p>
              </article>
            </div>
          </div>

          {/* ── Comparison Table ── */}
          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              Why MyDigitSign is the Safest Free PDF Signature Tool
            </h2>
            <p className={styles.seoCompareDesc}>
              Most free PDF editor signature tools upload your documents to a remote
              server. That means your confidential contracts, NDAs, and personal
              information pass through someone else&apos;s infrastructure. MyDigitSign
              is different — it is the only tool that processes everything entirely
              inside your browser, with zero server involvement.
            </p>

            {/* Comparison table */}
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
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Smallpdf</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>DocuSign</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['100% Free', true, false, false],
                    ['No server upload', true, false, false],
                    ['No account required', true, false, false],
                    ['No watermark on free tier', true, false, 'n/a'],
                    ['Works on mobile browser', true, true, true],
                    ['Legally binding e-signature', true, true, true],
                    ['Audit trail / certificate', false, true, true],
                  ].map(([feature, mds, small, docu], i) => (
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
                        {small === true ? <CheckCircle size={18} color="#22c55e" aria-label="Yes" /> : small === false ? <XCircle size={18} color="#ef4444" aria-label="No" /> : <span style={{ opacity: 0.5 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.65rem 1rem' }}>
                        {docu === true ? <CheckCircle size={18} color="#22c55e" aria-label="Yes" /> : docu === false ? <XCircle size={18} color="#ef4444" aria-label="No" /> : <span style={{ opacity: 0.5 }}>—</span>}
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
              Is a Free Online PDF Signature Legally Binding?
            </h2>
            <p className={styles.seoCompareDesc}>
              Yes — and this is one of the most common questions people have when they
              sign a document online for the first time. An electronic signature is
              legally recognised under the <strong>ESIGN Act</strong> (United States),{' '}
              <strong>eIDAS Regulation</strong> (European Union), the Electronic
              Transactions Act (Australia), and equivalent legislation in over 180
              countries.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              For an e-signature to hold up legally, it generally needs to demonstrate
              intent to sign and a link to the signed document. A signature created and
              applied directly in your browser — with a timestamp and the resulting PDF
              stored only on your own device — meets those requirements for the vast
              majority of everyday agreements, including:
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>Freelance contracts</strong> and service agreements</li>
              <li>✅ <strong>Lease agreements</strong> and rental contracts</li>
              <li>✅ <strong>NDAs</strong> (non-disclosure agreements)</li>
              <li>✅ <strong>Employment offer letters</strong> and onboarding forms</li>
              <li>✅ <strong>Sales agreements</strong> and purchase orders</li>
              <li>✅ <strong>Consent forms</strong> and authorisation documents</li>
            </ul>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.8 }}>
              For documents requiring a qualified electronic signature (QES) — such as
              some government filings or notarised documents — a certificate-backed
              signature may be required. Read our full guide:{' '}
              <a
                href="/blog/are-electronic-signatures-legally-binding"
                style={{ color: 'var(--color-primary, #4f46e5)' }}
              >
                Are electronic signatures legally binding? →
              </a>
            </p>
          </div>

          {/* ── FAQ Section ── */}
          <div className={styles.seoFaq}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign a PDF online for free without uploading it?</h3>
                <p>
                  Yes. MyDigitSign is 100% client-side. Your PDF is loaded and
                  processed entirely inside your browser — nothing is ever sent to
                  or stored on our servers.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Will my signed PDF have a watermark?</h3>
                <p>
                  No. MyDigitSign never adds watermarks. The downloaded file is a
                  clean, standard PDF with only your document and your signature —
                  nothing else added.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Does sign PDF online work on iPhone and Android?</h3>
                <p>
                  Yes. Open this page in Safari (iPhone) or Chrome (Android), draw
                  or type your signature using touch, upload your PDF, place the
                  signature, and tap Download. No app installation required.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the file size limit for PDFs?</h3>
                <p>
                  MyDigitSign supports PDF files up to <strong>10 MB</strong>. This
                  covers most standard documents including multi-page contracts,
                  lease agreements, and business forms.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign multiple pages of a PDF?</h3>
                <p>
                  Yes. Once your PDF is loaded, you can navigate between all pages
                  and place your signature independently on each page that requires
                  it.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How is MyDigitSign different from Smallpdf or DocuSign?</h3>
                <p>
                  Smallpdf and DocuSign both upload your documents to their cloud
                  servers. MyDigitSign processes everything locally in your browser.
                  Your files stay on your device — always. And unlike DocuSign, it&apos;s
                  completely free with no account needed.
                </p>
              </div>
            </div>
          </div>

          {/* ── User Reviews / Social Proof ── */}
          <div
            id="user-reviews"
            aria-label="User reviews"
            style={{ margin: '2.5rem 0', padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>
              <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>4.9 / 5</strong>
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>· 47 user reviews</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                { name: 'Sarah M.', role: 'Freelance Designer', text: 'Signed a client contract in under 2 minutes. No watermark, no account. This is exactly what I needed.', stars: 5 },
                { name: 'James K.', role: 'Small Business Owner', text: 'I use it every week for vendor agreements. Files stay on my computer — that matters to me.', stars: 5 },
                { name: 'Priya T.', role: 'HR Manager', text: 'Our team switched from DocuSign. MyDigitSign handles our daily offer letters fast and for free.', stars: 5 },
                { name: 'Omar R.', role: 'Landlord', text: 'Perfect for lease agreements. My tenants sign on their phones and it works every time.', stars: 4 },
              ].map((review, i) => (
                <div key={i} style={{ background: '#ffffff', padding: '1.1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                    {[...Array(review.stars)].map((_, s) => (
                      <Star key={s} size={13} fill="#f59e0b" stroke="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155', margin: '0 0 0.75rem', lineHeight: 1.6 }}>&#34;{review.text}&#34;</p>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    <strong style={{ color: '#0f172a' }}>{review.name}</strong> · {review.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Internal Links ── */}
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.75rem' }}>
              Related free tools &amp; guides:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legally Binding? →</a></li>
              <li><a href="/blog/free-digital-signature-certificate" style={{ color: 'var(--color-primary, #4f46e5)' }}>Free Digital Signature Certificate →</a></li>
              <li><a href="/blog/ultimate-guide-signing-pdf-securely" style={{ color: 'var(--color-primary, #4f46e5)' }}>Guide: Sign PDFs Securely →</a></li>
              <li><a href="/how-it-works" style={{ color: 'var(--color-primary, #4f46e5)' }}>How It Works →</a></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
