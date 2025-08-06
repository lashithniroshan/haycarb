import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React from "react";

const ReportingLandscape = () => {
  const statsData = [
    {
      id: 1,
      worth: "Rs. 43.2 Bn",
      currency: "(US$ 145.2 Mn)",
      title: "Revenue",
    },
    {
      id: 2,
      worth: "Rs. 4.3 Bn",
      currency: "(US$ 14.4 Mn)",
      title: "Profit after tax",
    },
    {
      id: 3,
      worth: "Rs. 45.9 Bn",
      currency: "US$ 154.9 Mn",
      title: "Total assets",
    },
    {
      id: 4,
      worth: "16%",
      currency: "",
      title: "Global market share",
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
            Haycarb PLC is a world leader in the coconut shell activated carbon
            industry, with Our customers span over 50 countries. Our product
            portfolio of over 1,500 products empowers a growing environmentally
            conscious world by providing solutions vital to decarbonisation and
            building a sustainable future.Our culture of collaborative
            innovation fosters long-term partnerships with B2B customers,
            enabling the delivery of customised, value-added solutions.
          </p>
          <div className="my-10 flex items-center justify-center ">
            <WaveButton
              title="Our Purpose Statement Video Version"
              style={{ fontSize: "12px" }}
            />
          </div>
        </div>
      </div>

      {/* Static Snapshot */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 text-center">
        {/* Top or Left Line */}
        <div className="w-3xs md:w-1/2 h-[1px] bg-[#CFD674] lg:w-1/4 lg:h-[1px]"></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Snapshot of 2024/25
        </h1>

        {/* Bottom or Right Line */}
        <div className="w-3xs md:w-1/2 h-[1px] bg-[#CFD674] lg:w-1/4 lg:h-[1px]"></div>
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
        <div className="w-3xs md:w-1/2 h-[1px] bg-[#CFD674] lg:w-60 xl:w-100 2xl:w-152 lg:h-[1px]"></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Our Vision
        </h1>

        {/* Bottom or Right Line */}
        <div className="w-3xs md:w-1/2 h-[1px] bg-[#CFD674] lg:w-60 xl:w-100 2xl:w-152 lg:h-[1px]"></div>
      </div>
    </section>
  );
};

export default ReportingLandscape;
