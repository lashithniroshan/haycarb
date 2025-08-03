import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Msgvideo.module.css';

const Msgvideo = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Start with true due to autoPlay
  const [showIcons, setShowIcons] = useState(false); // Control icon visibility on hover
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="max-w-full mx-auto relative"
      style={{
        backgroundColor: 'rgba(0, 80, 114, 1)',
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(9, 226, 255, 0.2) 0%, rgba(2, 39, 88, 0) 100%), url('/images/Ellipse15.png')`,
        backgroundSize: 'cover', // Cover the container responsively
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh', // Minimum height for responsiveness
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/videorightbg.png')`,
          backgroundSize: 'contain', // Scale to fit while maintaining aspect ratio
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0, // Behind the content
        }}
      />
      <section className="container w-full flex flex-col md:flex-row mx-auto px-4 py-6 md:py-10 items-center justify-between relative z-10">
        {/* Left Side: Paragraph and Button */}
        <div className="w-full md:w-1/3 p-4 md:p-8 text-white text-center md:text-left">
          <h1 className={styles.maintitle}>Haycarb 2024/25: Impact in Brief</h1>
          <p className="mt-4 text-base md:text-lg para">
            At Haycarb, we lead with expertise, global reach, and purpose. Like strength beneath waves, our deep innovation fuels sustainable manufacturing, ethical leadership, and lasting impact. We deliver value beyond carbon to industries worldwide. Here&apos;s a brief about our impact during 2024/25.
          </p>
          <button
            className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom"
            onClick={() => window.open('pdf/full-Annual-Report-2024-2025.pdf', '_blank')}
          >
            Explore More
          </button>
        </div>
        {/* Right Side: Video */}
        <div className="w-full md:w-2/3 h-auto mt-6 md:mt-0">
          <div
            className="relative"
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
          >
            <video
              ref={videoRef}
              className="w-full h-auto object-cover rounded-3xl"
              autoPlay={isPlaying}
              muted
              loop
              controls
              src="/videos/oneMinuteNatureVideo.mp4"
            >
              Your browser does not support the video tag.
            </video>
            {showIcons && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                style={{
                  width: '80px',
                  height: '80px',
                  animation: showIcons ? 'fadeIn 0.5s forwards' : 'fadeOut 0.5s forwards',
                  zIndex: 2,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    borderRadius: '50%',
                    boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.5), 0 0 0 10px rgba(255, 255, 255, 0.3)',
                    animation: showIcons ? 'borderFadeIn 0.5s forwards' : 'borderFadeOut 0.5s forwards',
                  }}
                />
                <div
                  className="relative cursor-pointer"
                  onClick={isPlaying ? handleStop : handlePlay}
                  style={{ pointerEvents: 'auto', zIndex: 3 }}
                >
                  {isPlaying ? (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="6" y="5" width="12" height="14" />
                    </svg>
                  ) : (
                    <Image
                      src="/icons/play.png"
                      alt="Play"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Msgvideo;