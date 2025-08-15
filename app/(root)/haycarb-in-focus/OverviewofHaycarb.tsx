import WaveButton from "components/innerpage/WaveButton";
import ProductCarousel from "components/common/ProductCarousel";
import Image from "next/image";
import React, { useState } from "react";
import DownloadCard from "components/common/DownloadCard";
import { useAnimatedNumberText } from "utils/useSpeedCounter";

import styles from "./OverviewofHaycarb.module.css";

const OverviewofHaycarb = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOpenVideo = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  const statsData = [
    {
      id: 1,
      worth: useAnimatedNumberText("Rs. 43.2 Bn"),
      currency: "(US$ 145.2 Mn)",
      title: "Revenue",
    },
    {
      id: 2,
      worth: useAnimatedNumberText("Rs. 4.3 Bn"),
      currency: "(US$ 14.4 Mn)",
      title: "Profit after tax",
    },
    {
      id: 3,
      worth: useAnimatedNumberText("Rs. 45.9 Bn"),
      currency: "(US$ 154.9 Mn)",
      title: "Total assets",
    },
    {
      id: 4,
      worth: useAnimatedNumberText("16%"),
      currency: "",
      title: "Global market share",
    },
  ];

  const chart = [
    { id: 1, value: "/images/innerpage/haycarb/key_markets.jpg" },
    { id: 2, value: "/images/innerpage/haycarb/manufacturing.jpg" },
  ];

  const products = [
    {
      id: 1,
      name: "Air and Gas",
      image: "/images/innerpage/haycarb/products/Air and Gas.jpg",
    },
    {
      id: 2,
      name: "Energy",
      image: "/images/innerpage/haycarb/products/Energy.jpg",
    },
    {
      id: 3,
      name: "Food and Beverage",
      image: "/images/innerpage/haycarb/products/Food and Beverage.jpg",
    },
    {
      id: 4,
      name: "Gold",
      image: "/images/innerpage/haycarb/products/Gold.jpg",
    },
    {
      id: 5,
      name: "Pharmaceutical & Cosmetics",
      image:
        "/images/innerpage/haycarb/products/Pharmaceutical & Cosmetics.jpg",
    },
    {
      id: 6,
      name: "Speciality",
      image: "/images/innerpage/haycarb/products/Speciality.jpg",
    },
    {
      id: 7,
      name: "Water",
      image: "/images/innerpage/haycarb/products/Water.jpg",
    },
  ];

  const cardData = [
    {
      title: "Awards and Recognitions",
      image: "/images/innerpage/haycarb/awards.jpg",
      onDownload: () =>
        window.open("pdf/innerpage/Awards and Recognitions.pdf", "_blank"),
    },
    {
      title: "Milestones",
      image: "/images/innerpage/haycarb/logo.png",
      onDownload: () => window.open("pdf/innerpage/Milestones.pdf", "_blank"),
    },
    {
      title: "Our Socio-Economic Impact",
      image: "/images/innerpage/haycarb/socio-eco.png",
      onDownload: () =>
        window.open("pdf/innerpage/Our Socio-Economic Impact.pdf", "_blank"),
    },
  ];

  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 -right-20 lg:w-150 lg:h-150 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute
                hidden lg:block
                top-170 right-90
                lg:top-78 lg:-right-35
                xl:top-40 xl:-right-35
                2xl:top-40 2xl:-right-35
                lg:w-[480px] lg:h-[480px]
                -rotate-15 scale-x-[-1] 
                bg-no-repeat bg-contain z-40"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  top-450 left-25 
                  lg:top-300 
                  xl:top-250 
                  2xl:top-250
                  w-96 h-96 
                  md:w-[600px] md:h-[600px] 
                  rotate-180 
                  transform 
                  -translate-y-1/3 -translate-x-1/3 
                  bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  hidden 
                  sm:block 
                  left-15 
                  lg:top-3/4 
                  xl:top-5/7 
                  2xl:top-4/6
                  w-56 h-56 
                  md:w-72 md:h-72
                  lg:w-50 lg:h-50  
                  xl:w-72 xl:h-72
                  transform scale-x-[-1] -rotate-20
                  -translate-x-1/2 -translate-y-9/10 
                  bg-no-repeat bg-contain opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute 
                  top-6/7 -right-30 
                  lg:w-200 lg:h-200 
                  bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      {/* Image and Para */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-8 py-8">
        <div className="lg:col-span-6 flex items-center justify-center  w-full">
          <Image
            src="/images/innerpage/reporting-landscape.svg"
            alt="banner"
            width={367}
            height={364}
          />
        </div>
        <div className="lg:col-span-6 lg:pr-30">
          <p className="para text-center text-[18px] text-[#005881] font-semibold">
            At Haycarb, our purpose - Driving Value, Changing Lives ; guides us
            to envision a future where we are a catalyst in purification and
            energy storage solutions, empower our people with skills, autonomy,
            and world-class processes, and enrich lives through
            customer-centric, innovative, and sustainable value creation.
          </p>
          <div className="my-10 flex items-center justify-center ">
            <WaveButton
              title="Watch Purpose Statement"
              style={{ fontSize: "12px" }}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 68 68"
                  fill="none"
                  style={{ marginRight: "10px", marginTop: "-3px" }}
                >
                  <path
                    d="M34.1098 0.759766C27.4643 0.759766 20.9681 2.73037 15.4426 6.42239C9.91713 10.1144 5.61053 15.362 3.06743 21.5016C0.524324 27.6412 -0.141068 34.397 1.1554 40.9148C2.45186 47.4326 5.65195 53.4195 10.351 58.1186C15.05 62.8176 21.037 66.0177 27.5547 67.3142C34.0725 68.6106 40.8283 67.9452 46.9679 65.4021C53.1075 62.859 58.3551 58.5524 62.0472 53.0269C65.7392 47.5014 67.7098 41.0052 67.7098 34.3598C67.7098 29.9474 66.8407 25.5781 65.1521 21.5016C63.4636 17.4251 60.9886 13.721 57.8686 10.601C54.7485 7.48093 51.0445 5.00597 46.9679 3.31741C42.8914 1.62886 38.5222 0.759766 34.1098 0.759766ZM27.3898 49.4798V19.2398L47.5498 34.3598L27.3898 49.4798Z"
                    fill="#005881"
                  />
                </svg>
              }
              onBtnClick={handleOpenVideo}
            />
          </div>
        </div>
      </div>

      {/* Static Snapshot */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 text-center">
        {/* Top or Left Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Snapshot of 2024/25
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-8 my-12 px-10 text-center">
        {statsData.map((stat, index) => (
          <div key={index}>
            <p className="text-[50px] font-extrabold text-[#005881]">
              {stat.worth}
            </p>
            <div className="h-[1px] bg-[#1D80A0] w-1/2 lg:w-2/3 mx-auto my-1"></div>
            <p className="text-[20px] font-medium text-[#005881]">
              {stat.title}
            </p>
            <p className="text-[20px] font-medium text-[#005881]">
              {stat.currency}
            </p>
          </div>
        ))}
      </div>

      {/* Our vision */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 text-center">
        {/* Top or Left Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-60 xl:w-100 2xl:w-100 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Our Vision
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-60 xl:w-100 2xl:w-100 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>
      </div>
      {/* <div className="lg:px-53">
        <p className="para text-center text-[#000000] text-[15px] font-medium">
          To be the leading global provider of activated carbon and foremost
          provider of water purification systems in Sri Lanka and the region,
          renowned for technical excellence, customer centricity, innovation and
          sustainable business practices.
        </p>
      </div> */}
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col items-center justify-center w-full px-4 py-6 text-center">
          {/* Top Paragraph */}
          <p className="para text-[20px] text-[#005881] font-semibold mb-6">
            A highly skilled, innovation focused talent pool
          </p>

          {/* Icon + Stats Side by Side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div>
              <Image
                src="/images/innerpage/overview-icon.svg"
                alt="icon"
                width={103}
                height={103}
              />
            </div>

            <div>
              <p className="text-[50px] font-extrabold text-[#005881]">
                {useAnimatedNumberText("2,026")}
              </p>
              <div className="h-[1px] bg-[#8DC9CC] w-1/2 lg:w-2/3 mx-auto my-1"></div>
              <p className="text-[20px] font-medium text-[#005881]">
                Employees across <br />
                <span className="font-semibold">7 countries</span>
              </p>
            </div>
          </div>
        </div>

        {chart.map((ch) => (
          <div
            key={ch.id}
            className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full p-4"
          >
            <Image src={ch.value} alt="banner" width={386} height={479} />
          </div>
        ))}
      </div>

      {/* Our global presence */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 text-center">
        {/* Top or Left Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/6 xl:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Our Global Presence
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/6 xl:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>
      </div>
      <div className="lg:px-53 mb-12">
        {/* <p className="para text-center text-[#000000] text-[15px] font-medium mb-6">
          To be the leading global provider of activated carbon and foremost
          provider of water purification systems in Sri Lanka and the region,
          renowned for technical excellence, customer centricity, innovation and
          sustainable business practices.
        </p> */}
        <Image
          src="/images/innerpage/world-map.svg"
          alt="icon"
          width={996}
          height={504}
          className="mx-auto block"
        />
      </div>

      {/* Our product */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 text-center">
        {/* Top or Left Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-60 xl:w-100 2xl:w-100 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Our Products
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-60 xl:w-100 2xl:w-100 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>
      </div>
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <ProductCarousel products={products} />
      </div>
      <div className="lg:px-25 xl:px-50 mx-auto mt-12 mb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-18 lg:gap-8 xl:gap-8">
        {cardData.map((item, idx) => (
          <DownloadCard key={idx} {...item} />
        ))}
      </div>
      <div className="lg:px-53">
        <p className="para text-center text-[#000000] text-[15px] font-medium">
          Haycarb is more than a manufacturer, it is a movement of
          purpose-driven innovation. With roots in Sri Lanka and reach across
          the globe, we transform coconut shells into solutions that purify,
          protect, and empower. Our journey is one of resilience,
          responsibility, and relentless pursuit of sustainable impact.
        </p>
      </div>

      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.modalVideo}
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/3rddCQXO_8A?si=faaVvqe-ArYvgkXM"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className={styles.closeButton} onClick={handleClose}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OverviewofHaycarb;
