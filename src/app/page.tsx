import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from './HomeClient';
import styles from './page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free PDF Signer (100% Private, No Uploads) — MyDigitSign',
  description:
    'Sign PDFs & documents online for free. 100% browser-based & private—your files never leave your device. Secure digit sign with no server uploads, no signup, no limits.',
  keywords: [
    'edit and sign pdf',
    'sign on document online',
    'pdf signature free',
    'digit sign',
    'sign a document online',
    'free online signature',
    'create digital signature pdf',
    'legal electronic signature',
    'free digital signature certificate',
    'digital signature tool',
    'document signer',
    'create pdf signature',
    'digital sign tool',
    'online signing',
    'digital signature pdf download',
    'e signature pdf online',
    'free pdf e signature',
    'sign documents online free',
    'sign online signature',
    'online document signer',
    'free signing documents online',
    'free online document signing',
    'sign pdf documents free',
    'sign document online free',
    'free e sign',
    'online pdf editor signature',
    'digitally sign pdf online',
    'e sign online',
    'sign pdf free online',
    'pdf signer online',
    'free sign documents online',
    'sign digitally online',
    'signature pdf online',
    'is docusign legally binding',
    'pdf online sign',
    'sign pdf online free',
    'do e signatures hold up in court',
    'free electronic signature pdf',
    'pdf signature online free',
    'pdf signer free',
    'legally binding electronic signature',
    'create digital signature online free',
    'free pdf signer',
    'digital signature maker',
    'electronic signature free',
    'draw signature online',
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
    title: 'Free PDF Signer (100% Private, No Uploads) — MyDigitSign',
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
    title: 'Free PDF Signer (100% Private, No Uploads) — MyDigitSign',
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
            Free Online PDF Signer &amp;{' '}
            <span className={styles.seoHeroGradient}>Digit Sign Tool</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Create a secure <strong>digit sign</strong> or place an electronic <strong>pdf signature free</strong> on any document — directly in your browser. If you want to <strong>sign a document online</strong>, you can draw with your mouse, type your name in cursive, or upload an existing signature image. This <strong>online pdf editor signature</strong> tool also supports uploading a <strong>free digital signature certificate</strong> to cryptographically sign PDFs locally, ensuring your confidential files <strong>never leave your device</strong>.
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
              <li>✅ <strong>Free digital signature certificate</strong> — generate a secure digit sign instantly</li>
              <li>✅ <strong>PDF signature free</strong> — use our free PDF signer online without paywalls or credit cards</li>
              <li>✅ <strong>Edit and sign pdf</strong> — 100% client-side without server uploads</li>
              <li>✅ <strong>Online PDF editor signature</strong> — drag, resize, and place signature overlays on any page</li>
              <li>✅ <strong>Sign on document online</strong> — sign freelance contracts, NDAs, or tax documents quickly</li>
              <li>✅ <strong>Draw signature online</strong> — custom strokes via mouse, trackpad, or touch</li>
              <li>✅ <strong>Type signature</strong> — beautiful cursive script fonts</li>
              <li>✅ <strong>Sign PDF on mobile</strong> — fully responsive tool</li>
              <li>✅ <strong>Legally binding e-signatures</strong> — compliant with ESIGN &amp; eIDAS</li>
              <li>✅ <strong>No registration needed</strong> — open and sign in under 60 seconds</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className={styles.seoFaq}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions (FAQ)</h2>
            <div className={styles.seoFaqGrid}>
              <article className={styles.faqItem}>
                <h3>Is DocuSign legally binding and how does MyDigitSign compare?</h3>
                <p>
                  Yes, DocuSign is legally binding. However, DocuSign requires document uploads to their cloud servers and paid plans for regular use. MyDigitSign offers a 100% free alternative to create a <strong>legally binding electronic signature</strong> locally in your browser, keeping your documents fully private.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Do e-signatures hold up in court?</h3>
                <p>
                  Yes, electronic signatures are legally recognized and <strong>do e signatures hold up in court</strong> under major legislation such as the ESIGN Act and UETA in the United States, as well as the eIDAS regulations in the European Union.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>How can I create a digital signature online free?</h3>
                <p>
                  You can <strong>create a digital signature online free</strong> with MyDigitSign by drawing with a touchscreen or mouse, typing your name with cursive fonts, or uploading a PNG image of your physical signature. You can then use it for secure <strong>online document signing</strong> instantly.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Is there any file upload limit or format restriction?</h3>
                <p>
                  MyDigitSign supports standard PDF files as well as popular image files like PNG, JPG, and JPEG up to 10MB. Because the application runs entirely client-side, there is no network transfer or remote processing.
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
