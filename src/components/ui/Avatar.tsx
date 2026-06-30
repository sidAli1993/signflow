import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string | null;
  name?: string | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name, size = 'md', className, onClick }) => {
  const getInitials = (name?: string | null) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getBackgroundColor = (name?: string | null) => {
    if (!name) return 'var(--color-surface-hover)';
    const colors = [
      '#3B82F6', '#8B5CF6', '#F59E0B', '#10B981', '#EC4899', '#EF4444', '#06B6D4'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div
      className={`${styles.avatar} ${styles[size]} ${onClick ? styles.clickable : ''} ${className || ''}`}
      onClick={onClick}
      style={{
        backgroundColor: !src ? getBackgroundColor(name) : 'transparent',
      }}
    >
      {src ? (
        <img src={src} alt={name || 'Avatar'} className={styles.image} />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}
    </div>
  );
};
