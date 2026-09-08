import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Consent Form Online Free — Parental & Medical Consent | MyDigitSign',
  description: 'Sign parental consent forms, school trip permission slips, and informed medical consent documents online. Secure, private, and ESIGN compliant.',
  keywords: ["sign consent form online", "parental consent signature", "informed consent signature", "sign permission slip online", "school consent form"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-consent-form-online',
  },
  openGraph: {
    title: 'Sign Consent Form Online Free — Parental & Medical Consent | MyDigitSign',
    description: 'Sign parental consent forms, school trip permission slips, and informed medical consent documents online. Secure, private, and ESIGN compliant.',
    url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Consent Form', url: '/tools/sign-consent-form-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Consent Form Online',
  description: 'Provide legal consent securely without printing. Ideal for parental consent, media releases, and permission slips.',
  url: 'https://mydigitsign.com/tools/sign-consent-form-online',
  steps: [
    {
      name: 'Establish Your Identity',
      text: 'Type your legal name or draw your signature on the screen using your mouse or finger. Adopt the signature to proceed.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
    {
      name: 'Open the Consent PDF',
      text: 'Drag your consent form or permission slip into the browser. The file is processed locally, keeping minors or personal details safe.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
    {
      name: 'Sign and Date the Release',
      text: 'Drag your adopted signature to the parent/guardian or participant line. Add the current date using the built-in text tool.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
    {
      name: 'Return the Form',
      text: 'Download the securely signed PDF to your device. You can now email it back to the school, clinic, or event organizer.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Consent Form Signer',
  description: 'Sign parental consent forms, school trip permission slips, and informed medical consent documents online.',
  url: 'https://mydigitsign.com/tools/sign-consent-form-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Do schools accept electronically signed permission slips?",
    answer: "Most modern school districts and extracurricular programs accept ESIGN-compliant digital signatures for field trips, sports waivers, and general parental consent forms."
  },
  {
    question: "Is this secure enough for informed medical consent?",
    answer: "Yes. Because our tool does not upload your medical documents to any cloud server, it inherently prevents unauthorized data interception, adhering to strict privacy models."
  },
  {
    question: "How do I sign for a minor child?",
    answer: "Simply sign your own name on the 'Parent/Guardian Signature' line. You can use our Text tool to type the minor's name in the designated blank."
  },
  {
    question: "Can I sign a photo or media release form here?",
    answer: "Yes, you can upload and sign any PDF consent document, including photo releases, talent releases, and interview consent forms."
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
            <span>Fast · Private · ESIGN Compliant</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Consent Forms <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to provide authorization? Securely <strong>sign a consent form, permission slip, or media release</strong> online. Your personal documents are processed strictly within your browser for maximum privacy.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Locally Processed</span></li>
            <li><Lock size={14} /><span>Protects Minors&apos; Data</span></li>
            <li><FileCheck size={14} /><span>Legally Binding</span></li>
            <li><Users size={14} /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="draw"
        titleOverride="Sign Your <span>Consent Form</span>"
        descriptionOverride="Draw or type your signature below. Then, upload your permission slip or consent PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a Permission Slip or Consent Form
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Generate Signature</h3>
              <p>Type your full legal name or draw your signature on the screen.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Open Document</h3>
              <p>Drop your <strong>consent form PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Provide Authorization</h3>
              <p>Place your signature on the Parent/Guardian line and add the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Save & Submit</h3>
              <p>Download the finalized document and send it back to the requesting party.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Secure Electronic Signatures for Parental and Informed Consent</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              From school field trips to hospital intake packets, providing legal authorization quickly is a modern necessity. You can now <strong>sign consent form online</strong> without needing access to a physical printer or scanner. Electronic signatures are widely accepted for parental consent, photo/media releases, and participant waivers.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              When dealing with consent documents—especially those involving minors or medical histories—privacy is critical. Uploading a signed medical consent form to a standard free PDF editor exposes sensitive health data to third-party servers, potentially violating privacy expectations.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              MyDigitSign eliminates this risk. By executing the signature merging process entirely within your browser&apos;s memory via WebAssembly, your documents never leave your computer. This client-side architecture ensures that sensitive personal details remain strictly confidential between you and the organization requesting consent.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Handling Multiple Signatures and Fields
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many permission slips require you to check boxes (e.g., &quot;I give permission for emergency medical treatment&quot;) or write in emergency contact numbers. Using our suite of annotation tools, you can easily type text, draw checkmarks, and apply your digital signature all on the same document before downloading the final approved copy.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign PDF Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/draw-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Draw Signature Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-waiver-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Liability Waiver <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-medical-form-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Medical Form <ArrowRight size={14}/></Link></li>
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
