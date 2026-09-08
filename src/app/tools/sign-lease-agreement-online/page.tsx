import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Lease Agreement Online Free — Landlord & Tenant Signatures | MyDigitSign',
  description: 'Sign residential or commercial lease agreements online for free. Landlords and tenants can securely apply legally binding electronic signatures to rental contracts.',
  keywords: ["sign lease agreement online", "electronic signature for lease", "sign rental agreement online", "free lease signing online", "digital signature lease agreement", "landlord signature online"],
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
    question: "Is an electronically signed lease agreement legally binding in court?",
    answer: "Yes. Electronic signatures on lease agreements hold the same legal weight as wet-ink signatures under federal laws (ESIGN Act) and state laws (UETA) in the United States."
  },
  {
    question: "Can I use this for a commercial property lease?",
    answer: "Absolutely. Both residential and commercial leases can be signed securely using this tool. For commercial leases, you can also use our Text tool to add your corporate title."
  },
  {
    question: "How do multiple tenants sign the same lease?",
    answer: "Tenant A can upload the lease, sign it, and download it. Then, Tenant A emails the signed PDF to Tenant B. Tenant B uploads that PDF into our tool, adds their signature, and downloads the fully executed document."
  },
  {
    question: "Can I sign an eviction notice or security deposit return with this?",
    answer: "Yes, you can sign any property management document in PDF format, including lease addendums, condition reports, and termination notices."
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
            <h2 className={styles.seoArticleTitle}>The Ultimate Guide to Signing a Lease Agreement Online</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Moving into a new apartment or securing a commercial office space requires finalizing a lease agreement. Traditionally, this involved printing dozens of pages, signing them by hand, and scanning them back. Today, property managers and tenants prefer to <strong>sign lease agreement online</strong> using standard electronic signatures.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Under the ESIGN Act (US) and eIDAS (EU), electronic signatures on lease and rental agreements are completely legally binding. This ensures both landlords and out-of-state tenants can execute contracts instantly without geographical barriers.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Using MyDigitSign to execute your rental contract ensures maximum privacy. Because our signature engine runs entirely within your browser (using local machine RAM), your sensitive financial terms, security deposit amounts, and personal home address are never uploaded to a third-party server.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Handling Guarantors and Multi-Tenant Leases
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If your lease requires multiple signatures (such as a roommate or a financial guarantor), the process is simple. You sign your designated line using our tool, download the PDF, and email it to the next party. They repeat the process until all tenants and the landlord have applied their digital signatures to the final executed copy.
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
