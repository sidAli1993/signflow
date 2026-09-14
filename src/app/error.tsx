'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', maxWidth: '500px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: '#ef4444' }}>
            <AlertTriangle size={64} strokeWidth={1.5} />
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text)' }}>Something went wrong!</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
            An unexpected error occurred while loading this page. We've logged the issue and are looking into it.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => reset()}
              style={{ cursor: 'pointer', padding: '0.75rem 1.5rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <RefreshCcw size={16} /> Try again
            </button>
            <Link 
              href="/" 
              style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
