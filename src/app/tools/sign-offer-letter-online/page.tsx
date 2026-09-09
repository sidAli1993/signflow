import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Lock, FileCheck, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Offer Letter Online Free — Accept Job Offer | MyDigitSign',
  description: 'Accept your new job instantly. Sign your employment offer letter online for free. Learn the difference between an offer letter and an employment contract, and what to negotiate before signing.',
  keywords: ["sign offer letter online", "accept job offer online", "sign job offer free", "electronic signature offer letter", "offer letter vs employment contract", "negotiate offer letter"],
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
    question: "What is the difference between an offer letter and an employment contract?",
    answer: "An offer letter is a shorter, informal document summarizing key terms (salary, start date, job title, and sometimes benefits). An employment contract is a comprehensive, legally binding agreement covering duties, performance standards, IP assignment, non-competes, and termination procedures. Always request the full employment contract before your start date if you only received an offer letter."
  },
  {
    question: "Do companies accept an electronically signed offer letter?",
    answer: "Yes, practically all companies and HR departments accept ESIGN-compliant digital signatures for offer letters and onboarding documents. Remote hiring has made digital signatures the universal standard."
  },
  {
    question: "What should I negotiate before signing an offer letter?",
    answer: "Key negotiation points include: base salary, signing bonus, annual bonus target, equity/stock options, start date, vacation days, remote work policy, and whether relocation assistance is offered. Once you sign, it is much harder to renegotiate these terms."
  },
  {
    question: "Is it safe to upload a document containing my salary to sign it?",
    answer: "With MyDigitSign, yes. Our tool processes the PDF locally on your device. We do not upload your offer letter to any external server, ensuring your compensation details remain strictly confidential."
  },
  {
    question: "Can a company rescind an offer letter after I sign?",
    answer: "In most US states, offer letters are not binding contracts and can technically be rescinded. However, if you relied on the offer (e.g., resigned from your current job), you may have a wrongful rescission claim. This is why getting a formal employment contract as early as possible matters."
  },
  {
    question: "What if I need to write in a different start date?",
    answer: "Use our Text Tool to type your agreed-upon start date directly onto the PDF before signing. This is completely legitimate and ensures the document reflects your actual agreement with the employer."
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
            <h2 className={styles.seoArticleTitle}>Offer Letter 101: What It Is, What It Is Not, and What to Do Before You Sign</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Receiving an offer letter is one of the most exciting moments in a job search. But before you rush to <strong>sign offer letter online</strong> and send it back, it is worth spending 15 minutes understanding exactly what you are agreeing to — and what you still have room to negotiate. Many candidates leave significant money and benefits on the table simply because they did not ask.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Offer Letter vs. Employment Contract: A Critical Distinction
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many people use these terms interchangeably, but they are legally different documents with very different implications.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              An <strong>offer letter</strong> is typically a brief, informal summary of the proposed employment terms — your job title, starting salary, start date, and sometimes reporting structure and basic benefits. In most US states, offer letters do not create a binding employment contract. They are invitations to join the company under the stated terms, but they do not guarantee employment duration or define your specific job duties in detail.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              An <strong>employment contract</strong>, on the other hand, is a comprehensive legal document that outlines your specific duties, performance standards, intellectual property assignments, non-compete or non-solicitation clauses, termination procedures, severance entitlements, and dispute resolution methods. If you receive only an offer letter, always ask HR when you will receive the full employment contract — ideally before your start date.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              What You Should Negotiate Before Signing
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Once you sign an offer letter, you lose most of your negotiating leverage. Here are the key terms worth reviewing — and potentially pushing back on — before you execute the document:
            </p>
            <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {[
                { item: 'Base Salary', detail: 'Always negotiate salary before signing. Research the market rate for your role using tools like LinkedIn Salary, Glassdoor, and Levels.fyi (for tech roles). Most employers expect negotiation and have built room into their offer.' },
                { item: 'Signing Bonus', detail: 'If you are leaving unvested equity or a mid-year bonus at your current employer, a signing bonus can compensate you for that lost value. This is far easier to negotiate pre-signing than post.' },
                { item: 'Start Date', detail: 'If you need more time to give proper notice or handle a personal commitment, negotiate your start date now. You can use our Text Tool to write in your agreed start date before signing the offer.' },
                { item: 'Vacation and PTO', detail: 'Many companies have flexibility in initial PTO allocations, especially for senior hires. Ask whether you can carry forward existing tenure-based vacation days.' },
                { item: 'Remote Work Policy', detail: 'If hybrid or remote work matters to you, get it in writing before signing. Verbal assurances from a hiring manager carry no legal weight once you are in the role.' },
                { item: 'Equity and Vesting Schedule', detail: 'If the offer includes stock options or RSUs, understand the vesting schedule (typically 4 years with a 1-year cliff), the strike price, the current 409A valuation, and the preference stack.' },
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem 1rem', background: 'rgba(79,70,229,0.04)', borderRadius: '8px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <CheckCircle size={16} style={{ color: '#4f46e5', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{point.item}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{point.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Verbal Offer vs. Written Offer Letter
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A verbal job offer is not legally enforceable in most US states. While it is exciting to hear &quot;we want to hire you&quot; on a phone call, you should never resign from your current job or turn down other offers based on a verbal commitment alone. Always wait for the written offer letter to arrive before making any moves.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If a company is slow to send the written offer, a polite email following up is entirely appropriate: &quot;I am very excited about this opportunity and looking forward to receiving the written offer so I can review and sign it. Could you let me know when I can expect it?&quot;
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Can a Company Rescind an Offer After You Sign?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Unfortunately, yes — in most US states, employment is &quot;at-will,&quot; which means even a signed offer letter does not guarantee your employment will begin. Companies can and do rescind offers due to budget freezes, failed background checks, or business changes. However, if you can prove you suffered financial harm by relying on the offer (for example, you resigned from a stable job), you may have a <em>promissory estoppel</em> claim worth discussing with an employment attorney.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Signing Your Offer Locally Protects Your Salary Privacy
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Your offer letter is among the most sensitive personal documents you will ever handle — it contains your exact compensation, equity structure, and future earning potential. Uploading it to a standard cloud-based PDF editor introduces unnecessary risk: those platforms store documents on remote servers and may retain copies indefinitely. MyDigitSign processes your offer letter entirely within your browser&apos;s local memory. Your compensation details, bonus structure, and equity terms are never transmitted to our servers — they stay strictly between you and your new employer.
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
