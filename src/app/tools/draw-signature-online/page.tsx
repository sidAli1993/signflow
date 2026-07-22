import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

import { getSoftwareAppSchema, getHowToSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
  description:
    'Draw your signature online free using your mouse, trackpad, or touch screen. Adopt, customize pen color, and download your free signature PNG instantly.',
  keywords: [
    'draw signature online',
    'draw signature free',
    'create digital signature',
    'electronic signature drawing',
    'draw my signature',
    'signature maker online',
    'sign document online'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/draw-signature-online',
  },
  openGraph: {
    title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
    description:
      'Draw your signature online free using your mouse, trackpad, or touch screen. Adopt, customize pen color, and download your free signature PNG instantly.',
    url: 'https://mydigitsign.com/tools/draw-signature-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Draw Signature Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
    description:
      'Draw your signature online free using your mouse, trackpad, or touch screen. Adopt, customize pen color, and download your free signature PNG instantly.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Draw Signature Online', url: '/tools/draw-signature-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Draw Signature Tool',
  description: 'Draw freehand electronic signatures using mouse or touch screen with instant transparent PNG download.',
  url: 'https://mydigitsign.com/tools/draw-signature-online',
});

const howToSchema = getHowToSchema({
  name: 'How to Draw a Digital Signature Online',
  description: 'Draw your electronic signature freehand using a mouse, trackpad, or smartphone touch screen.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Draw Signature',
      text: 'Use your mouse or finger to draw your signature on the interactive canvas.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Customize Ink Color',
      text: 'Select black, blue, red, or custom ink color and stroke thickness.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Download Signature Image',
      text: 'Click Download PNG to save your transparent signature image.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
  ],
});

export default function DrawSignatureTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Draw Signature Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Draw Tool · No Account · Client-Side Only</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Draw Signature Online <span className={styles.seoHeroGradient}>Free &amp; Secure</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>draw signature online</strong> free for an official agreement? Our secure, browser-based drawing board allows you to create handwritten digital signatures with smooth vector strokes using your mouse, touchscreen, or trackpad. Choose custom colors, customize layout, and download a transparent signature PNG or proceed directly to sign files privately.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% In-Browser Drawing</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Privacy Protected</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Export Transparent PNG</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Free to Draw</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Signup Needed</span></li>
          </ul>
        </div>
      </section>

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

      <HomeClient 
        initialTab="draw" 
        titleOverride="Draw Your Free <span>Digital Signature</span>" 
        descriptionOverride="Draw on the canvas using your mouse or touchscreen. Choose a pen color and click Adopt to place it on a document or download as PNG."
      />

      <section className={styles.seoExplainer} aria-label="How to draw signature online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Draw Your Signature Online in 3 Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Draw Freehand</h3>
              <p>
                Use your mouse, finger, or stylus to sketch your signature on the digital canvas above. Click the Eraser icon to clear the board and start fresh.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Choose Pen Color</h3>
              <p>
                Select from standard colors (Black, Blue, Red) to match the styling requirements of your contracts or legal documents.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Download PNG or Sign</h3>
              <p>
                Click adopt to sign a PDF document instantly, or download a transparent PNG file to use in Microsoft Word, Google Docs, or email signatures.
              </p>
            </article>
          </div>

          {/* Internal links — Phase 2 internal linking strategy */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/blog/how-to-sign-nda-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Sign an NDA Online →</a></li>
              <li><a href="/blog/create-digital-signature-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Create Digital Signature Free →</a></li>
              <li><a href="/how-it-works" style={{ color: 'var(--color-primary, #4f46e5)' }}>How It Works →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
