import React, { useState, useEffect, useRef } from 'react';
import style from './SustaiabilitySlider.module.css';

const SustaiabilitySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const videos = [
    { id: 1, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Sustainable Production', text: 'eco-friendly manufacturing processes ensures a greener future.' },
    { id: 2, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Community Impact', text: 'local communities through sustainable practices and job creation.' },
    { id: 3, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Innovation in Action', text: 'Leveraging cutting-edge technology for a sustainable tomorrow.' },
    { id: 4, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Innovation in Action', text: 'Cutting-edge technology for a sustainable tomorrow.' },
    { id: 5, src: '/videos/oneMinuteNatureVideo.mp4', title: 'Innovation in Action', text: 'Technology for a sustainable tomorrow.' },
  ];

  // Auto-slide effect with pause/resume logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isModalOpen) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }
    }, 5000); // Change slide every 5 seconds
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videos.length, isModalOpen]);

  // Keep slider videos paused unless in modal
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index === activeIndex && !isModalOpen) {
        video.pause(); // Ensure slider video is paused when not in modal
      }
    });
  }, [activeIndex, isModalOpen]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Handle play/pause and open modal
  const handlePlayPause = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      const activeVideo = videoRefs.current[activeIndex];
      if (activeVideo) {
        activeVideo.pause(); // Pause the slider video
      }
      setIsPlaying(true); // Set playing state for modal
    }
  };

  // Close modal and resume slider
  const handleCloseModal = () => {
    setIsModalOpen(false);
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.pause();
      setIsPlaying(false);
    }
  };

  // Calculate transform value dynamically
  const sliderStyle = {
    transform: `translateX(-${(activeIndex * 100) / videos.length}%)`,
    transition: 'transform 0.5s ease',
    display: 'flex',
  };

  return (
    <div className={style.sliderContainer}>
      <h2 className={style.title}>Our Sustainability Journey</h2>
      <div className="container w-full h-full flex mx-auto px-22 pb-5">
        <p className={style.introText}>
          Like the whale, which is majestic, resilient, and precise, Haycarb moves with intention. Every decision is deliberate. Every innovation is impactful. Each strategy mirrors a purposeful move in nature, building a future through intelligence, strength, and foresight.
        </p>
      </div>
      <div className={style.sliderWrapper}>
        {/* Left Arrow */}
        <button className={style.arrow} onClick={handlePrev}>&lt;</button>

        {/* Slider Cards */}
        <div className={style.slider} style={sliderStyle}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`${style.slide} ${
                index === activeIndex ? style.active : index === (activeIndex - 1 + videos.length) % videos.length ? style.prev : style.next
              }`}
            >
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                className={style.video}
                muted
                loop={false}
                playsInline
                src={video.src}
              >
                Your browser does not support the video tag.
              </video>
              {index === activeIndex && !isModalOpen && (
                <>
                  <button className={style.playButton} onClick={handlePlayPause}>
                    {isPlaying ? '❚❚' : '▶'}
                  </button>
                  <p className={style.videoText}>{video.text}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className={style.arrow} onClick={handleNext}>&gt;</button>
      </div>

      {/* Modal for Full-Screen Video */}
      {isModalOpen && (
        <div className={style.modalOverlay} onClick={handleCloseModal}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <video
              ref={(el) => { videoRefs.current[activeIndex] = el; }}
              className={style.modalVideo}
              autoPlay
              controls
              src={videos[activeIndex].src}
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

export default SustaiabilitySlider;