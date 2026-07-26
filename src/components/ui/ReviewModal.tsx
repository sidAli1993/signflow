import React from 'react';
import styles from './ReviewModal.module.css';
import { X, Star } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        
        <div className={styles.header}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <h3 className={styles.title}>Enjoying MyDigitSign?</h3>
          <p className={styles.description}>
            If this free tool helped you today, please take 30 seconds to leave us a review. It helps keep the tool free for everyone!
          </p>
        </div>
        
        <div className={styles.actions}>
          <a href="https://g2.com/products/mydigitsign" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} onClick={onClose}>
            Review on G2
          </a>
          <a href="https://capterra.com/p/mydigitsign" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn} onClick={onClose}>
            Review on Capterra
          </a>
          <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn} onClick={onClose}>
            Review on Google
          </a>
        </div>
      </div>
    </div>
  );
};
