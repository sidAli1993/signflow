'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import styles from './ReviewForm.module.css';

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setErrorMessage('Please select a star rating.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, comment }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      setSubmitStatus('success');
      setName('');
      setComment('');
      setRating(0);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Thank you!</h2>
        <p className={styles.successMessage}>
          Your review has been submitted successfully and is pending approval. We appreciate your feedback!
        </p>
        <button 
          className={styles.submitBtn} 
          onClick={() => setSubmitStatus('idle')}
          style={{ marginTop: '1rem' }}
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Leave a Review</h2>
      <p className={styles.subtitle}>Let us know how MyDigitSign worked for you.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Rating</label>
          <div className={styles.starRating} role="radiogroup" aria-label="Star rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={styles.starBtn}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`${star} stars`}
                role="radio"
                aria-checked={rating === star}
              >
                <Star
                  size={28}
                  fill={(hoverRating || rating) >= star ? '#f59e0b' : 'transparent'}
                  color={(hoverRating || rating) >= star ? '#f59e0b' : '#d1d5db'}
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="reviewer-name" className={styles.label}>Name</label>
          <input
            id="reviewer-name"
            type="text"
            required
            maxLength={50}
            className={styles.input}
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="reviewer-comment" className={styles.label}>Review</label>
          <textarea
            id="reviewer-comment"
            required
            maxLength={1000}
            className={styles.textarea}
            placeholder="How did you use our tools? What did you like?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting || rating === 0}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}
