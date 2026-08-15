import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Waiver Online Free — E-Sign Release Forms | MyDigitSign',
  description: 'Sign liability waivers and release forms online for free. Secure electronic signature tool for events, gyms, and activity waivers.',
  keywords: ["sign waiver online", "electronic signature liability waiver", "sign release form online free", "e-sign waiver", "gym waiver signature"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-waiver-online',
  },
  openGraph: {
    title: 'Sign Waiver Online Free — E-Sign Release Forms | MyDigitSign',
    description: 'Sign liability waivers and release forms online for free. Secure electronic signature tool for events, gyms, and activity waivers.',
    url: 'https://mydigitsign.com/tools/sign-waiver-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Waiver Online', url: '/tools/sign-waiver-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Waiver Online for Free',
  description: 'Apply a legally binding electronic signature to your waiver securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload your company seal. Click Adopt to save your mark.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Upload Your Document',
      text: 'Drag and drop your waiver PDF. It is processed entirely locally for maximum privacy.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the signature block, drag your signature to the line, and add optional text or dates.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to the requesting party instantly.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Waiver Signer',
  description: 'Sign liability waivers and release forms online for free. Secure electronic signature tool for events, gyms, and activity waivers.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Are electronic signatures on waivers legally binding?",
    answer: "Yes, electronic signatures on liability waivers and release forms are fully enforceable and legally binding under ESIGN and UETA regulations."
  },
  {
    question: "Can I add a date to the waiver?",
    answer: "Yes, our tool allows you to add text and date fields to the document alongside your electronic signature."
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
            Sign Liability Waivers <span className={styles.seoHeroGradient}>Instantly</span>
          </h1>
          <p className={styles.seoHeroDesc} dangerouslySetInnerHTML={{ __html: 'Participating in an event or joining a gym? Upload your <strong>liability waiver or release form</strong> and sign it electronically for free. Complete your paperwork before you even arrive.' }} />
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
        titleOverride="Sign Your <span>Waiver</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload your PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Waiver in 4 Steps
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
              <p>Drop your <strong>waiver</strong> into the secure browser workspace.</p>
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
            <h2 className={styles.seoArticleTitle}>The Convenient Way to Sign Waivers and Release Forms</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Whether you are signing up for a marathon, joining a fitness center, or renting equipment, you will likely need to sign a liability waiver. You can <strong>sign waiver online</strong> to skip the line and handle the paperwork from your device. All powered by our <a href="/tools/sign-pdf-online" style="color:var(--color-primary);text-decoration:underline;">core PDF signer technology</a>.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Electronic signatures on waivers are legally enforceable and widely accepted by businesses and event organizers to mitigate liability and confirm participant consent. If you need to generate a digital certificate for it, check out our guide on <a href="/blog/create-digital-signature-online-free" style="color:var(--color-primary);text-decoration:underline;">creating digital signatures online</a>.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Simply upload the PDF waiver, add your signature and the current date, and download the signed copy to email back to the organizer. It’s fast, free, and works entirely in your browser.' }} />
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Use Client-Side Signing?
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Unlike other free tools that upload your sensitive documents to remote servers to apply the signature, MyDigitSign uses WebAssembly and advanced canvas rendering to process your <strong>waiver</strong> locally on your machine. This guarantees that your confidential data cannot be intercepted or stored by third parties.
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
