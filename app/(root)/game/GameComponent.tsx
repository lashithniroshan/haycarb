"use client";
import React from "react";
import { InnerPageFooter } from "components/Footer";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import GameWizard from "./GameWizard";


const GameComponent = () => {
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
        title="FinQuest"
        description=""
      />
      <GameWizard />
       <InnerPageFooter />

    </div>
  )
}

export default GameComponent