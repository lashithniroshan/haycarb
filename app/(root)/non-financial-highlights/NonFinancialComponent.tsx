"use client";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import CapitalReport from "./CapitalReport";
import Integration from "./Integration";
import ValueCreation from "./ValueCreation";
import { InnerPageFooter } from "components/Footer";

const NonFinancialComponent = () => {
  const [activatedTab, setActivatedTab] = useState("capital-report");

  const tabs = [
    { value: "capital-report", label: "Capitals Report" },
    { value: "integration", label: "SLFRS S1 & S2 Integration" },
    { value: "value-creation", label: "Value Creation" },
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
        title="Non Financial Highlights"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae arcu ultrices vehicula. Fusce dignissim pulvinar odio at ultricies. Suspendisse potenti. Phasellus et rutrum ipsum, quis dignissim odio. Donec consequat quam a prium sagittis. Etiam mollis tempus sit amet scelerisque ante."
        tabs={tabs}
        activeTab={activatedTab}
        onTabChange={(val) => setActivatedTab(val)}
      />

      {activatedTab === "capital-report" ? (
        <CapitalReport />
      ) : activatedTab === "integration" ? (
        <Integration />
      ) : (
        <ValueCreation />
      )}

      <InnerPageFooter />
    </div>
  );
};

export default NonFinancialComponent;
