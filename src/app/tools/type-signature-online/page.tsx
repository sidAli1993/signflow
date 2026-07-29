import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://mydigitsign.com',
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Type Signature Online',
      'item': 'https://mydigitsign.com/tools/type-signature-online',
    },
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'MyDigitSign Type Signature Tool',
  'applicationCategory': 'BusinessApplication',
  'operatingSystem': 'Web Browser',
  'description': 'Free cursive font signature generator. Type your name and instantly create beautiful electronic signatures.',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'url': 'https://mydigitsign.com/tools/type-signature-online',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'ratingCount': '1240',
    'bestRating': '5',
    'worstRating': '1',
  },
};

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
                Enter your name in the text field above. The generator will render live previews of your digital signature across multiple script fonts.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Select Font &amp; Color</h3>
              <p>
                Choose from standard colors (Black, Blue, Red) and pick the cursive handwriting style that best matches your personal preferences.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Download or Apply</h3>
              <p>
                Click adopt to sign a contract instantly on our client-side editor, or download a transparent PNG file to insert into Word or Google Docs files.
              </p>
            </article>
          </div>

          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Is a Typed Signature Legally Valid?</h2>
            <p className={styles.seoCompareDesc}>
              Absolutely. In the modern business world, you don't need a messy drawn signature for a contract to be binding. Under the <strong>ESIGN Act (USA)</strong> and <strong>eIDAS (EU)</strong>, a typed electronic signature holds the exact same legal weight as a wet-ink signature.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              The most important factor in legal validity is <em>intent</em>. By typing your name, selecting a signature style, and choosing to apply it to a contract or NDA, you are clearly demonstrating your intent to sign. Our <strong>signature generator</strong> allows you to do this quickly and beautifully without printing anything.
            </p>
          </div>

          <div className={styles.seoFaq}>
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
            </div>
          </div>

          {/* Internal links — Phase 2 internal linking strategy */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Image Online →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/blog/how-to-sign-nda-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Sign an NDA Online →</a></li>
              <li><a href="/blog/create-digital-signature-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Create Digital Signature Free →</a></li>
              <li><a href="/how-it-works" style={{ color: 'var(--color-primary, #4f46e5)' }}>How It Works →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
