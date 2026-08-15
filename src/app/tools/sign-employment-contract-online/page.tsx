import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Employment Contract Online Free — HR Signatures | MyDigitSign',
  description: 'Sign employment contracts and HR agreements online for free. Secure, browser-based electronic signatures for new hires and employers.',
  keywords: ["sign employment contract online", "electronic signature employment agreement", "HR contract signing", "sign offer letter online", "digital signature for employees"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  },
  openGraph: {
    title: 'Sign Employment Contract Online Free — HR Signatures | MyDigitSign',
    description: 'Sign employment contracts and HR agreements online for free. Secure, browser-based electronic signatures for new hires and employers.',
    url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Employment Contract Online', url: '/tools/sign-employment-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Employment Contract Online for Free',
  description: 'Apply a legally binding electronic signature to your employment contract securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload your company seal. Click Adopt to save your mark.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Upload Your Document',
      text: 'Drag and drop your employment contract PDF. It is processed entirely locally for maximum privacy.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the signature block, drag your signature to the line, and add optional text or dates.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to the requesting party instantly.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Employment Contract Signer',
  description: 'Sign employment contracts and HR agreements online for free. Secure, browser-based electronic signatures for new hires and employers.',
  url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Do HR departments accept electronic signatures?",
    answer: "Yes. The vast majority of modern HR departments use and accept electronic signatures for all onboarding documents and employment contracts."
  },
  {
    question: "Is it safe to upload my employment contract?",
    answer: "With MyDigitSign, your file is never actually &apos;uploaded&apos; to the cloud. All processing happens in your device&apos;s memory, guaranteeing complete privacy for your sensitive HR documents."
  },
  {
    question: "Do I need to create an account to sign this document?",
    answer: "No. MyDigitSign is completely free and requires no account registration or credit card to sign your documents."
  },
  {
    question: "Is a drawn signature better than a typed one?",
    answer: "Both are legally valid electronic signatures. Drawing your signature mimics your natural handwriting, while typing uses cursive typography. Choose whichever you prefer."
  }
];

const faqSchema = getFAQSchema(faqItems);

export default function SignDocumentTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero}>
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Employment Contracts <span className={styles.seoHeroGradient}>Securely</span>
          </h1>
          <p className={styles.seoHeroDesc} dangerouslySetInnerHTML={{ __html: 'Onboarding a new hire or accepting a new job? Upload your <strong>employment contract</strong> and sign it electronically for free. Keep your compensation details private with our 100% client-side signing engine.' }} />
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>In-Browser Processing</span></li>
            <li><Lock size={14} /><span>Complete Privacy</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Signup Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Employment Contract</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload your PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Employment Contract in 4 Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type or draw your signature in the creator panel and adopt it.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Upload PDF</h3>
              <p>Drop your <strong>employment contract</strong> into the secure browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Place on Line</h3>
              <p>Drag the signature, add dates, and position them on the document.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Download</h3>
              <p>Save the signed file to your device instantly.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>How to Securely Sign Your Employment Contract Online</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'When you receive a new job offer, the final step is executing the employment contract. By choosing to <strong>sign employment contract online</strong>, you expedite the HR onboarding process and secure your start date without dealing with printers.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Human Resources departments worldwide accept digital signatures for employment agreements, non-competes, and tax forms. Electronic signatures comply with strict labor and corporate governance laws.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Employment agreements contain highly sensitive data, including salary, benefits, and personal identification. MyDigitSign protects this data by processing the entire PDF locally in your web browser. No external server ever sees your contract.' }} />
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Use Client-Side Signing?
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Unlike other free tools that upload your sensitive documents to remote servers to apply the signature, MyDigitSign uses WebAssembly and advanced canvas rendering to process your <strong>employment contract</strong> locally on your machine. This guarantees that your confidential data cannot be intercepted or stored by third parties.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              {faqItems.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Tools & Guides</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign PDF Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Type Signature Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/draw-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Draw Signature Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/electronic-signature-for-small-business" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Small Business E-Signatures <ArrowRight size={14}/></Link></li>
            </ul>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Footer />
    </div>
  );
}
