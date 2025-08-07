"use client";

import React, { useState } from "react";

import { InnerPageFooter } from "components/Footer";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import ChartGenerator from "./ChartGenerator";
import GenerateReport from "./GenerateReport";

const TailorComponent = () => {
  const [activatedTab, setActivatedTab] = useState("chart-generator");

  const tabs = [
    { value: "chart-generator", label: "Chart Generator" },
    { value: "generate-report", label: "Generate Your Own Report" },
  ];

  return (
    <div className="max-w-full mx-auto" style={{ minHeight: "100vh" }}>
      {/* Ensure layout height */}
      <Navbar
        isScrolled={true}
        isContentVisible={true}
        isFromInnerPage={true}
      />

      {/* Banner section */}
      <Banner
        title="Tailor Made for You"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae arcu ultrices vehicula. Fusce dignissim pulvinar odio at ultricies. Suspendisse potenti. Phasellus et rutrum ipsum, quis dignissim odio. Donec consequat quam a prium sagittis. Etiam mollis tempus sit amet scelerisque ante."
        tabs={tabs}
        activeTab={activatedTab}
        onTabChange={(val) => setActivatedTab(val)}
      />

      {activatedTab === "chart-generator" ? (
        <ChartGenerator />
      ) : (
        <GenerateReport />
      )}

      <InnerPageFooter />
    </div>
  );
};

export default TailorComponent;
