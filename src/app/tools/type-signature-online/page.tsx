import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { RatingBadge } from '@/components/marketing/RatingBadge';
import { getSoftwareAppSchema, getBreadcrumbSchema, getFAQSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Type Signature Online Free — Cursive Font Signature Maker | MyDigitSign',
  description:
    'Type your name to create beautiful cursive signatures online for free. Select from multiple professional handwriting fonts and download your transparent PNG.',
  keywords: [
    'type signature online',
    'cursive signature maker',
    'cursive font signature maker',
    'signature generator',
    'type my signature',
    'type signature free',
    'signature font creator'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/type-signature-online',
  },
  openGraph: {
    title: 'Type Signature Online Free — Cursive Font Signature Maker | MyDigitSign',
    description:
      'Type your name to create beautiful cursive signatures online for free. Select from multiple professional handwriting fonts and download your transparent PNG.',
    url: 'https://mydigitsign.com/tools/type-signature-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Type Signature Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type Signature Online Free — Cursive Font Signature Maker | MyDigitSign',
    description:
      'Type your name to create beautiful cursive signatures online for free. Select from multiple professional handwriting fonts and download your transparent PNG.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Type Signature Online', url: '/tools/type-signature-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Type Signature Tool',
  description: 'Free cursive font signature generator. Type your name and instantly create beautiful electronic signatures.',
  url: 'https://mydigitsign.com/tools/type-signature-online',
  applicationCategory: 'BusinessApplication',
  rating: { ratingValue: '4.9', ratingCount: '87' },
});

// HowTo schema — enables Google rich results for "how to type signature online"
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'How to Type a Signature Online Free Using Cursive Fonts',
  'description': 'Generate a professional cursive signature by typing your name, selecting a font, and downloading or placing it on a document instantly.',
  'totalTime': 'PT1M',
  'tool': [
    { '@type': 'HowToTool', 'name': 'MyDigitSign Type Signature Tool' },
    { '@type': 'HowToTool', 'name': 'Web Browser (any modern browser)' },
  ],
  'step': [
    {
      '@type': 'HowToStep',
      'position': 1,
      'name': 'Type Your Name',
      'text': 'Enter your full name or initials in the text field. The generator renders live previews of your signature across multiple cursive font styles.',
      'url': 'https://mydigitsign.com/tools/type-signature-online',
    },
    {
      '@type': 'HowToStep',
      'position': 2,
      'name': 'Select a Cursive Font',
      'text': 'Choose from professional handwriting fonts: Dancing Script, Pacifico, Great Vibes, or Caveat. Each creates a unique signature style.',
      'url': 'https://mydigitsign.com/tools/type-signature-online',
    },
    {
      '@type': 'HowToStep',
      'position': 3,
      'name': 'Choose a Color',
      'text': 'Select Black, Blue, or Red to match your document\'s signature field requirements.',
      'url': 'https://mydigitsign.com/tools/type-signature-online',
    },
    {
      '@type': 'HowToStep',
      'position': 4,
      'name': 'Download or Apply to Document',
      'text': 'Click Adopt to place your signature directly on a PDF, or download a transparent PNG to use in Word, Google Docs, or email.',
      'url': 'https://mydigitsign.com/tools/type-signature-online',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How do I create a typed signature online?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Simply type your name into the text box on MyDigitSign. The signature generator will automatically render your name using several professional cursive fonts. Pick the style you like, choose a color, and download it.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is a typed signature legally valid?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Under the ESIGN Act and similar international laws, a typed electronic signature is fully legally binding as long as there is intent to sign and it is logically associated with the document.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Are these signature fonts free to use?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, the cursive fonts used by the generator (such as Dancing Script, Pacifico, Great Vibes, and Caveat) are open-source and free for both personal and commercial use on your documents.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does the signature generator store my name?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. The type signature generator works entirely in your web browser. Your name is never sent to our servers or stored anywhere. The transparent PNG is generated locally on your device.'
      }
    }
  ]
};

export default function TypeSignatureTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Type Signature Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Cursive Maker · Multiple Script Fonts · Instant Export</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Type Signature Online <span className={styles.seoHeroGradient}>Free Cursive Generator</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>type signature online</strong> using professional cursive fonts? Our free handwriting generator creates transparent vector signature images instantly from your keyboard inputs. Choose from gorgeous cursive script styles (Dancing Script, Pacifico, Great Vibes, Caveat), customize colors, and download your PNG file, or adopt it to edit and sign PDFs instantly.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Multiple Cursive Fonts</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>100% Secure &amp; Private</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>High Resolution PNG Export</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Adopt to Sign PDFs</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Email Required</span></li>
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
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeClient 
        initialTab="type" 
        titleOverride="Type Your Free <span>Digital Signature</span>" 
        descriptionOverride="Type your name below, choose a cursive signature script style, pick a color, and click Adopt to place it on a document or download as PNG."
      />

      <section className={styles.seoExplainer} aria-label="How to type cursive signature online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Generate a Cursive Type Signature
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Type Your Name</h3>
              <p>
                Enter your full name or initials in the generator text box above. Our tool renders your input in real-time across multiple professional handwriting styles and script fonts.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Choose Font &amp; Color</h3>
              <p>
                Select your preferred cursive script style (Dancing Script, Pacifico, Great Vibes, or Caveat) and pick a signature color (classic black, document blue, or red).
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Download or Apply</h3>
              <p>
                Click 'Download' to save a transparent high-resolution PNG, or click 'Adopt' to insert the signature directly onto a PDF contract inside our secure, client-side editor.
              </p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              How to Use Your Downloaded PNG Signature
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              When you download your signature, it is saved as a transparent PNG image file. This format allows you to insert it cleanly over colored lines and document backgrounds without any white box borders.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>📝 Microsoft Word</h4>
                <ol style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                  <li>Go to <strong>Insert → Pictures → This Device</strong> and select the downloaded PNG file.</li>
                  <li>Click on the image, and go to the <strong>Picture Format</strong> menu.</li>
                  <li>Click <strong>Wrap Text → In Front of Text</strong> so you can drag the signature freely.</li>
                  <li>Position it perfectly over the signature line and resize using the corner handles.</li>
                </ol>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.75rem' }}>
                  Read our full guide on <a href="/blog/how-to-add-signature-in-word" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>how to add a signature in Word</a>.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>🌐 Google Docs</h4>
                <ol style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                  <li>Open your document and place your cursor where you need the signature.</li>
                  <li>Click <strong>Insert → Image → Upload from computer</strong>.</li>
                  <li>Click on the inserted image and choose the <strong>In front of text</strong> layout option.</li>
                  <li>Resize and slide the signature block over the document signature line.</li>
                </ol>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>✉️ Email Signatures</h4>
                <ol style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                  <li>Open your email settings (Gmail, Outlook, or Apple Mail).</li>
                  <li>Find the signature creation section and click the <strong>Insert Image</strong> icon.</li>
                  <li>Upload your transparent PNG signature file.</li>
                  <li>Resize to 'Small' or 'Medium' so it fits naturally at the end of your emails.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Why Use a Typed Cursive Signature vs. Drawing?</h2>
            <p className={styles.seoCompareDesc}>
              Drawing a signature with a mouse, trackpad, or finger can be incredibly frustrating. The results are often shaky, jagged, and unprofessional. A <strong>cursive signature maker</strong> provides a clean, elegant, and consistent autograph every single time.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              Typed signatures are highly accessible, fast, and look like genuine pen-and-paper handwriting. They are particularly useful for desktop users who lack touchscreens or styluses. If you prefer drawing, you can easily switch to our <a href="/tools/draw-signature-online">Draw Signature Online tool</a>, or upload a photo using our <a href="/tools/sign-image-online">Sign Image Online tool</a>.
            </p>
          </div>

          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Is a Typed Signature Legally Valid?</h2>
            <p className={styles.seoCompareDesc}>
              Yes, absolutely. Under the federal <strong>ESIGN Act (2000)</strong> and the <strong>Uniform Electronic Transactions Act (UETA)</strong> in the United States, as well as the <strong>eIDAS</strong> regulations in the European Union, typed signatures carry the exact same legal weight as handwritten wet-ink signatures.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              Legally, an electronic signature is defined as "any electronic sound, symbol, or process attached to or logically associated with a contract and executed with the intent to sign." Typing your name and choosing to place it on a document fully satisfies this definition. For a complete legal analysis, read our guide on <a href="/blog/are-electronic-signatures-legally-binding">are electronic signatures legally binding</a>.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>How do I create a typed signature online?</h3>
                <p>Simply type your name into the text box above. Our signature generator will automatically render your name using several professional cursive fonts. Pick your favorite style, choose a color, and click Adopt or Download.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is a typed signature legally binding?</h3>
                <p>Yes. Under international e-signature laws, a typed name on a contract or PDF is fully legally binding as long as there is intent to sign the agreement.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are these signature fonts free to use?</h3>
                <p>Yes, all cursive fonts used by the generator (Dancing Script, Pacifico, Great Vibes, and Caveat) are open-source and free for both personal and commercial use on your documents.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Does the signature generator store my name?</h3>
                <p>No. Our tool works 100% in your browser. Your typed name is never sent to our servers. The transparent PNG is generated entirely on your own device ensuring total privacy.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I make my signature look like real handwriting?</h3>
                <p>Our cursive signature maker uses high-quality handwriting fonts designed by typographers to mimic real signatures. Using the dark blue or black ink color options makes it look like it was signed with a physical pen.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign PDFs on my phone using typed signatures?</h3>
                <p>Yes. The tool is fully responsive and touch-optimized. You can type your name on your phone, choose a font, and use the Adopt tool to edit and sign PDFs directly in Safari or Chrome. Read our <a href="/blog/how-to-sign-pdf-on-iphone-android-free">how to sign PDFs on iPhone & Android guide</a> for details.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I type my signature on a Word document?</h3>
                <p>You can type your name directly in Word and apply a cursive font like Segoe Script. However, to prevent unauthorized edits, it is best to export the Word file as a PDF and sign it using MyDigitSign. Review <a href="/blog/how-to-add-signature-in-word">how to add a signature in Word</a>.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the difference between an e-signature and a digital certificate?</h3>
                <p>An e-signature is a visual representation of your agreement on a page (like a typed or drawn signature). A digital certificate is a cryptographic file that locks the document data to prevent tampering. Learn more in our <a href="/blog/free-digital-signature-certificate">free digital signature certificate guide</a>.</p>
              </div>
            </div>
          </div>

          {/* User Reviews */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <RatingBadge rating={4.9} count={87} />
            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#ffffff', padding: '1.1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '0.9rem', color: '#334155', margin: '0 0 0.75rem', lineHeight: 1.6 }}>"The cursive fonts here are gorgeous! I created a perfectly professional signature for my emails in literally 10 seconds."</p>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  <strong style={{ color: '#0f172a' }}>David L.</strong> · Verified User
                </div>
              </div>
            </div>
          </div>

          {/* Internal links — Phase 2 internal linking strategy */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-word-document" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Word Document Online →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Edit PDF Fields Online →</a></li>
              <li><a href="/blog/how-to-sign-nda-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Sign an NDA Online →</a></li>
              <li><a href="/blog/how-to-ask-someone-to-sign-nda" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Ask Someone to Sign an NDA →</a></li>
              <li><a href="/blog/create-digital-signature-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Create Digital Signature Free →</a></li>
              <li><a href="/blog/how-to-sign-pdf-on-iphone-android-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF on iPhone &amp; Android →</a></li>
              <li><a href="/how-it-works" style={{ color: 'var(--color-primary, #4f46e5)' }}>How It Works →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
