import InfoCard from "components/common/InfoCard";
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

      <div
        aria-hidden="true"
        className="absolute
                  hidden 
                  sm:block 
                  left-15 
                  lg:top-680 
                  xl:top-660 
                  2xl:top-610
                  w-56 h-56 
                  md:w-72 md:h-72
                  lg:w-50 lg:h-50  
                  xl:w-80 xl:h-80
                  transform scale-x-[-1] -rotate-20
                  -translate-x-1/2 -translate-y-9/10 
                  bg-no-repeat bg-contain opacity-25 z-10"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
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
          title="Explore More"
          style={{ fontSize: "12px" }}
          onBtnClick={() =>
            window.open(
              "pdf/innerpage/Determining Material Issues.pdf",
              "_blank"
            )
          }
        />
      </div>

      {/* Digital evolution section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          <div className="lg:col-span-5">
            <h1 className="text-[40px] text-[#005881] font-normal">
              Managing Business Risks & Opportunities
            </h1>
            <p className="para text-[15px] font-medium text-[#000] mt-3 mb-10">
              Haycarb PLC uses a structured risk management approach aligned
              with global standards, assessing business risks annually across
              different timeframes. Led by the Board and supported by various
              committees, this process ensures that risks are identified,
              assessed, and integrated into strategic decision-making and daily
              operations, with a strong focus on sustainability and
              adaptability.
            </p>
            <WaveButton
              title="Explore More"
              style={{ fontSize: "12px" }}
              onBtnClick={() =>
                window.open(
                  "pdf/innerpage/Managing Risks & Opportunities.pdf",
                  "_blank"
                )
              }
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:px-8 2xl:px-30">
        <InfoCard
          title="Operating Environment"
          description="This section summarizes the impact from external factors including political shifts, economic volatility, climate risks, social expectations, evolving technologies, and regulatory pressures that influence Haycarb’s business decisions and sustainability priorities."
          buttonTitle="Explore More"
          image="/images/innerpage/non-financial-highlights/Operating Environment.jpg"
          onButtonClick={() =>
            window.open("pdf/innerpage/Operating Environment.pdf", "_blank")
          }
        />
        <InfoCard
          title="Listening to Our Stakeholders"
          description="Highlights how Haycarb engages with key stakeholder groupsincluding employees, customers, suppliers, communities, and regulators, to understand their concerns, expectations, and priorities in shaping strategies and responsible decision-making."
          buttonTitle="Explore More"
          image="/images/innerpage/non-financial-highlights/Listening to Our Stakeholders.jpg"
          onButtonClick={() =>
            window.open(
              "pdf/innerpage/Listening to Our Stakeholders.pdf",
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
};

export default ValueCreation;
