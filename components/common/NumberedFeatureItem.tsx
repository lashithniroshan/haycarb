import React from "react";

interface NumberedFeatureItemProps {
  number: number;
  content: React.ReactNode;
  isLast?: boolean;
}

const NumberedFeatureItem: React.FC<NumberedFeatureItemProps> = ({
  number,
  content,
  isLast = false,
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 ${
        isLast ? "" : "border-b"
      }`}
      style={{ borderColor: "rgba(80, 205, 164, 0.5)" }}
    >
      <div className="flex-shrink-0 w-10 h-10 md:w-15 md:h-15 rounded-full bg-[#008DA8] text-white flex items-center justify-center font-bold md:text-4xl">
        {number}
      </div>
      <div className="text-[#333] text-base leading-[1.6]">{content}</div>
    </div>
  );
};

export default NumberedFeatureItem;
