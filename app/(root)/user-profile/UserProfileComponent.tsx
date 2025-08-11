"use client";
import Banner from "components/innerpage/Banner";
import Navbar from "components/Navbar";
import React from "react";
import ContentPage from "./ContentPage";

const UserProfileComponent = () => {
  return (
    <div className="max-w-full mx-auto" style={{ minHeight: "100vh" }}>
      {/* Ensure layout height */}
      <Navbar
        isScrolled={true}
        isContentVisible={true}
        isFromInnerPage={true}
      />

      {/* Banner section */}
      <Banner title="Pick Your Desired Category" description="" />

      <ContentPage />
    </div>
  );
};

export default UserProfileComponent;
