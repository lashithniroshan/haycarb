import React from "react";
import UserProfileComponent from "./UserProfileComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile & Stakeholder Engagement | Haycarb PLC Annual Report 2024/25",
  description: "Explore Haycarb PLC's stakeholder engagement strategies, user profiling, and tailored content for shareholders, employees, customers, suppliers, and general users in our Annual Report 2024/25.",
  keywords: "Haycarb PLC, stakeholder engagement, user profiling, shareholders, employees, customers, suppliers, annual report, Sri Lanka, activated carbon, corporate governance",
  openGraph: {
    title: "User Profile & Stakeholder Engagement | Haycarb PLC Annual Report 2024/25",
    description: "Explore Haycarb PLC's stakeholder engagement strategies, user profiling, and tailored content for shareholders, employees, customers, suppliers, and general users in our Annual Report 2024/25.",
    type: "website",
    locale: "en_US",
    siteName: "Haycarb PLC",
    images: [
      {
        url: "/images/innerpage/user-profile/investor_ratio.jpg",
        width: 800,
        height: 600,
        alt: "Haycarb Stakeholder Engagement and User Profiling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "User Profile & Stakeholder Engagement | Haycarb PLC Annual Report 2024/25",
    description: "Explore Haycarb PLC's stakeholder engagement strategies and user profiling for FY 2024/25.",
    images: ["/images/innerpage/user-profile/investor_ratio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/user-profile",
  },
};

const page = () => {
  return <UserProfileComponent />;
};

export default page;
