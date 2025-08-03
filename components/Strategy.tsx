import React, { useState, useEffect } from "react";
import style from "./Strategy.module.css";

const Strategy = () => {
  // Sample data for list items and slider cards
  const strategyData = [
    {
      id: 1,
      title: "Market growth",
      description: "Driving growth through cutting-edge solutions.",
      content: `
        <div>
        <div class="${style.descriptionContent}">
          <p>Strategic global expansion, product innovation and tech investment drive Haycarb’s market growth and value-added carbon leadership.</p>
        </div>
          <ul class="${style.listContent}">
            <li><h4>+43.2</h4><p>Bn Revenue</p></li>
           <li><h4>+5.5</h4><p>Bn Profit before tax</p></li>
            <li><h4>+16</h4><p>Global market share</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 2,
      title: "Innovation led growth",
      description: "Committed to eco-friendly practices.",
      content: `
        <div>
        <div class="${style.descriptionContent}">
          <p>Haycarb advanced its innovation efforts by enhancing R&D capabilities, fostering a learning culture, and applying data-driven insights to support future growth.</p>
        </div>
          <ul class="${style.listContent}">
            <li><h4>+16</h4><p>New products launched</p></li>
           <li><h4>+4</h4><p>New products in pipeline</p></li>
            <li><h4>Rs. 209.3</h4><p>Mn Investment in R&D</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 3,
      title: "Global supply chains",
      description: "Expanding global market presence.",
      content: `
        <div>
        <div class="${style.descriptionContent}">
          <p>Haycarb strengthened supply chain resilience through regional diversification, sustainable sourcing, and strategic partnerships across key raw material markets.</p>
        </div>
          <ul class="${style.listContent}">
            <li><h4>+248</h4><p>new suppliers</p></li>
           <li><h4>Rs. 14.9</h4><p>Bn payments to raw material suppliers
</p></li>
            <li><h4>Rs. 20.6</h4><p>Mn for supplier capacity building</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 4,
      title: "Purpose driven and committed teams",
      description: "Optimizing processes for better results.",
      content: `
        <div>
        <div class="${style.descriptionContent}">
          <p>Teams are empowered through fair pay, wellbeing, and growth, fostering innovation, collaboration, and accountability to drive long-term value and ESG goals.</p>
        </div>
          <ul class="${style.listContent}">
            <li><h4>+91%</h4><p>Employee retention rate</p></li>
           <li><h4>+17.3</h4><p>Average training hours per employee</p></li>
            <li><h4>+Rs. 9.6</h4><p>Mn Investment in T&D</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
    {
      id: 5,
      title: "ESG Mindset",
      description: "rfrgr processes for better results.",
      content: `
        <div>
        <div class="${style.descriptionContent}">
          <p>Haycarb PLC’s ESG strategy focuses on sustainable innovation, and environmental stewardship across all operations and communities.</p>
        </div>
          <ul class="${style.listContent}">
            <li><h4>+75%</h4><p>Energy requirements fulfilled through renewable energy</p></li>
           <li><h4>+1,523</h4><p>MWh Total solar power generation</p></li>
            <li><h4>+Rs. 81.8</h4><p>Mn Investment in Reverse Osmosis plant for water recycling</p></li>
          </ul>
        </div>
      `,
      backgroundImage: "/images/stragegycardbg.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayInterval = 3000; // 3 seconds

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % strategyData.length);
  };

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    // Clear interval on component unmount or when user interacts
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div
      className={style.StrategyContainer}
      style={{
        backgroundImage: ` url('/images/wale.png'), url('/images/strategybg-2.png')`, // Gradient then image
        backgroundSize: "auto auto",
        backgroundPosition: "50% -85%, 50% 0%",
        backgroundRepeat: "no-repeat, no-repeat",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className={style.leftSection}>
        <div className="container w-full h-full flex mx-auto px-22 py-10">
          <div className={style.staticContent}>
            <h2 className={style.title}>Strategy & Future Outlook test</h2>
            <p className={style.description}>
              Our strategy aligns to guide decisions to overcome challenges and
              create value.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom"
              onClick={() =>
                window.open(
                  "https://www.haycarb.com/annual-report-2024-25",
                  "_blank"
                )
              }
            >
              Download
            </button>
          </div>
        </div>
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
      </div>
      <div className={style.rightSection}>
        <div className={style.sliderContainer}>
          <div
            className={style.sliderTrack}
            style={{
              transform: `translateX(-${activeIndex * 66.67}%)`, // 1 full card + 1/3 of next
              width: `${strategyData.length * 100}%`, // Adjusted for 1 + 1/3 visibility
            }}
          >
            {strategyData.map((item, index) => (
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
          {/* Fixed SVG overlay for active card */}
          {/* <div
                className={style.svgOverlay}
              >
                 <img
                  src="/images/wale.png"
                  alt="Overlay png"
                  className={style.svg}
                  width={300}
                  height={200}
                />
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Strategy;
