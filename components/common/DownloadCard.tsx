// components/DownloadCard.tsx
import React from "react";
import Image from "next/image";
import WaveButton from "components/innerpage/WaveButton";

interface DownloadCardProps {
  title: string;
  image: string;
  onDownload?: () => void;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  image,
  onDownload,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col justify-end items-center w-full max-w-[400px] 2xl:max-w-none text-center relative aspect-[4/3] mx-auto">
      <div className="absolute inset-0 rounded-[10px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="absolute bottom-10 text-white font-medium text-lg px-4 z-10">
        {title}
      </div>

      <WaveButton
        title="Download"
        onBtnClick={onDownload}
        style={{
          background: "white",
          position: "absolute",
          bottom: -30,
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default DownloadCard;
