// components/CommonAccordion.tsx
import React, { useState } from "react";
import { AccordionData } from "components/types/types";

interface CommonAccordionProps {
  items: AccordionData[];
}

const CommonAccordion: React.FC<CommonAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 relative z-10">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#50CDA480] relative z-10">
          {/* Entire row is clickable */}
          <div
            onClick={() => handleClick(index)}
            className="flex justify-between items-center py-6 cursor-pointer"
          >
            <div className="text-left text-[#005881] font-medium text-[22px] sm:text-[26px] lg:text-3xl  hover:text-[#003b5c] transition">
              <h1 className="font-normal">{item.title}</h1>
            </div>

            {/* Prevent toggling when clicking this */}
            {item.downloadLink && (
              <a
                href={item.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold text-[#005881] underline underline-offset-2 z-20"
              >
                DOWNLOAD REPORT
              </a>
            )}
          </div>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-[1000px] py-4" : "max-h-0"
            }`}
          >
            {openIndex === index && (
              <div className="text-[#333] text-[15px] leading-[1.6] overflow-y-auto max-h-[960px] pr-2 custom-scrollbar">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonAccordion;
