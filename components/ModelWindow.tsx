'use client';
import React, { useState, useEffect, JSX } from 'react';
import styles from './ModelWindow.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  button?: () => JSX.Element;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/popup/1.jpg',
    title: 'Evolution of Annual reporting',
    description:
      'Five years of integrated reporting at Haycarb have evolved into a strategic narrative, reflecting deeper ESG insights, transparent governance, and stakeholder-focused value creation',
      button: () => (
      <div>
        <button
          className="mt-6 px-6 py-2 flex bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() => window.open('pdf/Report Evolution.pdf', '_blank')}
        >
          Explore More
        </button>
      </div>
    ),
  },
  {
    id: 2,
  image: '/images/popup/2.jpg',
    title: 'What’s new in digital reporting',
   description:
      'Haycarb’s 2024/25 report introduces an AI-driven, digitally immersive experience with enhanced accessibility and interactive features to boost stakeholder engagement and transparency.',
         button: () => (
      <div>
        <button
          className="mt-6 px-6 py-2 flex bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() => window.open('pdf/Digitally Innovating Our Corporate Reporting.pdf', '_blank')}
        >
          Learn More
        </button>
      </div>
    ),
  },
  {
    id: 3,
    image: '/images/popup/3.jpg',
    title: 'Multilingual accessibility',
   description:
      'The Chairman’s and Managing Director’s joint message is presented in Sinhala, Tamil, and other foreign languages to broaden stakeholder reach and engagement',

  },
  {
    id: 4,
    image: '/images/popup/4.jpg',
    title: 'Chart Generator',
    description:
      'Haycarb’s digital report features a chart generator enabling stakeholders to create, customize, and download interactive performance visualizations.',
         button: () => (
      <div>
        <button
          className="mt-6 px-6 py-2 flex bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() => window.open('/tailor-made-for-you', '_blank')}
        >
          Generate Your Report
        </button>
      </div>
    ),
  },
  {
    id: 5,
    image: '/images/popup/5.jpg',
    title: 'FinQuest- Game based learning',
   description:
      'FinQuest introduces game-based learning in Haycarb’s digital report, engaging stakeholders through interactive quizzes on strategy, performance, and ESG.',
         button: () => (
      <div>
        <button
          className="mt-6 px-6 py-2 flex bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() => window.open('/game', '_blank')}
        >
         Play Now
        </button>
      </div>
    ),

  },
  {
    id: 6,
    image: '/images/popup/6.jpg',
    title: 'User profiles-based dashboards',
    description:
      'Haycarb’s digital report offers user profile-based dashboards, enabling personalized data views tailored to stakeholder roles and interests',
           button: () => (
      <div>
        <button
          className="mt-6 px-6 py-2 flex bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() => window.open('/user-profile', '_blank')}
        >
          Learn More
        </button>
      </div>
    ),
  },
  {
    id: 7,
    image: '/images/popup/7.jpg',
    title: 'Synopsis of Annual report 2024/25',
   description:
      'The summarized version fo the Haycarb 2024/25 annual report highlights global leadership, resilient performance, ESG impact, and digital transformation through integrated, accessible reporting.',
           button: () => (
      <div>
        <button
          className="mt-6 px-6 py-2 flex bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() => window.open('pdf/Haycarb PLC - Synopsis of Annual Report 2024_25.pdf', '_blank')}
        >
          Annual reporting
        </button>
      </div>
    ),
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
    }, 10000);
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
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
</button>
          <button onClick={nextSlide}>
            {/* <Image src="/icons/modelarrow.svg" className='rightarrow' alt="rightarrow" width={30} height={30} /> */}
             <svg className={styles.rightarrow} xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
          <button onClick={closeModal} className={styles.closeBtn}>
            <svg className='modelclose' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path opacity="0.7" d="M1 20L20 1M1 1.00007L20 20" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
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
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>

          <button onClick={nextSlide}>
            {/* <Image src="/icons/modelarrow.svg" className='rightarrow' alt="rightarrow" width={30} height={30} /> */}
             <svg className={styles.rightarrow} xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<path d="M10.3185 19.0715L1.74707 10.5M1.74707 10.5L10.3185 1.86645M1.74707 10.5L29.6042 10.5" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
          <button onClick={closeModal} className={styles.closeBtn}>
            <svg className='modelclose' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path opacity="0.7" d="M1 20L20 1M1 1.00007L20 20" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
</svg>
          </button>
        </div></div>
        <div className={styles.contentWrapper}>
             <div className={styles.centercontent}> 
                 <p>{slide.description}</p>
                  {slide.button && <div className="mt-6">{slide.button()}</div>}
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
