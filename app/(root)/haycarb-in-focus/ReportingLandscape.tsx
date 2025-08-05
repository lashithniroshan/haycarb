import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React from "react";

const ReportingLandscape = () => {
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
                lg:top-75 lg:-right-40
                xl:top-40 xl:-right-40
                2xl:top-40 2xl:-right-35
                lg:w-[480px] lg:h-[480px]
                -rotate-15 scale-x-[-1] 
                bg-no-repeat bg-contain z-40"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

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
    </section>
  );
};

export default ReportingLandscape;
