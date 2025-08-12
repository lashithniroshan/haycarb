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
        description="Presents a concise overview of the company’s sustainable value creation journey, integrating SLFRS S1 and S2 standards whilst showcasing Haycarb’s performance across the six capitals framed by the strategic pillars of the ESG roadmap, Activate."
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
