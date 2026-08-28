import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import templates from '@/data/templates.json';
import categories from '@/data/categories.json';

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);
  if (!category) return {};

  return {
    title: `Free ${category.name} Templates - SignFlow`,
    description: `Download or edit our free collection of ${category.name} templates. ${category.description}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);
  if (!category) {
    notFound();
  }

  const categoryTemplates = templates.filter(t => t.category === category.slug);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '120px 20px 60px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Link href="/templates" style={{ color: '#64748b', textDecoration: 'none', marginBottom: '16px', display: 'inline-block', fontWeight: 600 }}>
              &larr; Back to all templates
            </Link>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Free {category.name} Templates
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              {category.description}
            </p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {categoryTemplates.map(template => (
              <Link href={`/templates/${template.category}/${template.slug}`} key={template.id} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.2s', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ height: '200px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <img src={template.thumbnailUrl} alt={template.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{template.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>{template.description}</p>
                    <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, textAlign: 'center' }}>
                      Use Template
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}
