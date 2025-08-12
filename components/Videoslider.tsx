import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import style from './Videoslider.module.css';
import { createPortal } from 'react-dom';

const Videoslider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides = [
    { id: 1, src: 'https://www.youtube.com/embed/LE-DSz-2TcE?si=BlxGjh_1sYOsMq7c', thumbnill: '/videos/Puritas Sath Diyawara.jpg', title: 'Puritas Sath Diyawara', subtitle: 'Transforming lives by delivering safe drinking water and supporting education in underprivileged communities.' },
    { id: 2, src: 'https://www.youtube.com/embed/AgMRWMykfww?si=Nx9WK9BdErAXU568', thumbnill: '/videos/Sisu Diwi Pahana.jpg', title: 'Sisu Diwi Pahana', subtitle: 'Empowering students with better nutrition to combat malnutrition and improve well-being.' },
    { id: 3, src: 'https://www.youtube.com/embed/LE-DSz-2TcE?si=OAQAVsyPgFrx4AoD', thumbnill: '/videos/Haritha Angara.jpg', title: 'Haritha Angara', subtitle: 'Production of high-quality coconut shell charcoal while empowering small scale suppliers and reducing environmental impact.' },
    { id: 4, src: 'https://www.youtube.com/embed/CzBTs5hdFGI?si=pZi0IxNM4hUVyDxv', thumbnill: '/videos/Behold the Turtle.jpg', title: 'Behold the Turtle', subtitle: 'Safeguarding marine biodiversity through conservation, habitat restoration and awareness effort' },
    { id: 5, src: 'https://www.youtube.com/embed/psD1JTSJqOk?si=iAA9XbzpM4yOnOnT', thumbnill: '/videos/Puritas Sath Diyawara - Going Beyond.jpg', title: 'Puritas Sath Diyawara - Going Beyond', subtitle: 'Empowering underprivileged children through access to education and essential school supplies for a brighter future.' },
  ];

  const handleSlideChange = (id: number) => {
    setActiveSlide(id);
    console.log('Clicked slide:', id, 'Active Slide:', activeSlide);
  };

  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev % slides.length) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isModalOpen, slides.length]);

  const getTransform = (id: number) => {
    const totalSlides = slides.length;
    const indexDiff = id - activeSlide;
    const normalizedDiff = ((indexDiff % totalSlides) + totalSlides) % totalSlides;

    if (normalizedDiff === 0) {
      return { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 1 };
    } else if (normalizedDiff === 1 || normalizedDiff === totalSlides - 1) {
      return {
        transform: normalizedDiff === 1 ? 'translateX(40%) scale(0.8)' : 'translateX(-40%) scale(0.8)',
        opacity: 0.4,
        zIndex: 0,
      };
    } else {
      return {
        transform: normalizedDiff <= 2 ? 'translateX(60%) scale(0.6)' : 'translateX(-60%) scale(0.6)',
        opacity: 0.2,
        zIndex: -1,
      };
    }
  };

  const handlePlayPause = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      const activeVideo = videoRefs.current[activeSlide - 1];
      if (activeVideo) {
        activeVideo.pause();
      }
      setIsPlaying(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  const Modal = () => (
    <div
      className={style.modalOverlay}
      onClick={handleCloseModal}
    >
      <div
        className={style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className={style.modalVideo}
          width="100%"
          height="450"
          src={`${slides[activeSlide - 1].src}?autoplay=1`}
          title={slides[activeSlide - 1].title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          className={style.closeButton}
          onClick={handleCloseModal}
        >
          ×
        </button>
      </div>
    </div>
  );

  return (
    <div className={style.container}>
      <h2 className={style.maintitle}>Our Sustainability Journey</h2>
      <div className="container w-full h-full flex mx-auto md:px-22 sm:px-10 pb-5">
        <p className={style.introText}>
          Our sustainability journey is driven by commitment and action. We integrate eco-friendly practices, reduce our footprint, and foster social responsibility to create lasting value for the planet, people, and future generations.
        </p>
      </div>
      <div className={style.radioInputs}>
        {slides.map((slide) => (
          <input
            key={slide.id}
            type="radio"
            name="slider"
            id={`item-${slide.id}`}
            checked={activeSlide === slide.id}
            onChange={() => handleSlideChange(slide.id)}
          />
        ))}
      </div>

      <div className={style.cards}>
        {slides.map((slide) => (
          <label
            key={slide.id}
            className={`${style.card} ${activeSlide === slide.id ? style.active : ''} ${style.debug}`}
            htmlFor={`item-${slide.id}`}
            id={`song-${slide.id}`}
            onClick={() => handleSlideChange(slide.id)}
            style={{
              ...getTransform(slide.id),
              transition: 'transform 0.4s ease, opacity 0.4s ease',
            }}
          >
            <Image
              src={slide.thumbnill}
              alt={slide.title}
              className={style.video}
              width={400}
              height={225}
            />
            {activeSlide === slide.id && !isModalOpen && (
              <button className={style.playButton} onClick={handlePlayPause}>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{
                    width: '120px',
                    height: '120px',
                    animation: 'fadeIn 0.5s forwards',
                    zIndex: 2,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none">
                    <g clipPath="url(#clip0_579_1246)">
                      <path d="M68.9832 49.4988C69.0169 49.4771 69.0506 49.453 69.0819 49.4338H68.8821C62.8073 45.4224 49.1914 19.6473 36.0859 27.6628C42.9577 26.6154 44.6985 42.6246 52.5117 49.4964C44.6985 56.3681 42.9577 72.3773 36.0859 71.33C49.1914 79.3478 62.8097 53.5727 68.8821 49.559H69.0819C69.0482 49.5397 69.0145 49.5156 68.9832 49.494V49.4988Z" fill="white" />
                      <path d="M49.4991 86.0799C69.7023 86.0799 86.0803 69.702 86.0803 49.4987C86.0803 29.2955 69.7023 12.9176 49.4991 12.9176C29.2959 12.9176 12.918 29.2955 12.918 49.4987C12.918 69.702 29.2959 86.0799 49.4991 86.0799Z" stroke="white" strokeMiterlimit="10" />
                      <path d="M49.4995 92.1644C73.0631 92.1644 92.1651 73.0624 92.1651 49.4988C92.1651 25.9353 73.0631 6.83325 49.4995 6.83325C25.936 6.83325 6.83398 25.9353 6.83398 49.4988C6.83398 73.0624 25.936 92.1644 49.4995 92.1644Z" stroke="white" strokeOpacity="0.5" strokeWidth="0.5" strokeMiterlimit="10" />
                      <path d="M49.5 0.25C76.7 0.25 98.75 22.3 98.75 49.5C98.75 76.7 76.7 98.75 49.5 98.75C22.3 98.75 0.25 76.7 0.25 49.5C0.25 22.3 22.3 0.25 49.5 0.25Z" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_579_1246">
                        <rect width="99" height="99" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            )}
            <p className={style.subtitle}>{slide.subtitle}</p>
          </label>
        ))}
      </div>

      {isModalOpen && createPortal(<Modal />, document.body)}
    </div>
  );
};

export default Videoslider;