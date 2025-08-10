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
      <Banner
        title="Pick Your Desired Category"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae arcu ultrices vehicula. Fusce dignissim pulvinar odio at ultricies. Suspendisse potenti. Phasellus et rutrum ipsum, quis dignissim odio. Donec consequat quam a prium sagittis. Etiam mollis tempus sit amet scelerisque ante."
      />

      <ContentPage />
    </div>
  );
};

export default UserProfileComponent;
