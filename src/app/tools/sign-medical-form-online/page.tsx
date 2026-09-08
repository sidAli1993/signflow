import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Medical Form Online Free — HIPAA Compliant Signatures | MyDigitSign',
  description: 'Sign patient intake forms, HIPAA releases, and medical consent documents online. Client-side processing ensures your health data remains completely private.',
  keywords: ["sign medical form online", "sign HIPAA form online", "patient intake signature", "medical consent form signature", "secure medical signature"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-medical-form-online',
  },
  openGraph: {
    title: 'Sign Medical Form Online Free — HIPAA Compliant Signatures | MyDigitSign',
    description: 'Sign patient intake forms, HIPAA releases, and medical consent documents online. Client-side processing ensures your health data remains completely private.',
    url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Medical Form', url: '/tools/sign-medical-form-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Medical Form Online Securely',
  description: 'Apply your electronic signature to sensitive healthcare forms without uploading your private medical data to any cloud servers.',
  url: 'https://mydigitsign.com/tools/sign-medical-form-online',
  steps: [
    {
      name: 'Create Your Digital Signature',
      text: 'Type your name or draw your signature on the screen. Click Adopt to confirm your identity for the medical record.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
    {
      name: 'Open the Patient Intake PDF',
      text: 'Drag your HIPAA release or medical consent form into the browser. It processes locally in your browser memory for total privacy.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
    {
      name: 'Complete the Form Fields',
      text: 'Use our Text tool to type in your medical history, emergency contacts, and date. Place your signature on the authorization line.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
    {
      name: 'Download the Encrypted PDF',
      text: 'Click Download to save the signed health form directly to your device, ready to be submitted to your doctor\'s portal.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Medical Form Signer',
  description: 'Sign patient intake forms, HIPAA releases, and medical consent documents securely with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-medical-form-online',
  applicationCategory: 'HealthcareApplication',
});

const faqItems = [
  {
    question: "Is this tool HIPAA compliant?",
    answer: "Yes. Because our tool runs 100% locally in your web browser, your Protected Health Information (PHI) is never uploaded, transmitted, or stored on our servers. This local processing model inherently satisfies strict data privacy requirements."
  },
  {
    question: "Can I fill out my medical history as well as sign?",
    answer: "Absolutely. You can use the built-in Text Tool to type out your medical history, check boxes, and add your contact information before placing your signature."
  },
  {
    question: "Do hospitals accept electronic signatures?",
    answer: "Yes. Almost all modern healthcare providers, clinics, and hospitals accept ESIGN-compliant digital signatures for patient intake and HIPAA authorization."
  },
  {
    question: "Will my doctor be able to read the form clearly?",
    answer: "Yes, our tool exports high-resolution PDFs without any quality loss, ensuring your typed notes and signatures are perfectly legible."
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
            <span>Healthcare Privacy · Zero Server Uploads</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Medical Forms <span className={styles.seoHeroGradient}>Securely</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Prioritize your health data privacy. <strong>Sign patient intake forms, HIPAA releases, and medical consent documents</strong> directly in your browser. Your sensitive medical history never touches our servers.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Protects Health Data</span></li>
            <li><Lock size={14} /><span>Local Processing Only</span></li>
            <li><FileCheck size={14} /><span>HIPAA Privacy Compliant</span></li>
            <li><Users size={14} /><span>No Registration Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Medical Form</span>"
        descriptionOverride="Create your signature. Once adopted, upload your health document securely."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Fill Out and Sign Patient Forms
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Generate Signature</h3>
              <p>Type your name or draw it on-screen to create your medical authorization.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load PDF Locally</h3>
              <p>Drop your <strong>health form</strong> into the browser. It never uploads to the cloud.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Fill & Authorize</h3>
              <p>Use the text tool to fill in medical history, then place your signature.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Save & Submit</h3>
              <p>Download the finalized document and upload it to your patient portal.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>The Safe Way to Sign HIPAA Releases and Intake Forms</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Before visiting a new doctor or specialist, you are often asked to fill out complex patient intake packets and HIPAA privacy authorizations. Being able to <strong>sign medical forms online</strong> saves time in the waiting room, but it raises serious questions about data security.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Medical forms contain highly sensitive Protected Health Information (PHI), including your Social Security Number, medical history, and emergency contacts. Uploading these forms to a standard, cloud-based PDF editor is incredibly risky, as those platforms often store your documents on their servers indefinitely, leaving you vulnerable to data breaches.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              MyDigitSign was built with this exact threat model in mind. Our platform operates entirely client-side. When you drag your medical form into the browser, it is processed locally in your device&apos;s RAM. The text you add and the signature you apply are merged locally. Zero bytes of your health data are ever transmitted to our network.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Filling Out Complex Medical Histories
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Medical intake packets are rarely just a single signature. You often need to fill out pages of medical history, check boxes for previous conditions, and list current medications. Alongside our signature tool, MyDigitSign provides a robust PDF annotation suite. You can easily type text anywhere on the document and add digital checkmarks, allowing you to complete the entire packet in one secure session.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Privacy Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-consent-form-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign General Consent <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Password Protect Medical Form <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Free Private PDF Editor <ArrowRight size={14}/></Link></li>
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
