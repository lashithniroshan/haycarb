import React, { useState } from "react";
import WaveButton from "components/innerpage/WaveButton";
import {
  ProfitablityAndFinancialBar,
  KeyRatiosChart,
  EnvironmentalPerformance,
  SocialPerformanceChart,
  GovernanceChart,
} from "./Charts";

const ChartGenerator = () => {
  const [activatedBtn, setActivatedBtn] = useState("financial");

  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
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

      <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-6">
        <WaveButton
          title="Financial"
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 40,
            paddingRight: 40,
          }}
          onBtnClick={() => setActivatedBtn("financial")}
        />
        <WaveButton
          title="Non Financial"
          style={{ paddingTop: 10, paddingBottom: 10 }}
          onBtnClick={() => setActivatedBtn("non-financial")}
        />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 space-y-8">
        {activatedBtn === "financial" ? (
          <>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Profitability & Financial Position
              </h1>
              <ProfitablityAndFinancialBar />
            </div>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Financial Ratios
              </h1>
              <KeyRatiosChart />
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Environmental Performance
              </h1>
              <EnvironmentalPerformance />
            </div>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Social Performance
              </h1>
              <SocialPerformanceChart />
            </div>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Governance
              </h1>
              <GovernanceChart />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ChartGenerator;
