"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from './ui/Card';
import styles from './CardSlider.module.css';


const CardSlider = () => {

  const slidesData = [
    {
      id: 1,
      title: 'Chart Generator',
      image: '/images/cardchartgenerator.png',
      alt: 'chart generator',
       route: '/tailor-made-for-you',
    },
    {
      id: 2,
      title: 'Pinquest Game',
      image: '/images/cardpinquestgame.png',
      alt: 'pinquest game',
       route: '/game',
    },
    {
      id: 3,
      title: 'Uer Profiles',
      image: '/images/carduserprofiles.png',
      alt: 'uer profiles',
       route: '/uerprofiles',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card (index 1)
  const [isMobile, setIsMobile] = useState(false);
 const router = useRouter();

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


const handleTitleClick = (route: string) => {
  router.push(route);
};

 return (
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
              onTitleClick={() => handleTitleClick(slide.route)}
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
       <div className='wave-wrapper' style={{
          position: 'absolute',
            // bottom: 0,
            display:'contents',
            left: 0,
            width: '100%',
            zIndex: 2, // Above iframe, below text section
    }}>
<svg className="waves"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(21, 120, 151, 0.7)" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(21, 120, 151, 0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(21, 120, 151, 0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(21, 120, 151, 1)" />
</g>
</svg>
</div>
    </div>
  );
};
export default CardSlider;