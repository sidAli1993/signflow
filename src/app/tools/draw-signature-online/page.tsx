import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { RatingBadge } from '@/components/marketing/RatingBadge';

import { getSoftwareAppSchema, getHowToSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
  description:
    'Create an electronic signature free with our online signature generator. Draw your autograph, download a transparent signature image, and sign digital documents instantly.',
  keywords: [
    'draw signature online',
    'online signatures',
    'electronic signature free',
    'free digital signature online',
    'signature generator',
    'signature image',
    'digital documents',
    'send document',
    'type of electronic signature',
    'digital sign with mouse',
    'sign with mouse',
    'create digital signature',
    'electronic signature drawing',
    'signature maker online',
    'sign document online'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/draw-signature-online',
  },
  openGraph: {
    title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
    description:
      'Create an electronic signature free with our online signature generator. Draw your autograph, download a transparent signature image, and sign digital documents instantly.',
    url: 'https://mydigitsign.com/tools/draw-signature-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Draw Signature Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
    description:
      'Create an electronic signature free with our online signature generator. Draw your autograph and sign digital documents instantly.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Draw Signature Online', url: '/tools/draw-signature-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Signature Generator',
  description: 'Create an electronic signature free using mouse or touch input with instant transparent PNG signature image export.',
  url: 'https://mydigitsign.com/tools/draw-signature-online',
  rating: { ratingValue: '4.8', ratingCount: '124' },
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I create a free digital signature online with a mouse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click the Draw tab on MyDigitSign, then drag your cursor on the canvas to sketch your handwritten mark. You can change pen colors, clear the board, and save your signature image as a transparent PNG or apply it directly to PDFs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I download an electronic signature free as a transparent PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After sketching your autograph in our signature generator, click Download PNG to save a high-resolution transparent image. You can insert this graphic into Word documents, Google Docs, invoices, or email footers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of electronic signature is legally valid for signing digital documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freehand drawn online signatures qualify as standard electronic signatures (SES). They carry full legal validity under the ESIGN Act (US), eIDAS (EU), and global e-commerce laws for commercial contracts, NDAs, and business agreements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my handwritten autograph stored on any server after I send document files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All processing happens 100% inside your web browser. Your drawn strokes stay strictly inside your local device memory and disappear when you close your browser tab.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between drawing and typing an electronic signature free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawing produces a freehand autograph unique to your hand movement, whereas typing uses styled cursive typography. Both choices serve as a valid type of electronic signature for signing documents.',
      },
    },
  ],
};

const howToSchema = getHowToSchema({
  name: 'How to Create a Free Digital Signature Online',
  description: 'Sketch a handwritten autograph using a mouse, trackpad, or touchscreen display.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Select the Signature Generator',
      text: 'Open the tool workspace and activate the Draw tab on the canvas.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Sketch Your Autograph',
      text: 'Use your mouse cursor, stylus, or fingertip to render your handwritten mark on the interactive canvas.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Pick Your Ink Shade',
      text: 'Choose black, blue, or red ink depending on your document guidelines.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Save & Send Document',
      text: 'Click Adopt Signature to attach it directly to a PDF, or select Download PNG for a transparent signature image.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
  ],
});

export default function DrawSignatureTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Draw Signature Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Signature Studio · Zero Accounts · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Draw Signature Online <span className={styles.seoHeroGradient}>Free &amp; Private</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need a reliable <strong>signature generator</strong> to sign <strong>digital documents</strong>? Sketch your handwritten mark with a mouse, trackpad, or touchscreen. Create an <strong>electronic signature free</strong> of charge, export a transparent <strong>signature image</strong>, and download or <strong>send document</strong> packages securely in seconds.
          </p>
          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>In-Browser Processing</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Complete Privacy</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Transparent PNG Export</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Instant Results</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Signup Required</span></li>
          </ul>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem', opacity: 0.9 }}>Updated: August 5, 2026</p>
        </div>
      </section>

      <HomeClient 
        initialTab="draw" 
        titleOverride="Create Your Free <span>Handwritten Signature</span>" 
        descriptionOverride="Sketch your mark on the interactive canvas below. Choose an ink color, then adopt it for PDF signing or export a transparent PNG signature image."
      />

      <section className={styles.seoExplainer} aria-label="How to draw signature online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Create Free Digital Signatures Online in 3 Quick Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Sketch Your Mark</h3>
              <p>
                Use your mouse, trackpad, or finger to write your autograph on our <strong>signature generator</strong>. Use the clear control to start over whenever you want.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Select Ink Color</h3>
              <p>
                Switch between professional black, traditional navy blue, or distinct red ink to complement your official <strong>digital documents</strong>.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Export PNG or Send Document</h3>
              <p>
                Adopt your new mark to sign PDF contracts directly, or save a transparent <strong>signature image</strong> to paste into Google Docs and Word files before you <strong>send document</strong> attachments.
              </p>
            </article>
          </div>

          {/* Why handwritten signatures matter */}
          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Why Choose Handwritten Autographs for Online Signatures?</h2>
            <p className={styles.seoCompareDesc}>
              A custom handwritten stroke gives modern <strong>online signatures</strong> an authentic human touch. When you <strong>sign with mouse</strong> or touch controls on MyDigitSign, your personal line dynamics closely mimic natural pen on paper. This popular <strong>type of electronic signature</strong> makes your mark instantly recognizable and professional on contracts, rental agreements, and business proposals.
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>Personal Identity</strong> — preserve your natural handwriting style on digital paperwork</li>
              <li>✅ <strong>Polished Appearance</strong> — sharp vector stroke rendering looks crisp on high-DPI screens</li>
              <li>✅ <strong>Full Legal Validity</strong> — recognized under ESIGN (US), eIDAS (EU), and global standards</li>
              <li>✅ <strong>Transparent Background</strong> — clean <strong>signature image</strong> overlays text fields in any editor</li>
              <li>✅ <strong>Cross-Device Compatibility</strong> — works effortlessly across Windows, Mac, iOS, and Android</li>
            </ul>
          </div>

          {/* Deep Informative Content Guide */}
          <div className={styles.seoArticle} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoArticleTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)', fontWeight: 700 }}>The Modern Guide to Creating an Electronic Signature Free of Cost</h2>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              In today's fast-moving digital economy, waiting for paper contracts to be printed, signed by hand, scanned, and emailed back is a major bottleneck. Managing <strong>online signatures</strong> electronically saves time, reduces paper waste, and speeds up deal closures when you need to sign and <strong>send document</strong> files quickly. However, many online software suites lock basic features behind expensive subscriptions or degrade your file with intrusive watermarks unless you upgrade.
            </p>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              MyDigitSign provides a clean, web-first alternative. We believe everyone should have access to an <strong>electronic signature free</strong> of charge, without forced account registrations or trial paywalls. Our client-side <strong>signature generator</strong> renders smooth Bezier curves in real time so your freehand strokes look natural, whether drawn using an optical mouse or a precision stylus.
            </p>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              Because our rendering engine operates 100% inside your web browser, your sensitive <strong>digital documents</strong> never travel to a remote server. You enjoy maximum privacy while generating a <strong>free digital signature online</strong> for immediate business or personal use.
            </p>

            <h2 className={styles.seoArticleTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2.5rem', color: 'var(--color-text)', fontWeight: 700 }}>Input Methods: Digital Sign With Mouse vs. Touchscreen Displays</h2>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              Achieving a clean electronic signature drawing depends on your hardware setup. Here is how to get the best visual results whether you are using a desktop setup or a mobile device:
            </p>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', marginTop: '1.5rem', color: 'var(--color-text)', fontWeight: 600 }}>Tips to Digital Sign With Mouse Controls</h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              When you <strong>digital sign with mouse</strong> hardware, anchor your wrist comfortably on your desk surface to steady your hand. Using smooth, fluid motions rather than slow, hesitating adjustments will yield much cleaner letter shapes. If your first attempt feels slightly stiff, hit the reset button—mastering a mouse-drawn signature usually takes two or three quick attempts.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', marginTop: '1.5rem', color: 'var(--color-text)', fontWeight: 600 }}>Drawing on Touchscreen Devices &amp; Stylus Pens</h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              For the most fluid handwriting experience, access MyDigitSign on a tablet or mobile phone. Drawing with your index finger or an active capacitive pen (such as an Apple Pencil) feels identical to physical pen and paper. The digital canvas captures your stroke speed and direction accurately, producing a sharp <strong>signature image</strong> ready for any document.
            </p>

            <h2 className={styles.seoArticleTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2.5rem', color: 'var(--color-text)', fontWeight: 700 }}>How to Insert Transparent PNG Signatures Into Word &amp; Google Docs</h2>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              One major advantage of exporting your mark as a transparent PNG <strong>signature image</strong> is versatility. Once saved to your local drive, you can reuse your graphic across multiple office platforms:
            </p>
            <ul style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
              <li><strong>Microsoft Word:</strong> Click <em>Insert → Pictures → From This Device</em>, select your saved PNG, set text wrapping to <em>In Front of Text</em>, and drag it over your document's signature line.</li>
              <li><strong>Google Docs:</strong> Navigate to <em>Insert → Image → Upload from computer</em>. Position the transparent image over the line and resize as needed.</li>
              <li><strong>Email Signatures:</strong> Add your PNG graphic directly to your Gmail or Outlook signature settings for a custom sign-off before you <strong>send document</strong> emails.</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>How do I create a free digital signature online?</h3>
                <p>Open the Draw tab, use your mouse or finger to sketch your autograph on our signature generator, and click Adopt Signature or Download PNG to save it instantly.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I create an electronic signature free on a smartphone?</h3>
                <p>Yes. The drawing canvas supports touchscreen input on iPhone, iPad, and Android devices. You can draw using your finger or a stylus for smooth results.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my drawn autograph saved on any remote server?</h3>
                <p>No. All rendering occurs locally inside your browser. Your drawing data stays in memory and is automatically cleared when you close the browser tab.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I download a transparent PNG signature image?</h3>
                <p>Yes. Clicking Download PNG saves a transparent signature image file that seamlessly overlays text lines in Word, Google Docs, or PDF files.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are online signatures drawn with a mouse legally binding?</h3>
                <p>Yes. This type of electronic signature has full legal standing under the ESIGN Act (US) and eIDAS (EU) for standard business contracts, agreements, and forms.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the difference between drawing and typing a signature?</h3>
                <p>Drawing yields a unique handwritten stroke pattern, while typing renders your name in cursive typography. Both methods represent a legal type of electronic signature.</p>
              </div>
            </div>
          </div>

          {/* User Reviews */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <RatingBadge rating={4.8} count={124} />
            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#ffffff', padding: '1.1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '0.9rem', color: '#334155', margin: '0 0 0.75rem', lineHeight: 1.6 }}>"The signature comes out so smooth and looks exactly like my real handwriting. Love that it's transparent!"</p>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  <strong style={{ color: '#0f172a' }}>Sarah M.</strong> · Verified User
                </div>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Explore related PDF &amp; signature tools:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Edit PDF Online →</a></li>
              <li><a href="/blog/create-digital-signature-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Create Digital Signature Free →</a></li>
              <li><a href="/how-it-works" style={{ color: 'var(--color-primary, #4f46e5)' }}>How It Works →</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script id="software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Footer />
    </div>
  );
}

