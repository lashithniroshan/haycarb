"use client";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import FinancialCapital from "./FinancialCapital";
import FinancialSupplementary from "./FinancialSupplementary";
import { DefaultFooter, InnerPageFooter } from "components/Footer";

const FinancialComponent = () => {
  const [activatedTab, setActivatedTab] = useState("finance-capital");

  const tabs = [
    { value: "finance-capital", label: "Financial Capital" },
    { value: "supplementary-information", label: "Supplementary Information" },
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
        title="Financial Highlights"
        description="The Financials section presents a clear and reliable overview of Haycarb PLC’s performance and value creation for the year, supported by independent assurances and aligned with global reporting standards. It offers key insights into the Group’s financial health, capital efficiency, and strategic direction, all within an interactive and accessible digital experience."
        tabs={tabs}
        activeTab={activatedTab}
        onTabChange={(val) => setActivatedTab(val)}
      />

      {/* Financial Capital */}
      {activatedTab === "finance-capital" ? (
        <FinancialCapital />
      ) : (
        <FinancialSupplementary />
      )}
      <InnerPageFooter />
    </div>
  );
};

export default FinancialComponent;
