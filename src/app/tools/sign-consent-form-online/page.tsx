import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Consent Form Online Free — School, Medical & Research | MyDigitSign',
  description: 'Sign consent forms online for free. Covers school field trip forms (FERPA), medical consent (HIPAA), research consent (IRB), photo releases, and data processing consent (GDPR). No uploads.',
  keywords: ["sign consent form online", "electronic signature consent", "sign medical consent form", "school consent form signature", "research consent form", "HIPAA consent form", "FERPA consent"],
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
    question: "Can a parent sign a consent form electronically on behalf of their child?",
    answer: "Yes. For school field trip forms, sports waivers, and medical consents for minors, a parent or legal guardian&apos;s electronic signature carries the same legal weight as a handwritten one under the ESIGN Act. Ensure the form identifies the child by name and the parent as their legal guardian."
  },
  {
    question: "Is an electronic signature valid for HIPAA medical consent forms?",
    answer: "Yes. HIPAA does not prohibit electronic signatures on consent forms. Healthcare providers routinely use e-signed forms for Authorization to Release Medical Information, Treatment Consent, and Research Participation forms. The signature must reflect genuine informed consent."
  },
  {
    question: "What is a photo or model release consent form?",
    answer: "A photo release is a consent form giving a photographer or company the right to use images or videos of a person for commercial, editorial, or social media purposes. It should specify the permitted uses, whether any compensation is involved, and how long the license lasts."
  },
  {
    question: "What does GDPR data processing consent require?",
    answer: "Under GDPR, valid data processing consent must be freely given, specific, informed, and unambiguous. A pre-ticked checkbox does not constitute valid consent. The signed consent form should clearly describe what data is collected, for what purpose, how long it is retained, and who it is shared with."
  },
  {
    question: "Can I revoke a consent I already signed?",
    answer: "In most cases, yes. HIPAA provides patients with the right to revoke authorization in writing. GDPR explicitly grants the right to withdraw consent at any time. For school or sports consent, contact the organizer directly — revocation policies vary by organization."
  },
  {
    question: "Will my child's medical information stay private if I sign this here?",
    answer: "Absolutely. MyDigitSign processes all consent form PDFs locally in your browser. Your child's health information, home address, and emergency contact details are never uploaded to our servers."
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
            <h2 className={styles.seoArticleTitle}>The 5 Types of Consent Forms and What Each Legally Requires</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              &quot;Consent form&quot; is an umbrella term that covers wildly different documents depending on the context. A parent signing a school field trip form has very different legal obligations than a patient consenting to a medical procedure, or a model authorizing commercial photo use. Before you <strong>sign consent form online</strong>, it helps to understand which category your document falls into — and what it specifically obligates you to.
            </p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem', marginTop: '1.5rem' }}>
              {[
                {
                  type: '1. School & Activity Consent Forms (FERPA)',
                  content: 'These are the forms parents sign to authorize participation in field trips, sports, photography in school, or sharing of their child’s educational records. In the US, the Family Educational Rights and Privacy Act (FERPA) gives parents the right to consent before a school discloses their child’s educational records to third parties. A school consent form should clearly name the activity, the dates, any risks involved, and specifically what records (if any) are being shared. A parent or legal guardian’s electronic signature is fully valid for these documents under the ESIGN Act.'
                },
                {
                  type: '2. Medical Consent Forms (HIPAA)',
                  content: 'Medical consent forms authorize healthcare providers to perform a procedure, treatment, or share your Protected Health Information (PHI) with other parties. HIPAA’s Privacy Rule requires that Authorization to Release Medical Information forms include: a specific description of the information to be used or disclosed, who can receive it, the purpose of the disclosure, an expiration date, and a statement of your right to revoke the authorization in writing. Electronic signatures are permitted under HIPAA as long as the document otherwise meets these content requirements.'
                },
                {
                  type: '3. Research Consent Forms (IRB)',
                  content: 'If you are participating in a clinical trial, academic study, or university research project, you will be asked to sign an Institutional Review Board (IRB) approved consent form. These forms are extensive by design: they must explain the purpose of the research, the foreseeable risks, any benefits, alternatives to participation, confidentiality protections, compensation, and your right to withdraw at any time without penalty. Signing electronically is increasingly accepted by IRBs, especially for remote studies.'
                },
                {
                  type: '4. Photo & Model Release Forms',
                  content: 'A photo release consent form gives the photographer, brand, or publisher the right to use your image or likeness for specified purposes. A properly written release specifies: whether use is commercial, editorial, or social media; the geographic territory and duration; whether compensation is paid; and whether you retain any approval rights over final images. Without a signed release, using someone’s likeness commercially can constitute a violation of their right of publicity, leading to significant legal liability.'
                },
                {
                  type: '5. Data Processing Consent (GDPR & CCPA)',
                  content: 'Under the EU’s General Data Protection Regulation (GDPR) and California’s CCPA, collecting personal data requires valid consent in many contexts. GDPR consent must be: freely given (no coercion), specific (limited to a defined purpose), informed (the data subject knows what they are agreeing to), and unambiguous (a clear affirmative act — no pre-ticked checkboxes). A data processing consent form should describe exactly what data is collected, for what purpose, the retention period, who it is shared with, and how the user can withdraw consent.'
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.25rem', background: 'rgba(79,70,229,0.03)', borderRadius: '10px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.6rem' }}>{item.type}</h3>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.content}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Can You Revoke Consent After Signing?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The right to revoke depends on the type of consent form. Under HIPAA, you can revoke your medical authorization in writing at any time, as long as the information has not already been used or disclosed. Under GDPR, you have an explicit right to withdraw data processing consent at any time, and withdrawal must be as easy as giving consent.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              For school or event consent forms, revocation is generally possible by contacting the organizer directly before the event occurs. For signed model releases, revocation is more complex — once images have been published using a valid release, courts typically uphold the original authorization.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Consent Forms Need Extra Privacy Protection When Signing Online
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Medical consent forms contain your health history. School consent forms contain your child&apos;s name, grade, and emergency contact. Research consent forms may contain information about your participation in sensitive health studies. All of these categories of information are subject to strict privacy regulations (HIPAA, FERPA, GDPR). Uploading these documents to a standard cloud-based PDF tool creates a serious compliance risk. MyDigitSign processes every consent form entirely within your browser&apos;s sandboxed local memory — none of the sensitive personal information in your consent document is ever transmitted to our servers, keeping your signing process fully compliant with applicable privacy law.
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
