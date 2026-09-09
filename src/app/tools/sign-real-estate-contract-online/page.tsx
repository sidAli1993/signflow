import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Real Estate Contract Online Free — Property Agreements | MyDigitSign',
  description: 'Sign real estate contracts online securely. Understand contingency clauses, earnest money, buyer vs seller signing obligations, and how to handle counter-offers before closing.',
  keywords: ["sign real estate contract online", "sign purchase agreement online", "real estate contingency clause", "earnest money agreement", "sign closing disclosure", "buyer seller signature"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  },
  openGraph: {
    title: 'Sign Real Estate Contract Online Free — Property Agreements | MyDigitSign',
    description: 'Sign real estate purchase agreements, closing disclosures, and realtor contracts online securely. Apply legally binding electronic signatures to property documents.',
    url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Real Estate Contract', url: '/tools/sign-real-estate-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Real Estate Contract Online',
  description: 'Apply an ESIGN-compliant electronic signature to your real estate purchase agreement or property disclosure securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  steps: [
    {
      name: 'Create Your Buyer or Seller Signature',
      text: 'Type your legal name to create a cursive signature, or draw your handwritten signature on your touchscreen. Adopt it for use on the contract.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Load the Property Agreement',
      text: 'Drag your real estate PDF (e.g., purchase agreement, disclosure) into the app. Your financial and property details are processed locally, never uploaded to our servers.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Sign and Initial the Pages',
      text: 'Place your full signature on the final acceptance line. If the contract requires it, you can create a secondary "Initial" profile and stamp it on the bottom of every page.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Save the Executed Contract',
      text: 'Download the finalized document and send it immediately to your real estate agent or title company to lock in the deal.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Real Estate Signer',
  description: 'Sign real estate purchase agreements, closing disclosures, and realtor contracts online securely.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "What is a contingency clause and why does it matter?",
    answer: "A contingency clause makes a real estate contract conditional on a specific event occurring — such as a satisfactory home inspection, mortgage approval, or an appraisal meeting the purchase price. If the contingency is not met, the buyer can legally walk away without forfeiting their earnest money. Never sign a purchase agreement without understanding which contingencies it includes."
  },
  {
    question: "What happens to earnest money if I back out?",
    answer: "If you back out of a purchase for a reason covered by a contingency clause (e.g., failed inspection or financing), your earnest money is typically returned. If you back out without a valid contingency — simply changing your mind — the seller usually gets to keep the earnest money as liquidated damages."
  },
  {
    question: "Are electronic signatures valid on real estate purchase agreements?",
    answer: "Yes. Under the ESIGN Act and UETA, electronic signatures are legally binding for most real estate transactions including purchase agreements, disclosure forms, and addenda. The notable exception is deeds and other documents that legally transfer title, which typically require notarization and recording."
  },
  {
    question: "Do I need to sign every page of a real estate contract?",
    answer: "Standard real estate practice requires buyers and sellers to initial every page and sign the final page. This confirms both parties have read the full agreement. Our tool makes this easy — create a main signature and a separate initials stamp, then apply each where needed."
  },
  {
    question: "Can I use this for a counter-offer addendum?",
    answer: "Yes. When negotiating, the seller often signs a counter-offer addendum modifying specific terms (price, closing date, contingencies). You can sign the counter-offer, download it, and send it back to the listing agent immediately without printing."
  },
  {
    question: "Is this secure enough for closing disclosures containing my financial info?",
    answer: "Absolutely. Closing disclosures contain your mortgage terms, loan costs, and banking details. MyDigitSign processes these documents entirely locally in your browser — your financial and property data is never uploaded to our servers."
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
            <span>Secure Property Transactions · UETA Compliant</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Real Estate Contracts <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Closing a deal? Securely <strong>sign real estate purchase agreements, property disclosures, and agent contracts</strong> online. Your financial documents are processed safely in your local browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Financial Data Kept Private</span></li>
            <li><Lock size={14} /><span>Zero Server Storage</span></li>
            <li><FileCheck size={14} /><span>UETA / ESIGN Compliant</span></li>
            <li><Users size={14} /><span>Free for Buyers & Sellers</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Real Estate Contract</span>"
        descriptionOverride="Create your legal signature. Once adopted, upload your property agreement PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Execute a Property Agreement Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type your full legal name or draw it on-screen to create your signature.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Agreement</h3>
              <p>Drop your <strong>real estate PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Sign & Initial</h3>
              <p>Place your signature on the final line, and stamp your initials on prior pages if needed.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export & Send</h3>
              <p>Download the finalized document and send it to your realtor or title agent.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Real Estate Contracts Explained: Contingencies, Earnest Money, and Who Signs What</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Real estate contracts are among the largest financial commitments most people will ever make. Before you <strong>sign real estate contract online</strong>, understanding the key components of a purchase agreement — particularly the contingency clauses and earnest money provisions — can protect you from losing tens of thousands of dollars if the deal does not proceed as expected.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              The 3 Essential Contingency Clauses Buyers Must Negotiate
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Contingency clauses are conditions that must be satisfied for the sale to proceed. Without them, backing out of a deal means losing your earnest money. Here are the three most critical contingencies every buyer should include:
            </p>
            <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'Inspection Contingency',
                  detail: 'Gives you the right to hire a licensed home inspector and, if major defects are found, to negotiate repairs, request a price reduction, or walk away without losing your earnest money. Typically allows 7–14 days for the inspection. Never waive this contingency in a competitive market without fully understanding the risk.'
                },
                {
                  num: '02',
                  title: 'Financing Contingency',
                  detail: 'Protects you if your mortgage lender ultimately declines your loan application. Without this contingency, you would lose your earnest money if your financing falls through. Most financing contingencies give you 21–30 days to obtain a formal loan commitment letter from your lender.'
                },
                {
                  num: '03',
                  title: 'Appraisal Contingency',
                  detail: 'Protects you if the property appraises below the agreed purchase price. If the bank appraises the home at $450,000 and you agreed to pay $480,000, an appraisal contingency gives you the right to renegotiate the price, make up the difference in cash, or exit the deal. In competitive markets, some buyers waive this — a high-risk decision.'
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
              Earnest Money: What It Is and When You Lose It
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Earnest money (also called a good faith deposit) is a sum — typically 1–3% of the purchase price — that you put down when submitting an offer to demonstrate you are a serious buyer. It is held in escrow and applied toward your down payment at closing.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If you back out of the deal for a reason <em>covered by a contingency</em> (inspection issues, financing failure, low appraisal), your earnest money is returned. If you walk away for any reason <em>not covered by a contingency</em> — simply changing your mind, finding a better house, or having buyer&apos;s remorse — the seller typically gets to keep your earnest money as liquidated damages for taking the home off the market.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Who Signs What: Buyer vs. Seller Obligations
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Real estate purchase agreements require signatures from both the buyer and the seller to create a binding contract. In practice, the process works as follows: the <strong>buyer signs first</strong>, submitting their offer with all terms, contingencies, and the earnest money amount. The seller can: (1) accept and sign, creating a binding contract; (2) reject outright; or (3) sign a <strong>counter-offer addendum</strong> modifying specific terms.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Counter-offers involve a new signature cycle: the seller signs the counter-offer, the buyer signs accepting or countering again, and so on until both parties agree or negotiations collapse. With MyDigitSign, you can sign and return a counter-offer addendum in minutes without printing, scanning, or scheduling an in-person meeting.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Initialing Every Page: Why It Matters and How to Do It
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Standard real estate practice requires both buyer and seller to initial every page of the purchase agreement. This confirms that both parties have read the complete document and cannot later claim they were unaware of terms on any particular page. With MyDigitSign, you can create a primary full signature for the final execution page and a shorter &quot;initials&quot; stamp for each page, applying both quickly to the entire document before downloading.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Closing Disclosures Require Local-Only Signing
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Your Closing Disclosure contains the most sensitive financial information in any residential transaction: your exact loan amount, interest rate, monthly payment, all closing cost line items, and your banking details for the wire transfer. Uploading this document to a cloud-based PDF signing service means your bank account routing number, loan terms, and purchase price reside on a third-party server. MyDigitSign&apos;s client-side architecture ensures your Closing Disclosure and all associated purchase documents are processed exclusively in your local browser memory — never transmitted to our servers, and never stored anywhere beyond your own device.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Property Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-lease-agreement-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Lease Agreement <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-business-agreement-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Commercial Contract <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Password Protect Documents <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/esignature-for-realtors" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Guide for Realtors <ArrowRight size={14}/></Link></li>
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
