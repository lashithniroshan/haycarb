import React, { useState, useEffect } from 'react';
import Card from './ui/Card';
import styles from './CardSlider.module.css';
import style from './FinancialSlider.module.css';

const FinancialSlider = () => {
  const slidesData = [
    {
      id: 1,
      title: 'Haycarb at a Glance',
      image: '/images/haycarbglance.png',
      alt: 'Haycarb at a Glance',
    },
    {
      id: 2,
      title: 'Financial Highlights',
      image: '/images/financialhighlights.png',
      alt: 'Financial Highlights',
    },
    {
      id: 3,
      title: 'Non-Financial Highlights',
      image: '/images/nonfinancialhighlights.png',
      alt: 'Non-Financial Highlights',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card (index 1)
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and toggle sliding behavior
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    setIsMobile(mediaQuery.matches); // Initial check

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // Auto-slide only on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slidesData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleDotClick = (index: number) => {
    if (isMobile) setActiveIndex(index); // Only allow dot clicks on mobile
  };
    const handleTitleClick = (title: string) => {
    alert(`Clicked: ${title}`); // Placeholder action; replace with your logic (e.g., navigation)
  };

 return (
  <div className={style.sliderContainerfinancial}>
    <div className={styles.sliderContainer}>
      <div className={styles.cardWrapper}>
        {slidesData.map((slide, index) => {
          let style: React.CSSProperties = {};
          if (isMobile) {
            let translateX = 0;
            if (index === 0) translateX = -70 * activeIndex - 25; // Left card
            else if (index === slidesData.length - 1) translateX = -70 * activeIndex + 25; // Right card
            else translateX = -70 * activeIndex; // Middle card
            style = {
                transform: `translateX(${translateX * 0.2}%)`,
              opacity: index === activeIndex ? 1 : 0.5,
            };
          }
          return (
            <Card
              key={slide.id}
              title={slide.title}
              image={slide.image}
              alt={slide.alt}
              isActive={index === activeIndex && isMobile}
              style={style}
              onTitleClick={() => handleTitleClick(slide.title)}
            />
          );
        })}
      </div>
      <div className={styles.dotControls}>
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex && isMobile ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FinancialSlider