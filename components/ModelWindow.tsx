'use client';
import React, { useState, useEffect } from 'react';
import styles from './ModelWindow.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/modelwindowimage1.png',
    title: 'Sustainability at Haycarb',
    description:
      'Five years of integrated reporting at Haycarb have evolved into a strategic narrative, reflecting deeper ESG insights, transparent governance, and stakeholder-focused value creation',
  },
  {
    id: 2,
   image: '/images/modelwindowimage1.png',
    title: 'Innovation in Action',
   description:
      'Haycarb’s 2024/25 report introduces an AI-driven, digitally immersive experience with enhanced accessibility and interactive features to boost stakeholder engagement and transparency.',
  },
  {
    id: 3,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'Haycarb’s 2024/25 report introduces an AI-driven, digitally immersive experience with enhanced accessibility and interactive features to boost stakeholder engagement and transparency.',
  },
  {
    id: 4,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'Haycarb’s 2024/25 report introduces an AI-driven, digitally immersive experience with enhanced accessibility and interactive features to boost stakeholder engagement and transparency.',
  },
  {
    id: 5,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'The Chairman’s and Managing Director’s joint message is presented in Sinhala, Tamil, and other foreign languages to broaden stakeholder reach and engagement',
  },
  {
    id: 6,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'Haycarb’s digital report features a chart generator enabling stakeholders to create, customize, and download interactive performance visualizations.',
  },
  {
    id: 7,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'FinQuest introduces game-based learning in Haycarb’s digital report, engaging stakeholders through interactive quizzes on strategy, performance, and ESG.',
  },
  {
    id: 8,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'Haycarb’s digital report offers user profile-based dashboards, enabling personalized data views tailored to stakeholder roles and interests',
  },
  {
    id: 9,
    image: '/images/modelwindowimage1.png',
    title: 'Global Presence',
   description:
      'The summarized version fo the Haycarb 2024/25 annual report highlights global leadership, resilient performance, ESG impact, and digital transformation through integrated, accessible reporting.',
  },
];

const ModelWindow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(true);

  // Auto-play slides every 5 seconds
  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop continuously
    }, 5000);
    return () => clearInterval(timer);
  }, [visible]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const closeModal = () => setVisible(false);

  if (!visible) return null;

  const slide = slides[currentSlide];

  return (
     <AnimatePresence>
    <motion.div
     className={styles.overlay}
      initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          >
      <motion.div
       className={styles.modal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
       >

        <div className={styles.mobcontrol}>
 <div className={styles.topControls}>
          <button onClick={prevSlide}>
            <svg className='leftarrow' xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>

          <button onClick={nextSlide}>
            {/* <Image src="/icons/modelarrow.svg" className='rightarrow' alt="rightarrow" width={30} height={30} /> */}
             <svg className={styles.rightarrow} xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
          <button onClick={closeModal} className={styles.closeBtn}>
            <svg className='modelclose' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path opacity="0.5" d="M1 20L20 1M1 1.00007L20 20" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
</svg>
          </button>
        </div>
        </div>
        <div className={styles.content}>
          {/* Left Image */}
          <div className={styles.imageWrapper}>
            <img src={slide.image} alt={slide.title} />
          </div>

          {/* Right Text */}
          <div className={styles.textWrapper}>
            <div className={styles.lgcontrol}>
             <div className={styles.topControls}>
          <button onClick={prevSlide}>
            <svg className='leftarrow' xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>

          <button onClick={nextSlide}>
            {/* <Image src="/icons/modelarrow.svg" className='rightarrow' alt="rightarrow" width={30} height={30} /> */}
             <svg className={styles.rightarrow} xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
          <button onClick={closeModal} className={styles.closeBtn}>
            <svg className='modelclose' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path opacity="0.5" d="M1 20L20 1M1 1.00007L20 20" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
</svg>
          </button>
        </div></div>
        <div className={styles.contentWrapper}>
             <div className={styles.centercontent}> 
                 <p>{slide.description}</p>
                 </div>
          
         </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};

export default ModelWindow;
