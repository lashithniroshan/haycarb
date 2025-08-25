import React from "react";
import NonFinancialComponent from "./NonFinancialComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 Non-Financial Highlights",
  description:
    "Explore Haycarb PLC’s 2024/25 non financial highlights on sustainability, innovation, community impact & operational excellence.",
  keywords:
    "Haycarb PLC, ESG, sustainability, climate resilience, natural capital, human capital, social capital, activated carbon, Sri Lanka, corporate responsibility",
  openGraph: {
    title: "Non-Financial Highlights & ESG | Haycarb PLC Annual Report 2024/25",
    description:
      "Discover Haycarb PLC's sustainability initiatives, ESG governance, climate resilience, and non-financial performance including natural capital, human capital, and social impact for FY 2024/25.",
    type: "website",
    locale: "en_US",
    siteName: "Haycarb PLC",
    images: [
      {
        url: "/images/innerpage/non-financial-highlights/ESG-governance.jpg",
        width: 800,
        height: 600,
        alt: "Haycarb ESG Governance and Sustainability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Financial Highlights & ESG | Haycarb PLC Annual Report 2024/25",
    description:
      "Discover Haycarb PLC's sustainability initiatives and ESG performance for FY 2024/25.",
    images: ["/images/innerpage/non-financial-highlights/ESG-governance.jpg"],
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
    canonical: "/non-financial-highlights",
  },
};

const page = () => {
  return <NonFinancialComponent />;
};

export default page;
