import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React from "react";

const ValueCreation = () => {
  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 -right-20 lg:w-150 lg:h-150 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      {/* Description section */}
      <div className="lg:px-53 text-center">
        <h1 className="text-[#005881] text-[40px] font-normal">
          Understanding our value creation and its impact
        </h1>
        <p className="para text-center text-[#005881] text-lg font-semibold mt-10">
          This report outlines how Haycarb creates and sustains value across
          capitals by integrating them into our strategy, operations, and
          stakeholder engagement. It reflects our commitment to transparency and
          long-term sustainability through a balanced view of performance,
          risks, and opportunities.
        </p>
      </div>

      {/* Understanding Value */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 mt-12 text-center">
        {/* Top or Left Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/6 xl:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[40px] text-[#005881]">
          Determining Material Issues
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/6 xl:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>
      </div>
      <div className="lg:px-53 mb-12">
        <p className="para text-center text-[#000000] text-[15px] font-medium mb-6">
          Haycarb PLC conducts an annual materiality assessment to identify its
          most important business and sustainability concerns, considering both
          the company’s strategic goals and stakeholder concerns. Using a double
          materiality approach, we evaluate each topic’s impact on both the
          business and the wider environment. This ensures our sustainability
          strategy is transparent, accountable, and aligned with both global and
          local priorities.
        </p>
      </div>
      <Image
        src="/images/innerpage/value-chart.svg"
        alt="icon"
        width={1440}
        height={781}
        className="mx-auto block"
      />
      <div className="my-15 flex items-center justify-center">
        <WaveButton
          title="Determining Material Issues"
          style={{ fontSize: "12px" }}
        />
      </div>

      {/* Digital evolution section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          <div className="lg:col-span-5">
            <h1 className="text-[40px] text-[#005881] font-normal">
              Evolution of Haycarb&apos;s Annual Report
            </h1>
            <p className="para text-[15px] font-medium text-[#000] mt-3 mb-10">
              &quot;Cognisant of the growing shift toward digital communication,
              we continued to integrate technology into our corporate reporting
              with an emphasis on providing a more interactive and engaging
              experience to our stakeholders through a specialised web portal
              offering interactive features enabling comprehensive as well as
              customisable insights into information contained in our Annual
              Report.&quot;
            </p>
            <WaveButton
              title="Our Purpose Statement Video Version"
              style={{ fontSize: "12px" }}
            />
          </div>

          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end w-full">
            <Image
              src="/images/innerpage/value-doughnut.svg"
              alt="banner"
              width={529}
              height={524}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueCreation;
