import React from "react";

type Tabs = {
  value: string;
  label: string;
};

interface BannerProps {
  title: string;
  description: string;
  tabs?: Tabs[]; // e.g., ['Financial Capital', 'Supplementary Information']
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <>
      <section className="relative bg-[#005072] text-white pt-28 pb-32 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">{title}</h2>

        <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-12 para">
          {description}
        </p>

        <div className="flex justify-center items-center gap-10 flex-wrap relative z-20">
          {tabs &&
            tabs?.map((v) => (
              <h1
                key={v.value}
                className={`inner-banner-tab cursor-pointer ${
                  activeTab === v.value ? "active" : ""
                }`}
                onClick={() => onTabChange?.(v.value)}
              >
                {v.label}
                {activeTab === v.value && (
                  <div className="h-[1px] active-line w-full mt-1"></div>
                )}
              </h1>
            ))}
        </div>
      </section>

      {/* Wave positioned outside the banner to overlap next section */}
      <div className="relative -mt-20 z-30 bg-[#ffffff]">
        <div className="wave-wrapper rotate-180 w-full pointer-events-none">
          <svg
            className="waves-inner w-full h-16 sm:h-20 md:h-24"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(0, 80, 114, 0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(0, 80, 114, 0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(0, 80, 114, 0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill="rgba(0, 80, 114, 1)"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;
