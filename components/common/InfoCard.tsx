// components/InfoCard.tsx
import React from "react";
import Image from "next/image";
import WaveButton from "components/innerpage/WaveButton";

interface InfoCardProps {
  title: string;
  description: string;
  buttonTitle: string;
  image?: string;
  onButtonClick?: () => void;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  image,
  onButtonClick,
  className = "",
  buttonTitle = "Click Me",
}) => {
  return (
    <div
      className={`bg-white rounded-[30px] shadow-md flex flex-col justify-end items-center w-full max-w-xl text-center relative aspect-[4/3] mx-auto ${className}`}
    >
      {/* Image/Header Section */}
      <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-t-xl overflow-hidden">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-t-xl" />
        )}
      </div>

      {/* Content Section */}
      <div
        className="flex-1 p-6 sm:p-8 flex bg-white flex-col justify-between border-x border-b rounded-b-[30px]"
        style={{ borderColor: "rgba(29, 128, 160, 0.5)" }}
      >
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#005881] font-normal mb-4 sm:mb-6 leading-tight text-center">
            {title}
          </h1>

          <p className="para text-sm sm:text-base mb-6 text-[#000000] leading-relaxed text-center px-5">
            {description}
          </p>
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <WaveButton
              title={buttonTitle}
              onBtnClick={onButtonClick}
              style={{
                background: "white",
                position: "absolute",
                zIndex: 10,
                bottom: -25,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
