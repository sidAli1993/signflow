import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign NDA Online Free — No Account, No Upload | MyDigitSign',
  description:
    'Sign any NDA (Non-Disclosure Agreement) online for free. Upload your NDA PDF, draw or type your signature, and download the signed document instantly. 100% browser-based — your files never leave your device.',
  keywords: [
    'sign nda online',
    'sign nda free',
    'easy esign nda',
    'electronic signature nda',
    'sign nda online free',
    'nda signature',
    'sign non disclosure agreement',
    'esign nda free',
    'nda signing tool',
    'sign nda pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-nda-online',
  },
  openGraph: {
    title: 'Sign NDA Online Free — No Account, No Upload | MyDigitSign',
    description:
      'Sign any NDA online for free. Upload your NDA PDF, create your signature, place it, and download. 100% private — your files never leave your browser.',
    url: 'https://mydigitsign.com/tools/sign-nda-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Sign NDA Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign NDA Online Free — No Account, No Upload | MyDigitSign',
    description:
      'Sign any NDA online for free. 100% browser-based, your files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign NDA Online', url: '/tools/sign-nda-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign an NDA Online for Free',
  description: 'Sign any Non-Disclosure Agreement electronically in your browser. No account needed, no files uploaded to servers.',
  url: 'https://mydigitsign.com/tools/sign-nda-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name in cursive, draw your signature freehand with your mouse or touchscreen, or upload a photo of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
    {
      name: 'Upload Your NDA Document',
      text: 'Drag and drop your NDA PDF file into the browser uploader. The document is processed entirely in your browser memory — nothing is sent to any external server.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
    {
      name: 'Place Your Signature on the NDA',
      text: 'Navigate to the signature page of your NDA. Drag your signature to the correct signature line, resize it to fit naturally, and add the date if required.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
    {
      name: 'Download Your Signed NDA',
      text: 'Click Download to save the signed NDA to your device. You can then email it back to the requesting party or upload it to your shared workspace.',
      url: 'https://mydigitsign.com/tools/sign-nda-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign NDA Signing Tool',
  description: 'Sign Non-Disclosure Agreements online for free. Add electronic signatures to NDA PDF documents directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-nda-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignNDAOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign NDA Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free NDA Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign NDA Online <span className={styles.seoHeroGradient}>Free & Private</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign an NDA</strong> quickly? Upload your Non-Disclosure Agreement PDF, create your electronic signature, place it on the signature line, and download the signed document — all in under 60 seconds. Your NDA never leaves your browser. No account, no uploads, no watermarks.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>NDA Stays in Your Browser</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>ESIGN Act Compliant</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Done in Under 60 Seconds</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <HomeClient 
        initialTab="type" 
        titleOverride="Sign Your <span>NDA Document</span>" 
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the NDA PDF you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign an NDA online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign an NDA Online (Step-by-Step)
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Type your full legal name in cursive, draw freehand with your mouse, or upload a scan of your handwritten signature. Click Adopt to save.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your NDA</h3>
              <p>
                Drag and drop your NDA PDF directly into the uploader. The file stays in your browser&apos;s local memory — it is never uploaded to any server.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>
                Navigate to the signature page, place your signature on the line, add the date if needed, and click Download. Send your signed NDA back via email.
              </p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Why Sign NDAs with a Client-Side Tool?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              NDAs contain some of the most sensitive business information — trade secrets, proprietary processes, client lists, and financial terms. Uploading these documents to cloud-based e-signature platforms like DocuSign, HelloSign, or PandaDoc means your confidential NDA content passes through third-party servers.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
              MyDigitSign takes a fundamentally different approach. Your NDA is processed entirely inside your browser&apos;s local memory using client-side JavaScript and PDF-Lib. The file never leaves your device, eliminating any risk of server-side data exposure. This makes our tool ideal for attorneys, startups, freelancers, and anyone handling confidential agreements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>📧 How to Ask Someone to Sign Your NDA</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                Sending an NDA request can feel awkward, but a professional email makes all the difference. We&apos;ve written a complete guide with copy-paste email templates: <a href="/blog/how-to-ask-someone-to-sign-nda" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>How to Ask Someone to Sign an NDA</a>.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>🔒 Protect Your Signed NDA</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                After signing your NDA, consider encrypting it with a password before emailing it. Use our <a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>Protect PDF tool</a> to add AES-256 encryption — right in your browser.
              </p>
            </div>
          </div>

          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Are Electronically Signed NDAs Legally Binding?</h2>
            <p className={styles.seoCompareDesc}>
              Yes. Under the US <strong>ESIGN Act (2000)</strong> and state-level <strong>UETA</strong> laws, electronically signed Non-Disclosure Agreements are just as legally enforceable as NDAs signed with pen and paper. The European Union&apos;s <strong>eIDAS</strong> regulation provides similar recognition across all EU member states.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              The legal requirement is straightforward: both parties must intend to sign, and the signature must be logically associated with the document. Placing your electronic signature on the NDA&apos;s designated signature line satisfies both requirements. Read our full legal guide: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding?</a>
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign an NDA online for free?</h3>
                <p>Yes. MyDigitSign lets you sign any NDA PDF for free with no account, no uploads, and no watermarks. Simply create your signature, upload your NDA, place your signature on the signature line, and download the signed document.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my NDA safe when I sign it online?</h3>
                <p>With MyDigitSign, your NDA never leaves your device. Unlike cloud-based tools like DocuSign or HelloSign, we process everything in your browser&apos;s local memory. Zero server contact means zero risk of your confidential agreement being exposed.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need both parties to sign at the same time?</h3>
                <p>No. You can sign your portion, download the PDF, and email it to the other party. They can then open it in MyDigitSign, add their own signature, and complete the NDA. Each person signs independently.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What types of NDAs can I sign with this tool?</h3>
                <p>Any NDA in PDF format — unilateral NDAs, mutual (bilateral) NDAs, multilateral NDAs, employee NDAs, contractor NDAs, investor NDAs, and more. If it&apos;s a PDF, you can sign it here.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign an NDA on my phone?</h3>
                <p>Yes. Open this tool in Safari (iPhone) or Chrome (Android), upload your NDA, draw your signature with your finger, and download. Our tool is fully responsive and works on all mobile devices.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I send an NDA for someone else to sign?</h3>
                <p>Sign your portion first, download the signed PDF, and email it to the other party with instructions to sign using MyDigitSign. For professional email templates, read our guide on <a href="/blog/how-to-ask-someone-to-sign-nda" style={{ color: 'var(--color-primary, #4f46e5)' }}>how to ask someone to sign an NDA</a>.</p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Protect PDF with Password →</a></li>
              <li><a href="/tools/generate-signature-line" style={{ color: 'var(--color-primary, #4f46e5)' }}>Signature Line Generator →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/blog/how-to-ask-someone-to-sign-nda" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Ask Someone to Sign NDA →</a></li>
              <li><a href="/blog/how-to-sign-nda-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Sign NDA Online →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
