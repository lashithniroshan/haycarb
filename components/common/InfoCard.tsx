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
      className={`bg-white rounded-[30px] shadow-md flex flex-col w-full max-w-xl 2xl:max-w-none text-center relative aspect-auto mx-auto ${className}`}
    >
      {/* Image/Header Section */}
      <div className="relative w-full aspect-[16/9] rounded-t-[30px] overflow-hidden flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-t-[30px]" />
        )}
      </div>

      {/* Content Section */}
      <div
        className="flex-1 p-6 sm:p-8 flex flex-col justify-between border-x border-b rounded-b-[30px] bg-white"
        style={{ borderColor: "rgba(29, 128, 160, 0.5)" }}
      >
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#005881] font-normal mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base mb-6 text-[#000000] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center w-full relative">
          <WaveButton
            title={buttonTitle}
            onBtnClick={onButtonClick}
            style={{
              background: "white",
              position: "absolute",
              zIndex: 10,
              bottom: -55,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
