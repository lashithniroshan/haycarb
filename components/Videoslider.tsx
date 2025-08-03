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
    { id: 1, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Bunker', subtitle: 'Innovating with purpose, shaping a greener future from day one.' },
    { id: 2, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Song 2', subtitle: 'Our sustainability journey is driven by commitment and action.' },
    { id: 3, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Falling Out', subtitle: 'We integrate eco-friendly practices.' },
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
              autoPlay
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
                className="absolute inset-0"
                style={{
                  borderRadius: '50%',
                  boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.5), 0 0 0 16px rgba(255, 255, 255, 0.3)',
                  animation: 'borderFadeIn 0.5s forwards',
                }}
              />
                 <Image
                                    src="/icons/play.png" // Replace with your play.png path
                                    alt="Play"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12"
                                    style={{ objectFit: 'contain' }} // Ensure proper scaling
                                  />
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