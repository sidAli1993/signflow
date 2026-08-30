import React from 'react';
import { Metadata } from 'next';
import RemoveImageWatermarkClient from './RemoveImageWatermarkClient';
import ImageWatermarkSeoContent from '@/components/marketing/ImageWatermarkSeoContent';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';

export const metadata: Metadata = {
  title: 'Remove Watermark from Image Free Online | MyDigitSign',
  description: 'Easily remove watermarks, text, or logos from your images online for free. 100% private, client-side processing. No server uploads.',
};

export default function RemoveImageWatermarkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Image Watermark Remover',
    operatingSystem: 'Any',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free online tool to remove watermarks, logos, and date stamps from images using AI inpainting directly in your browser.',
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Remove Watermark from <span className="text-indigo-600">Image</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Erase watermarks, logos, or text from any image instantly. 100% private—your images never leave your device.
            </p>
          </div>

          <RemoveImageWatermarkClient />

        </div>
        
        <ImageWatermarkSeoContent />
      </div>
      <Footer />
    </>
  );
}
