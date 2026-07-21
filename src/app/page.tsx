import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from './HomeClient';
import styles from './page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign PDF Online Free — Online Signature PDF Tool | MyDigitSign',
  description:
    'Sign PDF online free. Online signature PDF tool — 100% private, no uploads, no account. Draw electronic signature, digitally sign documents, sign files online in seconds.',
  keywords: [
    // Primary GSC keywords (ranked in screenshots — highest priority)
    'online sign pdf',
    'pdf signature online',
    'online signature pdf',
    'draw electronic signature',
    'how to sign pdf on iphone',
    'documents sign online',
    'free document signer',
    'legally binding electronic signature',
    'signing documents online',
    'document sign free',
    'free electronic signature pdf',
    'digitally sign pdf free',
    'document digital signature',
    'e sign free',
    'how to sign a pdf document on iphone',
    'sign files online',
    'sign online document',
    'signing document online',
    'signing pdf on iphone',
    'digitally sign documents',
    'free app to sign pdf on iphone',
    'online pdf signature',
    'draw signature online',
    'sign online pdf',
    'sign a document online',
    'sign documents online free',
    'online document signature',
    'sign documents online',
    'digitally sign pdf online',
    'sign pdf online free',
    // Our 14 plan keywords
    'e signature pdf online',
    'sign document for free',
    'electronic signature legal',
    'are electronic signatures acceptable',
    'pdf editor signature',
    'pdf editor free signature',
    'edit and sign pdf',
    'sign on document online',
    'digit sign',
    'free digital signature certificate',
    'create a digital signature certificate',
    // Supporting long-tail
    'pdf signature free',
    'free online signature',
    'create digital signature pdf',
    'legal electronic signature',
    'digital signature tool',
    'document signer',
    'free pdf e signature',
    'sign document online free',
    'free e sign',
    'online pdf editor signature',
    'e sign online',
    'sign pdf free online',
    'pdf signer online',
    'signature pdf online',
    'is docusign legally binding',
    'pdf online sign',
    'do e signatures hold up in court',
    'pdf signature online free',
    'pdf signer free',
    'create digital signature online free',
    'free pdf signer',
    'digital signature maker',
    'electronic signature free',
    'pdf signing tool no upload',
    'e-sign pdf free',
    'browser based pdf signer',
    'create digital signature',
    'sign pdf without account',
    'mydigitsign'
  ],

  alternates: {
    canonical: 'https://mydigitsign.com',
  },
  openGraph: {
    title: 'Sign PDF Online Free (100% Private E-Signature) — MyDigitSign',
    description:
      'Sign PDFs & documents online for free. 100% browser-based & private—your files never leave your device. Secure digit sign with no server uploads, no signup, no limits.',
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
    title: 'Sign PDF Online Free (100% Private E-Signature) — MyDigitSign',
    description:
      'Sign PDFs & documents online for free. 100% browser-based & private—your files never leave your device. Secure digit sign with no server uploads.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

// JSON-LD for homepage — BreadcrumbList + SiteNavigationElement
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
            Online Sign PDF &amp;{' '}
            <span className={styles.seoHeroGradient}>Free Document Signer</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need an <strong>online signature PDF</strong> tool? <strong>Sign PDF online free</strong> — 100% private, no uploads, no account. <strong>Draw electronic signature</strong> with your mouse or finger, type your name, or upload an image to <strong>digitally sign documents</strong> in seconds. Want to <strong>sign files online</strong> without software? Our free <strong>document signer</strong> works on any device — including iPhone. <strong>Signing documents online</strong> has never been simpler or more secure.
          </p>

          {/* Trust pills — server-rendered, crawlable */}
          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% Browser-Based</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>No Files Uploaded</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Supports PDF, PNG, JPG</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Sign in Seconds</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      {/* Breadcrumb JSON-LD */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── Interactive Tool (client-side) ─────────────────────────────── */}
      <HomeClient />

      {/* ─── Server-rendered Explainer Section ──────────────────────────── */}
      {/* Below-the-fold static content for Google to index */}
      <section className={styles.seoExplainer} aria-label="How MyDigitSign works">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            The Simplest Way to Edit and Sign PDFs Online — Completely Free
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Draw your signature freehand with your mouse or touchscreen, type your name and
                pick from beautiful cursive fonts, or upload a PNG image of your existing signature.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Document</h3>
              <p>
                Drag and drop your PDF, PNG, or JPG file (up to 10MB) into the secure upload area.
                The file is read locally — it is never sent to any server.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Place, Resize &amp; Download</h3>
              <p>
                Drag your signature overlay to the exact signing line on the document, resize it
                with the drag handle, then download your finished signed PDF instantly.
              </p>
            </article>
          </div>

          <div className={styles.seoCompare}>
            <h2 className={styles.seoCompareTitle}>
              Why Choose MyDigitSign Over Other PDF Signers?
            </h2>
            <p className={styles.seoCompareDesc}>
              Unlike DocuSign, Adobe Acrobat Sign, SmallPDF, or ILovePDF — MyDigitSign processes
              everything <strong>100% inside your browser</strong>. There are no servers, no cloud
              storage, no subscriptions, and no account creation required. Your confidential
              contracts, NDAs, and tax documents stay private on your device at all times.
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>Online sign PDF</strong> — <strong>pdf signature online</strong> with zero server uploads</li>
              <li>✅ <strong>Draw electronic signature</strong> — smooth vector strokes via mouse, trackpad, or touch</li>
              <li>✅ <strong>Digitally sign documents</strong> — <strong>document digital signature</strong> support built-in</li>
              <li>✅ <strong>Sign files online</strong> — PDF, PNG, JPG all supported, up to 10MB</li>
              <li>✅ <strong>Signing documents online</strong> free — no account, no paywall, no watermark</li>
              <li>✅ <strong>Edit and sign PDF</strong> — 100% client-side, <strong>digitally sign PDF free</strong></li>
              <li>✅ <strong>Legally binding electronic signature</strong> — compliant with ESIGN & eIDAS</li>
              <li>✅ <strong>Online document signature</strong> — drag, resize, and place on any page</li>
              <li>✅ <strong>E sign free</strong> — open and <strong>sign document online free</strong> in under 60 seconds</li>
              <li>✅ <strong>Sign PDF on iPhone</strong> — fully responsive, works on any mobile browser</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className={styles.seoFaq}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions (FAQ)</h2>
            <div className={styles.seoFaqGrid}>
              <article className={styles.faqItem}>
                <h3>How do I sign PDF online free with no account?</h3>
                <p>
                  Just visit MyDigitSign — no signup required. You can <strong>online sign PDF</strong> by drawing, typing, or uploading your signature, then placing it on your document. The whole process takes under 60 seconds and your file never leaves your browser. It is the fastest way to get a <strong>pdf signature online</strong> for free.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>How to sign PDF on iPhone or sign a PDF document on iPhone?</h3>
                <p>
                  Open MyDigitSign in Safari or Chrome on your iPhone. Tap the tool, draw your signature with your finger, upload your PDF, then tap to place your <strong>online signature PDF</strong>. No app download needed. Whether you need to <strong>sign PDF on iPhone</strong> or <strong>signing PDF on iPhone</strong>, our mobile-friendly tool handles it completely inside your browser.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Are electronically signed documents legally binding?</h3>
                <p>
                  Yes. A <strong>legally binding electronic signature</strong> is recognized under the ESIGN Act (US), UETA, and eIDAS (EU). When you <strong>digitally sign documents</strong> or <strong>sign files online</strong> with MyDigitSign, the resulting signature is legally enforceable for most business, financial, and personal agreements worldwide.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>How can I create a digital signature or document digital signature free?</h3>
                <p>
                  You can <strong>create a digital signature online free</strong> with MyDigitSign by drawing with a touchscreen or mouse, typing your name with cursive fonts, or uploading a PNG image of your physical signature. Our tool supports both basic <strong>draw electronic signature</strong> and full cryptographic <strong>document digital signature</strong> (with a self-generated certificate).
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Is there any file upload limit or format restriction?</h3>
                <p>
                  MyDigitSign supports PDF, PNG, JPG, and JPEG files up to 10MB. You can <strong>sign documents online</strong> and <strong>sign files online</strong> entirely client-side — no network transfer or remote processing involved.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Is DocuSign legally binding and how does MyDigitSign compare?</h3>
                <p>
                  Yes, DocuSign is legally binding. However, it requires cloud uploads and paid plans. MyDigitSign is a 100% free alternative — <strong>document sign free</strong>, no server uploads, and fully private. Your <strong>signing document online</strong> experience stays entirely on your device.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
