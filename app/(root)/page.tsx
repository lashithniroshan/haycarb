import React from "react";
import Home from "./Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 | Boundless Impact",
  description:
    "Haycarb PLC Annual Report 2024/25 -Boundless Impact: Discover our financials, sustainability, and strategic progress reflecting an year of transformation",
};

const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;
