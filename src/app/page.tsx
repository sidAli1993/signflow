import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from './HomeClient';
import styles from './page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Signature Online Free — 100% Private, No Uploads | MyDigitSign',
  description:
    'Create your digital signature online for free. 100% browser-based & private — your files never leave your device. Draw, type, or upload your electronic signature in seconds.',
  keywords: [
    'sign pdf online free',
    'free pdf signer',
    'digital signature online',
    'e signature pdf free',
    'sign document online free',
    'draw electronic signature',
    'sign pdf on iphone',
    'free document signer',
    'legally binding electronic signature',
    'online signature tool',
    'sign pdf without upload',
    'free digital signature certificate',
    'create digital signature free',
    'edit and sign pdf free',
    'mydigitsign',
  ],

  alternates: {
    canonical: 'https://mydigitsign.com',
  },
  openGraph: {
    title: 'Digital Signature Online Free (100% Private) — MyDigitSign',
    description:
      'Create a digital signature online for free. 100% browser-based & private — your files never leave your device. Secure digital signature with no server uploads.',
    url: 'https://mydigitsign.com',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Free PDF Signer Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Signature Online Free (100% Private) — MyDigitSign',
    description:
      'Create a digital signature online for free. 100% browser-based & private — your files never leave your device. Secure digital signature with no server uploads.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

// JSON-LD for homepage — BreadcrumbList + Organization + SoftwareApplication
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://mydigitsign.com',
    },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'MyDigitSign',
  'url': 'https://mydigitsign.com',
  'logo': 'https://mydigitsign.com/logo.png',
  'sameAs': [
    'https://twitter.com/mydigitsign',
    'https://github.com/mydigitsign'
  ]
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'MyDigitSign',
  'applicationCategory': 'BusinessApplication',
  'operatingSystem': 'Web Browser',
  'description': '100% free client-side PDF e-signature tool. Sign, draw, type, and edit PDFs directly inside your browser without uploading files to any server.',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'url': 'https://mydigitsign.com'
};

export default function Home() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      {/* ─── Server-rendered SEO Hero Section ───────────────────────────── */}
      {/* This is static HTML — Google indexes every word below */}
      <section className={styles.seoHero} aria-label="About MyDigitSign">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free · No Account · No Upload</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Digital Signature Online —{' '}
            <span className={styles.seoHeroGradient}>100% Free &amp; Private</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            MyDigitSign makes it simple to sign PDF documents online for free. Create your digital signature by drawing, typing in cursive, or uploading an image, then place it directly on your document. Because processing happens entirely inside your browser, your files never leave your device.
          </p>

          {/* Trust pills — server-rendered, crawlable */}
          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% Browser-Based</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>No Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Supports PDF, PNG, JPG</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Sign in Seconds</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* ─── Interactive Tool (client-side) ─────────────────────────────── */}
      <HomeClient />

      {/* ─── Server-rendered Explainer Section ──────────────────────────── */}
      {/* Below-the-fold static content for Google to index */}
      <section className={styles.seoExplainer} aria-label="How MyDigitSign works">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Edit and Sign PDFs Online in 3 Simple Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Draw your signature freehand with a mouse or touchscreen, type your name using elegant cursive fonts, or upload a clear PNG image of your handwritten signature.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Document</h3>
              <p>
                Drag and drop your PDF or image file into the secure workspace. Your file stays locally on your device — it is never uploaded to an external server.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Place, Resize &amp; Download</h3>
              <p>
                Position your signature precisely where needed, scale it to fit the page, and download your newly signed PDF instantly without watermarks.
              </p>
            </article>
          </div>

          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              Why Choose MyDigitSign Over Other PDF Signers?
            </h2>
            <p className={styles.seoCompareDesc}>
              Unlike traditional signing platforms that require cloud uploads, account creation, or paid subscriptions, MyDigitSign runs <strong>100% inside your browser</strong>. Your confidential agreements, contracts, and personal documents remain completely private.
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>Zero Server Uploads</strong> — All processing occurs locally on your browser.</li>
              <li>✅ <strong>Multiple Signature Styles</strong> — Draw, type, or upload signature graphics smoothly.</li>
              <li>✅ <strong>Cryptographic Certificates</strong> — Option to sign with self-generated digital certificates.</li>
              <li>✅ <strong>Multi-Format Support</strong> — Works with PDF documents as well as PNG and JPG images.</li>
              <li>✅ <strong>100% Free Forever</strong> — No subscriptions, no hidden limits, and no watermarks added.</li>
              <li>✅ <strong>Legally Recognized</strong> — Compliant with ESIGN Act (US) and eIDAS (EU) standards.</li>
              <li>✅ <strong>Mobile Friendly</strong> — Works seamlessly on iPhone, iPad, Android, and desktop browsers.</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className={styles.seoFaq}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions (FAQ)</h2>
            <div className={styles.seoFaqGrid}>
              <article className={styles.faqItem}>
                <h3>How do I sign a PDF online for free without creating an account?</h3>
                <p>
                  Simply open MyDigitSign in your browser, draw or type your signature, upload your document, and place the signature overlay. You can download the completed document in seconds without registering.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Can I sign a PDF document on an iPhone or mobile device?</h3>
                <p>
                  Yes. Open MyDigitSign in Safari or Chrome on your mobile device. You can draw your signature using your finger on the touchscreen, place it on the PDF, and save the signed file directly to your device.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Are electronic signatures legally binding?</h3>
                <p>
                  Yes. Electronic signatures are legally enforceable under laws like the ESIGN Act and UETA in the United States and eIDAS in the European Union for most commercial, personal, and business contracts.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>How can I create a digital signature certificate for free?</h3>
                <p>
                  MyDigitSign includes a built-in cryptographic signature tool that lets you generate a self-signed digital certificate. You can attach this certificate directly to your PDF for enhanced document integrity verification.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Are there any file size limits or restrictions?</h3>
                <p>
                  MyDigitSign supports PDF, PNG, JPG, and JPEG files up to 10MB. Because operations run locally, document loading and processing are instant.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>How does MyDigitSign compare to DocuSign or Smallpdf?</h3>
                <p>
                  While DocuSign and Smallpdf require file uploads to third-party servers and charge for regular use, MyDigitSign is completely free, client-side, and privacy-first — your files are never uploaded anywhere.
                </p>
              </article>
            </div>
          </div>

          {/* Internal links to PDF Micro-Tools */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>
              Explore Our Free PDF & Signature Micro-Tools Suite
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.85rem', fontSize: '0.9rem' }}>
              <li><a href="/tools" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 700 }}>All Tools Hub →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Free PDF Editor →</a></li>
              <li><a href="/tools/merge-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Merge PDF Online →</a></li>
              <li><a href="/tools/compress-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Compress PDF Online →</a></li>
              <li><a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Protect PDF Online →</a></li>
              <li><a href="/tools/rotate-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Rotate PDF Online →</a></li>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
