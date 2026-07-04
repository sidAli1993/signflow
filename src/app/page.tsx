import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from './HomeClient';
import styles from './page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MyDigitSign — Free Online PDF Signer & Digital Signature Tool',
  description:
    'Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — your files never leave your device. No account required.',
  keywords: [
    'free pdf signer',
    'sign pdf online free',
    'online signature tool',
    'digital signature maker',
    'electronic signature free',
    'draw signature online',
    'pdf signing tool no upload',
    'sign document online',
    'e-sign pdf free',
    'browser based pdf signer',
    'create digital signature',
    'sign pdf without account',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com',
  },
  openGraph: {
    title: 'MyDigitSign — Free Online PDF Signer & Digital Signature Tool',
    description:
      'Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — your files never leave your device. No account required.',
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
    title: 'MyDigitSign — Free Online PDF Signer & Digital Signature Tool',
    description:
      'Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — no account needed.',
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
            <span className={styles.seoHeroGradient}>Digital Signature Tool</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Create a <strong>free digital signature certificate</strong> and place your electronic signature on any PDF or image — directly in your
            browser. Whether you need a quick <strong>digit sign</strong> or a full document workflow, you can draw with your mouse, type your name in a cursive font, or upload an existing
            signature image. Your documents <strong>never leave your device</strong>.
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
            The Simplest Way to Sign PDFs Online — Completely Free
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
              <li>✅ <strong>Free digital signature certificate</strong> — instantly generate securely</li>
              <li>✅ <strong>Free PDF signer</strong> — no trial, no paywall, no credit card</li>
              <li>✅ <strong>Sign PDF without uploading</strong> — client-side only</li>
              <li>✅ <strong>Draw signature online</strong> — mouse, trackpad, or touch</li>
              <li>✅ <strong>Type signature</strong> — beautiful cursive script fonts</li>
              <li>✅ <strong>Sign PDF on mobile</strong> — fully responsive tool</li>
              <li>✅ <strong>Legally binding e-signatures</strong> — compliant with ESIGN &amp; eIDAS</li>
              <li>✅ <strong>No registration needed</strong> — open and sign in under 60 seconds</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
