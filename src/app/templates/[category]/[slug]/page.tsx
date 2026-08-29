import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import templates from '@/data/templates.json';
import categories from '@/data/categories.json';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const template = templates.find((t) => t.slug === resolvedParams.slug && t.category === resolvedParams.category);
  if (!template) return {};

  return {
    title: `Free ${template.title} - Download or Sign Online | SignFlow`,
    description: `Get a free ${template.title} in PDF format. Instantly edit, fill, and securely sign this document online without downloading any software.`,
    keywords: template.seoKeywords,
  };
}

export default async function TemplateItemPage({ params }: Props) {
  const resolvedParams = await params;
  const template = templates.find((t) => t.slug === resolvedParams.slug && t.category === resolvedParams.category);
  const category = categories.find((c) => c.slug === resolvedParams.category);

  if (!template || !category) {
    notFound();
  }

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    mainEntity: {
      '@type': 'Product',
      name: template.title,
      description: template.description,
      image: `https://mydigitsign.com${template.thumbnailUrl}`,
      offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '124',
      }
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: template.faqs?.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      }
    })) || []
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mydigitsign.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Templates',
        item: 'https://mydigitsign.com/templates',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://mydigitsign.com/templates/${category.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: template.title,
        item: `https://mydigitsign.com/templates/${category.slug}/${template.slug}`,
      }
    ]
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main style={{ minHeight: '100vh', padding: '120px 20px 60px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Breadcrumbs */}
          <nav style={{ marginBottom: '40px', fontSize: '0.9rem', color: '#64748b' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/templates" style={{ color: '#64748b', textDecoration: 'none' }}>Templates</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href={`/templates/${category.slug}`} style={{ color: '#64748b', textDecoration: 'none' }}>{category.name}</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>{template.title}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Left Column: PDF Preview */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <div style={{ width: '100%', aspectRatio: '1/1.4', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  {/* Thumbnail */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={template.thumbnailUrl} alt={template.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content & CTA */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#f59e0b', fontWeight: 600 }}>
                ⭐⭐⭐⭐⭐ 4.9/5 (124 reviews)
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', lineHeight: 1.2 }}>
                {template.title}
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.6 }}>
                {template.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
                <Link href={`/tools/sign-pdf-online?templateUrl=${encodeURIComponent(template.pdfUrl)}`} style={{ textDecoration: 'none' }}>
                  <button style={{ width: '100%', padding: '20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.25rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)', transition: 'transform 0.2s' }}>
                    Edit & Sign Now (Free)
                  </button>
                </Link>
                <a href={template.pdfUrl} download={template.pdfUrl.split('/').pop() || 'template.pdf'} style={{ textDecoration: 'none' }}>
                  <button style={{ width: '100%', padding: '16px', backgroundColor: 'white', color: '#0f172a', border: '2px solid #e2e8f0', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s' }}>
                    Download as PDF
                  </button>
                </a>
              </div>

              {/* Rich Content */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
                  About this Template
                </h2>
                <div 
                  style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: template.content }}
                />
              </div>

              {/* FAQs */}
              {template.faqs && template.faqs.length > 0 && (
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '30px' }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {template.faqs.map((faq, index) => (
                      <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>
                          {faq.question}
                        </h3>
                        <p style={{ color: '#475569', lineHeight: 1.6 }}>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return templates.map((template) => ({
    category: template.category,
    slug: template.slug,
  }));
}
