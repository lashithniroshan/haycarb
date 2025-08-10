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
  matrics?: MatricsType[];
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
      short_description: "Detailed content for Shareholders goes here...",
    },
  },
  employees: {
    title: "Employees",
    icon: "/icons/employees.svg",
    content: {
      short_description: "Detailed content for Employees goes here...",
    },
  },
  customers: {
    title: "Customers",
    icon: "/icons/customers.svg",
    content: {
      short_description: "Detailed content for Customers goes here...",
    },
  },
  suppliers: {
    title: "Suppliers",
    icon: "/icons/suppliers.svg",
    content: {
      short_description: "Detailed content for Suppliers goes here...",
    },
  },
  generalUser: {
    title: "General User",
    icon: "/icons/general-user.svg",
    content: {
      short_description: "Detailed content for General Users goes here...",
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
        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          {stakeholdersData[activeKey].content.short_description}
        </div>
      </div>
    </section>
  );
};

export default ContentPage;
