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

  const chart = [
    { id: 1, value: "/images/innerpage/overview-chart-1.svg" },
    { id: 2, value: "/images/innerpage/overview-chart-2.svg" },
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
          className="w-3xs md:w-1/2 h-[1px] lg:w-60 xl:w-100 2xl:w-175 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Our Vision
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-60 xl:w-100 2xl:w-175 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>
      </div>
      <div className="lg:px-53">
        <p className="para text-center text-[#000000] text-[15px] font-medium">
          To be the leading global provider of activated carbon and foremost
          provider of water purification systems in Sri Lanka and the region,
          renowned for technical excellence, customer centricity, innovation and
          sustainable business practices.
        </p>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
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
              <p className="text-[50px] font-extrabold text-[#005881]">2,046</p>
              <div className="h-[1px] bg-[#8DC9CC] w-1/2 lg:w-2/3 mx-auto my-1"></div>
              <p className="text-[20px] font-medium text-[#005881]">
                Employees across <br />
                <span className="font-semibold">7 countries</span>
              </p>
            </div>
          </div>
        </div>

        {chart.map((ch, idx) => (
          <div
            key={ch.id}
            className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full"
          >
            <Image src={ch.value} alt="banner" width={386} height={479} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReportingLandscape;
