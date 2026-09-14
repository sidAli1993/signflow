import Link from 'next/link';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { FileQuestion, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | MyDigitSign',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', maxWidth: '500px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            <FileQuestion size={64} strokeWidth={1.5} />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text)' }}>404</h1>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text)' }}>Page Not Found</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
            We couldn't find the page you were looking for. It might have been moved or doesn't exist anymore.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/" 
              style={{ padding: '0.75rem 1.5rem', background: 'var(--color-primary)', color: 'white', textDecoration: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Go Home
            </Link>
            <Link 
              href="/tools" 
              style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              View Tools <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
