import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Offer Letter Online Free — Accept Job Offer | MyDigitSign',
  description: 'Accept your new job instantly. Sign your employment offer letter online for free and send it back to HR. Secure, ESIGN compliant, and private.',
  keywords: ["sign offer letter online", "accept job offer online", "sign job offer free", "electronic signature offer letter", "sign employment offer online"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-offer-letter-online',
  },
  openGraph: {
    title: 'Sign Offer Letter Online Free — Accept Job Offer | MyDigitSign',
    description: 'Accept your new job instantly. Sign your employment offer letter online for free and send it back to HR. Secure, ESIGN compliant, and private.',
    url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Offer Letter', url: '/tools/sign-offer-letter-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign and Accept an Offer Letter Online',
  description: 'Apply your electronic signature to your new job offer letter securely and accept the position.',
  url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
  steps: [
    {
      name: 'Create Your Professional Signature',
      text: 'Choose a cursive font to type your name, or draw your handwritten signature to create a professional impression.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
    {
      name: 'Load the Offer Letter',
      text: 'Drag and drop the PDF offer letter from HR into the browser. It processes locally, keeping your salary details completely private.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
    {
      name: 'Sign and Date to Accept',
      text: 'Place your signature on the Candidate Acceptance line. Use the text tool to add the current date and your confirmed start date.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
    {
      name: 'Download and Return',
      text: 'Click Download to save the signed acceptance letter. Email it promptly back to the recruiter or hiring manager to secure the role.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Offer Letter Signer',
  description: 'Accept your new job instantly. Sign your employment offer letter online securely.',
  url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Do companies accept an electronically signed offer letter?",
    answer: "Yes, practically all companies and HR departments accept ESIGN-compliant digital signatures for offer letters and onboarding documents."
  },
  {
    question: "Is it safe to upload a document containing my salary?",
    answer: "With MyDigitSign, yes. Our tool processes the PDF locally on your device. We do not upload your offer letter to any external server, ensuring your compensation details remain confidential."
  },
  {
    question: "What if I need to counter-offer or change my start date?",
    answer: "If you need to counter, do not sign the document yet. Email your recruiter first. If you just need to write in a different start date, you can use our Text tool to type it directly onto the PDF before signing."
  },
  {
    question: "Can I sign the offer letter on my phone?",
    answer: "Absolutely. You can open MyDigitSign on your smartphone, upload the PDF, draw your signature with your finger, and email it back to HR immediately."
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
            <span>Fast · Professional · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Offer Letters <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Congratulations on the new job! Accept your role instantly. <strong>Sign your employment offer letter</strong> online and email it back to HR in seconds. Your compensation data remains entirely private on your device.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Salary Data Kept Private</span></li>
            <li><Lock size={14} /><span>Zero Server Processing</span></li>
            <li><FileCheck size={14} /><span>HR Compliant</span></li>
            <li><Users size={14} /><span>Free — No Account Needed</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Accept Your <span>Job Offer</span>"
        descriptionOverride="Create a professional signature. Once adopted, upload your offer letter."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign and Accept Your Job Offer
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Generate Signature</h3>
              <p>Type your name in a professional cursive style or draw it on-screen.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Offer Letter</h3>
              <p>Drop your <strong>offer letter PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Accept Terms</h3>
              <p>Place your signature on the Candidate line and fill in the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export & Email</h3>
              <p>Download the finalized document and attach it in your reply to HR.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Secure the Role: Professionally Signing Your Offer Letter</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Receiving an offer letter is an exciting moment, but the job isn&apos;t officially yours until the ink is dry. When you need to respond to a recruiter quickly, you can <strong>sign offer letter online</strong> without waiting to find a printer or scanner.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              In today&apos;s remote and fast-paced hiring environment, HR departments expect a rapid turnaround. Returning a professionally signed, digital PDF shows that you are responsive and tech-savvy. You can choose to type your name in an elegant cursive font or draw your actual signature to make it feel more personal.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Importantly, offer letters contain highly sensitive information regarding your base salary, bonus structure, equity grants, and start date. Uploading this document to a standard online PDF editor poses a significant privacy risk. MyDigitSign ensures your compensation details remain confidential by executing the signature merging entirely on your local machine.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Confirming Your Start Date
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many offer letters include a blank field asking you to explicitly write in your anticipated start date alongside your signature. You can easily accomplish this using our suite of annotation tools. Simply select the Text Tool, type in your agreed-upon start date, and place it on the corresponding line before downloading the accepted offer.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Career Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-employment-contract-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Employment Contract <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-nda-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign NDA Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Type Professional Signature <ArrowRight size={14}/></Link></li>
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
