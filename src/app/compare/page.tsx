import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getBreadcrumbSchema, getItemListSchema } from '@/lib/seo-schemas';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: 'Compare MyDigitSign — Free Alternatives to DocuSign, Adobe Sign & More',
  description:
    'See how MyDigitSign compares to DocuSign, Adobe Sign, SmallPDF, HelloSign, PandaDoc, and SignWell. 100% free, no uploads, no account — always wins on privacy and price.',
  keywords: [
    'docusign alternative',
    'adobe sign alternative',
    'smallpdf alternative',
    'hellosign alternative',
    'pandadoc alternative',
    'signwell alternative',
    'free esign tool comparison',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare',
  },
  openGraph: {
    title: 'Compare MyDigitSign — Free Alternatives to DocuSign, Adobe Sign & More',
    description:
      'MyDigitSign vs the top e-signature tools. Free forever. No uploads. No account.',
    url: 'https://mydigitsign.com/compare',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const comparePages = [
  {
    slug: 'docusign-alternative',
    competitor: 'DocuSign',
    badge: 'Most Searched',
    badgeColor: '#2563eb',
    badgeBg: '#eff6ff',
    icon: '📝',
    summary: 'DocuSign charges $10–$40/month. MyDigitSign is completely free — no account, no upload, no limits.',
    saving: 'Save $120–$480/year',
  },
  {
    slug: 'adobe-sign-alternative',
    competitor: 'Adobe Sign',
    badge: 'Popular',
    badgeColor: '#dc2626',
    badgeBg: '#fef2f2',
    icon: '🔴',
    summary: 'Adobe Acrobat Sign costs $12.99–$23.99/month and requires an Adobe account. MyDigitSign needs neither.',
    saving: 'Save $155–$288/year',
  },
  {
    slug: 'smallpdf-alternative',
    competitor: 'SmallPDF',
    badge: 'Popular',
    badgeColor: '#059669',
    badgeBg: '#f0fdf4',
    icon: '📄',
    summary: 'SmallPDF caps free users at 1–2 tasks/hour and uploads your files to their servers. MyDigitSign has no limits and zero server uploads.',
    saving: 'Unlimited tasks free',
  },
  {
    slug: 'hellosign-alternative',
    competitor: 'HelloSign / Dropbox Sign',
    badge: 'Trending',
    badgeColor: '#7c3aed',
    badgeBg: '#f5f3ff',
    icon: '💧',
    summary: 'HelloSign (now Dropbox Sign) limits free users to 3 signatures/month and forces a Dropbox account. MyDigitSign is unlimited and account-free.',
    saving: 'Unlimited + no Dropbox',
  },
  {
    slug: 'pandadoc-alternative',
    competitor: 'PandaDoc',
    badge: 'Enterprise',
    badgeColor: '#d97706',
    badgeBg: '#fffbeb',
    icon: '🐼',
    summary: 'PandaDoc starts at $19/user/month — designed for enterprise sales teams. MyDigitSign handles everyday signing needs for free.',
    saving: 'Save $228/year per user',
  },
  {
    slug: 'signwell-alternative',
    competitor: 'SignWell',
    badge: 'Rising',
    badgeColor: '#0d9488',
    badgeBg: '#f0fdfa',
    icon: '✍️',
    summary: 'SignWell restricts free users to 3 completed documents/month and requires account registration. MyDigitSign has no limits and no account.',
    saving: 'Unlimited free signing',
  },
];

export default function CompareHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Compare', url: '/compare' },
  ]);

  const itemListSchema = getItemListSchema(
    comparePages.map((p) => ({
      name: `MyDigitSign vs ${p.competitor}`,
      url: `/compare/${p.slug}`,
      description: p.summary,
    }))
  );

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Hero */}
        <section style={{ textAlign: 'center', padding: '3rem 1rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(79, 70, 229, 0.08)', color: '#4f46e5', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
            🏆 Compare & Switch — Always Free
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            MyDigitSign vs The Competition
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '720px', margin: '0 auto 2rem' }}>
            Every major e-signature tool compared side by side. See why thousands are switching to MyDigitSign — 100% free, no file uploads, no account, no limits.
          </p>
          <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#4f46e5', color: 'white', padding: '0.875rem 2rem', borderRadius: '10px', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
            Try MyDigitSign Free — No Account →
          </a>
        </section>

        {/* Compare Cards */}
        <section style={{ maxWidth: '1200px', margin: '2rem auto 4rem', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {comparePages.map((page) => (
              <Link
                key={page.slug}
                href={`/compare/${page.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{page.icon}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: '6px', background: page.badgeBg, color: page.badgeColor }}>
                    {page.badge}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
                  MyDigitSign vs {page.competitor}
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.25rem' }}>
                  {page.summary}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', background: '#f0fdf4', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                    💰 {page.saving}
                  </span>
                  <span style={{ fontWeight: 600, color: '#4f46e5', fontSize: '0.9rem' }}>
                    Read Comparison →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Summary Table */}
        <section style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1.25rem', textAlign: 'center' }}>
            Quick Comparison: All Competitors at a Glance
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', border: '1px solid #e2e8f0', fontWeight: 700 }}>Tool</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700 }}>Free?</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700 }}>No Account</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700 }}>No Upload</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700 }}>Unlimited</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['MyDigitSign', '✅ Always free', '✅', '✅ 100% local', '✅'],
                  ['DocuSign', '❌ $10+/mo', '❌', '❌ Cloud upload', '❌'],
                  ['Adobe Sign', '❌ $12.99+/mo', '❌', '❌ Cloud upload', '❌'],
                  ['SmallPDF', '⚠️ Freemium', '❌', '❌ Cloud upload', '❌ 1-2/hr limit'],
                  ['HelloSign', '⚠️ 3 free/mo', '❌ Dropbox req', '❌ Cloud upload', '❌'],
                  ['PandaDoc', '❌ $19+/user/mo', '❌', '❌ Cloud upload', '❌'],
                  ['SignWell', '⚠️ 3 docs/mo', '❌', '❌ Cloud upload', '❌'],
                ].map(([tool, free, noAcc, noUpload, unlimited], i) => (
                  <tr key={i} style={{ background: i === 0 ? '#f0fdf4' : i % 2 === 0 ? '#ffffff' : '#f8fafc', fontWeight: i === 0 ? 700 : 400 }}>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0' }}>{tool}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{free}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{noAcc}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{noUpload}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{unlimited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
