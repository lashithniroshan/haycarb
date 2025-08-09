"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./CircleSlider.module.css";


// Define the Slide interface for TypeScript
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  activeimage: string;
  selectedimage: string;
  alt: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    title: "The Blow",
    subtitle: "Signalling Clarity and Intent",
    description:
      "When whales surface to breathe, their spout signals presence and strength with clarity. Similarly, Haycarb rises with purpose; transparency is our core. Strong performance and lasting impact drives us forward, powered by a relentless commitment to sustainable innovation and high standards.",
    image: "/images/WalesEllipse-1.png",
    activeimage: "/images/waleanim.gif",
    selectedimage: "/images/waleanim.gif",
    alt: "Wallscape",
  },
  {
    id: 2,
    title: "The Spy Hop",
    subtitle: "Staying Informed and Aware",
    description:
      "A spy hop is when a whale rises vertically to observe its surroundings - signaling awareness and clarity. At Haycarb, we stay attuned to global trends, enabling swift, strategic responses that turn insight into action with agility, precision, and forward-thinking purpose.",
    image: "/images/WalesEllipse-2.png",
    activeimage: "/images/waleanim.gif",
    selectedimage: "/images/waleanim.gif",
    alt: "Stores",
  },
  {
    id: 3,
    title: "The Fluke-Up Drive",
    subtitle: "Diving Deep to Make an Impacttle",
    description:
      "The iconic fluke-up dive signals the whales deep, deliberate descent into the ocean’s deaths. As we dive deep into every challenge, uncovering insights, optimising processes, and creating value at every level, Haycarb navigates complexity with focus and intent, emerging stronger, smarter, and more resilient.",
    image: "/images/WalesEllipse-1.png",
    activeimage: "/images/waleanim.gif",
    selectedimage: "/images/waleanim.gif",
    alt: "wayfinders",
  },
  {
    id: 4,
    title: "The Tail Slap",
    subtitle: "Making a Statement",
    description:
      "A whale’s tail slap sends ripples across the ocean, a bold signal of strength and intent. Haycarb’s technical excellence and stakeholder-focused innovation create similar ripples across industries, uniting partners through clear communication, ethical leadership, and purpose-driven collaboration.",
    image: "/images/WalesEllipse-2.png",
    activeimage: "/images/waleanim.gif",
    selectedimage: "/images/waleanim.gif",
    alt: "trains",
  },
  {
    id: 5,
    title: "The Head Lunge",
    subtitle: "Moving with Force and Direction",
    description:
      "A whale’s head lunge is a swift, forceful strike; precision and power combined to capture its target. Likewise, Haycarb advances with intent, leveraging R&D and clean tech to break barriers and lead sustainable innovation. Our bold actions are focused, powerful, and purpose-driven.",
    image: "/images/WalesEllipse-1.png",
    activeimage: "/images/waleanim.gif",
    selectedimage: "/images/waleanim.gif",
    alt: "Venues",
  },
  {
    id: 6,
    title: "The Breach",
    subtitle: "Rising Above and Beyond",
    description:
      "Few sights inspire like a whale breaching rising with strength and purpose. Haycarb’s breakthroughs soar just as boldly: transformative leaps that redefine sustainable manufacturing and drive impact for people, planet, and future generations with unwavering purpose. 'Driving Value, Changing Lives'.",
    image: "/images/WalesEllipse-2.png",
    activeimage: "/images/waleanim.gif",
    selectedimage: "/images/waleanim.gif",
    alt: "Wallscape",
  },
];

const CircleSlider = () => {
   const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlay2, setShowOverlay2] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(4); // Initial active slide (id: 5, index: 4)
  const radius = 150;
  const gap = 150;
  const adjustedRadius = radius + gap;
  const angleStep = 360 / slidesData.length;
  const progressRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const updateSlides = () => {
    const slides = document.querySelectorAll(`.${styles.circleSlide}`);
    const infoBoxes = document.querySelectorAll(`.${styles.infoBox}`);
    let newActiveIndex = 0;

    slides.forEach((slide, index) => {
      const angle = index * angleStep + currentRotation;
      const rad = (angle * Math.PI) / 180;
      const x = adjustedRadius * Math.cos(rad);
      const y = adjustedRadius * Math.sin(rad);

      const normalized = ((angle % 360) + 360) % 360;
      if (normalized < angleStep / 2 || normalized > 360 - angleStep / 2) {
        slide.classList.add(styles.activeSlide);
        slide.setAttribute(
          "style",
          `transform: translate(${x}px, ${y}px) scale(1.5);`
        );
        newActiveIndex = index;
      } else {
        slide.classList.remove(styles.activeSlide);
        slide.setAttribute("style", `transform: translate(${x}px, ${y}px);`);
      }
    });

    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
      console.log(
        "Active Index:",
        newActiveIndex,
        "Slide ID:",
        slidesData[newActiveIndex]?.id
      ); // Debug log
    }

    infoBoxes.forEach((box) => {
      const boxIndex = parseInt(box.getAttribute("data-slide") || "0");
      if (boxIndex === slidesData[newActiveIndex]?.id) {
        box.classList.add(styles.fadeIn);
      } else {
        box.classList.remove(styles.fadeIn);
      }
    });
  };

  const rotateCircle = (direction: number) => {
    setCurrentRotation((prev) => prev + direction * angleStep);
  };

  const animateProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      void progressRef.current.offsetWidth;
      progressRef.current.style.transition = "width 10s linear";
      progressRef.current.style.width = "100%";
    }
  };

  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    animateProgressBar();
    autoplayRef.current = setInterval(() => {
      rotateCircle(1);
    }, 10000);
  };

  useEffect(() => {
    updateSlides();
    startAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentRotation]);

  const handleSlideClick = (index: number) => {
    setCurrentRotation(-index * angleStep);
    setActiveIndex(index);
    startAutoplay();
  };

  // Get the previous index, handling circular loop
  const getPreviousIndex = () => {
    return activeIndex === 0 ? slidesData.length - 1 : activeIndex - 1;
  };

  const handleOpenVideo = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };
   const handleOpenVideo2 = () => {
    setShowOverlay2(true);
  };

  const handleClose2 = () => {
    setShowOverlay2(false);
  };

  return (
    <div
      className={styles.sliderOuter}
      style={{
        backgroundColor: "rgba(0, 80, 114, 1)",
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(9, 226, 255, 0.2) 0%, rgba(2, 39, 88, 0) 100%), url('/images/Ellipse11.png')`,
        backgroundSize: "auto",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className={styles.sliderCol}> 
        <div className={`${styles.circleSlider} ${styles.mobileFirst}`}>
          {slidesData.map((slide, index) => (
            <div key={slide.id} className={styles.slideWrapper}>
              <div
                className={`${styles.circleSlide} ${
                  index === activeIndex ? styles.activeSlide : ""
                }`}
                onClick={() => handleSlideClick(index)}
                style={{
                  position: "absolute",
                  transform: `translate(${adjustedRadius * Math.cos(
                    (index * angleStep + currentRotation) * (Math.PI / 180)
                  )}px, ${adjustedRadius * Math.sin(
                    (index * angleStep + currentRotation) * (Math.PI / 180)
                  )}px) ${
                    index === activeIndex
                      ? "scale(1.5)"
                      : ""
                  }`,
                }}
              >
                <div className={styles.titleSubtitleContainer}>
                  {index === getPreviousIndex() && (
                    <div className={styles.previousTitle}>
                      {slide.title}
                    </div>
                  )}
                </div>
                <Image
                  src={index === activeIndex ? slide.activeimage : slide.image}
                  alt={slide.alt}
                  width={80}
                  height={80}
                  className={styles.slideImage}
                  onLoad={() =>
                    console.log(
                      `Loaded image for slide ${slide.id}: ${
                        index === activeIndex ? slide.activeimage : slide.image
                      }`
                    )
                  }
                  onError={() =>
                    console.error(
                      `Failed to load image for slide ${slide.id}: ${
                        index === activeIndex ? slide.activeimage : slide.image
                      }`
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
         <div className={styles.sliderControls}>
        <button
          className={`${styles.circleNavBtn} ${styles.navPrev}`}
          onClick={() => {
            rotateCircle(-1);
            startAutoplay();
          }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29" viewBox="0 0 37 29" fill="none">
<g filter="url(#filter0_d_1031_828)">
<path d="M14.3175 19.0715L5.74609 10.5M5.74609 10.5L14.3175 1.86645M5.74609 10.5L33.6032 10.5" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_1031_828" x="0.746094" y="0.866455" width="37.8574" height="27.205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1031_828"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1031_828" result="shape"/>
</filter>
</defs>
</svg>
        </button>
        <button
          className={`${styles.circleNavBtn} ${styles.navNext}`}
          onClick={() => {
            rotateCircle(1);
            startAutoplay();
          }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29" viewBox="0 0 37 29" fill="none">
         <g filter="url(#filter0_d_1031_828)">
<path d="M20.6825 19.0715L29.2539 10.5M29.2539 10.5L20.6825 1.86645M29.2539 10.5L1.39677 10.5" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1031_828" x="0.746094" y="0.866455" width="37.8574" height="27.205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1031_828"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1031_828" result="shape"/>
</filter>
</defs></svg>
        </button>
      </div>
        <div className={`${styles.infoBoxes} ${styles.mobileSecond}`} style={{
          backgroundImage: `url('/images/Ellipse15.png')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}>
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              className={`${styles.infoBox} ${
                slide.id === slidesData[activeIndex]?.id ? styles.fadeIn : ""
              }`}
              data-slide={slide.id}
            >
              <div className={styles.infoCard}>
                <div
                  className={styles.infoContentCol}
                  style={{
                    backgroundImage: `url('/images/singlewave.png')`,
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                  }}
                >
                  <h2 className={styles.infoCardmainh2}>
                    Strategic in Every Move,
                    <br />
                    Boundless in Creating Impact
                  </h2>
                  <p className={styles.infoCardmainp}>
                    Like the whale, which is majestic, resilient, and precise,
                    Haycarb moves with intention. Every decision is deliberate.
                    Every innovation is impactful. Each strategy mirrors a
                    purposeful move in nature, building a sustainable future
                    through intelligence, strength, and foresight.
                  </p>
                  <p className={styles.infoCardmainp}>
                    Through every move, Haycarb proves that impact is no
                    accident; it is strategic, powerful, and far-reaching.
                  </p>
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
                      <div style={{ marginBottom: "70px" }}>
                        <button
                          className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full flex transition btn-custom wave-btn videoButton btn-custom-mobile"
                         onClick={handleOpenVideo}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 68 68" fill="none" style={{marginRight:'10px',marginTop:'-3px'}}>
<path d="M34.1098 0.759766C27.4643 0.759766 20.9681 2.73037 15.4426 6.42239C9.91713 10.1144 5.61053 15.362 3.06743 21.5016C0.524324 27.6412 -0.141068 34.397 1.1554 40.9148C2.45186 47.4326 5.65195 53.4195 10.351 58.1186C15.05 62.8176 21.037 66.0177 27.5547 67.3142C34.0725 68.6106 40.8283 67.9452 46.9679 65.4021C53.1075 62.859 58.3551 58.5524 62.0472 53.0269C65.7392 47.5014 67.7098 41.0052 67.7098 34.3598C67.7098 29.9474 66.8407 25.5781 65.1521 21.5016C63.4636 17.4251 60.9886 13.721 57.8686 10.601C54.7485 7.48093 51.0445 5.00597 46.9679 3.31741C42.8914 1.62886 38.5222 0.759766 34.1098 0.759766ZM27.3898 49.4798V19.2398L47.5498 34.3598L27.3898 49.4798Z" fill="white"/>
</svg>
                          About The Whale 
                        </button>
                      </div>
                       
                      <div>
                        <button
                          className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full flex transition btn-custom wave-btn videoButton btn-custom-mobile"
                           onClick={handleOpenVideo2}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 68 68" fill="none" style={{marginRight:'10px',marginTop:'-3px'}}>
<path d="M34.1098 0.759766C27.4643 0.759766 20.9681 2.73037 15.4426 6.42239C9.91713 10.1144 5.61053 15.362 3.06743 21.5016C0.524324 27.6412 -0.141068 34.397 1.1554 40.9148C2.45186 47.4326 5.65195 53.4195 10.351 58.1186C15.05 62.8176 21.037 66.0177 27.5547 67.3142C34.0725 68.6106 40.8283 67.9452 46.9679 65.4021C53.1075 62.859 58.3551 58.5524 62.0472 53.0269C65.7392 47.5014 67.7098 41.0052 67.7098 34.3598C67.7098 29.9474 66.8407 25.5781 65.1521 21.5016C63.4636 17.4251 60.9886 13.721 57.8686 10.601C54.7485 7.48093 51.0445 5.00597 46.9679 3.31741C42.8914 1.62886 38.5222 0.759766 34.1098 0.759766ZM27.3898 49.4798V19.2398L47.5498 34.3598L27.3898 49.4798Z" fill="white"/>
</svg>
                          Annual Report Theme
                        </button>
                      </div>
                    </div>
                     <div className="grid grid-cols-3 gap-0">
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoContentCol}>
                  <p className={styles.infoContentColtitle}>{slide.title}</p>
                  <p className={styles.infoContentColsubtitle}>{slide.subtitle}</p>
                  <p className={styles.infoContentColdes}>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.videoContainer}>
            <video src="/videos/V2WhaleGeneralVideo.mp4" controls autoPlay />
            <button className={styles.closeButton} onClick={handleClose}>✕</button>
          </div>
        </div>
      )}
       {showOverlay2 && (
        <div className={styles.overlay}>
          <div className={styles.videoContainer}>
            <video src="/videos/ARThemeVideo-EchoesofTheDeepVideo.mp4" controls autoPlay />
            <button className={styles.closeButton} onClick={handleClose2}>✕</button>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default CircleSlider;