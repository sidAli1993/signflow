import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Lease Agreement Online Free — No Account, No Upload | MyDigitSign',
  description:
    'Sign any residential or commercial lease agreement online for free. Upload your lease PDF, add your electronic signature, and download instantly. 100% browser-based — your lease never leaves your device.',
  keywords: [
    'sign lease agreement online',
    'sign lease online free',
    'electronic signature lease',
    'sign rental agreement online',
    'esign lease agreement',
    'sign lease pdf free',
    'landlord tenant esign',
    'sign tenancy agreement online',
    'lease agreement signature',
    'sign rental contract online',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
  },
  openGraph: {
    title: 'Sign Lease Agreement Online Free — No Account, No Upload | MyDigitSign',
    description:
      'Sign any lease or rental agreement online for free. 100% private — your lease PDF never leaves your browser.',
    url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Lease Agreement Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Lease Agreement Online Free — No Account, No Upload | MyDigitSign',
    description: 'Sign any lease agreement online for free. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Lease Agreement Online', url: '/tools/sign-lease-agreement-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Lease Agreement Online for Free',
  description: 'Sign any residential or commercial lease agreement electronically in your browser. No account needed, no files uploaded.',
  url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name in cursive, draw your signature with your mouse or finger, or upload a photo of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
    {
      name: 'Upload Your Lease Agreement PDF',
      text: 'Drag and drop your lease PDF into the uploader. The file is processed entirely in your browser — it is never sent to any server.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
    {
      name: 'Place Your Signature on the Lease',
      text: 'Navigate to the signature page of your lease. Drag your signature to the tenant signature line, resize it, and add the date if required.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
    {
      name: 'Download & Send Your Signed Lease',
      text: 'Click Download to save the signed lease PDF to your device. Email it to your landlord or property manager to complete the agreement.',
      url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Lease Agreement Signing Tool',
  description: 'Sign residential and commercial lease agreements online for free. Add electronic signatures to lease PDFs directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-lease-agreement-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignLeaseAgreementOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Lease Agreement Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Lease Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Lease Agreement Online <span className={styles.seoHeroGradient}>Free & Instant</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign a lease agreement</strong> quickly? Upload your rental or tenancy PDF, create your electronic signature, place it on the signature line, and download the signed document — all in under 60 seconds. Your lease never leaves your browser. No account, no uploads, no watermarks.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Lease Stays in Your Browser</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>ESIGN Act Compliant</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Done in Under 60 Seconds</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script id="software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Lease Agreement</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the lease PDF you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign a lease agreement online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign a Lease Agreement Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full legal name, draw freehand, or upload a photo of your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Lease PDF</h3>
              <p>Drag and drop your lease agreement. It stays in your browser&apos;s local memory — never sent to any server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Navigate to the tenant signature page, place your signature, add the date, and click Download.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Are Electronically Signed Lease Agreements Legal?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Yes. Under the US <strong>ESIGN Act (2000)</strong> and state-level <strong>UETA</strong> laws, electronically signed lease and rental agreements carry the same legal weight as ink signatures. The EU&apos;s <strong>eIDAS</strong> regulation provides equivalent recognition across all EU member states. The key requirements are mutual intent to sign and a clear association between the signature and the document — both of which are met when you place your signature on the designated tenant signature line.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
              Most landlords, property managers, and real estate agencies now routinely accept e-signed lease agreements. If your landlord uses DocuSign, HelloSign, or similar tools and charges for them — our tool is 100% free and produces an identical legally binding result.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>🔒 Protect Your Signed Lease</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                After signing, encrypt your lease PDF with a password before emailing it. Use our <a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>Protect PDF tool</a> to add AES-256 encryption — right in your browser.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>📄 Need Multiple Signatures?</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                For co-tenants who also need to sign: download your signed copy, email it to the co-tenant, and they can add their signature using this same tool — completely free.
              </p>
            </div>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign a lease agreement online for free?</h3>
                <p>Yes. MyDigitSign lets you sign any lease PDF for free — no account, no uploads, no watermarks. Upload your lease, create your signature, place it, and download the signed document instantly.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my lease safe when I sign it online?</h3>
                <p>With MyDigitSign, your lease agreement never leaves your device. Unlike DocuSign or HelloSign, we process everything entirely in your browser&apos;s local memory. Zero server contact means zero risk of your personal rental information being exposed.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do both the landlord and tenant need to sign at the same time?</h3>
                <p>No. Sign your portion, download the PDF, and email it to the other party. The landlord or co-tenant opens it in MyDigitSign, adds their signature, and downloads the fully signed lease.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What types of leases can I sign with this tool?</h3>
                <p>Any lease in PDF format — residential leases, commercial leases, month-to-month agreements, fixed-term tenancies, sublease agreements, and roommate agreements. If it&apos;s a PDF, you can sign it here.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign a lease on my phone?</h3>
                <p>Yes. Open this tool in Safari (iPhone) or Chrome (Android), upload your lease PDF, draw your signature with your finger, and download the signed document. Fully responsive on all mobile devices.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to print the lease after signing?</h3>
                <p>Usually no — a digitally signed PDF is legally sufficient in most jurisdictions. However, some landlords may request a printed and physically signed copy. Check your local laws or ask your landlord before proceeding with only an e-signature.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-nda-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign NDA Online →</a></li>
              <li><a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Protect PDF with Password →</a></li>
              <li><a href="/tools/sign-real-estate-contract-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Real Estate Contract →</a></li>
              <li><a href="/blog/sign-lease-agreement-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Guide: Sign Lease Online →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
