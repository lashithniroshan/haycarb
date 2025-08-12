import React, { useState } from "react";
import WaveButton from "components/innerpage/WaveButton";
import {
  ProfitablityChart,
  FinancialPositionChart,
  EmissionsEnergyChart,
  MaterialWaterChart,
  SocialGovernanceChart,
} from "./Charts";

const ChartGenerator = () => {
  const [activatedBtn, setActivatedBtn] = useState("financial");

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
                  hidden 
                  lg:block 
                  left-15 
                  lg:top-4/5 
                  xl:top-6/7 
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
                  top-300 -left-40
                  lg:w-200 lg:h-200 
                  scale-x-[-1]
                  bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      {/* Description section */}
      <div className="lg:px-53 text-center">
        <p className="para text-center text-[#005881] text-lg font-semibold mt-10">
          You can visually explore Haycarb PLC’s performance data through
          customizable, interactive charts. Designed to enhance stakeholder
          understanding, this tool allows users to select key metrics and
          timeframes relating to both financial and non-financial information
          and instantly generate dynamic visuals. Integrated within the
          microsite’s responsive design, the chart generator complements
          Haycarb’s commitment to digital innovation and transparent reporting.
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
          isActive={activatedBtn === "financial"}
          onBtnClick={() => setActivatedBtn("financial")}
        />
        <WaveButton
          title="Non Financial"
          style={{ paddingTop: 10, paddingBottom: 10 }}
          onBtnClick={() => setActivatedBtn("non-financial")}
          isActive={activatedBtn === "non-financial"}
        />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 space-y-8">
        {activatedBtn === "financial" ? (
          <>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Profitability (Rs.Bn)
              </h1>
              <ProfitablityChart />
            </div>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Financial Position (Rs.Bn)
              </h1>
              <FinancialPositionChart />
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Emissions and Energy Consumption
              </h1>
              <EmissionsEnergyChart />
            </div>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Materials and Water Management
              </h1>
              <MaterialWaterChart />
            </div>
            <div className="w-full">
              <h1 className="text-center text-[#005881] text-[30px] lg:text-[38px]">
                Social and Governance Performance
              </h1>
              <SocialGovernanceChart />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ChartGenerator;
