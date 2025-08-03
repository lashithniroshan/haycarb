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
        <div className={styles.infoBoxes} style={{
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
                          className="mt-6 px-6 py-2 rounded-full hover:bg-gray-200 transition btn-custom btn-custom-mobile"
                          onClick={() =>
                            window.open(
                              "https://www.haycarb.com/annual-report-2024-25",
                              "_blank"
                            )
                          }
                        >
                          ABOUT THE WHALE
                        </button>
                      </div>
                      <div>
                        <button
                          className="mt-6 px-6 py-2 rounded-full hover:bg-gray-200 transition btn-custom btn-custom-mobile"
                          onClick={() =>
                            window.open(
                              "https://www.haycarb.com/annual-report-2024-25",
                              "_blank"
                            )
                          }
                        >
                          ANNUAL REPORT THEAM
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
        <div className={styles.circleSlider}>
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
      </div>
      <div className={styles.sliderControls}>
        <button
          className={`${styles.circleNavBtn} ${styles.navPrev}`}
          onClick={() => {
            rotateCircle(-1);
            startAutoplay();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className={`${styles.circleNavBtn} ${styles.navNext}`}
          onClick={() => {
            rotateCircle(1);
            startAutoplay();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CircleSlider;