import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from './HomeClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'MyDigitSign — Free Online PDF Signer & Digital Signature Tool',
  description:
    'Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — your files never leave your device. No account required.',
  keywords: [
    'free pdf signer',
    'sign pdf online free',
    'online signature tool',
    'digital signature maker',
    'electronic signature free',
    'draw signature online',
    'pdf signing tool no upload',
    'sign document online',
    'e-sign pdf free',
    'browser based pdf signer',
    'create digital signature',
    'sign pdf without account',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com',
  },
  openGraph: {
    title: 'MyDigitSign — Free Online PDF Signer & Digital Signature Tool',
    description:
      'Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — your files never leave your device. No account required.',
    url: 'https://mydigitsign.com',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Free PDF Signer Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyDigitSign — Free Online PDF Signer & Digital Signature Tool',
    description:
      'Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — no account needed.',
    creator: '@mydigitsign',
  },
};

export default function Home() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <HomeClient />
      <Footer />
    </div>
  );
}
