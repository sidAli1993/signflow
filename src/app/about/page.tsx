import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: 'About MyDigitSign — Free Privacy-First PDF Signing Tool',
  description:
    'Learn about MyDigitSign — who built it, why we built it, and our mission to make document signing free, private, and accessible to everyone. No uploads, no accounts.',
  keywords: [
    'about mydigitsign',
    'who built mydigitsign',
    'free pdf signer team',
    'digital signature tool company',
    'privacy first document signing',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/about',
  },
  openGraph: {
    title: 'About MyDigitSign — Free Privacy-First PDF Signing Tool',
    description:
      'Learn who built MyDigitSign, why we built it, and our mission to make document signing free, private, and accessible to everyone.',
    url: 'https://mydigitsign.com/about',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://mydigitsign.com/about#page',
      name: 'About MyDigitSign',
      url: 'https://mydigitsign.com/about',
      description:
        'MyDigitSign is a free, browser-based PDF and document signing tool built by developers who believe document signing should be private, fast, and free for everyone.',
      about: { '@id': 'https://mydigitsign.com/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mydigitsign.com' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://mydigitsign.com/about' },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://mydigitsign.com/about#founder',
      name: 'Ali Mirza',
      url: 'https://mydigitsign.com/about',
      jobTitle: 'Founder & Developer',
      worksFor: { '@id': 'https://mydigitsign.com/#organization' },
      sameAs: [
        'https://github.com/sidAli1993',
        'https://x.com/alimirza00',
        'https://www.linkedin.com/in/mirza-munawer-baig-3a0b15105/',
      ],
      email: 'alimirza00@gmail.com',
    },
  ],
};

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>About MyDigitSign</h1>
            <p className={styles.subtitle}>
              Built by developers who got tired of paying for something that should be free.
            </p>
          </div>

          <div className={styles.articleCard}>

            <h2>Why We Built This</h2>
            <p>
              It started with a freelance contract. We needed to sign a PDF quickly — without uploading
              it to a stranger&rsquo;s server, without creating yet another account, and without paying
              a monthly fee just to add a signature image to a document.
            </p>
            <p>
              Most tools asked us to upload sensitive documents to their cloud. Others wanted a credit
              card for &ldquo;free&rdquo; plans. Some worked, but left watermarks. That felt wrong for
              something as simple and personal as a signature.
            </p>
            <p>
              So we built MyDigitSign — a tool that does one thing really well: lets you sign PDFs and
              documents completely inside your browser, with zero uploads, zero accounts, and zero cost.
            </p>

            <h2>What Makes Us Different</h2>
            <p>
              The core idea is simple: <strong>your documents never leave your device</strong>. When
              you open a PDF in MyDigitSign, it&rsquo;s read by your browser locally using Mozilla&rsquo;s
              PDF.js — the same engine that powers Firefox. Your signature is drawn or typed in memory,
              placed on the document using pdf-lib, and the signed PDF is downloaded directly to you.
              Nothing passes through our servers, because we don&rsquo;t have document servers.
            </p>
            <ul>
              <li>✅ 100% client-side — no server uploads, ever</li>
              <li>✅ No account or registration required</li>
              <li>✅ No watermarks, no paywalls, no subscriptions</li>
              <li>✅ Supports PDF, PNG, and JPG documents</li>
              <li>✅ Draw, type, or upload your signature</li>
              <li>✅ Works on desktop, tablet, and mobile</li>
              <li>✅ Certificate-based cryptographic signing (.pfx / .p12)</li>
            </ul>

            <h2>Are Electronic Signatures Legal?</h2>
            <p>
              Yes — and we wrote a full guide on it:{' '}
              <Link href="/blog/are-electronic-signatures-legally-binding">
                Are Electronic Signatures Legally Binding? →
              </Link>
            </p>
            <p>
              Short answer: Electronic signatures created with MyDigitSign are legally valid under the
              ESIGN Act (USA), UETA, and eIDAS (EU) for the vast majority of commercial, personal, and
              financial agreements.
            </p>

            <h2>Who Built MyDigitSign</h2>
            <p>
              MyDigitSign was built and is maintained by <strong>Ali Mirza</strong>, a developer based
              in Pakistan with a background in building web tools and software products. The project
              started as a personal tool and grew into a free public service used by thousands of people
              every month.
            </p>
            <p>
              We believe privacy-first software should be the default, not the premium tier. That belief
              drives every decision we make — from how the tool works to what data we never collect.
            </p>

            <h2>Our Tools</h2>
            <ul>
              <li>
                <Link href="/">Sign PDF Online Free</Link> — Upload any PDF and sign it instantly
              </li>
              <li>
                <Link href="/tools/draw-signature-online">Draw Signature Online</Link> — Freehand
                signature drawing with mouse or touch
              </li>
              <li>
                <Link href="/tools/type-signature-online">Type Signature Online</Link> — Cursive font
                signature generator
              </li>
              <li>
                <Link href="/tools/sign-image-online">Sign Image Online</Link> — Sign PNG and JPG
                files directly
              </li>
            </ul>

            <h2>Our Guides</h2>
            <p>
              We write practical guides on digital signatures, document security, and e-signature
              legality. You can find all our articles on the{' '}
              <Link href="/blog">Digital Signature Blog →</Link>
            </p>

            <h2>Get in Touch</h2>
            <p>
              Have a question, found a bug, or want to suggest a feature? We&rsquo;d love to hear from
              you.
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:alimirza00@gmail.com">alimirza00@gmail.com</a>
              </li>
              <li>
                GitHub:{' '}
                <a
                  href="https://github.com/sidAli1993"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sidAli1993
                </a>
              </li>
              <li>
                Twitter / X:{' '}
                <a
                  href="https://x.com/alimirza00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @alimirza00
                </a>
              </li>
            </ul>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
