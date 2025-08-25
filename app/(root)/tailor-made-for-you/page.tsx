import React from "react";
import TailorComponent from "./TailorComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 | Create Charts & Graphs",
  description:
    "Explore Haycarb PLC’s 2024/25 annual report microsite to create charts & graphs to analyze data, and tailor your own version of the annual report.",
  keywords:
    "Haycarb PLC, personalized reports, chart generator, custom reports, annual report, interactive tools, data visualization, Sri Lanka, activated carbon",
  openGraph: {
    title:
      "Tailor-Made Reports & Chart Generator | Haycarb PLC Annual Report 2024/25",
    description:
      "Explore Haycarb PLC’s 2024/25 annual report microsite to create charts & graphs to analyze data, and tailor your own version of the annual report.",
    type: "website",
    locale: "en_US",
    siteName: "Haycarb PLC",
    images: [
      {
        url: "/images/cardchartgenerator.png",
        width: 800,
        height: 600,
        alt: "Haycarb Tailor-Made Reports and Chart Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tailor-Made Reports & Chart Generator | Haycarb PLC Annual Report 2024/25",
    description:
      "Create personalized reports and generate custom charts from Haycarb PLC's Annual Report 2024/25.",
    images: ["/images/cardchartgenerator.png"],
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
    canonical: "/tailor-made-for-you",
  },
};

const page = () => {
  return <TailorComponent />;
};

export default page;
