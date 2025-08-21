import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React from "react";

const FinancialSupplementary = () => {
  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-30 px-4 overflow-hidden mb-12">
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
                hidden
                top-170 right-90
                lg:top-135 lg:right-80
                xl:top-140 xl:right-90
                2xl:top-140 2xl:right-160
                lg:w-[480px] lg:h-[480px]
                rotate-20 scale-x-[-1] 
                bg-no-repeat bg-contain z-40 opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 px-4 lg:px-8 py-8">
        {/* Left column */}
        <div className="lg:col-span-8 lg:pt-20 flex justify-center lg:justify-end">
          <div className="w-full lg:w-auto lg:max-w-3xl">
            {/* <p className="para text-[18px] text-[#606060] font-semibold">
            These supplementary materials including financial-related additional
            disclosures, our group profile, and country- specific overviews are
            designed to support a deeper exploration of our performance. We
            invite stakeholders to engage with these resources to gain a
            well-rounded understanding of our strategic direction, regional
            presence, and overall results.
          </p> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
              <WaveButton
                style={{ background: "#fff" }}
                title="Statement of Group Value Added"
                onBtnClick={() =>
                  window.open(
                    "pdf/innerpage/Statement_of_Group_Value_Added.pdf",
                    "_blank"
                  )
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="History of Dividends and Scrip Issues"
                onBtnClick={() =>
                  window.open(
                    "pdf/innerpage/History_of_Dividends_and_Scrip_Issues.pdf",
                    "_blank"
                  )
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Ten Year Financial Review"
                onBtnClick={() =>
                  window.open(
                    "pdf/innerpage/Ten_Year_Financial_Review.pdf",
                    "_blank"
                  )
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Indicative US Dollar Financial Statements"
                onBtnClick={() =>
                  window.open(
                    "pdf/innerpage/Indicative_US_Dollar_Financial_Statements.pdf",
                    "_blank"
                  )
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Statement of Profit or Loss - Horizontal and Vertical Analysis"
                onBtnClick={() =>
                  window.open(
                    "pdf/innerpage/Statement_of_Profit_or_Loss_Horizontal_and_Vertical_Analysis.pdf",
                    "_blank"
                  )
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Investor Information"
                onBtnClick={() =>
                  window.open(
                    "pdf/innerpage/Investor_Information.pdf",
                    "_blank"
                  )
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Quarterly Analysis"
                onBtnClick={() =>
                  window.open("pdf/innerpage/Quarterly_Analysis.pdf", "_blank")
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Group Profile"
                onBtnClick={() =>
                  window.open("pdf/innerpage/Group_Profile.pdf", "_blank")
                }
              />
              <WaveButton
                style={{ background: "#fff" }}
                title="Country Report"
                onBtnClick={() =>
                  window.open("pdf/innerpage/Country_Report.pdf", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4 h-full flex items-stretch justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="h-full flex items-stretch">
            <Image
              src="/images/innerpage/financial/suplementary_main.jpg"
              alt="banner"
              width={407}
              height={664}
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSupplementary;
