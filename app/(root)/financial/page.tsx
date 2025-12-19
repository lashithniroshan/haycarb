import React from "react";
import FinancialComponent from "./FinancialComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 | Financial Highlights",
  description:
    "Review Haycarb PLC’s 2024/25 financial highlights with key metrics, growth trends, and insights designed for investors and stakeholders.",
  keywords:
    "Haycarb PLC, financial highlights, annual report, revenue, profit, financial performance, Sri Lanka, activated carbon",
  openGraph: {
    title: "Haycarb PLC | Annual Report 2024/25 | Financial Highlights",
    description:
      "Review Haycarb PLC’s 2024/25 financial highlights with key metrics, growth trends, and insights designed for investors and stakeholders.",
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
    title: "Haycarb PLC | Annual Report 2024/25 | Financial Highlights",
    description:
      "Review Haycarb PLC’s 2024/25 financial highlights with key metrics, growth trends, and insights designed for investors and stakeholders.",
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
