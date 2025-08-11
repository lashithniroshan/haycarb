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
        description="Offers users a dynamic and personalized way to engage with Haycarb PLC’s Annual Report. By selecting specific sections of interest users can generate tailored reports that suit their needs. The chart generator complements this by allowing users to visualize key performance metrics across multiple years using interactive graphs. Together, these tools enhance transparency, accessibility, and stakeholder engagement through a flexible, user-friendly digital experience."
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
