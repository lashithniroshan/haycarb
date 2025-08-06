import React from "react";
import NumberedFeatureItem from "components/NumberedFeatureItem";
import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";

const ReportingLandscape = () => {
  const features = [
    {
      content: (
        <>
          A separate section on the Group’s sustainability and climate related
          risk management in line with the requirements of{" "}
          <span className="text-[#008DA8] font-semibold">SLFRS S1 and S2</span>.
        </>
      ),
    },
    {
      content: (
        <>
          Inclusion of new{" "}
          <span className="text-[#008DA8] font-semibold">
            Digital Capital report
          </span>{" "}
          on the digital initiatives carried out by Haycarb
        </>
      ),
    },
    {
      content: (
        <>
          Introduced{" "}
          <span className="text-[#008DA8] font-semibold">
            segmental performance
          </span>{" "}
          reviews
        </>
      ),
    },
    {
      content: (
        <>
          Key performance highlights are available in{" "}
          <span className="text-[#008DA8] font-semibold">
            multiple languages
          </span>{" "}
          for{" "}
          <span className="text-[#008DA8] font-semibold">
            wider accessibility
          </span>
        </>
      ),
    },
    {
      content: (
        <>
          Integrating{" "}
          <span className="text-[#008DA8] font-semibold">Braille</span> to the
          annual report in-order for stakeholders to engage independently
        </>
      ),
    },
    {
      content: (
        <>
          New features and improvements <br /> to the{" "}
          <span className="text-[#008DA8] font-semibold">
            digital annual report
          </span>
        </>
      ),
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

      {/* Description section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-8 py-8">
        <div className="lg:col-span-6 flex items-center justify-center  w-full"></div>
        <div className="lg:col-span-5">
          <h1 className="text-[40px] text-[#005881] font-normal">
            Evolution of Haycarb&apos;s Annual Report
          </h1>
          <p className="para text-[15px] font-medium text-[#000] my-3">
            We are pleased to present Haycarb PLC’s 5th Integrated Annual Report
            for the financial year ended 31st March 2025. This Report offers a
            balanced and concise account of how we navigated the challenging
            operating conditions that prevailed during the year to deliver value
            across financial, social, environmental and governance dimensions.
            It also outlines our vision and strategy for value creation in the
            year ahead. Efforts to evolve our Integrated Annual Report to better
            reflect stakeholder expectations and international best practice led
            to the following improvements in 2024/25.
          </p>

          <div className="mx-auto">
            {features.map((feature, index) => (
              <NumberedFeatureItem
                key={index}
                number={index + 1}
                content={feature.content}
                isLast={index === features.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Digital evolution section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-8 py-8">
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
        <div className="lg:col-span-6 flex items-center justify-center w-full">
          <Image
            src="/images/innerpage/digital-evolution.svg"
            alt="banner"
            width={701}
            height={533}
          />
        </div>
      </div>
    </section>
  );
};

export default ReportingLandscape;
