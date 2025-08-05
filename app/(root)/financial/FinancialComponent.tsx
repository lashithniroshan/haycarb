"use client";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import FinancialCapital from "./FinancialCapital";

const FinancialComponent = () => {
  const [activatedTab, setActivatedTab] = useState("finance-capital");
  const [isScrolled, setIsScrolled] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const tabs = [
    { value: "finance-capital", label: "Financial Capital" },
    { value: "supplementary-information", label: "Supplementary Information" },
  ];

  return (
    <div className="max-w-full mx-auto" style={{ minHeight: "100vh" }}>
      {/* Ensure layout height */}
      <Navbar
        isScrolled={isScrolled}
        isContentVisible={isContentVisible}
        isFromInnerPage={true}
      />

      {/* Banner section */}
      <Banner
        title="Financial"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae arcu ultrices vehicula. Fusce dignissim pulvinar odio at ultricies. Suspendisse potenti. Phasellus et rutrum ipsum, quis dignissim odio. Donec consequat quam a prium sagittis. Etiam mollis tempus sit amet scelerisque ante."
        tabs={tabs}
        activeTab={activatedTab}
        onTabChange={(val) => setActivatedTab(val)}
      />

      {/* Financial Capital */}
      <FinancialCapital />
    </div>
  );
};

export default FinancialComponent;
