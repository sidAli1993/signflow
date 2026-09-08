import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Employment Contract Online Free — HR Document Signer | MyDigitSign',
  description: 'Sign your new employment contract, non-compete, or onboarding forms online for free. Secure electronic signatures tailored for HR compliance.',
  keywords: ["sign employment contract online", "sign job contract free", "hr document signature", "onboarding signature tool", "sign non-compete online"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  },
  openGraph: {
    title: 'Sign Employment Contract Online Free — HR Document Signer | MyDigitSign',
    description: 'Sign your new employment contract, non-compete, or onboarding forms online for free. Secure electronic signatures tailored for HR compliance.',
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
  { name: 'Sign Employment Contract', url: '/tools/sign-employment-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign an Employment Contract Online',
  description: 'Officially accept your new job by securely signing your employment contract or onboarding packet in your browser.',
  url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  steps: [
    {
      name: 'Create Your Professional Signature',
      text: 'Type your name using a professional cursive font, or draw your handwritten signature on your screen.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Upload the HR Contract',
      text: 'Drag your employment agreement PDF into the application. It processes locally to keep your salary and personal data private.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Accept the Terms',
      text: 'Place your signature on the employee line. Use the text tool to fill in the acceptance date or your start date if requested.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Download and Email HR',
      text: 'Export the finalized PDF. You can now securely email it back to your recruiter or hiring manager.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign HR Contract Tool',
  description: 'Sign your new employment contract, non-compete, or onboarding forms online for free.',
  url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Do employers accept electronic signatures for hiring?",
    answer: "Yes, nearly all modern HR departments use electronic signatures for offer letters, employment contracts, and remote onboarding packets."
  },
  {
    question: "Is this secure enough for a contract containing my SSN or salary?",
    answer: "Absolutely. Our platform operates entirely client-side. Your contract is processed in your computer's RAM, not on our servers, ensuring your sensitive HR data is never intercepted."
  },
  {
    question: "Can I also fill out W-4s or I-9 forms here?",
    answer: "Yes. You can use our Text tool to type your personal details into federal tax forms, then apply your signature before downloading."
  },
  {
    question: "What if the contract requires me to initial every page?",
    answer: "You can create a separate 'Initial' signature in our tool, and simply drag and drop your initials onto the bottom corner of every page in the document."
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
            <span>Secure Onboarding · Client-Side Privacy</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Employment Contracts <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Accepting a new job? Securely <strong>sign your employment contract, non-compete agreement, or HR onboarding packet</strong>. Your sensitive compensation data is processed entirely on your local device.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Salary Data Kept Private</span></li>
            <li><Lock size={14} /><span>No Server Processing</span></li>
            <li><FileCheck size={14} /><span>HR Compliant Signatures</span></li>
            <li><Users size={14} /><span>100% Free Forever</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Employment Contract</span>"
        descriptionOverride="Create a professional signature. Once adopted, upload your HR PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Job Contract Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Generate Signature</h3>
              <p>Type your name in a professional cursive style or draw it on-screen.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Contract</h3>
              <p>Drop your <strong>employment agreement PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Accept Terms</h3>
              <p>Place your signature on the Employee line and fill in the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export & Email</h3>
              <p>Download the finalized document and attach it in your reply to the hiring manager.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>The Fast & Secure Way to Handle HR Onboarding Documents</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Congratulations on the new job! Before you can start, you usually need to navigate a stack of HR paperwork. Whether you need to <strong>sign an employment contract online</strong>, finalize a non-disclosure agreement (NDA), or sign a restrictive covenant (non-compete), doing it digitally is the fastest way to get to your start date.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Employment contracts are highly confidential. They contain your agreed-upon salary, bonuses, personal address, and sometimes Social Security Numbers (if attached to tax forms like the W-4). Because of this, uploading these packets to typical online PDF editors presents a massive privacy risk.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              MyDigitSign protects your onboarding privacy by processing the document strictly on your device. The rendering, text placement, and cryptographic signature merging all happen in your browser&apos;s local memory. The HR department gets a professionally signed, ESIGN-compliant document, and you get the peace of mind knowing your data wasn&apos;t harvested.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Handling Initials on Every Page
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Some strict corporate contracts require you to initial the bottom right corner of every single page to prove you read the entire document. With our tool, you can create a secondary &quot;Initial&quot; signature profile, and quickly stamp it across all pages before placing your full signature on the final acceptance page.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related HR Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-offer-letter-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Offer Letter <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-nda-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign NDA Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Generate Professional Signature <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/electronic-signature-for-small-business" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Small Business HR Signatures <ArrowRight size={14}/></Link></li>
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
