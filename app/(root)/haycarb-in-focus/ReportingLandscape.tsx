import React from "react";
import NumberedFeatureItem from "components/common/NumberedFeatureItem";
import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import DownloadCard from "components/common/DownloadCard";

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
          New features and improvements to the{" "}
          <span className="text-[#008DA8] font-semibold">
            digital annual report
          </span>
        </>
      ),
    },
  ];

  const chart = [
    {
      id: 1,
      title: "Activated Carbon",
      description:
        "Our core segment, focused on producing high-performance activated carbon from coconut shells for global industries such as water and air purification, food, and energy. Growth in 2024/25 was supported by strong demand, regional capacity, and sustainability-led operations.",
      value: "/images/innerpage/haycarb/activated_carbon.jpg",
    },
    {
      id: 2,
      title: "Environmental Engineering Solutions",
      description:
        "Delivers customised solutions for emission control and water treatment using activated carbon. The segment saw strong project growth in 2024/25, driven by repeat business and rising demand for clean industrial practices.",
      value: "/images/innerpage/haycarb/environmental.jpg",
    },
  ];

  const cardData = [
    {
      title: "Our Approach to reporting",
      image: "/images/innerpage/product-placeholder.svg",
    },
    {
      title: "Group Value Addition and Distribution",
      image: "/images/innerpage/product-placeholder.svg",
    },
    {
      title: "Our value creation model",
      image: "/images/innerpage/product-placeholder.svg",
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
        <div className="lg:col-span-6 flex items-center justify-center w-full">
          <Image
            src="/images/innerpage/haycarb/books.png"
            alt="Books"
            width={677}
            height={477}
          />
        </div>
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
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          <div className="lg:col-span-5">
            <h1 className="text-[40px] text-[#005881] font-normal">
              Digital evolution in reporting
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
              title="Digital evolution in reporting"
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
      </div>

      {/* Segmental review */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 px-4 lg:px-8 py-8 text-center">
        {/* Top or Left Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/4 lg:h-[1px]"
          style={{ background: "rgba(80, 205, 164, 0.5)" }}
        ></div>

        {/* Center Text */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[30px] xl:text-[40px] text-[#005881]">
          Segmental Review Analysis
        </h1>

        {/* Bottom or Right Line */}
        <div
          className="w-3xs md:w-1/2 h-[1px] lg:w-1/4 lg:h-[1px]"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {chart.map((ch) => (
          <div
            key={ch.id}
            className="border border-[#1D80A080] rounded-[30px] flex flex-col items-center justify-center w-full px-4 py-6 text-center bg-white z-30"
          >
            <h1 className="text-[#005881] text-[30px] text-center">
              {ch.title}
            </h1>
            <p className="para text-[15px] text-[#005881] font-medium my-10">
              {ch.description}
            </p>

            <Image
              src={ch.value}
              alt="banner"
              width={408}
              height={349}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
      <div className="my-15 flex items-center justify-center ">
        <WaveButton
          title="Segmental Review and analysis"
          style={{ fontSize: "12px" }}
        />
      </div>
      <div className="lg:px-25 xl:px-30 mx-auto myt-12 mb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-18 lg:gap-8">
        {cardData.map((item, idx) => (
          <DownloadCard key={idx} {...item} />
        ))}
      </div>
      <div className="lg:px-53">
        <p className="para text-center text-[#000000] text-[15px] font-medium">
          To be the leading global provider of activated carbon and foremost
          provider of water purification systems in Sri Lanka and the region,
          renowned for technical excellence, customer centricity, innovation and
          sustainable business practices.
        </p>
      </div>
    </section>
  );
};

export default ReportingLandscape;
