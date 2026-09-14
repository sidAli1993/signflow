import React from 'react';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { ReviewForm } from '@/components/ui/ReviewForm';
import { ReviewList, Review } from '@/components/ui/ReviewList';
import { Star } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Reviews and Testimonials | MyDigitSign',
  description: 'Read real reviews from users who trust MyDigitSign to securely sign their PDFs and documents online for free.',
  alternates: {
    canonical: 'https://mydigitsign.com/reviews',
  },
};

// Server-side data fetching
function getReviewsData() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'reviews.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const allReviews = JSON.parse(fileData);
    
    const approvedReviews = allReviews.filter((r: Review) => r.status === 'approved');
    
    const totalRating = approvedReviews.reduce((sum: number, r: Review) => sum + r.rating, 0);
    const averageRating = approvedReviews.length > 0 
      ? (totalRating / approvedReviews.length).toFixed(1) 
      : "0.0";

    return {
      reviews: approvedReviews,
      ratingValue: averageRating,
      ratingCount: approvedReviews.length.toString()
    };
  } catch (error) {
    console.error('Failed to read reviews:', error);
    return { reviews: [], ratingValue: "0.0", ratingCount: "0" };
  }
}

export default function ReviewsPage() {
  const { reviews, ratingValue, ratingCount } = getReviewsData();

  // JSON-LD Schema for the Reviews page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "MyDigitSign Reviews",
    "description": "Read real reviews from users who trust MyDigitSign.",
    "url": "https://mydigitsign.com/reviews",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://mydigitsign.com/#organization",
      "name": "MyDigitSign",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue,
        "ratingCount": ratingCount,
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <main className={styles.pageContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>What Our Users Say</h1>
          <p className={styles.subtitle}>
            We're building the most private, fast, and free document signing tool on the web. 
            Here's what people think about MyDigitSign.
          </p>
          
          {Number(ratingCount) > 0 && (
            <div className={styles.ratingSummary}>
              <span className={styles.bigRating}>{ratingValue}</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.round(Number(ratingValue)) ? '#f59e0b' : 'transparent'}
                    color={i < Math.round(Number(ratingValue)) ? '#f59e0b' : '#d1d5db'}
                  />
                ))}
              </div>
              <span className={styles.reviewCount}>Based on {ratingCount} reviews</span>
            </div>
          )}
        </div>

        <ReviewForm />
        
        <ReviewList reviews={reviews} />
      </main>

      <Footer />
    </>
  );
}
