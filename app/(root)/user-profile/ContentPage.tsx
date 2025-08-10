import Image from "next/image";
import React, { useState } from "react";

type StakeholderKey =
  | "shareholders"
  | "employees"
  | "customers"
  | "suppliers"
  | "generalUser";

type MatricsType = { worth: string; title: string };

type Content = {
  short_description: string;
  matrics: MatricsType[];
  chairman_and_director?: string;
  stratergy_and_performance?: React.ReactNode;
};

type Stakeholder = {
  title: string;
  icon: string;
  content: Content;
};

const stakeholdersData: Record<StakeholderKey, Stakeholder> = {
  shareholders: {
    title: "Shareholders",
    icon: "/icons/user-profile/shareholder.gif",
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
        { worth: "14.9%", title: "ROCE" },
      ],
    },
  },
  employees: {
    title: "Employees",
    icon: "/icons/employees.svg",
    content: {
      short_description:
        "You are the power behind the wave. See how your commitment fuels our mission as we navigate new depths of innovation and impact together.",
      matrics: [
        {
          worth: "2,026",
          title: "No. of Employees",
        },
        { worth: "91%", title: "Retention rate" },
        { worth: "17.3 h / Emp", title: "Average Training hours" },
        { worth: "Rs. 4.9 Bn", title: "Payments to Employees" },
        { worth: "Rs. 70 Mn", title: "Investment in Health and Safety" },
      ],
    },
  },
  customers: {
    title: "Customers",
    icon: "/icons/customers.svg",
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
        { worth: "4", title: "Products in Pipeline" },
        { worth: "Rs. 209.3 Mn", title: "Investment in R&D" },
      ],
    },
  },
  suppliers: {
    title: "Suppliers",
    icon: "/icons/suppliers.svg",
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
          title: "Total no. of coconut shell and charcoal suppliers supported",
        },
        {
          worth: "200",
          title: "Total no. of other material and service Suppliers",
        },
        {
          worth: "91%",
          title: "% of spending on coconut shell and charcoal suppliers",
        },
      ],
    },
  },
  generalUser: {
    title: "General User",
    icon: "/icons/general-user.svg",
    content: {
      short_description:
        "As the guiding current beneath our journey, you steer Haycarb’s course. Dive into a clear view of our performance, strategy, and sustainable growth.",
      matrics: [
        {
          worth: "Rs. 43.2Bn",
          title: "Revenue",
        },
        { worth: "13.6%", title: "ROE" },
        { worth: "2,026", title: "No. of Employees" },
        { worth: "16", title: "New Products Launched" },
        { worth: "Rs. 209.3 Mn", title: "Investment in R&D" },
        { worth: "50.4", title: "Investment in CSR (Rs. Mn)" },
      ],
    },
  },
};

const ContentPage = () => {
  const stakeholderKeys = Object.keys(stakeholdersData) as StakeholderKey[];
  const [activeKey, setActiveKey] = useState(stakeholderKeys[0]);

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
                  top-300 -left-40
                  lg:w-200 lg:h-200 
                  scale-x-[-1]
                  bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
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
                className="flex flex-col items-center text-center rounded-lg transition-all p-4 border border-transparent hover:shadow-sm"
                style={
                  isActive ? { border: "2px solid rgba(0, 88, 129, 0.5)" } : {}
                }
              >
                <div className="relative w-[140px] h-[140px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="object-contain"
                    width={140}
                    height={140}
                  />
                </div>
                <p className="text-lg font-semibold text-[#005881] mb-3">
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <p className="mt-10 py-4 lg:px-20 para text-center text-lg font-semibold text-[#005881]">
          {stakeholdersData[activeKey].content.short_description}
        </p>

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
                            ${!isLast ? "border-r border-[#1D80A0]" : ""}
                            basis-1/2 sm:basis-1/3 lg:basis-auto
                            flex-shrink-0
                        `}
              >
                <p className="text-[40px] font-bold">{item.worth}</p>
                <p className="text-base">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentPage;
