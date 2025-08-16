import WaveButton from "components/innerpage/WaveButton";
import Image from "next/image";
import React from "react";

const FinancialSupplementary = () => {
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
                lg:top-135 lg:right-80
                xl:top-140 xl:right-90
                2xl:top-140 2xl:right-160
                lg:w-[480px] lg:h-[480px]
                rotate-20 scale-x-[-1] 
                bg-no-repeat bg-contain z-40"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-8 py-8">
        {/* Left column */}
        <div className="lg:col-span-6 lg:pt-20">
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
              title="Statement of Group Value Added"
              onBtnClick={() =>
                window.open(
                  "pdf/innerpage/Statement of Group Value Added.pdf",
                  "_blank"
                )
              }
            />
            <WaveButton
              title="History of Dividends and Scrip Issues"
              onBtnClick={() =>
                window.open(
                  "pdf/innerpage/History of Dividends and Scrip Issues.pdf",
                  "_blank"
                )
              }
            />
            <WaveButton
              title="Ten Year Financial Review"
              onBtnClick={() =>
                window.open(
                  "pdf/innerpage/Ten Year Financial Review.pdf",
                  "_blank"
                )
              }
            />
            <WaveButton
              title="Indicative US Dollar Financial Statements"
              onBtnClick={() =>
                window.open(
                  "pdf/innerpage/Indicative US Dollar Financial Statements.pdf",
                  "_blank"
                )
              }
            />
            <WaveButton
              title="Statement of Profit or Loss - Horizontal and Vertical Analysis"
              onBtnClick={() =>
                window.open(
                  "pdf/innerpage/Statement of Profit or Loss -Horizontal and Vertical Analysis.pdf",
                  "_blank"
                )
              }
            />
            <WaveButton
              title="Investor Information"
              onBtnClick={() =>
                window.open("pdf/innerpage/Investor Information.pdf", "_blank")
              }
            />
            <WaveButton
              title="Quarterly Analysis"
              onBtnClick={() =>
                window.open("pdf/innerpage/Quarterly Analysis.pdf", "_blank")
              }
            />
            <WaveButton
              title="Group Profile"
              onBtnClick={() =>
                window.open("pdf/innerpage/Group Profile.pdf", "_blank")
              }
            />
            <WaveButton
              title="Country Report"
              onBtnClick={() =>
                window.open("pdf/innerpage/Country Report.pdf", "_blank")
              }
            />
          </div>
        </div>
        <div className="lg:col-span-6 h-full flex items-stretch justify-center mt-8 lg:mt-0">
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
