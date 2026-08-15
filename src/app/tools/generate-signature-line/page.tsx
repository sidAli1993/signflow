import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Signature Line Generator Free — Create Signature Lines for Documents | MyDigitSign',
  description:
    'Generate professional signature lines for Word, Google Docs, and PDF documents. Create "Sign Here" lines with customizable labels like By:, Its:, and Date:. 100% free, no account needed.',
  keywords: [
    'signature line',
    'signature line generator',
    'line for signature',
    'signature line in docs',
    'electronic signature line',
    'how to insert signature line',
    'signature line meaning',
    'signature line on document',
    'signature line definition',
    'what does /s/ mean on a signature line',
    'create signature line',
    'generate signature line',
    'sign here line',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/generate-signature-line',
  },
  openGraph: {
    title: 'Signature Line Generator Free — Create Signature Lines for Documents | MyDigitSign',
    description:
      'Generate professional signature lines for Word, Google Docs, and PDF documents. Create "Sign Here" lines with customizable labels. 100% free.',
    url: 'https://mydigitsign.com/tools/generate-signature-line',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Signature Line Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Line Generator Free — Create Signature Lines | MyDigitSign',
    description:
      'Generate professional signature lines for Word, Google Docs, and PDF documents. Create "Sign Here" lines with customizable labels. Free, no account.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Signature Line Generator', url: '/tools/generate-signature-line' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Generate a Signature Line for Documents',
  description: 'Create a professional signature block with labeled lines for any document — contracts, NDAs, agreements, or forms. Download and paste into Word, Google Docs, or PDF.',
  url: 'https://mydigitsign.com/tools/generate-signature-line',
  steps: [
    {
      name: 'Choose Your Signature Style',
      text: 'Select a typed or drawn signature. Type your full name in cursive or draw your signature freehand with your mouse, stylus, or finger.',
      url: 'https://mydigitsign.com/tools/generate-signature-line',
    },
    {
      name: 'Adopt Your Signature',
      text: 'Click the Adopt button to save your signature. This creates a clean transparent signature image ready for placement.',
      url: 'https://mydigitsign.com/tools/generate-signature-line',
    },
    {
      name: 'Upload Your Document',
      text: 'Drag and drop your PDF, Word, or image file into the uploader. The file stays in your browser — nothing is uploaded to any server.',
      url: 'https://mydigitsign.com/tools/generate-signature-line',
    },
    {
      name: 'Place on Signature Line & Download',
      text: 'Drag your signature to the signature line area on your document. Resize to fit, then click Download to save the signed document.',
      url: 'https://mydigitsign.com/tools/generate-signature-line',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Signature Line Generator',
  description: 'Generate and place professional signature lines on PDF documents, Word files, and images. Create typed or handwritten digital signatures directly in your browser.',
  url: 'https://mydigitsign.com/tools/generate-signature-line',
  applicationCategory: 'BusinessApplication',
});

export default function GenerateSignatureLineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Signature Line Generator">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Signature Line Tool · Works in Any Browser · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Signature Line Generator <span className={styles.seoHeroGradient}>Free Online Tool</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to add a <strong>signature line</strong> to your document? Create professional &ldquo;Sign Here&rdquo; blocks with your typed or drawn digital signature. Our tool works with PDFs, Word documents, and image files — all processed locally in your browser with zero server uploads.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% Local Processing</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>PDF, Word & Image Support</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Instant Download</span></li>
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
        titleOverride="Place Your <span>Signature</span>" 
        descriptionOverride="Create your digital signature below, then upload the document where you need to place it on the signature line."
      />

      <section className={styles.seoExplainer} aria-label="What is a signature line">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            What Is a Signature Line? (Definition & Meaning)
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            A <strong>signature line</strong> is the designated space on a document where a person signs their name. It typically appears as a horizontal line — often preceded by an &ldquo;X&rdquo; or label like &ldquo;Sign Here&rdquo; — near the bottom of contracts, agreements, NDAs, and official forms. The signature line tells the signer exactly where to place their handwritten or electronic signature.
          </p>

          <div style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', borderLeft: '4px solid #0ea5e9', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
            <p style={{ margin: '0 0 0.5rem', fontWeight: 700, fontSize: '1rem', color: '#0369a1' }}>⚡ Quick Answer</p>
            <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.6 }}>A <strong>signature line</strong> is the horizontal &ldquo;sign here&rdquo; space on any document — contracts, NDAs, leases, or forms. It marks where you place your handwritten or electronic signature. Common labels include &ldquo;By:&rdquo;, &ldquo;Its:&rdquo;, and &ldquo;/s/&rdquo; for typed electronic signatures.</p>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2.5rem' }}>
            What Does /s/ Mean on a Signature Line?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            The notation <strong>/s/</strong> on a signature line stands for &ldquo;signed.&rdquo; It indicates that a person has typed their name as an electronic signature rather than physically signing with ink. For example, <em>/s/ Jane Smith</em> means Jane Smith electronically signed the document by typing her name. This format is widely used in legal filings, court documents, and electronic contracts where a handwritten signature is impractical.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Under the <strong>ESIGN Act</strong> and <strong>UETA</strong>, a typed /s/ signature carries the same legal weight as a handwritten signature for most commercial and business transactions. However, some documents — like wills, certain real estate deeds, and court filings in specific jurisdictions — may still require a wet (ink) signature.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2.5rem' }}>
            What Do &ldquo;By:&rdquo; and &ldquo;Its:&rdquo; Mean on a Signature Line?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            In business contracts, you often see a signature block with three labeled lines:
          </p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li><strong>By:</strong> — The actual signature of the person signing (their handwritten or electronic signature)</li>
            <li><strong>Its:</strong> — The title or role of the signer (e.g., &ldquo;CEO&rdquo;, &ldquo;Managing Partner&rdquo;, &ldquo;Authorized Representative&rdquo;)</li>
            <li><strong>Name:</strong> or <strong>Print Name:</strong> — The signer&rsquo;s full legal name printed clearly</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            These labels ensure that the document clearly identifies who signed, in what capacity, and with what authority — which is critical if the agreement is ever challenged in court.
          </p>

          <div className={styles.seoStepsGrid} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoExplainerTitle}>
              How to Add a Signature Line to Your Document
            </h2>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Type your name in cursive using our professional fonts, or draw your signature freehand with your mouse or touchscreen. Click Adopt to save it.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Document</h3>
              <p>
                Drag and drop any PDF, Word document, or image file. Your file is processed locally in your browser — nothing is uploaded to any server.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Place & Download</h3>
              <p>
                Drag your signature to the signature line, resize it to fit, and click Download. Your signed document is ready in seconds.
              </p>
            </article>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>📝 Signature Lines in Word</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                Microsoft Word has a built-in signature line feature under the Insert tab. However, it requires a digital certificate and can be confusing. Our tool lets you simply place your signature on any Word document without certificates or plugins. Read our guide on <a href="/blog/how-to-add-signature-in-word" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>how to add a signature in Word</a>.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>📄 Signature Lines in PDFs</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                PDF signature lines are commonly found in contracts, tax forms, and legal agreements. Use our <a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>Sign PDF Online</a> tool to place your digital signature directly on the designated line — no printing or scanning required.
              </p>
            </div>
          </div>

          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Is an Electronic Signature on a Signature Line Legally Valid?</h2>
            <p className={styles.seoCompareDesc}>
              Yes. Under the US federal <strong>ESIGN Act (2000)</strong>, state-level <strong>UETA</strong> laws, and the European Union&apos;s <strong>eIDAS</strong> regulation, an electronic signature placed on a document&apos;s signature line is legally binding for the vast majority of personal, business, and commercial transactions.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              The key legal requirement is <strong>intent to sign</strong> — the person must demonstrably intend to adopt the signature. Placing a signature on a clearly marked signature line satisfies this requirement. Learn more in our comprehensive guide: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding?</a>
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>What is a signature line on a document?</h3>
                <p>A signature line is the designated horizontal line or space where a person signs their name on contracts, forms, NDAs, or agreements. It usually includes labels like &ldquo;Signature,&rdquo; &ldquo;By:,&rdquo; or &ldquo;Sign Here&rdquo; to clearly indicate where the signature should go.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What does /s/ mean on a signature line?</h3>
                <p>The /s/ notation means &ldquo;signed.&rdquo; It indicates that a person typed their name as an electronic signature instead of signing with ink. For example, &ldquo;/s/ John Doe&rdquo; means John Doe electronically signed the document. This is legally valid under the ESIGN Act and UETA for most transactions.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I insert a signature line in Microsoft Word?</h3>
                <p>In Word, go to Insert → Signature Line (in the Text group). However, this requires a digital certificate. A simpler method is to upload your Word document to our free tool, create your signature, and place it on the signature line — no certificate needed.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I create a signature line in Google Docs?</h3>
                <p>Google Docs doesn&rsquo;t have a built-in signature line feature. You can insert a horizontal line using Insert → Horizontal Line, but for actual electronic signing, export your Doc as a PDF and use our <a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF tool</a>.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is a typed /s/ signature legally binding?</h3>
                <p>Yes. Under the ESIGN Act and UETA, a typed /s/ signature is legally equivalent to a handwritten signature for most commercial transactions. Exceptions include wills, certain real estate transfers, and court-specific filings that may require wet ink signatures.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the difference between a signature line and a signature block?</h3>
                <p>A signature line is just the horizontal line where you sign. A signature block is the entire section that includes the signature line plus labels for your printed name, title (Its:), date, and sometimes company name. Formal business contracts typically use full signature blocks.</p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/sign-word-document" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Word Document →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/tools/sign-nda-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign NDA Online Free →</a></li>
              <li><a href="/blog/what-is-a-signature-line" style={{ color: 'var(--color-primary, #4f46e5)' }}>What Is a Signature Line? →</a></li>
              <li><a href="/blog/how-to-add-signature-in-word" style={{ color: 'var(--color-primary, #4f46e5)' }}>Add Signature in Word →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
