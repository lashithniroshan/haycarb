import React from "react";
import { AccordionData } from "components/types/types";
import CommonAccordion from "components/common/CommonAccordion";
import Image from "next/image";
import { useAnimatedNumberText } from "utils/useSpeedCounter";

const CapitalReport = () => {
  const accordionItems: AccordionData[] = [
    {
      title: "Financial Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            In 2024/25, Haycarb sustained financial stability with revenue of
            Rs. 43.2 Bn and net profit of Rs. 4.27 Bn, despite rising raw
            material costs. Strategic expansion and cost optimization
            strengthened resilience, supporting sustainable growth and
            innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 text-center">
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("43,202")}
              </p>
              <p className="text-base">Revenue (Rs. Mn)</p>
            </div>
            <div className="text-[#005881] border-y border-[#005881] lg:border-y-0 lg:border-x">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("5,517")}
              </p>
              <p className="text-base">Profit Before Tax (Rs. Mn)</p>
            </div>
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("4,271")}
              </p>
              <p className="text-base">Profit After Tax (Rs. Mn)</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-18 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-1.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-2.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Natural Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            Haycarb’s approach to natural capital focuses on reducing
            environmental impact and supporting sustainability, inspired by the
            whale’s symbolism of strength and balance within ecosystems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 text-center">
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("44,554")}
              </p>
              <p className="text-base">
                Carbol Footprint (tCO<sub>2</sub>e)
              </p>
            </div>
            <div className="text-[#005881] border-y border-[#005881] lg:border-y-0 lg:border-x">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("10,366")}
              </p>
              <p className="text-base">Sea Tutrle Hatchlings</p>
            </div>
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText("75,000")}
              </p>
              <p className="text-base">Trees Planted</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-18 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-1.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-2.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Intellectual Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            Our Intellectual Capital is central to value creation through new
            product development, strategic innovation, and a reputation for
            technical excellence. Mirroring the cognitive abilities of whales,
            we foster intelligence and problem-solving within our teams to drive
            sustained innovation and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 text-center">
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText(32)}
              </p>
              <p className="text-base">Certifications</p>
            </div>
            <div className="text-[#005881] border-y border-[#005881] lg:border-y-0 lg:border-x">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText("1,500")}
              </p>
              <p className="text-base">Activated Carbol Products</p>
            </div>
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText(100)}
              </p>
              <p className="text-base">
                Environmental Engineering Products & Solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-18 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-1.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-2.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Human Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            Haycarb places strong emphasis on nurturing talent and supporting
            employee wellbeing, enabling individuals to reach their full
            potential while advancing sustainable business growth. Like whales
            adapting and learning in changing environments, Haycarb employees
            continuously develop their skills to remain agile and capable.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-18 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-1.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-2.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Social and Relationship Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            Our Social and Relationship Capital consists of enduring
            partnerships that were essential for overcoming challenges this
            year. Strengthened engagement and collaboration created shared
            value, reflecting the cooperative nature found in whale pods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 text-center">
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText(600)}
              </p>
              <p className="text-base">Customers</p>
            </div>
            <div className="text-[#005881] border-y border-[#005881] lg:border-y-0 lg:border-x">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText(500)}
              </p>
              <p className="text-base">Coconut Shell and Charcoal Suppliers</p>
            </div>
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText("71,500")}
              </p>
              <p className="text-base">CSR Beneficiaries</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-18 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-1.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
            <div className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full">
              <Image
                src="/images/innerpage/overview-chart-2.svg"
                alt="banner"
                width={491}
                height={420}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Manufactured Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            Haycarb’s Manufactured Capital is vital for producing high-quality
            activated carbon, supported by ongoing investments that drive
            sustainability and innovation. Like resilient whales, the company
            adapts to change through strength, efficiency, and purpose-driven
            transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 text-center">
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText(7)}
              </p>
              <p className="text-base">
                Production Facilities across 3 Countries
              </p>
            </div>
            <div className="text-[#005881] border-y border-[#005881] lg:border-y-0 lg:border-x">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("Rs.6.9 Bn")}
              </p>
              <p className="text-base">Asset Base (PPE) Local</p>
            </div>
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("Rs.5.8 Bn")}
              </p>
              <p className="text-base">Asset Base (PPE) Overseas</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Digital Capital",
      downloadLink: "#",
      content: (
        <div className="text-[#333] text-[15px] space-y-4">
          <p className="para">
            Haycarb is focusing on digital technologies to drive positive change
            and improve its operations, services and processes. Just as whales
            rely on deep intelligence, communication, and navigation to thrive
            in vast oceans, we leverage digital tools to boost performance,
            enhance safety, elevate customer experiences, and expand our reach.
            Digitalization is used to nurture the learning culture, equipping
            every team member to navigate change with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 text-center">
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                &gt;{useAnimatedNumberText("50,600")}
              </p>
              <p className="text-base">Users Visited the Website</p>
            </div>
            <div className="text-[#005881] border-y border-[#005881] lg:border-y-0 lg:border-x">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("Rs.6.1 Mn")}
              </p>
              <p className="text-base">Digital Marketing Spend</p>
            </div>
            <div className="text-[#005881]">
              <p className="text-[40px] font-bold">
                {useAnimatedNumberText("Rs.31.1 Mn")}
              </p>
              <p className="text-base">
                Invested in IT i=Infrastructure & Systems
              </p>
            </div>
          </div>
        </div>
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
                  top-450 left-10 
                  lg:top-150 
                  xl:top-120 
                  2xl:top-100
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
                  lg:top-295 lg:left-170
                  xl:top-270 xl:left-250
                  2xl:top-260 2xl:left-500
                  w-56 h-56 
                  md:w-72 md:h-72
                  lg:w-72 lg:h-72  
                  xl:w-90 xl:h-90
                  2xl:w-80 2xl:h-80
                  transform scale-y-[-1] rotate-35
                  -translate-x-1/2 -translate-y-9/10 
                  bg-no-repeat bg-contain opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      {/* Description section */}
      <div className="lg:px-53 text-center">
        <h1 className="text-[#005881] text-[40px] font-normal">
          Nurturing our resources-Our Capitals report
        </h1>
        <p className="para text-center text-[#005881] text-lg font-semibold mt-10">
          This report outlines how Haycarb creates and sustains value across
          capitals by integrating them into our strategy, operations, and
          stakeholder engagement. It reflects our commitment to transparency and
          long-term sustainability through a balanced view of performance,
          risks, and opportunities.
        </p>
      </div>
      <CommonAccordion items={accordionItems} />
    </section>
  );
};

export default CapitalReport;
