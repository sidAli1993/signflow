import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Type Signature Online Free — Cursive Font Signature Maker | MyDigitSign',
  description:
    'Type your name to create beautiful cursive signatures online for free. Select from multiple professional handwriting fonts and download your transparent PNG.',
  keywords: [
    'type signature online',
    'cursive signature maker',
    'cursive font signature maker',
    'signature generator',
    'type my signature',
    'type signature free',
    'signature font creator'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/type-signature-online',
  },
  openGraph: {
    title: 'Type Signature Online Free — Cursive Font Signature Maker | MyDigitSign',
    description:
      'Type your name to create beautiful cursive signatures online for free. Select from multiple professional handwriting fonts and download your transparent PNG.',
    url: 'https://mydigitsign.com/tools/type-signature-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Type Signature Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type Signature Online Free — Cursive Font Signature Maker | MyDigitSign',
    description:
      'Type your name to create beautiful cursive signatures online for free. Select from multiple professional handwriting fonts and download your transparent PNG.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

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
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Type Signature Online',
      'item': 'https://mydigitsign.com/tools/type-signature-online',
    },
  ],
};

export default function TypeSignatureTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Type Signature Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Cursive Maker · Multiple Script Fonts · Instant Export</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Type Signature Online <span className={styles.seoHeroGradient}>Free Cursive Generator</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>type signature online</strong> using professional cursive fonts? Our free handwriting generator creates transparent vector signature images instantly from your keyboard inputs. Choose from gorgeous cursive script styles (Dancing Script, Pacifico, Great Vibes, Caveat), customize colors, and download your PNG file, or adopt it to edit and sign PDFs instantly.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Multiple Cursive Fonts</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>100% Secure &amp; Private</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>High Resolution PNG Export</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Adopt to Sign PDFs</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Email Required</span></li>
          </ul>
        </div>
      </section>

      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HomeClient 
        initialTab="type" 
        titleOverride="Type Your Free <span>Digital Signature</span>" 
        descriptionOverride="Type your name below, choose a cursive signature script style, pick a color, and click Adopt to place it on a document or download as PNG."
      />

      <section className={styles.seoExplainer} aria-label="How to type cursive signature online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Generate a Cursive Type Signature
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Type Your Name</h3>
              <p>
                Enter your name in the text field above. The generator will render live previews of your digital signature across multiple script fonts.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Select Font &amp; Color</h3>
              <p>
                Choose from standard colors (Black, Blue, Red) and pick the cursive handwriting style that best matches your personal preferences.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Download or Apply</h3>
              <p>
                Click adopt to sign a contract instantly on our client-side editor, or download a transparent PNG file to insert into Word or Google Docs files.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
