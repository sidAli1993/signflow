import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Medical Form Online Free — Patient Consent & HIPAA | MyDigitSign',
  description: 'Sign medical consent, HIPAA authorization, and patient intake forms online securely. Understand your patient rights before signing. 100% local processing — your health data never uploads.',
  keywords: ["sign medical form online", "HIPAA authorization signature", "patient consent form online", "sign medical release online", "HIPAA form signature", "patient rights before signing", "sign patient intake form"],
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
    question: "What should I read before signing a HIPAA Authorization form?",
    answer: "A HIPAA Authorization to Release Medical Information must specify: (1) what Protected Health Information (PHI) is being shared, (2) who can receive it, (3) the purpose, (4) an expiration date, and (5) a statement of your right to revoke in writing. If any of these elements are missing or vague, you can legally refuse to sign until the form is corrected."
  },
  {
    question: "Can I refuse to sign a hospital's intake form?",
    answer: "You can refuse to sign non-required documents. However, refusing to sign a treatment consent form may mean the provider cannot legally treat you except in emergencies. Refusing to sign a hospital's financial responsibility form may affect your billing. Ask which forms are required for treatment and which are optional."
  },
  {
    question: "What is informed consent in medicine?",
    answer: "Informed consent means you understand and voluntarily agree to a medical procedure after being given clear information about: what the procedure involves, its risks and benefits, available alternatives, and what happens if you decline. Signing a medical consent form without receiving this information does not constitute valid informed consent under medical law."
  },
  {
    question: "Can I dispute information on a medical form after signing?",
    answer: "Under HIPAA, you have the right to request an amendment to your medical records if you believe they contain incorrect information. You can submit an amendment request in writing to the healthcare provider, who has 60 days to respond."
  },
  {
    question: "Is my health data safe when I sign using MyDigitSign?",
    answer: "Yes. MyDigitSign processes your medical forms entirely in your browser's local memory. Your Protected Health Information (PHI) — diagnoses, medications, test results — is never uploaded to our servers, making it one of the most HIPAA-aligned signing approaches available."
  },
  {
    question: "Can I sign on behalf of an elderly parent or incapacitated person?",
    answer: "Yes, if you are the designated healthcare proxy, durable power of attorney for healthcare, or legal guardian. Sign your own name and clearly indicate your representative capacity (e.g., 'Jane Smith, as Healthcare Proxy for John Smith')."
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
            <h2 className={styles.seoArticleTitle}>Know Before You Sign: Patient Rights and 6 Things to Check in Every Medical Form</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Medical forms are not merely administrative paperwork — they carry serious legal weight. From HIPAA authorizations that govern who can access your health records, to surgical consent forms that define the boundaries of a procedure, the documents you <strong>sign medical form online</strong> or on paper can have lasting consequences for your healthcare, finances, and privacy.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              1. What Constitutes Valid Informed Consent?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              <strong>Informed consent</strong> is one of the foundational principles of medical ethics and law. Before a provider can perform a procedure, they must ensure you have received adequate information and voluntarily agreed. Valid informed consent requires all four of these elements:
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              (1) <strong>Disclosure</strong>: You were told what the procedure is, its purpose, how it is performed, and its expected outcomes. (2) <strong>Comprehension</strong>: You actually understood the information, not just received it. If forms are presented in a language you don&apos;t speak fluently, you have the right to an interpreter. (3) <strong>Voluntariness</strong>: Your agreement was not coerced. (4) <strong>Decision-making capacity</strong>: You were mentally competent to make the decision at the time of signing.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If you were rushed to sign, given no time to ask questions, or the form was presented as non-negotiable boilerplate with no explanation, your consent may not meet the legal standard of &quot;informed.&quot;
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              2. Understanding HIPAA Authorization vs. Treatment Consent
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              These are two distinct types of medical forms that are often confused:
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A <strong>Treatment Consent</strong> form authorizes a provider to perform a specific medical procedure. You must sign this for most elective and non-emergency procedures.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A <strong>HIPAA Authorization</strong> form authorizes the provider to disclose specific Protected Health Information (PHI) to a named third party — such as an insurance company, an employer, a school, or a specialist. A valid HIPAA Authorization must include: a description of what PHI will be shared, the name of who will receive it, the purpose of disclosure, an expiration date or event, and a statement of your right to revoke the authorization in writing at any time.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              3. Forms You Can Legally Refuse to Sign
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Hospitals and clinics often hand you a large stack of forms at intake. Not all of them are required. You can typically refuse: (a) marketing authorization forms allowing the provider to use your contact info for promotions — these are optional under HIPAA; (b) blanket HIPAA authorizations to share your records with unspecified third parties; (c) financial responsibility forms with terms you have not reviewed.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Ask the intake staff: &quot;Which of these forms are legally required for me to receive treatment?&quot; You have the right to receive a clear answer.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              4. Your Right to Amend Medical Records
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Under HIPAA, you have the right to request an amendment to your medical records if you believe they contain inaccurate or incomplete information. Submit a written amendment request to the healthcare provider&apos;s HIPAA Privacy Officer. The provider has 60 days to respond (with a possible 30-day extension). If they deny your request, you have the right to file a statement of disagreement that becomes part of your permanent record.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              5. Signing on Behalf of a Dependent or Incapacitated Person
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If you are signing medical forms on behalf of a minor child, an elderly parent, or someone who is temporarily incapacitated, your authority to do so must be documented. For minors, a parent or legal guardian can sign. For adults, you typically need a Durable Power of Attorney for Healthcare or Healthcare Proxy designation. When signing, indicate your representative capacity clearly — for example: &quot;Sarah Jones, as Healthcare Proxy for Robert Jones.&quot;
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Your Health Data Deserves Local-Only Processing
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Medical forms are among the most sensitive documents in existence — they may contain diagnoses, medication lists, surgical history, mental health records, and insurance information. Under HIPAA&apos;s minimum necessary standard, PHI should only be accessed or transmitted to the extent absolutely necessary for the intended purpose. Uploading medical forms to a generic cloud-based PDF signing tool violates this principle, since the server operator receives your health data unnecessarily. MyDigitSign&apos;s client-side architecture ensures that every medical form you upload stays entirely within your local browser environment — your PHI is processed in-memory and never transmitted to our infrastructure.
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
