'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { motion } from "framer-motion";
import Navbar from 'components/Navbar';
import Msgvideo from 'components/Msgvideo';
import CircleSlider from 'components/CircleSlider';
import CardSlider from 'components/CardSlider';
import Leadership from 'components/Leadership';
import Management from 'components/Management';
import Strategy from 'components/Strategy';
import FinancialSlider from 'components/FinancialSlider';
import TableofContent from 'components/TableofContent';
import { HomeFooter } from 'components/Footer';
import Videoslider from 'components/Videoslider';
import ModelWindow from 'components/ModelWindow';
import FloatingButtons from 'components/ui/FloatingButtons';
import SearchParamsHandler from 'components/SearchParamsHandler';


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [showModal, setShowModal] = useState(false); // New state for modal delay


  useEffect(() => {
    // Force scroll to top and disable scroll immediately
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Target html element too

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Enable scroll only when content is visible
    document.body.style.overflow = isContentVisible ? 'auto' : 'hidden';
    document.documentElement.style.overflow = isContentVisible ? 'auto' : 'hidden';

    // Show modal after 5 seconds if content is visible
    let timer: NodeJS.Timeout;
    if (isContentVisible) {
      timer = setTimeout(() => setShowModal(true), 2000);
    } else {
      setShowModal(false);
    }
    return () => clearTimeout(timer);

  }, [isContentVisible]);



  const clickHandler = () => {
    setIsContentVisible(true);
  };


  return (
    <div className="max-w-full mx-auto" style={{ minHeight: '100vh' }}> {/* Ensure layout height */}
     <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler setIsContentVisible={setIsContentVisible} setShowModal={setShowModal} />
      </Suspense>
      <Navbar isScrolled={isScrolled} isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />
      {isContentVisible && (
  <div className="fixed top-1/4 left-2 z-50 flex flex-col items-center space-y-1 menuforitems">
    {[
      { id: 'msgvideo', label: 'Msgvideo' },
      { id: 'circleslider', label: 'CircleSlider' },
      { id: 'cardslider', label: 'CardSlider' },
      { id: 'leadership', label: 'Leadership' },
      { id: 'management', label: 'Management' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'financial', label: 'Financial' },
      { id: 'tableofcontent', label: 'Table' },
      { id: 'videoslider', label: 'Video' },
    ].map((section, index, array) => (
      <div key={section.id} className="flex flex-col items-center">
        {/* Diamond Icon */}
        <div
          onClick={() => {
            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-4 h-4 transform rotate-45 cursor-pointer hover:bg-blue-400 transition"
           style={{ border: '1px solid rgba(122, 149, 184, 1)' }}
        />
        {/* Vertical dashed line (skip after last icon) */}
        {index < array.length - 1 && (
          <div style={{
               padding: '5px',
               marginTop: '7px',
               width:'17px',
          }}>
           <div className="border-b-0  w-full " style={{ border: '1px solid rgba(122, 149, 184, 1)',marginBottom:'1px' }}></div>
          <div className="border-b-0  w-full " style={{ border: '1px solid rgba(122, 149, 184, 1)',marginBottom:'1px' }}></div>
           <div className="border-b-0  w-full " style={{ border: '1px solid rgba(122, 149, 184, 1)',marginBottom:'1px' }}></div>
           </div>
        )}
      </div>
    ))}
  </div>
)}

      {/* Sketchfab embed wrapper always visible on load */}
      <div className="sketchfab-embed-wrapper" 
        style={{ position: 'relative', width: '100vw', height: '100vh', background: '#3C7DA6', overflow: 'hidden' }}>
        <iframe
          title="Blue Whale"
          frameBorder="0" 
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          xr-spatial-tracking='true'
          execution-while-out-of-viewport='true'
          execution-while-not-rendered='true'
          web-share='true'
          width="100%"
          height="100%"
          src="https://sketchfab.com/models/c20252aa7eed48ef90b6ac605fcde51f/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, }}
        /> 
      {isContentVisible && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
              pointerEvents: 'auto',
            }}
          />
        )}
        <div className='wave-wrapper' style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
        }}>
          <svg className="waves"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 80, 114, 0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 80, 114, 0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 80, 114, 0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0, 80, 114, 1)" />
            </g>
          </svg>
        </div>
      </div>

      {/* Section with initial content always visible */}
      <section className="text-white flex items-center justify-center"
        style={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '60%',
          zIndex: 2,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div className="text-center">
          {isContentVisible ? (
            <div> 
            <motion.h1
  className="text-7xl md:text-7xl"
  style={{ fontFamily: "Brogadier" }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  Boundless Impact
</motion.h1>
  <motion.p
  className="mt-4 text-base"
  style={{ fontFamily: 'Gotham-Book, sans-serif' }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  Haycarb PLC I Annual Report 2024/25
Our report surfaces like a whale clear, bold, and powerful.<br  /> Dive in and explore a year of transformation.
</motion.p>
              <div
                style={{
                  pointerEvents: 'auto',
                  zIndex: 3,
                }}
              >
                  <motion.button
  className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
  onClick={() => window.open('/pdf/Haycarb-PLC-Annual-Report-2024-25.pdf', '_blank')}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
 Download Full Annual Report 2024/25
</motion.button>
              </div>
            </div>
          ) : (
            <div
              style={{
                pointerEvents: 'auto',
                zIndex: 3,
                paddingTop:'25%',
              }}
            >
                <p className="mt-4 text-base" style={{ fontFamily: 'Gotham-Book, sans-serif' }}>
Haycarb PLC I Annual Report 2024/25
Our report surfaces like a whale clear, bold, and powerful.<br  /> Dive in and explore a year of transformation.
              </p>
              <button
                className="mt-6 px-6 py-2 rounded-full transition btn-custom wave-btn"
                onClick={clickHandler}
              >
                Reveal Our Journey
              </button>
            </div>
          )}
        </div>
      </section>
{!isContentVisible && (
  <motion.div
    className="drag-indicator"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
    style={{
      position: 'absolute',
      top: '6%',
      right: '4%',
      transform: 'translateX(-50%)',
      zIndex: 3,
      pointerEvents: 'none',
    }}
  >
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        border: '2px dashed rgba(255,255,255,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          width: 0,
          height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: '12px solid white',
          position: 'absolute',
          right: -16,
        }}
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <motion.div
        style={{
          width: 0,
          height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: '12px solid white',
          position: 'absolute',
          left: -16,
        }}
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </div>
    <p style={{
      color: 'white',
      fontSize: '14px',
      marginTop: '8px',
      textAlign: 'center',
      fontFamily: 'Gotham-Book, sans-serif'
    }}>
      Drag to explore
    </p>
  </motion.div>
)}
      {/* Additional content revealed on click */}
     {isContentVisible && (
  <>
    <div id="msgvideo"><Msgvideo /></div>
    <div id="circleslider"><CircleSlider /></div>
    <div id="cardslider"><CardSlider /></div>
    <div id="leadership"><Leadership /></div>
    <div id="management"><Management /></div>
    <div id="strategy"><Strategy /></div>
    <div id="financial"><FinancialSlider /></div>
    <div id="tableofcontent"><TableofContent /></div>
    <div id="videoslider"><Videoslider /></div>
    <HomeFooter />
    <FloatingButtons />
    {showModal && <ModelWindow />}
    {/* model window */}
  </>
)}
    </div>
  );
};

export default Home;