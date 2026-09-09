import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Lock, FileCheck, Users, Star, ArrowRight, AlertTriangle } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Employment Contract Online Free — HR Document Signer | MyDigitSign',
  description: 'Sign employment contracts online securely. Know the red flags in employment contracts before you sign: non-compete traps, IP grab clauses, at-will vs fixed-term, and probation penalties.',
  keywords: ["sign employment contract online", "electronic signature employment", "sign work contract online", "employment contract red flags", "non-compete clause warning", "at-will employment contract"],
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
    question: "What is the biggest red flag in an employment contract?",
    answer: "The most dangerous red flag is an overly broad IP assignment clause that grants your employer ownership of all inventions you create, even outside working hours and unrelated to your job. California Labor Code §2870 provides some protection, but workers in most other states have limited recourse unless they negotiate specific exclusions before signing."
  },
  {
    question: "What is the difference between at-will employment and a fixed-term contract?",
    answer: "At-will employment means either party can end the relationship at any time for any legal reason, which is the default in most US states. A fixed-term contract specifies a guaranteed duration (e.g., 12 months), which provides more job security but may include financial penalties if you resign early."
  },
  {
    question: "Should I be worried about a non-compete clause in my employment contract?",
    answer: "Yes, non-competes deserve careful scrutiny. They vary wildly in enforceability by state: California, North Dakota, and Oklahoma largely ban them. Even in states that enforce them, courts typically require reasonable geographic scope and duration. Always ask an employment attorney to review non-compete language before signing."
  },
  {
    question: "What happens during a probationary period?",
    answer: "A probationary period (typically 30–90 days) gives the employer the right to terminate you with less notice and sometimes no severance. After the probation period ends, your full contractual protections apply. Read carefully whether the contract specifies what happens to unvested benefits during probation."
  },
  {
    question: "Is an employment contract the same as an offer letter?",
    answer: "No. An offer letter is a brief summary of key terms (salary, title, start date). An employment contract is a comprehensive legal document covering duties, IP rights, non-competes, termination procedures, and severance. If you only received an offer letter, request the full contract before your start date."
  },
  {
    question: "Can I negotiate employment contract terms after signing the offer letter?",
    answer: "You technically can, but your leverage drops significantly once you have signed the offer. The time to negotiate is before any signature. Review the full employment contract and raise concerns with HR or legal counsel before committing."
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
            <h2 className={styles.seoArticleTitle}>Employment Contract Red Flags: What to Watch for Before You Sign</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              An employment contract is one of the most consequential legal documents you will ever sign. Unlike a quick vendor agreement, this document governs how you spend 40+ hours a week, what intellectual property you create, and under what circumstances you can leave. Most people read it once, skim it, and sign within hours. That is a mistake. Before you <strong>sign employment contract online</strong>, read it clause by clause — and watch for these serious red flags.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Red Flag #1: The Overbroad IP Assignment Clause
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The intellectual property (IP) assignment clause tells you who owns everything you create during your employment. A fair IP clause grants your employer ownership of inventions you develop <em>using company resources</em> or <em>related to your job duties</em>. A predatory IP clause claims ownership of <em>everything you create while employed</em> — including your weekend side projects, personal software tools, and creative work that has nothing to do with the company.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              California Labor Code §2870 protects California employees from such overreach, but workers in most other states have limited statutory protection. If your contract contains an IP clause without a &quot;personal projects&quot; carve-out, negotiate one before signing. A competent employer will agree to it.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Red Flag #2: Non-Compete Clauses That Will Follow You
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A non-compete clause prevents you from working for competing companies for a defined period after leaving. These range from reasonable (12 months, senior executive role, same industry, specific geography) to extremely restrictive (2+ years, any company in the broader field, nationwide scope).
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { state: 'California', policy: 'Non-competes are largely unenforceable. Courts routinely void them regardless of what the contract says.' },
                { state: 'North Dakota & Oklahoma', policy: 'Non-competes are broadly banned by statute.' },
                { state: 'Minnesota', policy: 'As of 2023, new non-compete agreements are largely prohibited.' },
                { state: 'Most other US states', policy: 'Courts will enforce non-competes if they are reasonable in duration (typically under 2 years), geographic scope, and industry definition.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.85rem 1rem', background: 'rgba(239,68,68,0.04)', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.12)' }}>
                  <AlertTriangle size={16} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text)', fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>{item.state}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.policy}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Before signing, ask an employment attorney to review the non-compete. If you are in a state where it is likely enforceable, try to negotiate a narrower definition of &quot;competing business,&quot; a shorter duration, or a geographic carve-out for your local area.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              At-Will vs. Fixed-Term Employment: What Each Means for You
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              <strong>At-will employment</strong> is the default in almost every US state: either party can terminate the employment relationship at any time, for any legal reason, with no obligation to provide cause. Your employer can let you go on your first day for no reason at all (outside of protected characteristics). This flexibility works both ways — you can also leave at any time.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A <strong>fixed-term contract</strong> guarantees employment for a specific period (e.g., 12 or 24 months) and typically requires &quot;cause&quot; to terminate early. This provides significantly more security. However, if <em>you</em> resign before the term ends, you may owe a penalty or forfeit a retention bonus. Read the early termination clause very carefully before executing a fixed-term agreement.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Probationary Periods: What They Actually Mean
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Most employment contracts include a probationary period of 30 to 90 days during which the employer has streamlined termination rights — typically requiring shorter notice and no severance. This is standard. What to watch for: contracts that extend the probationary period indefinitely, fail to specify what happens to unvested benefits during probation, or deny you the right to appeal a termination decision made during this window.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Local Signing Keeps Your Employment Terms Confidential
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Employment contracts are deeply personal documents: they contain your exact salary, bonus structure, equity grants, and sometimes home address and background check authorizations. Uploading this to a cloud-based signing service means your compensation data resides on a third party&apos;s server. MyDigitSign processes your employment contract entirely inside your browser. Not a byte of your personal employment data touches our infrastructure — giving you a level of privacy that cloud platforms structurally cannot offer.
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
