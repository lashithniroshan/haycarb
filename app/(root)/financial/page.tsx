import React from "react";
import FinancialComponent from "./FinancialComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Highlights | Haycarb PLC Annual Report 2024/25",
  description: "Explore Haycarb PLC's financial performance, revenue of Rs. 43.2 Bn, profit after tax of Rs. 4.27 Bn, and strategic financial highlights for FY 2024/25.",
  keywords: "Haycarb PLC, financial highlights, annual report, revenue, profit, financial performance, Sri Lanka, activated carbon",
  openGraph: {
    title: "Financial Highlights | Haycarb PLC Annual Report 2024/25",
    description: "Explore Haycarb PLC's financial performance, revenue of Rs. 43.2 Bn, profit after tax of Rs. 4.27 Bn, and strategic financial highlights for FY 2024/25.",
    type: "website",
    locale: "en_US",
    siteName: "Haycarb PLC",
    images: [
      {
        url: "/images/innerpage/financial/financial_cap_1.jpg",
        width: 800,
        height: 600,
        alt: "Haycarb Financial Highlights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Highlights | Haycarb PLC Annual Report 2024/25",
    description: "Explore Haycarb PLC's financial performance and strategic highlights for FY 2024/25.",
    images: ["/images/innerpage/financial/financial_cap_1.jpg"],
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
    canonical: "/financial",
  },
};

const page = () => {
  return <FinancialComponent />;
};

export default page;
