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
    title: "Haycarb PLC | Annual Report 2024/25 | Haycarb in Focus",
    description:
      "Haycarb in Focus highlights our legacy, innovation, and global impact, where sustainability and strategy drive boundless transformation.",
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
    title: "Haycarb PLC | Annual Report 2024/25 | Haycarb in Focus",
    description:
      "Haycarb in Focus highlights our legacy, innovation, and global impact, where sustainability and strategy drive boundless transformation.",
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
