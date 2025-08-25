import React from "react";
import UserProfileComponent from "./UserProfileComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 | User Profiles",
  description:
    "Access Haycarb PLC’s 2024/25 Annual Report microsite user profiles to save insights, set preferences, and view performance tailored to your interests.",
  keywords:
    "Haycarb PLC, stakeholder engagement, user profiling, shareholders, employees, customers, suppliers, annual report, Sri Lanka, activated carbon, corporate governance",
  openGraph: {
    title: "Haycarb PLC | Annual Report 2024/25 | User Profiles",
    description:
      "Access Haycarb PLC’s 2024/25 Annual Report microsite user profiles to save insights, set preferences, and view performance tailored to your interests.",
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
    title: "Haycarb PLC | Annual Report 2024/25 | User Profiles",
    description:
      "Access Haycarb PLC’s 2024/25 Annual Report microsite user profiles to save insights, set preferences, and view performance tailored to your interests.",
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
