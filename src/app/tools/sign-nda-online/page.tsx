import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign NDA Online Free — Non-Disclosure Agreement Signer | MyDigitSign',
  description: 'Sign Non-Disclosure Agreements (NDAs) online securely. Protect your trade secrets by signing mutual or unilateral NDAs locally without uploading to the cloud.',
  keywords: ["sign nda online", "sign nda free", "electronic signature nda", "sign non disclosure agreement", "confidentiality agreement signature"],
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
    answer: "Yes. Electronic signatures on Non-Disclosure Agreements are fully enforceable in both US courts (ESIGN Act) and European courts (eIDAS) provided both parties intend to sign."
  },
  {
    question: "Can I sign a mutual NDA with this tool?",
    answer: "Yes. For a mutual NDA, you can sign your portion, download it, and send it to the other party so they can counter-sign using the same tool."
  },
  {
    question: "Why shouldn't I upload my NDA to a cloud signer?",
    answer: "NDAs often contain definitions of your highly confidential trade secrets. Uploading those definitions to a third-party server increases your surface area for data breaches."
  },
  {
    question: "Can I fill in the blank lines on the NDA?",
    answer: "Yes, you can use the built-in Text Tool to fill in the 'Effective Date', 'Disclosing Party', and 'Receiving Party' fields before placing your signature."
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
            <h2 className={styles.seoArticleTitle}>Securing Your Trade Secrets: The Safest Way to Sign an NDA</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Before sharing proprietary code, business models, or client lists with a potential partner or employee, you need legal protection. Being able to <strong>sign NDA online</strong> quickly ensures that discussions can proceed without delay, while still establishing a firm legal boundary regarding confidentiality.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              However, the very nature of a Non-Disclosure Agreement means the document itself is often highly sensitive. It explicitly outlines what is considered a "trade secret" and names the parties involved. Uploading an unsigned NDA to a standard, free online PDF tool means you are transmitting your company&apos;s confidential strategies to a third-party server, creating a significant security vulnerability.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              MyDigitSign protects your intellectual property by employing a 100% client-side architecture. When you use our tool, the PDF is loaded directly into your local machine&apos;s memory. The rendering, text placement, and cryptographic signature merging all happen within your browser. Your NDA never touches our backend servers.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Handling Mutual vs. Unilateral NDAs
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If you are signing a unilateral NDA (where only one party is receiving confidential info), only the receiving party needs to sign. If it is a mutual NDA, both parties must sign. You can easily apply your signature, download the PDF, and email it to the counterparty. They can then use MyDigitSign to safely add their own signature without risking data exposure.
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
