import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Lock, FileCheck, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Business Agreement Online Free — Secure B2B Contracts | MyDigitSign',
  description: 'Sign vendor contracts, B2B agreements, and board resolutions securely online. Learn 5 must-have clauses in every B2B contract, corporate seal requirements, and how to handle counter-signing.',
  keywords: ["sign business agreement online", "b2b contract signature", "sign vendor contract online", "corporate seal signature", "authorized signer online", "b2b contract clauses"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  },
  openGraph: {
    title: 'Sign Business Agreement Online Free — Secure B2B Contracts | MyDigitSign',
    description: 'Sign vendor contracts, B2B agreements, and board resolutions securely online. Add an authorized electronic signature or corporate seal to your business documents.',
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
  { name: 'Sign Business Agreement', url: '/tools/sign-business-agreement-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Business Agreement Online for Free',
  description: 'Authorize vendor contracts and B2B agreements securely using our client-side electronic signature tool.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  steps: [
    {
      name: 'Prepare Your Corporate Signature',
      text: 'Type your name with your official title, draw your signature, or upload a PNG of your corporate seal. Click Adopt to confirm your credentials.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Load the B2B Contract',
      text: 'Drag and drop your business agreement PDF. It is loaded strictly into your browser memory to protect trade secrets and corporate terms.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Authorize the Document',
      text: 'Scroll to the signature block. Drag your authorized signature onto the line, and use the text tool to add your title (e.g., CEO, Director).',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Save the Executed Agreement',
      text: 'Click Download to generate the finalized contract. Send it to your vendor or partner for counter-signature.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Business Agreement Tool',
  description: 'Sign vendor contracts, B2B agreements, and board resolutions securely online. Add an authorized electronic signature or corporate seal.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Is this suitable for multi-million dollar vendor contracts?",
    answer: "Yes, MyDigitSign creates ESIGN and UETA compliant signatures. For high-stakes contracts, ensure you are the authorized signatory for your corporation and retain the final signed PDF as your legal record."
  },
  {
    question: "What are the 5 most important clauses in a B2B agreement?",
    answer: "The five essential clauses are: (1) Scope of Work defining deliverables precisely, (2) Payment Terms including milestones and late fees, (3) Confidentiality/NDA provisions, (4) Intellectual Property ownership of work product, and (5) Termination and Dispute Resolution specifying governing law and jurisdiction."
  },
  {
    question: "How do I add my corporate title beneath my signature?",
    answer: "After placing your signature on the PDF, use our Text Tool to type your name, official title (e.g., CEO, Managing Director), and the execution date directly on the designated line. This is standard practice for corporate authorizations."
  },
  {
    question: "Can I upload my company stamp or corporate seal?",
    answer: "Absolutely. Choose the 'Upload' tab in the signature creator to import a transparent PNG or JPG of your company seal and place it anywhere on the agreement. Many international contracts require both a signature and a company stamp."
  },
  {
    question: "What is the difference between an MSA and a SOW?",
    answer: "A Master Service Agreement (MSA) sets the overarching legal terms of a vendor relationship — liability, confidentiality, payment terms. A Statement of Work (SOW) is the project-specific document attached to an MSA that defines the deliverables, timeline, and pricing for a particular engagement."
  },
  {
    question: "Will my contract be stored on your servers?",
    answer: "Never. Business agreements often contain confidential pricing and trade terms. Our tool operates 100% locally on your device — no data is ever transmitted to our backend infrastructure."
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
            <span>Corporate Contracts · Zero Uploads · Free</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Business Agreements <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Finalizing a <strong>B2B contract, vendor agreement, or board resolution</strong>? Apply your authorized electronic signature or corporate seal instantly. Your confidential business documents never leave your local browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Trade Secrets Kept Private</span></li>
            <li><Lock size={14} /><span>Zero Server Storage</span></li>
            <li><FileCheck size={14} /><span>UETA / ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Registration Needed</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Authorize <span>Business Agreement</span>"
        descriptionOverride="Create your corporate signature. Once adopted, upload your contract PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Execute a Corporate Contract Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signer Profile</h3>
              <p>Type your name, draw your signature, or upload a PNG of your corporate seal.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Agreement</h3>
              <p>Drop your <strong>business agreement PDF</strong> securely into the browser viewer.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Apply Authorization</h3>
              <p>Position your signature on the designated line. Add your title and date using the text tool.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export Executed Copy</h3>
              <p>Download the finalized document immediately to send to your vendors or partners.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>The B2B Contract Playbook: 5 Must-Have Clauses, Corporate Seals, and How to Handle Counter-Signing</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A signed <strong>business agreement</strong> is the foundation of every professional relationship between companies. Whether you are finalizing a Master Service Agreement (MSA) with a new software vendor, executing a joint venture term sheet, or authorizing a board resolution, the quality and completeness of your contract directly determines how protected you are if the relationship sours. Before you <strong>sign business agreement online</strong>, understanding what must be in that document is just as important as applying the signature.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              5 Clauses Every B2B Agreement Must Include
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many disputes between businesses arise not from bad faith, but from vague or missing contract terms. Review for these five essential clauses before executing any commercial agreement:
            </p>
            <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'Scope of Work (SOW)',
                  detail: 'The most litigated section of any B2B contract is scope. Define deliverables precisely — include formats, specifications, acceptance criteria, and revision rounds. Vague scope leads to scope creep, unpaid work, and disputes over whether a deliverable was actually completed.'
                },
                {
                  num: '02',
                  title: 'Payment Terms and Late Fee Provisions',
                  detail: 'Specify exact payment milestones, accepted payment methods, invoice submission deadlines, and a clearly stated late payment penalty (e.g., 1.5% per month after a 30-day grace period). Without explicit late fee language, recovering overdue invoices becomes legally complex.'
                },
                {
                  num: '03',
                  title: 'Intellectual Property Ownership',
                  detail: 'Who owns the work product, code, designs, or research produced under the agreement? This must be explicitly stated. In the absence of an IP assignment clause, the creating party (often a contractor) retains default ownership under US copyright law — which may not be what you intended.'
                },
                {
                  num: '04',
                  title: 'Confidentiality Provisions',
                  detail: 'Even if you have a separate NDA, your MSA or vendor agreement should include its own confidentiality clause covering any proprietary information shared during the engagement — pricing models, business processes, client lists, and technical architectures.'
                },
                {
                  num: '05',
                  title: 'Termination Rights and Governing Law',
                  detail: 'Define the conditions under which either party can exit the agreement — for cause (material breach, non-payment), for convenience (with notice period), and for insolvency. Specify the governing state law and whether disputes go to arbitration, mediation, or court litigation.'
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(79,70,229,0.04)', borderRadius: '8px', border: '1px solid rgba(79,70,229,0.12)' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.5, flexShrink: 0, lineHeight: 1 }}>{item.num}</span>
                  <div>
                    <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.3rem' }}>{item.title}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Understanding Authorized Signatories: Who Can Sign on Behalf of a Company?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Not everyone in a company has the legal authority to bind the business to a contract. For a B2B agreement to be enforceable, it must be signed by an <strong>authorized signatory</strong> — someone whose role gives them actual or apparent authority to commit the company.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              For incorporated companies (LLCs, Corporations), authorized signatories typically include the CEO, President, CFO, or any officer designated in the company&apos;s Operating Agreement or Bylaws. For contracts above a certain dollar threshold, some companies require a board resolution specifically authorizing the signing. If you are the authorized signatory, our tool allows you to add your official title below your signature using the Text Tool, creating a complete and standard corporate execution block.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              How Corporate Seals Work in International B2B Agreements
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              While US law generally does not require a corporate seal to make a contract binding, many international counterparties — particularly those in Asia, the Middle East, and parts of Europe — still expect one. In these jurisdictions, a company seal (or &quot;chop&quot;) alongside an authorized signature demonstrates formal corporate authorization.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              MyDigitSign&apos;s Upload Signature feature allows you to import a transparent PNG image of your official corporate seal and overlay it directly onto the signature block of any PDF. This satisfies international partners who require the physical stamp equivalent while keeping the process fully digital.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              How to Handle Counter-Signing and Multi-Party Agreements
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Most B2B agreements require signatures from both parties to be fully executed. Here is an efficient, secure counter-signing workflow that requires no cloud platform:
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'Your company&apos;s authorized signatory uploads the agreement PDF, applies their signature, adds their title and date using the Text Tool, and downloads the signed document.',
                'The signed PDF is emailed securely to the counterparty (vendor, partner, or client).',
                'The counterparty uploads the document to MyDigitSign, applies their authorized signature to their designated execution block, adds their title and date, and downloads the fully executed agreement.',
                'Both parties retain the double-signed PDF. For added security, you can use the Protect PDF tool to password-lock the final executed copy.',
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: '3px' }} />
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: step }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Cloud-Based Signature Tools Are a Risk for Confidential B2B Agreements
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many enterprises have strict data security policies that explicitly prohibit uploading unsigned contracts to third-party cloud platforms. The reason is simple: your unsigned vendor agreement may contain pricing structures, technical specifications, and strategic terms that constitute trade secrets. Uploading those documents to a cloud signature platform means they reside on that vendor&apos;s servers, subject to their security controls, data retention policies, and potential access by their employees. MyDigitSign&apos;s architecture is fundamentally different. The PDF you upload never travels across the internet to our servers. Every operation — rendering, annotation, signature placement, and document compilation — runs entirely inside your local browser environment, keeping your negotiated business terms strictly between you and your counterparty.
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
              <li><Link href="/tools/sign-nda-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign NDA Online <ArrowRight size={14}/></Link></li>
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
