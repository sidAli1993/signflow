import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Mail, ExternalLink, MessageSquare, Clock, MapPin } from 'lucide-react';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with MyDigitSign',
  description:
    'Have a question, found a bug, or want to suggest a feature? Contact the MyDigitSign team. We typically respond within 24 hours.',
  keywords: [
    'contact mydigitsign',
    'mydigitsign support',
    'digital signature tool support',
    'free pdf signer contact',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/contact',
  },
  openGraph: {
    title: 'Contact Us — Get in Touch with MyDigitSign',
    description:
      'Have a question, found a bug, or want to suggest a feature? Contact the MyDigitSign team.',
    url: 'https://mydigitsign.com/contact',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://mydigitsign.com/contact#page',
      name: 'Contact MyDigitSign',
      url: 'https://mydigitsign.com/contact',
      description: 'Get in touch with the MyDigitSign team for questions, bug reports, or feature requests.',
      about: { '@id': 'https://mydigitsign.com/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mydigitsign.com' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://mydigitsign.com/contact' },
        ],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Have a question, found a bug, or want to suggest a feature? We&apos;d love to hear from you.
            </p>
          </div>

          <div className={styles.articleCard}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {/* Email Card */}
              <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border, #e2e8f0)', background: 'var(--color-surface, #f8fafc)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Mail size={22} style={{ color: 'var(--color-primary, #4f46e5)' }} />
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Email</h3>
                </div>
                <p style={{ margin: '0 0 0.5rem', color: 'var(--color-text-muted, #64748b)', fontSize: '0.9rem' }}>
                  Best for detailed questions, bug reports, or partnership inquiries.
                </p>
                <a href="mailto:alimirza00@gmail.com" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 600, textDecoration: 'none' }}>
                  alimirza00@gmail.com
                </a>
              </div>

              {/* GitHub Card */}
              <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border, #e2e8f0)', background: 'var(--color-surface, #f8fafc)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <ExternalLink size={22} style={{ color: 'var(--color-primary, #4f46e5)' }} />
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>GitHub</h3>
                </div>
                <p style={{ margin: '0 0 0.5rem', color: 'var(--color-text-muted, #64748b)', fontSize: '0.9rem' }}>
                  Report bugs, request features, or contribute to the open source project.
                </p>
                <a href="https://github.com/sidAli1993/signflow" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 600, textDecoration: 'none' }}>
                  github.com/sidAli1993/signflow
                </a>
              </div>

              {/* Social Card */}
              <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border, #e2e8f0)', background: 'var(--color-surface, #f8fafc)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <MessageSquare size={22} style={{ color: 'var(--color-primary, #4f46e5)' }} />
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Social Media</h3>
                </div>
                <p style={{ margin: '0 0 0.5rem', color: 'var(--color-text-muted, #64748b)', fontSize: '0.9rem' }}>
                  Follow us for updates and quick conversations.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://x.com/alimirza00" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 600, textDecoration: 'none' }}>
                    Twitter / X
                  </a>
                  <a href="https://www.linkedin.com/in/mirza-munawer-baig-3a0b15105/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 600, textDecoration: 'none' }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Response time & location */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, var(--color-primary-bg, #eef2ff), transparent)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={18} style={{ color: 'var(--color-primary, #4f46e5)' }} />
                <span style={{ fontSize: '0.95rem' }}><strong>Response Time:</strong> Within 24 hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary, #4f46e5)' }} />
                <span style={{ fontSize: '0.95rem' }}><strong>Location:</strong> Pakistan (PKT, UTC+5)</span>
              </div>
            </div>

            <h2>Frequently Asked Questions</h2>
            <p>
              Before reaching out, you might find your answer in one of these resources:
            </p>
            <ul>
              <li><Link href="/about">About MyDigitSign</Link> — Learn who we are and why we built this tool</li>
              <li><Link href="/how-it-works">How It Works</Link> — Step-by-step guide on using the tool</li>
              <li><Link href="/blog/are-electronic-signatures-legally-binding">Are E-Signatures Legal?</Link> — Everything about electronic signature legality</li>
              <li><Link href="/privacy-policy">Privacy Policy</Link> — How we handle your data (spoiler: we don&apos;t collect any)</li>
            </ul>

            <h2>Report a Bug</h2>
            <p>
              Found something broken? Please include the following details when reporting:
            </p>
            <ul>
              <li>Your browser name and version (e.g., Chrome 128, Safari 17)</li>
              <li>Your device type (desktop, mobile, tablet)</li>
              <li>What you were trying to do when the issue occurred</li>
              <li>Any error messages you saw on screen</li>
            </ul>
            <p>
              Send bug reports to <a href="mailto:alimirza00@gmail.com">alimirza00@gmail.com</a> or <a href="https://github.com/sidAli1993/signflow/issues" target="_blank" rel="noopener noreferrer">open a GitHub issue</a>.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
