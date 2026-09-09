import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Lock, FileCheck, Users, Star, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign NDA Online Free — Non-Disclosure Agreement Signer | MyDigitSign',
  description: 'Sign Non-Disclosure Agreements (NDAs) online securely. Understand mutual vs unilateral NDAs, trade secret clauses, and NDA red flags before you sign. 100% private, no uploads.',
  keywords: ["sign nda online", "sign nda free", "electronic signature nda", "sign non disclosure agreement", "confidentiality agreement signature", "mutual nda", "unilateral nda", "trade secret nda"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-nda-online',
  },
  openGraph: {
    title: 'Sign NDA Online Free — Non-Disclosure Agreement Signer | MyDigitSign',
    description: 'Sign Non-Disclosure Agreements (NDAs) online securely. Protect your trade secrets by signing mutual or unilateral NDAs locally without uploading to the cloud.',
    url: 'https://mydigitsign.com/tools/sign-nda-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign NDA Online', url: '/tools/sign-nda-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Non-Disclosure Agreement (NDA) Online',
  description: 'Apply a legally binding electronic signature to your NDA securely in your browser to protect your trade secrets.',
  url: 'https://mydigitsign.com/tools/sign-nda-online',
  steps: [
    {
      name: 'Create Your Identity Profile',
      text: 'Type your legal name or draw your signature on the screen. Adopt the signature to prepare for contract execution.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
    {
      name: 'Load the Confidential NDA',
      text: 'Drag and drop your NDA PDF into the browser. It processes locally to prevent your intellectual property from touching our servers.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
    {
      name: 'Execute the Confidentiality Terms',
      text: 'Drag your signature onto the designated signatory line. Use the text tool to fill in the effective date and your company name if required.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
    {
      name: 'Save the Executed Copy',
      text: 'Click Download to save the signed NDA. You can now securely share it with the counterparty.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign NDA Signer',
  description: 'Sign Non-Disclosure Agreements (NDAs) online securely. Protect your trade secrets by signing locally.',
  url: 'https://mydigitsign.com/tools/sign-nda-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Is an electronically signed NDA enforceable in court?",
    answer: "Yes. Electronic signatures on Non-Disclosure Agreements are fully enforceable in both US courts (ESIGN Act) and European courts (eIDAS) provided both parties intend to sign. Courts have repeatedly upheld e-signed NDAs in trade secret litigation cases."
  },
  {
    question: "What is the difference between a mutual NDA and a unilateral NDA?",
    answer: "A unilateral NDA only protects one party's information — typically when a company shares its roadmap with a vendor or employee. A mutual NDA protects both parties simultaneously, which is standard in merger discussions or joint ventures where both sides share sensitive data."
  },
  {
    question: "How long does an NDA typically last?",
    answer: "Most NDAs specify a duration of 2 to 5 years. However, trade secret protections under the Defend Trade Secrets Act (DTSA) can survive the NDA's expiry indefinitely as long as the information remains genuinely secret and the owner takes reasonable protective measures."
  },
  {
    question: "Can I fill in blank fields in an NDA before signing?",
    answer: "Yes, you can use the built-in Text Tool to fill in the 'Effective Date', 'Disclosing Party', and 'Receiving Party' fields before placing your signature. All editing happens locally — no content is ever sent to our servers."
  },
  {
    question: "Can an NDA prevent someone from working for a competitor?",
    answer: "No. That is the role of a non-compete clause, which is a separate legal instrument. An NDA only restricts the disclosure of specific confidential information. Non-compete enforceability varies significantly by US state — California, for instance, largely bans them."
  },
  {
    question: "What should I do if someone breaches my NDA?",
    answer: "Preserve all evidence immediately — emails, screenshots, and product filings. Then consult an attorney to issue a cease-and-desist letter. For ongoing breaches, a Temporary Restraining Order (TRO) can halt further disclosure. Under the DTSA, willful trade secret theft can result in double damages plus attorney fees."
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
            <span>Confidentiality Guaranteed · Client-Side Only</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign NDAs Online <span className={styles.seoHeroGradient}>Free & Private</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Protect your intellectual property. <strong>Sign Non-Disclosure Agreements (NDAs) and Confidentiality Agreements</strong> instantly. Your highly sensitive documents are processed entirely in your browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Trade Secrets Stay Local</span></li>
            <li><Lock size={14} /><span>Zero Server Interception</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Execute Your <span>NDA</span>"
        descriptionOverride="Create your signature. Once adopted, upload your confidentiality agreement."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a Non-Disclosure Agreement
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signer Profile</h3>
              <p>Type your name, draw a signature, or upload a company seal PNG.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Agreement</h3>
              <p>Drop your <strong>NDA PDF</strong> securely into the local browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Apply Authorization</h3>
              <p>Position your signature on the designated line. Add the effective date using the text tool.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export Executed Copy</h3>
              <p>Download the finalized document immediately to share with the counterparty.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>The Complete Guide to NDAs: Mutual vs. Unilateral, Trade Secrets, Red Flags & What to Do When One Is Breached</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A Non-Disclosure Agreement is one of the most commonly signed — and most frequently misunderstood — legal documents in business. Before you <strong>sign NDA online</strong>, it pays to understand exactly what you are agreeing to, what it genuinely protects, and what it does not. Signing without understanding could restrict your career, your next startup, or your consulting freedom for years.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Mutual NDAs vs. Unilateral NDAs — Which One Are You Signing?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The first thing to identify is whether the NDA is <strong>unilateral</strong> (one-way) or <strong>mutual</strong> (two-way). This changes the entire power dynamic of the agreement.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A <strong>unilateral NDA</strong> only protects information flowing in one direction. The most common example: a company asks a freelancer or new hire to sign before revealing their product roadmap or client list. Only the company&apos;s information is protected. You are bound, but your own information is not covered.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A <strong>mutual NDA</strong> protects both parties equally. These appear in M&amp;A due diligence, joint venture negotiations, and strategic partnerships where both companies share sensitive data. If you are disclosing anything about your own business in return, always push for mutual terms before you sign.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              What Legally Counts as a "Trade Secret"?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Under the federal <strong>Defend Trade Secrets Act (DTSA)</strong> of 2016, a trade secret is information that: (1) derives economic value from not being publicly known, and (2) is subject to <em>reasonable efforts</em> to maintain its secrecy. Trade secrets can include algorithms, business strategies, customer databases, financial models, and source code.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The phrase &quot;reasonable efforts&quot; is critical. If you share your secret formula without any controls, a court may not consider it a trade secret — even with a signed NDA. Using a tool that never uploads your document (like MyDigitSign) is itself a demonstration of reasonable protective effort during the signing process.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              5 Red Flags to Spot in an NDA Before Signing
            </h3>
            <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {[
                { flag: 'Overly broad definition of &quot;confidential&quot;', detail: 'If the NDA calls everything ever discussed confidential — written or verbal — it is unreasonably broad. Look for specific, enumerated categories of protected information.' },
                { flag: 'No expiration date', detail: 'An NDA lasting &quot;in perpetuity&quot; or &quot;forever&quot; is a red flag, especially for employees. A reasonable commercial NDA should define a term of 2 to 5 years.' },
                { flag: 'Hidden non-compete clause', detail: 'Some NDAs bury non-compete or non-solicitation terms inside the confidentiality section. Read every clause — non-competes are governed by completely different laws with varying enforceability by state.' },
                { flag: 'One-sided remedies', detail: 'If one party gets unlimited injunctive relief and punitive damages for any breach, but the other has no equivalent protection, the agreement is fundamentally imbalanced. Push for symmetrical remedies.' },
                { flag: 'Jurisdiction far from your location', detail: 'A clause forcing all disputes into courts in a distant state creates a practical disadvantage. If you are in California and the NDA specifies New York courts, that is a red flag worth negotiating.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '1rem', background: 'rgba(239,68,68,0.05)', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <AlertTriangle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }} dangerouslySetInnerHTML={{ __html: item.flag }} />
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.detail }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Step-by-Step: Executing a Mutual NDA Without Cloud Platforms
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              When both parties need to sign, here is the most private and efficient workflow using MyDigitSign:
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'Party A uploads the NDA, creates their signature, places it on their designated line, and fills in their name, title, and date using the Text Tool.',
                'Party A downloads the partially signed PDF and emails it to Party B.',
                'Party B opens MyDigitSign, uploads the received PDF, adds their own signature on their line, and downloads the fully executed copy.',
                'Both parties retain the completed, bilaterally signed NDA. This PDF is your legal proof of the agreement.',
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: '3px' }} />
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{step}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              What to Do When Someone Breaches Your NDA
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The moment you discover a potential breach, your response speed matters. First, <strong>preserve all evidence</strong> immediately — emails, product screenshots, LinkedIn announcements, or any documentation showing what was disclosed and when. Courts require concrete evidence of both the breach and the resulting harm.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Your attorney can then pursue: a <strong>cease-and-desist letter</strong> (often resolves disputes without court), a <strong>Temporary Restraining Order (TRO)</strong> to halt ongoing disclosure immediately, or a civil lawsuit for actual damages. Under the DTSA, willful and malicious trade secret misappropriation can result in <em>double the actual damages</em>, plus attorney fees — making a properly signed NDA a powerful deterrent even before any dispute arises.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Signing an NDA Locally Protects the Secret Itself
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              There is a deep irony in uploading a Non-Disclosure Agreement to a cloud PDF editor to sign it. The NDA itself often names your trade secrets — your algorithms, your database schema, your financial projections. Transmitting that document to a third-party server during signing exposes those confidential details to the server operator&apos;s infrastructure. MyDigitSign eliminates this entirely. The PDF is processed inside your browser&apos;s sandboxed local memory using JavaScript and WebAssembly. Not a single byte of your NDA crosses the internet to our servers — maintaining the secrecy the agreement is designed to protect from the very moment of execution.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Business Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-business-agreement-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Business Agreement <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-employment-contract-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Employment Contract <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/how-to-ask-someone-to-sign-nda" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Email Templates for NDAs <ArrowRight size={14}/></Link></li>
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
