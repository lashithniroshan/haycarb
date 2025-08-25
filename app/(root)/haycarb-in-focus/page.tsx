import React from "react";
import HaycarbFocusComponent from "./HaycarbFocusComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 | Haycarb in Focus",
  description:
    "Haycarb in Focus highlights our legacy, innovation, and global impact, where sustainability and strategy drive boundless transformation.",
  keywords:
    "Haycarb PLC, company overview, global presence, activated carbon, water purification, milestones, awards, reporting landscape, Sri Lanka, manufacturing",
  openGraph: {
    title:
      "Haycarb in Focus | Company Overview & Reporting Landscape | Annual Report 2024/25",
    description:
      "Explore Haycarb PLC's company overview, global presence, product portfolio, milestones, awards, and comprehensive reporting landscape for the financial year 2024/25.",
    type: "website",
    locale: "en_US",
    siteName: "Haycarb PLC",
    images: [
      {
        url: "/images/innerpage/haycarb/awards.jpg",
        width: 800,
        height: 600,
        alt: "Haycarb Company Overview and Awards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Haycarb in Focus | Company Overview & Reporting Landscape | Annual Report 2024/25",
    description:
      "Explore Haycarb PLC's company overview and comprehensive reporting landscape for FY 2024/25.",
    images: ["/images/innerpage/haycarb/awards.jpg"],
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
    canonical: "/haycarb-in-focus",
  },
};

const page = () => {
  return <HaycarbFocusComponent />;
};

export default page;
