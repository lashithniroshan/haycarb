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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae arcu ultrices vehicula. Fusce dignissim pulvinar odio at ultricies. Suspendisse potenti. Phasellus et rutrum ipsum, quis dignissim odio. Donec consequat quam a prium sagittis. Etiam mollis tempus sit amet scelerisque ante."
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
