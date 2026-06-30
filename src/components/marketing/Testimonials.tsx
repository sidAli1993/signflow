import React from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { Card, Avatar } from '../ui';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Small Business Owner',
      quote: 'MyDigitSign has completely transformed how we handle contracts. It is so easy to use, and the fact that it is genuinely free is amazing.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      quote: 'I used to pay $15/month just to get my client agreements signed. Now I use MyDigitSign and it works exactly the same, but for free. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'HR Manager',
      quote: 'The team management and templates feature saves me hours every week during employee onboarding. The interface is beautiful too.',
      rating: 5,
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Loved by Thousands</h2>
          <p className={styles.subtitle}>Don't just take our word for it. See what our users have to say.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, i) => (
            <Card key={i} className={styles.card} padding="lg">
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-warning)" color="var(--color-warning)" />
                ))}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <Avatar name={testimonial.name} size="md" />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
