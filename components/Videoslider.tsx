import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import style from './Videoslider.module.css';

const Videoslider = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Start with first slide (item-1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Slide data (videos and info)
  const slides = [
    { id: 1, src: '/videos/oneMinuteNatureVideo.mp4', thumbnill:'/videos/videobg1.jpg', title: 'Bunker', subtitle: 'Innovating with purpose, shaping a greener future from day one.' },
    { id: 2, src: '/videos/oneMinuteNatureVideo.mp4', thumbnill:'/videos/videobg2.jpg', title: 'Song 2', subtitle: 'Our sustainability journey is driven by commitment and action.' },
    { id: 3, src: '/videos/oneMinuteNatureVideo.mp4', thumbnill:'/videos/videobg13.jpg', title: 'Falling Out', subtitle: 'We integrate eco-friendly practices.' },
  ];

  // Handle slide change
  const handleSlideChange = (id: number) => {
    setActiveSlide(id);
    console.log('Clicked slide:', id, 'Active Slide:', activeSlide); // Debug log
  };

  // Auto-play effect (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev % 3) + 1);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Determine transform based on activeSlide
  const getTransform = (id: number) => {
    if (id === activeSlide) {
      return { transform: 'translatex(0) scale(1)', opacity: 1, zIndex: 1 };
    } else if (
      (activeSlide === 1 && id === 3) ||
      (activeSlide === 2 && id === 1) ||
      (activeSlide === 3 && id === 2)
    ) {
      return { transform: 'translatex(-40%) scale(0.8)', opacity: 0.4, zIndex: 0 };
    } else {
      return { transform: 'translatex(40%) scale(0.8)', opacity: 0.4, zIndex: 0 };
    }
  };

  // Handle play/pause and open modal
  const handlePlayPause = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      const activeVideo = videoRefs.current[activeSlide - 1]; // Adjust index (0-based)
      if (activeVideo) {
        activeVideo.pause(); // Pause the slider video
      }
      setIsPlaying(true); // Set playing state for modal
    }
  };

  // Close modal and reset
  const handleCloseModal = () => {
    setIsModalOpen(false);
    const activeVideo = videoRefs.current[activeSlide - 1];
    if (activeVideo) {
      activeVideo.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.maintitle}>Our Sustainability Journey</h2>
      <div className="container w-full h-full flex mx-auto md:px-22 sm:px-10 pb-5">
        <p className={style.introText}>
          Like the whale, which is majestic, resilient, and precise, Haycarb moves with intention. Every decision is deliberate. Every innovation is impactful. Each strategy mirrors a purposeful move in nature, building a future through intelligence, strength, and foresight.
        </p>
      </div>
      <div className={style.radioInputs}>
        <input
          type="radio"
          name="slider"
          id="item-1"
          checked={activeSlide === 1}
          onChange={() => handleSlideChange(1)}
        />
        <input
          type="radio"
          name="slider"
          id="item-2"
          checked={activeSlide === 2}
          onChange={() => handleSlideChange(2)}
        />
        <input
          type="radio"
          name="slider"
          id="item-3"
          checked={activeSlide === 3}
          onChange={() => handleSlideChange(3)}
        />
      </div>

      <div className={style.cards}>
        {slides.map((slide) => (
          <label
            key={slide.id}
            className={`${style.card} ${activeSlide === slide.id ? style.active : ''} ${style.debug}`} // Debug class
            htmlFor={`item-${slide.id}`}
            id={`song-${slide.id}`}
            onClick={() => handleSlideChange(slide.id)}
            style={{
              ...getTransform(slide.id),
              transition: 'transform 0.4s ease, opacity 0.4s ease',
            }}
          >
            <video
              ref={(el) => { videoRefs.current[slide.id - 1] = el; }} // Store ref with 0-based index
              src={slide.src}
              className={style.video}
              muted
              loop={false}
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
              <div
              /> <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none">
<g clipPath="url(#clip0_579_1246)">
<path d="M68.9832 49.4988C69.0169 49.4771 69.0506 49.453 69.0819 49.4338H68.8821C62.8073 45.4224 49.1914 19.6473 36.0859 27.6628C42.9577 26.6154 44.6985 42.6246 52.5117 49.4964C44.6985 56.3681 42.9577 72.3773 36.0859 71.33C49.1914 79.3478 62.8097 53.5727 68.8821 49.559H69.0819C69.0482 49.5397 69.0145 49.5156 68.9832 49.494V49.4988Z" fill="white"/>
<path d="M49.4991 86.0799C69.7023 86.0799 86.0803 69.702 86.0803 49.4987C86.0803 29.2955 69.7023 12.9176 49.4991 12.9176C29.2959 12.9176 12.918 29.2955 12.918 49.4987C12.918 69.702 29.2959 86.0799 49.4991 86.0799Z" stroke="white" strokeMiterlimit="10"/>
<path d="M49.4995 92.1644C73.0631 92.1644 92.1651 73.0624 92.1651 49.4988C92.1651 25.9353 73.0631 6.83325 49.4995 6.83325C25.936 6.83325 6.83398 25.9353 6.83398 49.4988C6.83398 73.0624 25.936 92.1644 49.4995 92.1644Z" stroke="white" strokeOpacity="0.5" strokeWidth="0.5" strokeMiterlimit="10"/>
<path d="M49.5 0.25C76.7 0.25 98.75 22.3 98.75 49.5C98.75 76.7 76.7 98.75 49.5 98.75C22.3 98.75 0.25 76.7 0.25 49.5C0.25 22.3 22.3 0.25 49.5 0.25Z" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" strokeMiterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_579_1246">
<rect width="99" height="99" fill="white"/>
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

      {/* Modal for Full-Screen Video */}
      {isModalOpen && (
        <div className={style.modalOverlay} onClick={handleCloseModal}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <video
              ref={(el) => { videoRefs.current[activeSlide - 1] = el; }} // Update ref for modal video
              className={style.modalVideo}
              autoPlay
              controls
              src={slides[activeSlide - 1].src}
            >
              Your browser does not support the video tag.
            </video>
            <button className={style.closeButton} onClick={handleCloseModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videoslider;