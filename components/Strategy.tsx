import React, { useState, useEffect } from "react";
import style from "./Strategy.module.css";
import Image from "next/image";
import { useAnimatedNumberText } from "utils/useSpeedCounter";

const Strategy = () => {
  const strategyData = [
    {
      id: 1,
      title: "Market Growth",
      content: `
        <div>
          <div class="${style.descriptionContent}">
            <p class="${style.onlyMobileTitle}">Market growth</p>
            <p>Strategic global expansion, product innovation and tech investment drive Haycarb’s market growth and value-added carbon leadership.</p>
          </div>
          <ul class="${style.listContent}">
            <li><h4>${useAnimatedNumberText("+43.2")}</h4><p>Bn Revenue</p></li>
            <li><h4>${useAnimatedNumberText(
              "+5.5"
            )}</h4><p>Bn Profit before tax</p></li>
            <li><h4>${useAnimatedNumberText(
              "+16"
            )}</h4><p>Global market share</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 2,
      title: "Innovation Led Growth",
      content: `
        <div>
          <div class="${style.descriptionContent}">
            <p class="${style.onlyMobileTitle}">Innovation led growth</p>
            <p>Haycarb advanced its innovation efforts by enhancing R&D capabilities, fostering a learning culture, and applying data-driven insights to support future growth.</p>
          </div>
          <ul class="${style.listContent}">
            <li><h4>${useAnimatedNumberText(
              "+16"
            )}</h4><p>New products launched</p></li>
            <li><h4>${useAnimatedNumberText(
              "+4"
            )}</h4><p>New products in pipeline</p></li>
            <li><h4>${useAnimatedNumberText(
              "Rs.209.3"
            )}</h4><p>Mn Investment in R&D</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 3,
      title: "Global Supply Chains",
      content: `
        <div>
          <div class="${style.descriptionContent}">
            <p class="${style.onlyMobileTitle}">Global supply chains</p>
            <p>Haycarb strengthened supply chain resilience through regional diversification, sustainable sourcing, and strategic partnerships across key raw material markets.</p>
          </div>
          <ul class="${style.listContent}">
            <li><h4>${useAnimatedNumberText(
              "+248"
            )}</h4><p>new suppliers</p></li>
            <li><h4>${useAnimatedNumberText(
              "Rs.14.9"
            )}</h4><p>Bn payments to raw material suppliers</p></li>
            <li><h4>${useAnimatedNumberText(
              "Rs.20.6"
            )}</h4><p>Mn for supplier capacity building</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 4,
      title: "Purpose Driven and Committed Teams",
      content: `
        <div>
          <div class="${style.descriptionContent}">
            <p class="${
              style.onlyMobileTitle
            }">Purpose driven and committed teams</p>
            <p>Teams are empowered through fair pay, wellbeing, and growth, fostering innovation, collaboration, and accountability to drive long-term value and ESG goals.</p>
          </div>
          <ul class="${style.listContent}">
            <li><h4>${useAnimatedNumberText(
              "+91%"
            )}</h4><p>Employee retention rate</p></li>
            <li><h4>${useAnimatedNumberText(
              "+17.3"
            )}</h4><p>Average training hours per employee</p></li>
            <li><h4>${useAnimatedNumberText(
              "+Rs.9.6"
            )}</h4><p>Mn Investment in T&D</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 5,
      title: "ESG Mindset",
      content: `
        <div>
          <div class="${style.descriptionContent}">
            <p class="${style.onlyMobileTitle}">ESG Mindset</p>
            <p>Haycarb PLC’s ESG strategy focuses on sustainable innovation, and environmental stewardship across all operations and communities.</p>
          </div>
          <ul class="${style.listContent}">
            <li><h4>${useAnimatedNumberText(
              "+75%"
            )}</h4><p>Energy requirements fulfilled through renewable energy</p></li>
            <li><h4>${useAnimatedNumberText(
              "+1,523"
            )}</h4><p>MWh Total solar power generation</p></li>
            <li><h4>${useAnimatedNumberText(
              "+Rs.81.8"
            )}</h4><p>Mn Investment in Reverse Osmosis plant for water recycling</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayInterval = 3000;

  // Define a state to hold the device type string
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Run on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This effect checks the screen size and sets the isMobile state.
  /* useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []); */

  // This effect handles the autoplay timer.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % strategyData.length);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, []);

  // Here, we determine how much the slider should move based on the screen size.
  const slidePercentage =
    deviceType === "mobile" ? 100 : deviceType === "tablet" ? 95 : 92;

  let backgroundPositionValue;
  if (deviceType === "tablet") {
    backgroundPositionValue = "38% -34%, 50% 0%"; // Example for tablet
  } else {
    backgroundPositionValue = "46% -5%, 50% 0%"; // Your original desktop value
  }

  return (
    <>
      <div
        className={`container w-full h-full flex mx-auto text-center px-22 ${style.strategyTablet}`}
        style={{ backgroundColor: "#005072" }}
      >
        <div className={`mt-10 ${style.staticContent}`}>
          <h2 className={style.title}>Our strategy</h2>
          <p className={style.description}>
            Our strategy aligns to guide decisions to overcome challenges and
            create value.
          </p>
          <button
            className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom wave-btn"
            onClick={() =>
              window.open(
                "pdf/tbc/Strategy and Resource Allocation.pdf",
                "_blank"
              )
            }
          >
            Download
          </button>
        </div>
      </div>
      <div
        className={style.StrategyContainer}
        style={{
          backgroundImage: `url('/images/strategybg-2.png')`,
          backgroundSize: "auto auto",
          backgroundPosition: backgroundPositionValue,
          backgroundRepeat: "no-repeat, no-repeat",
          position: "relative",
          zIndex: 0,
        }}
      >
        {/* Keeping your original JSX structure for the left section */}
        <div className={style.leftSection}>
          <div
            className={`container w-full h-full flex mx-auto px-22 ${style.strategyDesktop}`}
          >
            <div className={style.staticContent}>
              <h2 className={style.title}>Our Strategy</h2>
              <p className={style.description}>
                Our strategy aligns to guide decisions to overcome challenges
                and create value.
              </p>
              <button
                className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom wave-btn"
                onClick={() =>
                  window.open(
                    "pdf/tbc/Strategy and Resource Allocation.pdf",
                    "_blank"
                  )
                }
              >
                Download
              </button>
            </div>
          </div>
          {deviceType !== "mobile" && (
            <div className="container w-full h-full flex mx-auto px-22 py-0">
              <ul className={style.list}>
                {strategyData.map((item, index) => (
                  <li
                    key={item.id}
                    className={`${style.listItem} ${
                      index === activeIndex ? style.active : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={style.rightSection}>
          <div className={style.sliderContainer}>
            <div
              className={style.sliderTrack}
              style={{
                transform: `translateX(-${activeIndex * slidePercentage}%)`,
              }}
            >
              {strategyData.map((item) => (
                <div key={item.id} className={style.slide}>
                  <div
                    className={style.card}
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  >
                    <div
                      className={style.cardContent}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* These dots will be shown on mobile via CSS */}
          <div className={style.paginationDots}>
            {strategyData.map((_, index) => (
              <button
                key={index}
                className={`${style.dot} ${
                  index === activeIndex ? style.activeDot : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Keeping the whale overlay outside the slider as in your original code */}
        <div className={style.svgOverlay}>
          <Image
            src="/images/wale.png"
            alt="Whale overlay"
            className={style.svg}
            width={500}
            height={375}
          />
        </div>
      </div>
    </>
  );
};

export default Strategy;
