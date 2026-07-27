import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

import { getSoftwareAppSchema, getHowToSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
  description:
    'Draw your digital signature online free using your mouse, trackpad, or touchscreen. No account, no upload — sign with mouse and download transparent PNG instantly.',
  keywords: [
    'draw signature online',
    'draw signature free',
    'digital sign with mouse',
    'sign with mouse',
    'create digital signature',
    'electronic signature drawing',
    'draw my signature',
    'signature maker online',
    'sign document online'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/draw-signature-online',
  },
  openGraph: {
    title: 'Draw Signature Online Free — Create Digital Signatures | MyDigitSign',
    description:
      'Draw your digital signature online free using your mouse, trackpad, or touchscreen. Sign with mouse and download as transparent PNG instantly.',
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
      'Draw your digital signature online free using your mouse, trackpad, or touchscreen. No account, no upload.',
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
  name: 'MyDigitSign Draw Signature Tool',
  description: 'Draw freehand electronic signatures using mouse or touch screen with instant transparent PNG download.',
  url: 'https://mydigitsign.com/tools/draw-signature-online',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I draw a digital signature online with my mouse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click the Draw tab on MyDigitSign, then click and drag your mouse on the signature canvas to draw your signature freehand. You can adjust the pen color (black, blue, or red) and click Clear to start over. Once satisfied, click Adopt Signature to use it for signing PDFs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sign with mouse and download the result as a PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After drawing your signature, click the Download PNG button to save a transparent background PNG of your signature. You can use this file in Word documents, Google Docs, Outlook emails, or anywhere that accepts image uploads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the draw signature tool work on touchscreen phones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The drawing canvas is fully optimized for touch input. Open MyDigitSign in Safari (iPhone) or Chrome (Android), switch to the Draw tab, and use your finger or stylus to create a natural, handwritten-style digital signature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the drawn signature legally valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A drawn electronic signature is legally binding under the ESIGN Act (USA), eIDAS (EU), and equivalent laws in over 180 countries for most business agreements including contracts, NDAs, and lease agreements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between drawing and typing a signature?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A drawn signature is freehand and unique to you, similar to pen on paper. A typed signature uses cursive fonts to render your name. Both are legally equivalent for electronic signing purposes. Drawing feels more personal; typing is faster for repeated use.',
      },
    },
  ],
};

const howToSchema = getHowToSchema({
  name: 'How to Draw a Digital Signature Online Free',
  description: 'Draw your electronic signature freehand using a mouse, trackpad, or smartphone touch screen.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Open the Draw Tab',
      text: 'Navigate to the Draw Signature tool and click the Draw tab on the signature creator.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Draw Your Signature',
      text: 'Use your mouse, finger, or stylus to draw your signature on the digital canvas. Click Clear to start over if needed.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Customize Ink Color',
      text: 'Select black, blue, or red ink color to match your document\'s requirements.',
      url: 'https://mydigitsign.com/tools/draw-signature-online',
    },
    {
      name: 'Adopt or Download',
      text: 'Click Adopt Signature to sign a PDF, or click Download PNG to save a transparent signature image for use in other documents.',
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
            <span>Free Draw Tool · No Account · Client-Side Only</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Draw Signature Online <span className={styles.seoHeroGradient}>Free &amp; Secure</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>draw a digital signature online</strong> free? Use your mouse, touchscreen, or trackpad to sketch a handwritten signature on our secure canvas. Every stroke stays 100% inside your browser — <strong>sign with mouse</strong> and download a transparent PNG in seconds, or adopt the signature to sign a PDF directly.
          </p>
          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>100% In-Browser Drawing</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Privacy Protected</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Export Transparent PNG</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Free to Draw</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Signup Needed</span></li>
          </ul>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem', opacity: 0.7 }}>Updated: July 25, 2026</p>
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

      <HomeClient 
        initialTab="draw" 
        titleOverride="Draw Your Free <span>Digital Signature</span>" 
        descriptionOverride="Draw on the canvas using your mouse or touchscreen. Choose a pen color and click Adopt to place it on a document or download as PNG."
      />

      <section className={styles.seoExplainer} aria-label="How to draw signature online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Draw Your Signature Online in 3 Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Draw Freehand</h3>
              <p>
                Use your mouse, finger, or stylus to sketch your signature on the digital canvas above. Click the Eraser icon to clear the board and start fresh.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Choose Pen Color</h3>
              <p>
                Select from standard colors (Black, Blue, Red) to match the styling requirements of your contracts or legal documents.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Download PNG or Sign</h3>
              <p>
                Click adopt to sign a PDF document instantly, or download a transparent PNG file to use in Microsoft Word, Google Docs, or email signatures.
              </p>
            </article>
          </div>

          {/* Why draw your signature section */}
          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Why Draw Your Digital Signature Online?</h2>
            <p className={styles.seoCompareDesc}>
              A hand-drawn signature is the most personal form of electronic signing. When you <strong>sign with mouse</strong> or finger on MyDigitSign, the result looks and feels like your real handwriting — which matters for contracts, legal documents, and anything requiring a personal touch. Unlike typed cursive fonts, a drawn signature is unique to you and harder to replicate.
            </p>
            <ul className={styles.seoCompareList}>
              <li>✅ <strong>Unique to you</strong> — your handwriting style is your identity</li>
              <li>✅ <strong>Looks professional</strong> — mirrors a real pen-on-paper signature</li>
              <li>✅ <strong>Legally binding</strong> — valid under ESIGN Act, eIDAS, and 180+ countries</li>
              <li>✅ <strong>Download as PNG</strong> — use in Word, Google Docs, Outlook, or anywhere</li>
              <li>✅ <strong>Works with mouse or touch</strong> — desktop and mobile browsers both supported</li>
            </ul>
          </div>

          {/* SEO Expansion 1: Signature Maker */}
          <div className={styles.seoArticle} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoArticleTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)', fontWeight: 700 }}>The Best Free Signature Maker Online (No Watermarks, No Signups)</h2>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              When you need to <strong>draw signature online</strong>, the last thing you want is to be forced into creating an account or providing your credit card details. Many tools online claim to be a free <strong>signature maker online</strong>, but then restrict you at the final step by placing a large watermark over your drawn signature or refusing to let you download the file unless you sign up for a premium subscription.
            </p>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              MyDigitSign is completely different. We believe that your digital identity should belong to you, which is why our <strong>draw signature free</strong> tool is truly 100% free with absolutely no hidden catches. When you use our canvas for your <strong>electronic signature drawing</strong>, the output is a pristine, high-resolution transparent PNG file. You can download it instantly and use it as many times as you like.
            </p>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              Because our tool operates entirely on the client side (in your web browser), it is incredibly fast. There is no latency from uploading your drawing strokes to a server. You can sketch, erase, and redraw as quickly as your hand can move, making it the most responsive signature maker available on the web today.
            </p>

            <h2 className={styles.seoArticleTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2.5rem', color: 'var(--color-text)', fontWeight: 700 }}>Electronic Signature Drawing: Digital Sign With Mouse vs. Touchscreen</h2>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              Creating a digital signature that looks identical to your real-life handwriting can sometimes be tricky depending on the hardware you are using. If you need to <strong>sign document online</strong> and want the most authentic result, here is how the two main input methods compare when you use our signature creator.
            </p>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', marginTop: '1.5rem', color: 'var(--color-text)', fontWeight: 600 }}>How to Digital Sign With Mouse</h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              To <strong>digital sign with mouse</strong>, rest the heel of your hand on your desk to stabilize your movements. It often helps to increase your mouse sensitivity slightly so you don't run out of mousepad space while dragging. Click and hold the left mouse button, and try to draw the signature in one continuous, fluid motion rather than slow, deliberate strokes. If you make a mistake, simply click the "Clear" button and try again. It might take three or four attempts to get a mouse-drawn signature that perfectly matches your pen-and-ink style.
            </p>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', marginTop: '1.5rem', color: 'var(--color-text)', fontWeight: 600 }}>Using a Touchscreen or Stylus</h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              For the absolute best <strong>draw my signature</strong> experience, open MyDigitSign on a smartphone, tablet, or a touchscreen laptop. Using your finger — or even better, a capacitive stylus like an Apple Pencil or Galaxy S-Pen — provides the tactile feedback necessary for perfect electronic signature drawing. The canvas responds instantly to your touch, capturing the natural curves and flourishes of your handwriting.
            </p>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
              Regardless of which method you choose, the resulting signature will be securely saved as a transparent PNG, ready to be embedded into PDFs, Word documents, or email clients instantly.
            </p>
          </div>

          {/* FAQ Section */}
          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>How do I draw a digital signature with my mouse?</h3>
                <p>Select the Draw tab, then click and drag on the canvas to draw your signature freehand. You can clear and redo as many times as needed. Once happy, click Adopt Signature.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I draw my signature on a phone or tablet?</h3>
                <p>Yes. The canvas supports touch input on all smartphones and tablets. Open the page in Safari (iPhone) or Chrome (Android) and draw with your finger — the result is smooth and natural.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Will my drawn signature be saved anywhere?</h3>
                <p>No. Your signature exists only inside your browser’s memory for the current session. When you close the tab, it is gone. Nothing is stored on our servers.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I download the drawn signature as a PNG?</h3>
                <p>Yes. Click the Download PNG button to save your signature as a transparent-background PNG image. You can then paste it into any document, email, or design tool.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is a mouse-drawn signature legally valid?</h3>
                <p>Yes. A drawn electronic signature has the same legal weight as a typed or uploaded one under the ESIGN Act (US) and eIDAS (EU) for most business, personal, and legal agreements.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the difference between drawing and typing my signature?</h3>
                <p>Drawing creates a freehand signature unique to your hand, similar to pen on paper. Typing uses cursive fonts to render your name. Both are legally equivalent — drawing feels more personal, typing is faster for repeated use.</p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/blog/how-to-sign-nda-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Sign an NDA Online →</a></li>
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
