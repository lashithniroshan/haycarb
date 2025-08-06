import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React, { JSX } from "react";

interface FinancialItem {
  value: string | null;
  label: string | null;
}

interface FinancialData {
  profitability: FinancialItem[];
  efficiency: FinancialItem[];
  liquidity: FinancialItem[];
  solvency: FinancialItem[];
  investor: FinancialItem[];
}

interface Category {
  key: keyof FinancialData;
  title: string;
}

const FinancialCapital = () => {
  const statsData = [
    {
      worth: "43,202",
      title: "Revenue",
      currency: "(Rs. Mn)",
    },
    {
      worth: "5,517",
      title: "Profit Before Tax",
      currency: "(Rs. Mn)",
    },
    {
      worth: "4,271",
      title: "Profit After Tax",
      currency: "(Rs. Mn)",
    },
  ];

  const chart = [
    { id: 1, value: "/images/innerpage/sample-chart.svg" },
    { id: 2, value: "/images/innerpage/sample-chart.svg" },
    { id: 3, value: "/images/innerpage/sample-chart.svg" },
  ];

  const financialData: FinancialData = {
    profitability: [
      { value: "13.6", label: "Return on equity (%)" },
      { value: "9.3", label: "Return on Assets" },
      { value: "21.15", label: "Interest cover ratio\n(No. of times)" },
    ],
    efficiency: [
      { value: "0.94", label: "Asset turnover ratio\n(No. of times)" },
      { value: "14", label: "Creditor days" },
      { value: "223", label: "Cash conversion\ncycle (Days)" },
    ],
    liquidity: [
      { value: "2.47", label: "Current ratio\n(No. of times)" },
      { value: "1.14", label: "Quick asset ratio" },
      { value: null, label: null }, // Empty cell
    ],
    solvency: [
      { value: "30.6", label: "Debt/equity (%)" },
      { value: "23.4", label: "Gearing ratio (%)" },
      { value: "19.8", label: "Debt/Total assets (%)" },
    ],
    investor: [
      { value: "12.10", label: "Earnings per share (Rs)" },
      { value: "31.4", label: "Dividend payout (%)" },
      { value: "89.3", label: "Net asset value per\nshare (Rs)" },
    ],
  };

  const categories: Category[] = [
    { key: "profitability", title: "Profitability highlights" },
    { key: "efficiency", title: "Efficiency ratios" },
    { key: "liquidity", title: "Liquidity ratios" },
    { key: "solvency", title: "Solvency position" },
    { key: "investor", title: "Investor position" },
  ];

  const formatLabel = (label: string | null): JSX.Element | null => {
    if (!label) return null;
    return (
      <>
        {label.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < label.split("\n").length - 1 && <br />}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
      {/* --- Decorative Background Blobs --- */}
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
                  top-85 -right-35 
                  lg:top-65 lg:-right-35
                  xl:top-85 xl:-right-35
                  2xl:top-85 2xl:-right-35
                  lg:w-80 lg:h-80 
                  xl:w-80 xl:h-80 
                  2xl:w-100 2xl:h-90 
                  -rotate-45 
                  scale-x-[-1]
                  bg-no-repeat 
                  bg-contain z-40"
        style={{
          backgroundImage: "url(/images/innerpage/green-whale.png)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-96 h-96 md:w-[600px] md:h-[600px] rotate-180 transform -translate-y-1/3 -translate-x-1/3 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute bottom-20 hidden sm:block left-36 w-56 h-56 md:w-72 md:h-72 transform -translate-x-1/2 -translate-y-9/10 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/vertical-fliped-light-green-whale.svg)",
        }}
      ></div>

      {/* --- Content Area --- */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-10 py-8">
        {/* Left Column */}
        <div className="lg:col-span-8">
          <p className="para">
            Haycarb maintained financial stability in 2024/25, achieving a
            revenue of Rs. 43.2 Bn and a net profit of Rs. 4.27 Bn. Despite
            rising raw material costs, strategic expansions in Asia and the USA
            strengthened our market position. We optimised costs, ensuring
            resilience. Asset growth and stable funding reinforce our commitment
            to innovation. Just as whales play a vital role in maintaining ocean
            ecosystems, Haycarb’s financial stability ensures sustainable growth
            and resilience in the business landscape.
          </p>

          {/* Dynamic Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-center">
            {statsData.map((stat, index) => (
              <div key={index}>
                <p className="text-[50px] font-extrabold text-[#369E93]">
                  {stat.worth}
                </p>
                <div className="h-[1px] bg-[#CFD674] w-1/2 lg:w-2/3 mx-auto my-1"></div>
                <p className="text-[20px] font-medium text-[#369E93]">
                  {stat.title}
                </p>
                <p className="text-[20px] font-medium text-[#369E93]">
                  {stat.currency}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex justify-center items-start mt-8 lg:mt-0">
          <Image
            src="/images/innerpage/first-square.png"
            alt="banner"
            width={386}
            height={479}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {chart.map((ch, idx) => (
          <div
            key={ch.id}
            className="border border-[#1D80A080] rounded-[30px] flex items-center justify-center w-full"
          >
            <Image src={ch.value} alt="banner" width={386} height={479} />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 my-20">
        {/* Header */}
        <div
          className="bg-[#61B296] text-white text-center py-3 sm:py-4"
          style={{ borderRadius: "10px 10px 0 0" }}
        >
          <h1 className="text-[35px] font-normal">Financial Ratios</h1>
        </div>

        {/* Single Responsive Table */}
        <div
          className="bg-white overflow-hidden"
          style={{ borderRadius: "0 0 10px 10px" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse">
              {/* Header Row */}
              <thead>
                <tr>
                  {categories.map((category) => (
                    <th
                      key={category.key}
                      className="border border-gray-200 p-2 sm:p-4 lg:p-6 text-center font-semibold text-[#606060] text-lg sm:text-sm lg:text-base min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]"
                      style={{
                        background: "rgba(97, 178, 150, 0.1)",
                        border: "1px solid rgba(97, 178, 150, 0.5)",
                      }}
                    >
                      <div className="break-words">{category.title}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2].map((rowIndex) => (
                  <tr key={rowIndex}>
                    {categories.map((category) => {
                      const item = financialData[category.key][rowIndex];
                      return (
                        <td
                          key={category.key}
                          className={`border p-2 sm:p-4 lg:py-6 lg:px-10 text-center align-top min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]`}
                          style={{
                            border: "1px solid rgba(97, 178, 150, 0.5)",
                          }}
                        >
                          {item?.value && (
                            <div className="space-y-1 sm:space-y-2">
                              <div className="text-lg sm:text-sm lg:text-sm font-semibold text-gray-800">
                                {item.value}
                              </div>
                              <div className="text-xs sm:text-sm lg:text-sm text-gray-600 font-medium leading-tight break-words">
                                {formatLabel(item.label)}
                              </div>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Download buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-60">
        <WaveButton title="Financial Highlights" />
        <WaveButton title="Financial Statements" />
      </div>
    </section>
  );
};

export default FinancialCapital;
