import React from "react";

const CapitalReport = () => {
  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 -right-30 lg:w-150 lg:h-150 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/strategybg-2.png)",
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
                  lg:top-3/4 
                  xl:top-5/7 
                  2xl:top-4/6
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
    </section>
  );
};

export default CapitalReport;
