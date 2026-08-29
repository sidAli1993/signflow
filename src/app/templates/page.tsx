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
              </section>
            );
          })}
          
          {/* SEO Content & Internal Linking */}
          <div style={{ marginTop: '80px', padding: '60px 40px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Why Use Our Free Business & Legal Templates?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
              Drafting legal agreements, business contracts, or real estate forms from scratch can be time-consuming and prone to errors. Our collection of professionally crafted templates provides a solid, ready-to-use foundation for all your documentation needs. Whether you're finalizing an <Link href="/tools/sign-employment-contract-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>employment contract</Link>, preparing an <Link href="/tools/sign-nda-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>NDA</Link>, or drawing up a <Link href="/tools/sign-real-estate-contract-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>real estate contract</Link>, we have the perfect template for you.
            </p>
            
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px', marginTop: '40px', letterSpacing: '-0.01em' }}>
              Edit and Sign Instantly
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
              Every template in our library can be easily customized to fit your specific requirements. Once you've selected and customized your document, you can use our built-in <Link href="/tools/edit-pdf-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>PDF Editor</Link> to add any final details, and then securely <Link href="/tools/sign-pdf-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>sign the PDF online</Link>. No need to print, sign manually, and scan — our <Link href="/tools/draw-signature-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>digital signature tools</Link> make the process seamless and legally compliant.
            </p>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px', marginTop: '40px', letterSpacing: '-0.01em' }}>
              Explore More PDF & Document Tools
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginBottom: '0' }}>
              Beyond templates, MyDigitSign offers a comprehensive suite of tools to manage your documents effectively. Need to <Link href="/tools/merge-pdf-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>merge multiple PDFs</Link>, <Link href="/tools/compress-pdf-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>compress a PDF</Link> for easier email sharing, or even <Link href="/tools/protect-pdf-online" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>password protect</Link> sensitive information? Explore our <Link href="/tools" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>full list of free PDF tools</Link> to streamline your entire document workflow today. Check out our <Link href="/blog" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>blog</Link> for more tips and guides.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
