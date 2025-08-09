import React from 'react'
import Image from "next/image";
import WaveButton from "components/innerpage/WaveButton";

function GameWizard() {
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
          Comming Soon...
        </h1>
        
      </div>

    </section>
  )
}

export default GameWizard