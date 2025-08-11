"use client";
import { InnerPageFooter } from "components/Footer";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import OverviewofHaycarb from "./OverviewofHaycarb";
import ReportingLandscape from "./ReportingLandscape";

const HaycarbFocusComponent = () => {
  const [activatedTab, setActivatedTab] = useState("reporting-landscape");

  const tabs = [
    { value: "reporting-landscape", label: "Reporting Landscape" },
    { value: "overview-of-haycarb", label: "Overview of Haycarb" },
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
        title="Haycarb in Focus"
        description="Haycarb PLC, a Sri Lankan multinational, leads in coconut shell-based activated carbon with 1,500+ solutions across seven countries. Its fifth Integrated Annual Report reflects transparency and global standards, while also pioneered digital reporting innovations, including AI-generated visuals, multilingual accessibility, and Braille integration, reinforcing its leadership in governance, sustainability, and digital transformation."
        tabs={tabs}
        activeTab={activatedTab}
        onTabChange={(val) => setActivatedTab(val)}
      />

      {/* Financial Capital */}
      {activatedTab === "reporting-landscape" ? (
        <ReportingLandscape />
      ) : (
        <OverviewofHaycarb />
      )}

      <InnerPageFooter />
    </div>
  );
};

export default HaycarbFocusComponent;
