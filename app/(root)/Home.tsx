'use client';
import React, { useEffect, useState } from 'react';
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

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

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
  }, [isContentVisible]);

  const clickHandler = () => {
    setIsContentVisible(true);
  };


  return (
    <div className="max-w-full mx-auto" style={{ minHeight: '100vh' }}> {/* Ensure layout height */}
      <Navbar isScrolled={isScrolled} isContentVisible={isContentVisible} />

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
  className="text-8xl"
  style={{ fontFamily: "Brogadier" }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Boundless Impact
</motion.h1>
              <p className="mt-4 text-base" style={{ fontFamily: 'Gotham-Book, sans-serif' }}>
Haycarb PLC I Annual Report 2024/25
Our report surfaces like a whale clear, bold, and powerful.<br  /> Dive in and explore a year of transformation.
              </p>
              <div
                style={{
                  pointerEvents: 'auto',
                  zIndex: 3,
                }}
              >
                <button
                  className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom wave-hover"
                  onClick={() => window.open('/pdf/full-Annual-Report-2024-2025.pdf', '_blank')}
                >
                  Download full Annual Report 2024/25
                </button>
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
                className="mt-6 px-6 py-2 rounded-full hover:bg-gray-200 transition btn-custom"
                onClick={clickHandler}
              >
                Reveal our journey
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Additional content revealed on click */}
      {isContentVisible && (
        <>
          <Msgvideo />
          <CircleSlider />
          <CardSlider />
          <Leadership />
          <Management />
          <Strategy />
          <FinancialSlider />
          <TableofContent />
          {/* <SustaiabilitySlider /> */}
          <Videoslider />
          {/* Render HomeFooter only when content is visible */}
          <HomeFooter />
        </>
      )}
    </div>
  );
};

export default Home;