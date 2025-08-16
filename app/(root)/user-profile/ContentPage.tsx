import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React, { useState } from "react";

type StakeholderKey =
  | "shareholders"
  | "employees"
  | "customers"
  | "suppliers"
  | "generalUser";

type MatricsType = { worth: string; title: string };

type ChairmanAndDirector = {
  title: string;
  message: string;
  image: string;
};

type Content = {
  short_description: string;
  matrics: MatricsType[];
  chairman_and_director: ChairmanAndDirector;
  stratergy_and_performance: React.ReactNode;
  related_chart_image?: {
    title: string;
    image: string;
  };
};

type Stakeholder = {
  title: string;
  icon: string;
  content: Content;
};

const stakeholdersData: Record<StakeholderKey, Stakeholder> = {
  shareholders: {
    title: "Shareholders",
    icon: "/icons/user-profile/shareholders.gif",
    content: {
      short_description:
        "As the guiding current beneath our journey, you steer Haycarb’s course. Dive into a clear view of our performance, strategy, and sustainable growth.",
      matrics: [
        {
          worth: "Rs. 12.10",
          title: "Earnings Per Share",
        },
        { worth: "13.6%", title: "ROE" },
        { worth: "Rs. 89.30", title: "Net Asset per Share" },
        { worth: "4.6%", title: "Dividends Yield" },
      ],
      chairman_and_director: {
        title: "Chairman's and Managing Director's Joint Message",
        message:
          "Haycarb recorded a Profit Before Tax of Rs.5.52 Bn for the year ending 31st March 2025, a moderation of 10% in comparison to the previous year. This decline is primarily attributed to the increase in raw material prices and the appreciation of the Sri Lankan Rupee. The tax expense decreased by 31% to Rs.1.2 Bn, owing to enhanced capital allowances on new investments. The effective tax rate decreased from 30% to 23%, resulting in a Profit After Tax of Rs.4.27 Bn, only 1% below the previous year's Post-Tax Profit of Rs.4.30 Bn. Furthermore, in USD terms, the Profit After Tax amounted to USD 14.35 Mn, reflecting a 6% increase.",
        image: "",
      },
      stratergy_and_performance: (
        <>
          <li>
            Strategic interventions to secure adequate supplies of raw material
            to support stable volumes. Revised prices upward to support margin
            management
          </li>
          <li>
            Pursued strategic expansion in growth markets. Ongoing emphasis on
            innovation and expansion of the value-added product portfolio to
            strengthen margins
          </li>
          <li>
            Drove progress on expanding our manufacturing footprint to the
            Philippines
          </li>
          <li>
            Robust risk management to identify and respond to risks and
            opportunities including climate related risks
          </li>
        </>
      ),
      related_chart_image: {
        title: "Investor Ratios",
        image: "/images/innerpage/user-profile/investor_ratio.jpg",
      },
    },
  },
  employees: {
    title: "Employees",
    icon: "/icons/user-profile/employees.gif",
    content: {
      short_description:
        "You are the power behind the wave. See how your commitment fuels our mission as we navigate new depths of innovation and impact together.",
      matrics: [
        { worth: "91%", title: "Retention rate" },
        { worth: "35,129", title: "Total Training hours" },
        { worth: "Rs. 4.9 Bn", title: "Payments to Employees" },
        { worth: "Rs. 70 Mn", title: "Investment in Health and Safety" },
      ],
      chairman_and_director: {
        title: "Chairman's and Managing Director's Joint Message",
        message:
          "We initiated one-on-one engagement at all levels to understand employee issues and adopt corrective action to drive increased motivation and employee well-being. Ongoing investment in training resulted in total training hours per employee increasing by 43%. The learning platforms on digital media were given high priority, encouraging specific functions to upgrade the knowledge base in line with the higher pace of ubiquitous technological advancements. As an innovative company, team dynamics are invaluable, and we will continue focusing on maintaining strong teams to drive sustainable growth through product and process innovation.",
        image: "",
      },
      stratergy_and_performance: (
        <>
          <li>
            Goal setting and Performance Appraisals with fair and equitable
            remuneration for all employees based on skills, competencies and
            performance
          </li>
          <li>Strengthened the safety culture within the Group</li>
          <li>
            Continuous learning with investment of Rs. 9.6 million and launching
            digital learning platform
          </li>
          <li>
            Introduced a post onboarding review system to support the
            integration of new recruits
          </li>
          <li>Fostered a diverse and inclusive work environment</li>
        </>
      ),
      related_chart_image: {
        title: "Our HR Strategy",
        image: "/images/innerpage/user-profile/our_hr_strategy.jpg",
      },
    },
  },
  customers: {
    title: "Customers",
    icon: "/icons/user-profile/customers.gif",
    content: {
      short_description:
        "With you, we will go farther and deeper. Discover how Haycarb delivers consistency, quality, and sustainability, like the steady movement of a whale through changing seas.",
      matrics: [
        {
          worth: "90%",
          title: "Customer Satisfaction Score",
        },
        { worth: "26", title: "New Customers" },
        { worth: "16", title: "New Products Launched" },
        { worth: "Rs. 209.3 Mn", title: "Investment in R&D" },
      ],
      chairman_and_director: {
        title: "Chairman's and Managing Director's Joint Message",
        message:
          "Haycarb continues to invest in the advancement of its technology to be a cutting-edge innovative coconut carbon company that offers best in- class products and solutions and enhances customer experience. Our newly developed range of carbons tailored for silicon anodes has gained market share. Concurrently, we are in the process of securing patents for our hard-carbon products for Sodium-ion batteries. The ongoing global shift toward renewable energy continues to present significant growth Opportunities and in anticipation of this demand, we have invested Rs. 1.23Bn to expand our manufacturing capacity for the Energy Storage Carbon portfolio during the year ended 31 March 2025.",
        image: "",
      },
      stratergy_and_performance: (
        <>
          <li>
            New product development through R&D to deliver tailored solutions
            that fulfill specific customer needs
          </li>
          <li>
            Numerous initiatives to source adequate supplies of raw materials
            are procured from all countries in supply chain
          </li>
          <li>Capacity enhancement</li>
          <li>Delivered on several ESG goals outlined in ”Activate“</li>
          <li>
            Robust manufacturing and quality assurance systems along with
            numerous certifications such as ISO and GMP to ensure consistent
            product quality
          </li>
        </>
      ),
      related_chart_image: {
        title: "Our Customer Value Proposition",
        image:
          "/images/innerpage/user-profile/our_customer_value_proposition.jpg",
      },
    },
  },
  suppliers: {
    title: "Suppliers",
    icon: "/icons/user-profile/suppliers.gif",
    content: {
      short_description:
        "Strong partnerships keep our ecosystem thriving. Join us in building resilient, responsible supply chains that move as one - like pods working in harmony.",
      matrics: [
        {
          worth: "Rs. 22.2 Bn",
          title: "Payments to Suppliers",
        },
        { worth: "Rs. 20.6 Mn", title: "Investment in Capacity Building" },
        {
          worth: "500",
          title:
            "Total no. of coconut shell and \ncharcoal suppliers supported",
        },
        {
          worth: "91%",
          title: "% of spending on coconut shell and \ncharcoal suppliers",
        },
      ],
      chairman_and_director: {
        title: "Chairman's and Managing Director's Joint Message",
        message:
          "Our value chain commences with coconut shells, a by-product of the coconut industry. Our manufacturing facilities are strategically located in Sri Lanka, Thailand, and Indonesia, providing direct access to our main raw material, coconut shell-based charcoal in these countries. Our raw material procurement network also extends to other major coconut growing countries in Asia, including the Philippines, India, and Vietnam. This extensive network has enabled us to gain valuable insights into the production and availability of raw materials, allowing us to effectively manage the cyclical volatility in demand and supply across all coconut-producing countries in Asia.",
        image: "",
      },
      stratergy_and_performance: (
        <>
          <li>Strengthened our supplier value proposition</li>
          <li>
            Maintained emphasis on ethical procurement practices and timely
            payments
          </li>
          <li>
            Engaged in capacity building through supplier audits and other
            initiatives
          </li>
          <li>Propagated green charcoaling practices among suppliers</li>
        </>
      ),
      related_chart_image: {
        title: "Our Supplier Value Proposition",
        image:
          "/images/innerpage/user-profile/our_supplier_value_proposition.jpg",
      },
    },
  },
  generalUser: {
    title: "General User",
    icon: "/icons/user-profile/general_user.gif",
    content: {
      short_description:
        "As the guiding current beneath our journey, you steer Haycarb’s course. Dive into a clear view of our performance, strategy, and sustainable growth.",
      matrics: [
        {
          worth: "Rs. 43.2 Bn",
          title: "Revenue",
        },
        { worth: "13.6%", title: "ROE" },
        { worth: "16", title: "New Products Launched" },
        { worth: "50.4", title: "Investment in CSR (Rs. Mn)" },
      ],
      chairman_and_director: {
        title: "Chairman's and Managing Director's Joint Message",
        message:
          "Haycarb recorded a Profit Before Tax of Rs.5.52 Bn for the year ending 31st March 2025, a moderation of 10% in comparison to the previous year. This decline is primarily attributed to the increase in raw material prices and the appreciation of the Sri Lankan Rupee. The tax expense decreased by 31% to Rs.1.2 Bn, owing to enhanced capital allowances on new investments. The effective tax rate decreased from 30% to 23%, resulting in a Profit After Tax of Rs.4.27 Bn, only 1% below the previous year's Post-Tax Profit of Rs.4.30 Bn. Furthermore, in USD terms, the Profit After Tax amounted to USD 14.35 Mn, reflecting a 6% increase.",
        image: "",
      },
      stratergy_and_performance: (
        <>
          <li>
            Strategic interventions to secure adequate supplies of raw material
            to support stable volumes
          </li>
          <li>Revised prices upward to support margin management</li>
          <li>Pursued strategic expansion in growth markets</li>
          <li>
            Ongoing emphasis on innovation and expansion of the value-added
            product portfolio to strengthen margins
          </li>
          <li>
            Drove progress on expanding our manufacturing footprint to the
            Philippines
          </li>
          <li>
            Robust risk management to identify and respond to risks and
            opportunities including climate related risks
          </li>
        </>
      ),
      related_chart_image: {
        title: "Our Strategic Levers for Sutainable Growth",
        image: "/images/innerpage/user-profile/our_strategic_level_growth.jpg",
      },
    },
  },
};

const ContentPage = () => {
  const stakeholderKeys = Object.keys(stakeholdersData) as StakeholderKey[];
  const [activeKey, setActiveKey] = useState(stakeholderKeys[0]);

  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-30 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 -right-25 lg:w-150 lg:h-150 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute
                hidden lg:block
                top-170 right-90
                lg:top-78 lg:-right-15
                xl:top-40 xl:-right-35
                2xl:top-40 2xl:-right-35
                md:w-100 md:h-100
                lg:w-50 lg:h-50  
                xl:w-90 xl:h-90
                2xl:w-100 2xl:h-100
                -rotate-15 scale-x-[-1] 
                bg-no-repeat bg-contain opacity-25 z-40"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  hidden lg:block
                  top-450 left-10 
                  lg:top-210 
                  xl:top-180 
                  2xl:top-190
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
        className="
                absolute 
                hidden lg:block
                top-0 -right-20 
                lg:top-3/5 lg:-right-60 
                xl:top-3/5 xl:-right-60 
                2xl:top-0 2xl:-right-20 
                lg:w-200 lg:h-200 
                xl:w-[800px] xl:h-[800px]
                bg-no-repeat bg-contain opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/water-full=spread.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  hidden lg:block
                  top-450 left-10 
                  lg:top-7/8 lg:-left-10
                  xl:top-7/8 xl:left-0
                  2xl:top-7/8 2xl:left-0
                  w-96 h-96 
                  lg:w-[800px] lg:h-[800px] 
                  xl:w-[700px] xl:h-[700px] 
                  2xl:w-[850px] 2xl:h-[850px] 
                  rotate-180 
                  transform 
                  -translate-y-1/3 -translate-x-1/3 
                  bg-no-repeat bg-contain opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/water-full=spread.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  hidden 
                  sm:block 
                  left-15 
                  lg:top-800 
                  xl:top-600 
                  2xl:top-640
                  w-56 h-56 
                  md:w-72 md:h-72
                  lg:w-75 lg:h-75  
                  xl:w-80 xl:h-80
                  transform scale-x-[-1] -rotate-20
                  -translate-x-1/2 -translate-y-9/10 
                  bg-no-repeat bg-contain opacity-25 z-10"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      <div className="w-full px-4 lg:px-12 py-8">
        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stakeholderKeys.map((key) => {
            const item = stakeholdersData[key];
            const isActive = key === activeKey;

            return (
              <button
                key={key}
                onClick={() => setActiveKey(key)}
                className={`flex flex-col items-center text-center rounded-lg transition-all p-4 border border-transparent hover:shadow-sm relative z-40`}
                style={
                  isActive ? { border: "2px solid rgba(0, 88, 129, 0.5)" } : {}
                }
              >
                <div className="relative w-[140px] h-[140px] pointer-events-none">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="object-contain"
                    fill
                  />
                </div>
                <p className="text-lg font-semibold text-[#005881] mb-3">
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Short description section */}
        <p className="mt-10 py-4 lg:px-20 para text-center text-lg font-semibold text-[#005881]">
          {stakeholdersData[activeKey].content.short_description}
        </p>

        {/* Matrics section */}
        <div className="flex flex-wrap justify-center items-center gap-y-8 mt-18 text-center">
          {stakeholdersData[activeKey].content?.matrics?.map((item, idx) => {
            const totalItems =
              stakeholdersData[activeKey].content?.matrics?.length || 0;
            const isLast = idx === totalItems - 1;

            return (
              <div
                key={idx}
                className={`
                            text-[#005881] px-8
                            ${!isLast ? "lg:border-r border-[#1D80A0]" : ""}
                            basis-1/2 sm:basis-1/3 lg:basis-auto
                            flex-shrink-0
                        `}
              >
                <p className="text-[32px] font-bold">{item.worth}</p>
                <p className="text-base whitespace-pre-line">{item.title}</p>
              </div>
            );
          })}
        </div>

        {/* Chairman and director message section */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 py-8 my-10">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-[40px] text-[#005881] font-normal text-center lg:text-left">
              {
                stakeholdersData[activeKey].content?.chairman_and_director
                  ?.title
              }
            </h1>
            <p className="para text-base font-medium text-[#000] text-center lg:text-left mt-3 mb-10">
              {
                stakeholdersData[activeKey].content?.chairman_and_director
                  ?.message
              }
            </p>
          </div>

          {/* Empty column for spacing on desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="lg:col-span-6 flex items-center justify-center w-full relative py-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <Image
                src="/images/leaderpersonbg.png"
                alt="Background"
                width={1200}
                height={800}
                className="w-full h-auto max-w-[1400px] opacity-90"
              />
            </div>

            {/* Two People - Always side by side */}
            <div className="relative flex flex-row items-center justify-center gap-4 md:gap-16 z-10">
              {/* Left Person */}
              <div className="flex justify-center w-full md:w-auto">
                <Image
                  src="/images/person01.png"
                  alt="Left Person"
                  width={500}
                  height={700}
                  className="h-auto object-contain"
                />
              </div>

              {/* Right Person */}
              <div className="flex justify-center w-full md:w-auto">
                <Image
                  src="/images/person02.png"
                  alt="Right Person"
                  width={500}
                  height={700}
                  className="h-auto object-contain"
                />
              </div>
              <div className="absolute left-6 right-6 bottom-0 h-[1px] bg-[#76AF53] z-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Key features unveiled section */}
      <div className="relative mt-50 mb-10 lg:my-50">
        {/* Wave Section */}
        <div className="relative -mt-60 z-30 bg-[#ffffff] transform -scale-y-100 w-full">
          <div className="wave-wrapper rotate-180 w-full pointer-events-none">
            <svg
              className="waves-inner w-full h-16 sm:h-20 md:h-24"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(21, 120, 151, 0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(21, 120, 151, 0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(21, 120, 151, 0.3)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="7"
                  fill="rgba(21, 120, 151, 1)"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Main Content Wrapper */}
        <div className="relative">
          {/* Blue Background Section */}
          <div className="bg-[#157897] relative overflow-visible">
            <div className="container mx-auto px-4 py-16 lg:py-10">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
                {/* Left Column - Image Area (Desktop) / Top (Mobile) */}
                <div className="order-1 xl:order-1 flex justify-center xl:justify-start xl:relative">
                  {/* Mobile/Tablet Image - Inside blue section */}
                  <div className="xl:hidden">
                    <Image
                      src="/images/innerpage/kfu_book.svg"
                      alt="kfu image"
                      width={619}
                      height={477}
                      className="w-full max-w-sm mx-auto"
                    />
                  </div>

                  {/* Desktop - Empty space, image positioned absolutely */}
                  <div className="hidden xl:block w-full h-64">
                    {/* This creates space for the absolutely positioned image */}
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="order-2 xl:order-2 text-white px-4 lg:px-10 xl:px-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-[40px] text-center lg:text-left font-normal mb-8 lg:mb-12 leading-tight">
                    Key Features Unveiled
                  </h1>
                  <ul className="text-base list-disc leading-loose">
                    <li>Improvements to SLFRS S1 & S2</li>
                    <li>Inclusion of a Digital Capital Report</li>
                    <li>Segmental performance review</li>
                    <li>
                      Key highlights available in multiple languages and wider
                      accessibility
                    </li>
                    <li>
                      New features in the digital annual report including
                      immersive experience, new accessibility feature, AI
                      Assistant, Chart Generator, FinQuest (Game based learning)
                      and User Profiling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Absolutely Positioned Desktop Image - Extends below blue section */}
          <div className="hidden xl:block absolute top-1/5 left-4 xl:left-16 2xl:left-24 z-20">
            <Image
              src="/images/innerpage/kfu_book.svg"
              alt="kfu image"
              width={650}
              height={500}
              className="w-auto h-auto max-w-none"
            />
          </div>
        </div>
        {/* White space below to accommodate the extended image */}
        {/* <div className="hidden xl:block h-40 bg-white"></div> */}
      </div>

      {/* Leadershipt Governance and Strategy section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:py-8 lg:my-10 mx-10 lg:mx-30">
        <div className="text-center lg:text-left">
          <h1 className="text-[40px] text-[#005881] font-normal">
            Leadership & Governance
          </h1>
          <p className="para text-base font-medium text-[#000] mt-3 mb-10">
            Haycarb PLC treats corporate governance as a central pillar of its
            strategy and leadership. The company prioritizes ethical
            decision-making and strong oversight to safeguard stakeholder
            interests and support sustainable growth. Leadership roles,
            committee functions, and alignment with broader ESG goals reflect
            Haycarb’s dedication to responsible and transparent governance
            across its global operations.
          </p>
          <WaveButton
            title="More details"
            onBtnClick={() =>
              window.open("pdf/innerpage/Corporate Governance.pdf", "_blank")
            }
            className="mx-auto lg:mx-0 w-40"
          />
        </div>
        <div className="lg:pl-20 lg:border-l-1 lg:border-[#1D80A0]">
          <h1 className="text-[40px] text-[#005881] font-normal text-center lg:text-left">
            Strategy and Performance
          </h1>
          <ul className="text-base list-disc leading-loose">
            {stakeholdersData[activeKey].content?.stratergy_and_performance}
          </ul>
        </div>
      </div>

      {/* Grpahs */}
      <div className="mt-12 px-10 lg:px-50">
        <h1 className="text-[#005881] text-[40px] font-normal text-center mb-10">
          {stakeholdersData[activeKey].content?.related_chart_image?.title}
        </h1>
        <Image
          src={
            stakeholdersData[activeKey].content?.related_chart_image?.image ||
            ""
          }
          alt={
            stakeholdersData[activeKey].content?.related_chart_image?.title ||
            "chart"
          }
          width={1500}
          height={800}
          className="mx-auto block"
        />
      </div>
    </section>
  );
};

export default ContentPage;
