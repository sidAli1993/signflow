import React from 'react';
import { Star } from 'lucide-react';
import styles from './RatingBadge.module.css';

interface RatingBadgeProps {
  rating: number;
  count: number;
}

export function RatingBadge({ rating, count }: RatingBadgeProps) {
  return (
    <div className={styles.ratingContainer} aria-label={`Rated ${rating} out of 5 by ${count} users`}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={styles.starIcon} />
        ))}
      </div>
      <div className={styles.ratingText}>
        <strong>{rating.toFixed(1)} / 5</strong>
        <span>· {count} reviews</span>
      </div>
    </div>
  );
}
