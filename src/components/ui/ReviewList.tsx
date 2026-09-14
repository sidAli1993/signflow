import React from 'react';
import { Star } from 'lucide-react';
import styles from './ReviewList.module.css';

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  status: string;
}

export function ReviewList({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No reviews yet. Be the first to leave one!</p>
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      {reviews.map((review) => (
        <article key={review.id} className={styles.reviewCard} itemScope itemType="https://schema.org/Review">
          <div className={styles.header}>
            <div className={styles.author}>
              <div className={styles.avatar} aria-hidden="true">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div className={styles.nameBlock}>
                <span className={styles.name} itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{review.name}</span>
                </span>
                <time className={styles.date} itemProp="datePublished" dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
            
            <div className={styles.stars} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="worstRating" content="1" />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="ratingValue" content={review.rating.toString()} />
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < review.rating ? '#f59e0b' : 'transparent'}
                  color={i < review.rating ? '#f59e0b' : '#d1d5db'}
                />
              ))}
            </div>
          </div>
          
          <p className={styles.comment} itemProp="reviewBody">
            {review.comment}
          </p>
        </article>
      ))}
    </div>
  );
}
