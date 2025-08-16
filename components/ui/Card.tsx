import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  image: string;
  alt: string;
  isActive?: boolean;
  style?: React.CSSProperties;
  onTitleClick?: () => void;
  link?: string; // URL to open in a new tab
}

const Card: React.FC<CardProps> = ({ title, image, alt, isActive = false, style, onTitleClick, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer'); // Opens link in a new tab
    }
    if (onTitleClick) {
      onTitleClick(); // Calls existing click handler if provided
    }
  };

  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      style={style}
      onClick={handleClick}
      role="button" // Improves accessibility
      tabIndex={0} // Makes the div focusable
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(); // Supports keyboard interaction
        }
      }}
    >
      <div className={styles.cardImage}>
        <img src={image} alt={alt} />
        <div className={styles.bottomgradient}></div>
      </div>
      <button className={styles.title} type="button">
        {title}
      </button>
    </div>
  );
};

export default Card;