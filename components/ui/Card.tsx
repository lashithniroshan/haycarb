import React from 'react'
import styles from './Card.module.css';

interface CardProps {
  title: string;
  image: string;
  alt: string;
  isActive?: boolean;
  style?: React.CSSProperties;
  onTitleClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, alt, isActive = false, style, onTitleClick }) => {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`} style={style}>
      <div className={styles.cardImage}>
        <img src={image} alt={alt} />
         <div className={styles.bottomgradient}></div>
      </div>
    <button className={styles.title} onClick={onTitleClick}>
        {title}
      </button>
    </div>
  );
};

export default Card