import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Waiver Online Free — Liability & Release Forms | MyDigitSign',
  description: 'Sign liability waivers, event releases, and fitness participation forms online for free. Provide legal consent securely without printing any documents.',
  keywords: ["sign waiver online", "sign liability release", "event waiver signature", "fitness waiver online", "sign release form"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-waiver-online',
  },
  openGraph: {
    title: 'Sign Waiver Online Free — Liability & Release Forms | MyDigitSign',
    description: 'Sign liability waivers, event releases, and fitness participation forms online for free. Provide legal consent securely without printing any documents.',
    url: 'https://mydigitsign.com/tools/sign-waiver-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Waiver Online', url: '/tools/sign-waiver-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Liability Waiver Online',
  description: 'Sign your event release or fitness liability waiver electronically to assume risk and provide legal consent.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  steps: [
    {
      name: 'Create Your Consent Signature',
      text: 'Type your full legal name or draw your signature on the screen to establish your intent to sign.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Load the Liability Form',
      text: 'Drag your waiver PDF into the browser. It processes locally, keeping your emergency contacts and personal details private.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Sign to Assume Risk',
      text: 'Place your signature on the participant line. Use the text tool to fill in the date and your emergency contact information.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Download and Return',
      text: 'Download the finalized waiver and email it to the event organizer, gym, or activity coordinator.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Waiver Signer',
  description: 'Sign liability waivers, event releases, and fitness participation forms online for free.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Is an electronic signature valid for a liability waiver?",
    answer: "Yes, electronic signatures on liability waivers and release forms are fully enforceable under the ESIGN Act, provided you have clearly indicated your intent to sign."
  },
  {
    question: "How do I sign a waiver for my child?",
    answer: "Simply create a signature with your own name, place it on the 'Parent/Guardian Signature' line, and use our Text tool to type your child's name in the participant section."
  },
  {
    question: "Is this secure for entering my emergency contact info?",
    answer: "Yes. Because our tool does not upload your documents to any external server, any emergency contact numbers or medical details you add remain completely private on your device."
  },
  {
    question: "Can I sign a waiver on my smartphone before an event?",
    answer: "Absolutely. You can open MyDigitSign in Safari or Chrome on your phone, upload the PDF, sign with your finger, and email it to the event coordinator right at the door."
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
            <span>Fast · ESIGN Compliant · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Liability Waivers <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Ready to participate? Instantly <strong>sign liability waivers, fitness agreements, and event release forms</strong> directly from your browser or mobile phone. No printing required.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Emergency Info Kept Private</span></li>
            <li><Lock size={14} /><span>No Cloud Uploads</span></li>
            <li><FileCheck size={14} /><span>Legally Binding Consent</span></li>
            <li><Users size={14} /><span>Free — No Account Needed</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="draw"
        titleOverride="Sign Your <span>Release Waiver</span>"
        descriptionOverride="Create your signature to assume risk. Once adopted, upload your waiver PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a Liability Waiver Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Generate Signature</h3>
              <p>Type your legal name or draw your signature to provide consent.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Form</h3>
              <p>Drop your <strong>release waiver PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Assume Risk</h3>
              <p>Place your signature on the Participant line and fill in the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Save & Submit</h3>
              <p>Download the finalized document and send it to the organizer.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Secure Electronic Signatures for Event and Fitness Waivers</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Whether you are joining a new gym, participating in a marathon, or sending your child to a trampoline park, you will inevitably need to sign a liability release. Instead of dealing with the hassle of printing and scanning, you can <strong>sign waiver online</strong> instantly using your computer or smartphone.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A liability waiver is a legal contract where you acknowledge and assume the risks of an activity. Because they are binding contracts, the ESIGN Act guarantees that electronic signatures applied to these waivers are fully enforceable in court. 
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              While signing a waiver seems routine, the forms often ask for your address, phone number, and emergency contact details. Submitting this personal information through generic online PDF editors exposes your data to third-party cloud storage. MyDigitSign processes the waiver entirely locally within your browser, ensuring your private contact details never leave your device.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Signing for Minors (Parental Guardian Waivers)
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              If you are authorizing a minor to participate in an activity, you will usually need to sign as the parent or legal guardian. Using our built-in Text Tool, you can easily type the minor&apos;s name into the "Participant Name" field, and then drag your own signature onto the "Guardian Signature" line to properly execute the release.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Consent Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-consent-form-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Consent Forms <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-medical-form-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Medical Releases <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/draw-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Draw Signature Online <ArrowRight size={14}/></Link></li>
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
