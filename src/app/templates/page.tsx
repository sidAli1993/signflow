import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import templates from '@/data/templates.json';
import categories from '@/data/categories.json';

export const metadata: Metadata = {
  title: 'Free Legal & Business Templates - SignFlow',
  description: 'Download or edit our free collection of premium business, real estate, and legal templates. Sign them instantly online.',
};

export default function TemplatesHub() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '120px 20px 60px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Free Premium Templates
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Browse our library of high-quality templates. Download as PDF or edit and sign them instantly online.
            </p>
          </header>

          {categories.map((category) => {
            const categoryTemplates = templates.filter(t => t.category === category.slug);
            if (categoryTemplates.length === 0) return null;

            return (
              <section key={category.id} style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b' }}>{category.name}</h2>
                  <Link href={`/templates/${category.slug}`} style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>
                    View all {category.name} &rarr;
                  </Link>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                  {categoryTemplates.map(template => (
                    <Link href={`/templates/${template.category}/${template.slug}`} key={template.id} style={{ textDecoration: 'none' }}>
                      <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.2s', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ height: '200px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                          {/* Thumbnail */}
                          <div style={{ width: '100%', height: '100%', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.8rem', marginTop: '12px' }}>{template.category.toUpperCase()} TEMPLATE</span>
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
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
