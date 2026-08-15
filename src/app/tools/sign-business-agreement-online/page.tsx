import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Business Agreement Online Free — Commercial Contracts | MyDigitSign',
  description: 'Sign business agreements, partnership contracts, and vendor agreements online for free. Secure, private electronic signatures for commercial use.',
  keywords: ["sign business agreement online", "electronic signature commercial contract", "esign partnership agreement", "sign vendor contract online free"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  },
  openGraph: {
    title: 'Sign Business Agreement Online Free — Commercial Contracts | MyDigitSign',
    description: 'Sign business agreements, partnership contracts, and vendor agreements online for free. Secure, private electronic signatures for commercial use.',
    url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Business Agreement Online', url: '/tools/sign-business-agreement-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Business Agreement Online for Free',
  description: 'Apply a legally binding electronic signature to your business agreement securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload your company seal. Click Adopt to save your mark.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Upload Your Document',
      text: 'Drag and drop your business agreement PDF. It is processed entirely locally for maximum privacy.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the signature block, drag your signature to the line, and add optional text or dates.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to the requesting party instantly.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Business Agreement Signer',
  description: 'Sign business agreements, partnership contracts, and vendor agreements online for free. Secure, private electronic signatures for commercial use.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Are electronic signatures legally binding for B2B contracts?",
    answer: "Yes, electronic signatures are the standard for B2B commercial contracts and are legally binding under the ESIGN Act and global e-commerce laws."
  },
  {
    question: "Why is client-side signing better for business agreements?",
    answer: "Client-side signing means your PDF is processed locally on your machine. This prevents your confidential contracts from ever being stored on or intercepted by third-party servers."
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
            Sign Business Agreements <span className={styles.seoHeroGradient}>Securely</span>
          </h1>
          <p className={styles.seoHeroDesc} dangerouslySetInnerHTML={{ __html: 'Finalizing a B2B deal? Upload your <strong>partnership contract, vendor agreement, or corporate document</strong>. Apply an authorized electronic signature securely and privately.' }} />
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
        titleOverride="Sign Your <span>Business Agreement</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload your PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Business Agreement in 4 Steps
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
              <p>Drop your <strong>business agreement</strong> into the secure browser workspace.</p>
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
            <h2 className={styles.seoArticleTitle}>Executing Commercial Business Agreements Electronically</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'In the corporate world, speed and security are paramount. When executives and partners need to <strong>sign business agreement online</strong>, they rely on electronic signatures to execute commercial contracts without delays.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'B2B contracts, vendor agreements, and partnership formations frequently contain proprietary business logic, trade secrets, and pricing models. Uploading these to cloud signature platforms poses a supply chain security risk. We recommend our <a href="/blog/free-digital-signature-certificate" style="color:var(--color-primary);text-decoration:underline;">digital signature certificates</a> for top-tier security.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'MyDigitSign provides the ultimate solution for corporate privacy. The entire signing process happens within your own browser&apos;s memory, just like our <a href="/tools/sign-image-online" style="color:var(--color-primary);text-decoration:underline;">image signing tool</a>. Your confidential business agreements are never transmitted to our servers.' }} />
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Use Client-Side Signing?
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Unlike other free tools that upload your sensitive documents to remote servers to apply the signature, MyDigitSign uses WebAssembly and advanced canvas rendering to process your <strong>business agreement</strong> locally on your machine. This guarantees that your confidential data cannot be intercepted or stored by third parties.
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
