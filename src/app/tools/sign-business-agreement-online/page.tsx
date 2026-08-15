import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Business Agreement Online Free — Electronic Signature | MyDigitSign',
  description:
    'Sign business agreements, partnership contracts, and vendor agreements online for free. Upload your contract PDF, add your electronic signature securely, and download.',
  keywords: [
    'sign business agreement online',
    'sign business contract online free',
    'electronic signature business agreement',
    'esign partnership agreement',
    'sign vendor contract online',
    'business document electronic signature',
    'sign corporate agreement online',
    'esign commercial contract',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  },
  openGraph: {
    title: 'Sign Business Agreement Online Free | MyDigitSign',
    description: 'Sign your business agreements and vendor contracts online for free. 100% private.',
    url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Business Agreement' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Business Agreement Online Free | MyDigitSign',
    description: 'Sign business contracts securely. 100% browser-based privacy.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Business Agreement Online', url: '/tools/sign-business-agreement-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Business Agreement Online for Free',
  description: 'Sign business contracts and corporate agreements electronically in your browser.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload your company seal or signature scan. Click Adopt to save.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Upload Your Contract PDF',
      text: 'Drag and drop your business agreement. Processed securely in your browser to protect confidential corporate data.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the authorized signatory block, drag your signature to the line, and resize.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to your partner or vendor.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Business Agreement Signing Tool',
  description: 'Sign business agreements and commercial contracts online for free.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignBusinessAgreementOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Business Agreement Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Business Agreements <span className={styles.seoHeroGradient}>Securely</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to finalize a <strong>business agreement, partnership contract, or vendor document</strong>? Upload your PDF, apply your authorized electronic signature or company seal, and send it back in seconds. Protect your corporate privacy with our 100% client-side signing technology.
          </p>
        </div>
      </section>

      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script id="software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Business Agreement</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the contract PDF."
      />
      
      <div style={{ marginTop: '3rem', padding: '1rem', maxWidth: '900px', margin: '3rem auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
            Why Businesses Choose Client-Side Signing
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Business agreements contain confidential financial terms, intellectual property clauses, and trade secrets. Uploading these documents to cloud-based signature platforms exposes them to third-party server risks. MyDigitSign processes your documents locally in your browser — ensuring maximum corporate privacy while providing ESIGN-compliant, legally binding signatures.
          </p>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-nda-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign NDA Online →</a></li>
              <li><a href="/tools/sign-employment-contract-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Employment Contract →</a></li>
              <li><a href="/blog/electronic-signature-for-small-business" style={{ color: 'var(--color-primary, #4f46e5)' }}>E-Signatures for Small Business →</a></li>
            </ul>
          </div>
      </div>
      <Footer />
    </div>
  );
}
