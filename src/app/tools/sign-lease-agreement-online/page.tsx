import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Lease Agreement Online Free — Landlord & Tenant | MyDigitSign',
  description: 'Sign lease agreements online for free. Know your tenant rights, identify illegal lease clauses, understand security deposit laws by state, and document move-in conditions before signing.',
  keywords: ["sign lease agreement online", "electronic signature for lease", "sign rental agreement online", "tenant rights before signing", "illegal lease clauses", "security deposit law", "landlord tenant signature"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
  },
  openGraph: {
    title: 'Sign Lease Agreement Online Free — Landlord & Tenant Signatures | MyDigitSign',
    description: 'Sign residential or commercial lease agreements online for free. Landlords and tenants can securely apply legally binding electronic signatures to rental contracts.',
    url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Lease Agreement Online', url: '/tools/sign-lease-agreement-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Lease Agreement Online for Free',
  description: 'Apply a legally binding electronic signature to your residential or commercial lease agreement securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
  steps: [
    {
      name: 'Create Your Tenant/Landlord Signature',
      text: 'Type your full legal name, draw your signature, or upload a photo of your signature. Click Adopt to save your mark.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
    {
      name: 'Upload the Rental Document',
      text: 'Drag and drop your lease agreement PDF. It is processed entirely locally, ensuring your personal address and rental terms remain private.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
    {
      name: 'Place Signatures and Initials',
      text: 'Navigate to the signature block, drag your signature to the line. If required, create an initial and stamp it on every page.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
    {
      name: 'Download & Send to Parties',
      text: 'Click Download to save the signed rental contract. Email it to your landlord, property manager, or co-tenants instantly.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Lease Agreement Signer',
  description: 'Sign residential or commercial lease agreements online for free. Add an electronic signature securely without uploading your rental contract to a server.',
  url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "What clauses in a lease are typically illegal and unenforceable?",
    answer: "Common illegal lease clauses include: waiver of the landlord's implied warranty of habitability, waiver of the tenant's right to a security deposit refund, prohibition on having guests without landlord approval, and clauses allowing the landlord to enter without proper notice (typically 24–48 hours under most state laws). An illegal clause does not void the entire lease — it simply means that specific clause cannot be enforced."
  },
  {
    question: "How much can a landlord charge for a security deposit?",
    answer: "Security deposit limits are set by state law and vary widely. California caps deposits at 1 month's rent (as of 2024). New York City limits deposits to 1 month's rent. Texas has no statutory cap. Florida limits deposits to no more than 2 months' rent. Always verify your specific state's current cap before signing."
  },
  {
    question: "What should I document before signing and moving in?",
    answer: "Take date-stamped photos and videos of every room, appliance, and fixture before moving your belongings in. Note any existing damage in writing and email it to your landlord within 24 hours of move-in. This documentation is your primary protection against wrongful security deposit deductions at move-out."
  },
  {
    question: "Is an electronically signed lease agreement legally binding in court?",
    answer: "Yes. Electronic signatures on lease agreements hold the same legal weight as wet-ink signatures under federal law (ESIGN Act) and state law (UETA) in the United States. Courts have consistently upheld e-signed leases."
  },
  {
    question: "Can multiple tenants sign the same lease PDF?",
    answer: "Yes. Tenant A signs and downloads the PDF, then emails it to Tenant B, who uploads it and adds their signature. The process repeats for each tenant until all parties have signed. Each signer retains a full copy of the final executed lease."
  },
  {
    question: "What is a lease addendum and do I need to sign it separately?",
    answer: "A lease addendum modifies or supplements the original lease with specific terms — such as a pet policy, parking assignment, or short-term rental restriction. Addenda are typically separate documents that must be signed in addition to the main lease to be enforceable."
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
            <span>Landlord & Tenant Signatures · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Lease Agreements <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Finalizing a move? Upload your <strong>residential or commercial lease agreement</strong>, apply your legally binding electronic signature, and send it to your landlord or tenant in seconds. 100% free and private.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>In-Browser Processing</span></li>
            <li><Lock size={14} /><span>Keeps Addresses Private</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Signup Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="draw"
        titleOverride="Sign Your <span>Lease Agreement</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload your rental PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Rental Contract in 4 Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type or draw your signature in the creator panel and adopt it.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Upload Lease</h3>
              <p>Drop your <strong>rental agreement</strong> securely into the browser workspace.</p>
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
            <h2 className={styles.seoArticleTitle}>Tenant Rights Checklist: What to Verify Before You Sign a Lease Agreement</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A lease agreement is a binding contract that will govern your life for 12 months or longer. Before you <strong>sign lease agreement online</strong> or hand-deliver a signed copy, taking 30 minutes to review the document carefully can prevent months of disputes over security deposits, repairs, guests, rent increases, and lease terminations. Here is what every tenant should verify before signing.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Common Illegal Lease Clauses You Can Refuse to Honor
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Even a signed lease cannot override tenant protection laws. The following clauses are illegal in most US states and are not enforceable even if they appear in your signed agreement:
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { clause: 'Waiver of the implied warranty of habitability', detail: 'Landlords are legally required to maintain rental units in habitable condition. Any clause saying &quot;tenant accepts the unit as-is&quot; and waives the right to repairs is void in most states.' },
                { clause: 'No-notice entry by the landlord', detail: 'Most states require landlords to give 24–48 hours notice before entering a rental unit (except in emergencies). A lease clause granting the landlord the right to enter at any time is typically unenforceable.' },
                { clause: 'Non-refundable security deposits', detail: 'In most states, security deposits must be refunded within a specific time after move-out (minus documented deductions for damage). A clause calling a security deposit &quot;non-refundable&quot; is usually illegal.' },
                { clause: 'Waiver of tenant right to sue', detail: 'A clause requiring tenants to waive their right to sue the landlord for habitability issues or injuries caused by landlord negligence is void as against public policy in most states.' },
                { clause: 'No guests allowed without written approval', detail: 'Blanket prohibitions on guests without prior landlord written consent may violate tenant privacy rights, depending on state law. Reasonable guest policies are permissible; absolute bans often are not.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '0.85rem 1rem', background: 'rgba(239,68,68,0.04)', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.12)' }}>
                  <strong style={{ color: 'var(--color-text)', fontSize: '0.95rem', display: 'block', marginBottom: '0.25rem' }} dangerouslySetInnerHTML={{ __html: item.clause }} />
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Security Deposit Laws: What Your State Allows
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Security deposit amounts are regulated by state law, not by the landlord. Always verify your state&apos;s current limit before signing:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { state: 'California', rule: 'Max 1 month&apos;s rent (unfurnished) as of 2024' },
                { state: 'New York City', rule: 'Max 1 month&apos;s rent' },
                { state: 'Florida', rule: 'No statutory limit, but must be held in separate account' },
                { state: 'Texas', rule: 'No statutory cap' },
                { state: 'Illinois', rule: 'Max 1.5 months&apos; rent in many cities' },
                { state: 'Massachusetts', rule: 'Max 1 month&apos;s rent' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '0.75rem 1rem', background: 'rgba(79,70,229,0.04)', borderRadius: '8px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <strong style={{ color: 'var(--color-text)', display: 'block', fontSize: '0.9rem' }}>{item.state}</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.rule }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Documenting Move-In Condition: Your Best Protection
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The single most effective thing a tenant can do to protect their security deposit is to document the unit&apos;s condition at move-in with timestamped photos and video. Walk through every room before bringing in any belongings. Photograph walls, floors, appliances, fixtures, and any pre-existing damage. Email the documentation to your landlord within 24 hours of taking possession and ask for written acknowledgement.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              At move-out, repeat the process. Having a before-and-after visual record dramatically reduces the likelihood of disputed deductions. If your landlord provides a move-in inspection checklist, fill it out thoroughly and retain a signed copy — this document is often legally required to be provided in states like California and Georgia.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Your Lease Deserves Local-Only Signing
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Your lease agreement contains your home address, monthly income (if included), credit references, and Social Security Number if you are completing a combined application-and-lease package. These are among the most identity-theft sensitive details you will ever commit to a document. Uploading your lease to a cloud-based PDF editor means those details reside on a third-party server. MyDigitSign keeps your entire rental agreement — from upload to signed download — strictly within your browser&apos;s local environment. Your personal address, financial details, and housing terms never leave your device.
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
              <li><Link href="/tools/sign-real-estate-contract-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Real Estate Contract <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign PDF Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Password Protect Lease <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/esignature-for-realtors" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>E-Signatures for Realtors <ArrowRight size={14}/></Link></li>
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
