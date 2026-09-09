import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Freelance Contract Online Free — For Independent Contractors | MyDigitSign',
  description: 'Sign freelance contracts online for free. Learn the 7 must-have clauses in every freelance agreement: IP ownership, kill fees, net payment terms, scope creep protection, and late fees.',
  keywords: ["sign freelance contract online", "freelance agreement signature", "contractor contract signature", "freelance contract clauses", "IP ownership freelance", "kill fee clause", "scope creep contract", "freelance contract online free"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  },
  openGraph: {
    title: 'Sign Freelance Contract Online Free — Independent Contractor | MyDigitSign',
    description: 'Sign freelance contracts, statements of work, and independent contractor agreements online. Lock in your clients with legally binding electronic signatures.',
    url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Freelance Contract', url: '/tools/sign-freelance-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Freelance Contract Online',
  description: 'Apply a legally binding electronic signature to your independent contractor agreement and lock in your new client project.',
  url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  steps: [
    {
      name: 'Create Your Freelance Signature',
      text: 'Draw your signature on the screen, or choose a professional cursive font to type your name as an independent contractor.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Upload the Statement of Work',
      text: 'Drag and drop the freelance contract or SOW PDF provided by your client into the browser window.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Execute the Contract',
      text: 'Drag your signature onto the contractor line. Fill in the effective date using the text tool to finalize the agreement.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Send to Client',
      text: 'Download the signed contract and email it back to your client to begin the project work securely.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Freelance Signer',
  description: 'Sign freelance contracts, statements of work, and independent contractor agreements online for free.',
  url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Who owns the work product after I complete a freelance project?",
    answer: "It depends entirely on what your contract says. Under US copyright law, the freelancer owns the work they create by default unless the contract contains a valid 'work for hire' clause (for specific categories like commissioned works) or an IP assignment clause explicitly transferring ownership to the client. If your contract is silent on IP, you retain ownership even after delivering the work."
  },
  {
    question: "What is a kill fee and should my contract have one?",
    answer: "A kill fee is a contractual provision requiring the client to pay a percentage of the project fee if they cancel mid-project without cause. Typical kill fees range from 25% to 50% of the remaining balance. Without a kill fee clause, clients can walk away at any point and leave you unpaid for work already done."
  },
  {
    question: "What is the difference between Net 15, Net 30, and Net 60 payment terms?",
    answer: "Net 15 means the client must pay within 15 days of receiving your invoice. Net 30 is 30 days, and Net 60 is 60 days. Freelancers should negotiate the shortest feasible net terms. Most small business clients can accommodate Net 15; enterprise clients may insist on Net 30 or Net 60. Always include a late fee clause (typically 1.5% per month) to incentivize timely payment."
  },
  {
    question: "How do I protect myself from scope creep in my contract?",
    answer: "Include a clear Scope of Work (SOW) addendum that defines exactly what is included in the project and what constitutes an out-of-scope request. Add a change order clause requiring written approval and additional payment for any work outside the original SOW. Without this, clients may request unlimited revisions or entirely new features under the original contract price."
  },
  {
    question: "Do I need a separate NDA with my freelance contract?",
    answer: "You can include confidentiality terms as a clause within your main freelance contract, or execute a separate NDA. A standalone NDA is preferable when the project involves particularly sensitive information (trade secrets, pre-launch products, personal data) or when you need the NDA to take effect before detailed project discussions begin."
  },
  {
    question: "Is an electronically signed freelance contract legally binding?",
    answer: "Yes. Under the ESIGN Act, electronic signatures on independent contractor agreements, statements of work, and service contracts are fully enforceable. Courts have consistently upheld e-signed freelance contracts in payment disputes."
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
            <span>Built for Independent Contractors</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Freelance Contracts <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Lock in your next big project. Instantly <strong>sign your freelance contract, Statement of Work (SOW), or Independent Contractor agreement</strong> securely in your browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Client-Side Security</span></li>
            <li><Lock size={14} /><span>No Server Uploads</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>100% Free Forever</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Freelance Contract</span>"
        descriptionOverride="Create your independent contractor signature. Then upload your agreement PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Freelance Agreement
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type your name in a professional cursive style or draw it on-screen.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Contract</h3>
              <p>Drop your <strong>freelance agreement PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Accept Terms</h3>
              <p>Place your signature on the Contractor line and fill in the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export & Email</h3>
              <p>Download the finalized document and send it back to your client to kick off the project.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>7 Must-Have Clauses in Every Freelance Contract (And Why Each One Protects You)</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A handshake deal or a vague email thread is not a contract. Before you start a project and before you <strong>sign freelance contract online</strong>, make sure your agreement explicitly addresses these seven provisions. Missing even one can cost you thousands in unpaid work, ownership disputes, or unexpected liability.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2rem', marginTop: '1.5rem' }}>
              {[
                {
                  num: '1',
                  title: 'IP Ownership and Work for Hire',
                  detail: 'Under US copyright law, the freelancer owns their creative output by default. To transfer ownership to the client, the contract must explicitly say so. A "work for hire" designation applies only to specific statutory categories (such as contributions to collective works, instructional texts, and compilations). For software, design, and creative writing, a proper IP assignment clause is required to transfer ownership. If your contract is silent, you retain copyright even after delivering the final file.'
                },
                {
                  num: '2',
                  title: 'Kill Fee for Client Cancellation',
                  detail: 'A kill fee clause protects you when a client cancels a project mid-way through. Without it, you may lose all compensation for weeks of work. A standard kill fee is 25-50% of the remaining unpaid balance, payable within the same net terms as a regular invoice. Some contracts use a sliding scale: 50% kill fee if cancelled before 50% completion, 75% if cancelled after.'
                },
                {
                  num: '3',
                  title: 'Payment Terms and Late Fee Penalty',
                  detail: 'Specify your net payment terms (Net 15, Net 30) and include a late fee provision. A standard late fee is 1.5% per month on unpaid invoices (equivalent to 18% APR). Late fees dramatically improve payment behavior — clients who would otherwise deprioritize your invoice will pay on time to avoid accumulating fees. Some freelancers also require a 50% upfront deposit before any work begins.'
                },
                {
                  num: '4',
                  title: 'Scope of Work and Revision Limits',
                  detail: 'The scope of work (SOW) addendum defines exactly what you will deliver: specific deliverables, formats, quantities, and what constitutes "completion." The revision clause should specify how many rounds of revisions are included (typically 2-3) and what happens when the client requests more. A change order provision requires written approval and additional payment for any request outside the original scope.'
                },
                {
                  num: '5',
                  title: 'Independent Contractor Classification',
                  detail: 'Your contract must clearly state that you are an independent contractor, not an employee. This affects tax treatment (you are responsible for self-employment taxes), benefits eligibility (you receive none), and control over your work process. Be careful: if a client controls your hours, requires daily check-ins, or provides your tools and equipment, the IRS and state labor authorities may reclassify you as an employee regardless of what your contract says.'
                },
                {
                  num: '6',
                  title: 'Confidentiality and Non-Disparagement',
                  detail: 'A confidentiality clause prevents you from sharing the client’s proprietary information (strategies, customer data, unreleased products). A non-disparagement clause prevents both parties from publicly criticizing each other after the engagement ends. Both are standard in professional freelance agreements and protect your long-term reputation.'
                },
                {
                  num: '7',
                  title: 'Dispute Resolution Method',
                  detail: 'Without a dispute resolution clause, a payment dispute defaults to litigation — expensive and slow. Specify whether disputes will be resolved through: (a) mediation first, then arbitration; (b) binding arbitration under AAA rules; or (c) small claims court for disputes under your state’s threshold. Many freelancers prefer specifying their home state’s law and county court as the venue to avoid traveling to the client’s jurisdiction.'
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(79,70,229,0.04)', borderRadius: '10px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.4, flexShrink: 0, lineHeight: 1, minWidth: '22px' }}>{item.num}</span>
                  <div>
                    <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.4rem', fontSize: '1rem' }}>{item.title}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>
              Why Your Client Agreements Need Private Local Signing
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Freelance contracts often contain your business rates, payment terms, client names, and project details that you would not want competitors or the public to access. When you upload a contract to a cloud PDF signing service, that document — and everything in it — resides on a third-party server. MyDigitSign processes your freelance contracts entirely within your browser. Your rates, payment structure, and client information never touch our servers, staying confidential between you and your client.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Freelance Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-invoice-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Invoices <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-nda-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign NDA Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Generate Professional Signature <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/digital-signature-for-freelancers" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Guide for Freelancers <ArrowRight size={14}/></Link></li>
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
