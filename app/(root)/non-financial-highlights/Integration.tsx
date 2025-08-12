import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React from "react";

const Integration = () => {
  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 -right-30 lg:w-150 lg:h-150 bg-no-repeat bg-contain"
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
                xl:top-160 xl:-right-18
                2xl:top-130 2xl:-right-35
                w-56 h-56 
                md:w-72 md:h-72
                lg:w-50 lg:h-50  
                xl:w-72 xl:h-72
                2xl:w-[450px] 2xl:h-[450px]
                -rotate-25 scale-x-[-1] 
                bg-no-repeat bg-contain opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  hidden
                  lg:block
                  top-450 left-26 
                  lg:top-300 
                  xl:top-250 
                  2xl:top-330
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
                  lg:block 
                  left-15 
                  lg:top-600 
                  xl:top-580 
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

      {/* Description section */}
      <div className="lg:px-53 text-center">
        <h1 className="text-[#005881] text-[40px] font-normal">
          Understanding our value creation and its impact
        </h1>
        <p className="para text-center text-[#005881] text-lg font-semibold mt-10">
          Haycarb PLC has adopted IFRS S1 and S2 standards to strengthen its
          sustainability and climate-related reporting.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-20 my-10 py-8">
        <div className="lg:col-span-6">
          <h1 className="text-[40px] text-[#005881] font-normal">
            ESG governance
          </h1>
          <p className="para text-[15px] font-medium text-[#000] mt-3 mb-10">
            Haycarb’s ESG governance is structured around its proprietary
            framework “ACTIVATE,” which integrates environmental, social, and
            governance principles into every facet of its operations. Governance
            is led by an ESG Steering Committee chaired by the Managing
            Director, supported by four Executive Directors and seven members of
            the Corporate Management Team. This committee oversees the execution
            of ESG strategies, monitors progress against short-, medium-, and
            long-term targets, and reviews emerging sustainability trends and
            risks. A dedicated Corporate Sustainability and ESG Department
            drives policy formulation, stakeholder engagement, and reporting,
            ensuring alignment with global standards such as IFRS S1 and S2,
            GRI, and SASB.
          </p>

          <WaveButton
            title="Explore More"
            style={{ fontSize: "12px" }}
            onBtnClick={() =>
              window.open("pdf/innerpage/ESG governance.pdf", "_blank")
            }
          />
        </div>
        <div className="lg:col-span-6">
          <Image
            src="/images/innerpage/non-financial-highlights/ESG-governance.jpg"
            alt="banner"
            width={650}
            height={480}
            className="mx-auto"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-20 my-10 py-8">
        <div className="lg:col-span-6">
          <Image
            src="/images/innerpage/non-financial-highlights/ESG-strategies,-metrics-and-targets-.jpg"
            alt="banner"
            width={650}
            height={480}
            className="mx-auto"
          />
        </div>
        <div className="lg:col-span-6">
          <h1 className="text-[40px] text-[#005881] font-normal">
            ESG strategies,metrics and targets
          </h1>
          <p className="para text-[15px] font-medium text-[#000] mt-3 mb-10">
            Introduces Haycarb’s ACTIVATE ESG framework - a strategic roadmap
            built on five key pillars to guide sustainability through 2030 and
            outlines Haycarb’s approach to managing environmental, social, and
            governance impacts with measurable goals and performance indicators.
          </p>

          <WaveButton
            title="Explore More"
            style={{ fontSize: "12px" }}
            className="mb-5"
            onBtnClick={() =>
              window.open(
                "pdf/innerpage/ESG strategies,metrics and targets.pdf",
                "_blank"
              )
            }
          />
          <br />
          <WaveButton
            title="Activate - ESG Roadmap 2030"
            style={{ fontSize: "12px" }}
            onBtnClick={() =>
              window.open(
                "pdf/innerpage/Activate ESG roadmap 2030.pdf",
                "_blank"
              )
            }
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-20 my-10 py-8">
        <div className="lg:col-span-6">
          <h1 className="text-[40px] text-[#005881] font-normal">
            Sustainability and Climate related risks and opportunities
          </h1>
          <p className="para text-[15px] font-medium text-[#000] mt-3 mb-10">
            Based on the 2024/25 Annual Report of Haycarb PLC, the company has
            adopted a deeply integrated and forward-looking approach to managing
            sustainability and climate-related risks and opportunities. These
            are embedded across governance, strategy, risk management, and
            performance metrics, aligning with IFRS S1 and S2 standards.
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
        <div className="lg:col-span-6">
          <Image
            src="/images/innerpage/non-financial-highlights/Sustainability.jpg"
            alt="banner"
            width={650}
            height={480}
            className="mx-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-20 my-10 py-8">
        <div className="lg:col-span-6">
          <Image
            src="/images/innerpage/non-financial-highlights/Assessing-Climate-Resilience.jpg"
            alt="banner"
            width={650}
            height={480}
            className="mx-auto"
          />
        </div>
        <div className="lg:col-span-6">
          <h1 className="text-[40px] text-[#005881] font-normal">
            Assessing Climate Resilience
          </h1>
          <p className="para text-[15px] font-medium text-[#000] mt-3 mb-10">
            Given our exposure to climate related risks and opportunities, we
            conducted a climate resilience assessment during the year under
            review. Building on last year’s qualitative analysis, this year’s
            assessment applied multiple climate scenarios across our planning
            horizons to evaluate directional impacts on key aspects of our
            business model.
          </p>

          <WaveButton
            title="Explore More"
            style={{ fontSize: "12px" }}
            onBtnClick={() =>
              window.open(
                "pdf/innerpage/Assessing Climate Resilience.pdf",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Integration;
