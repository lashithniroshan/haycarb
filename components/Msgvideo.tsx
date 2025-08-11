import React, { useState } from 'react';
import styles from './Msgvideo.module.css';

const Msgvideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [showIcons, setShowIcons] = useState(false); // Control icon visibility on hover

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="max-w-full mx-auto relative"
      style={{
        backgroundColor: 'rgba(0, 80, 114, 1)',
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(9, 226, 255, 0.2) 0%, rgba(2, 39, 88, 0) 100%), url('/images/Ellipse15.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/videorightbg.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <section className="container w-full flex flex-col lg:flex-row mx-auto px-4 py-6 md:py-10 items-center justify-between relative z-10">
        {/* Left Side: Paragraph and Button */}
        <div className="w-full lg:w-1/3 p-4 lg:p-8 text-white text-center lg:text-left">
          <h1 className={styles.maintitle}>Haycarb 2024/25: Impact in Brief</h1>
          <p className="mt-4 text-base md:text-lg para">
            At Haycarb, we lead with expertise, global reach, and purpose. Like strength beneath waves, our deep innovation fuels sustainable manufacturing, ethical leadership, and lasting impact. We deliver value beyond carbon to industries worldwide. Here&apos;s a brief about our impact during 2024/25.
          </p>
          <button
            className="btn-custom wave-btn mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-2 rounded-full text-white font-semibold relative overflow-hidden transition"
            onClick={() => window.open('pdf/full-Annual-Report-2024-2025.pdf', '_blank')}
          >
            Explore More
          </button>
        </div>
        {/* Right Side: Image with Play Icon */}
        <div className="w-full lg:w-2/3 h-auto mt-6 lg:mt-0">
          <div
            className="relative"
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
          >
            <img
              src="videos/videobg1.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto object-cover rounded-3xl"
            />
           
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
                  onClick={handleOpenModal}
                  style={{ pointerEvents: 'auto', zIndex: 3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99"
                    height="99"
                    viewBox="0 0 99 99"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_579_1246)">
                      <path
                        d="M68.9832 49.4988C69.0169 49.4771 69.0506 49.453 69.0819 49.4338H68.8821C62.8073 45.4224 49.1914 19.6473 36.0859 27.6628C42.9577 26.6154 44.6985 42.6246 52.5117 49.4964C44.6985 56.3681 42.9577 72.3773 36.0859 71.33C49.1914 79.3478 62.8097 53.5727 68.8821 49.559H69.0819C69.0482 49.5397 69.0145 49.5156 68.9832 49.494V49.4988Z"
                        fill="white"
                      />
                      <path
                        d="M49.4991 86.0799C69.7023 86.0799 86.0803 69.702 86.0803 49.4987C86.0803 29.2955 69.7023 12.9176 49.4991 12.9176C29.2959 12.9176 12.918 29.2955 12.918 49.4987C12.918 69.702 29.2959 86.0799 49.4991 86.0799Z"
                        stroke="white"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M49.4995 92.1644C73.0631 92.1644 92.1651 73.0624 92.1651 49.4988C92.1651 25.9353 73.0631 6.83325 49.4995 6.83325C25.936 6.83325 6.83398 25.9353 6.83398 49.4988C6.83398 73.0624 25.936 92.1644 49.4995 92.1644Z"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="0.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M49.5 0.25C76.7 0.25 98.75 22.3 98.75 49.5C98.75 76.7 76.7 98.75 49.5 98.75C22.3 98.75 0.25 76.7 0.25 49.5C0.25 22.3 22.3 0.25 49.5 0.25Z"
                        stroke="white"
                        strokeOpacity="0.2"
                        strokeWidth="0.5"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_579_1246">
                        <rect width="99" height="99" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal for Full-Screen YouTube Video */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '80%',
              maxWidth: '800px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <iframe
              className={styles.modalVideo}
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/3c22C-IuKHc?si=ZSmb0JKztRxYJPUI"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Msgvideo;