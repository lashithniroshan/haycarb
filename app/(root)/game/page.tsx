import React from "react";
import GameComponent from "./GameComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25 | FinQuest Game",
  description:
    "Engage in the FinQuest game to explore Haycarb’s impact through interactive learning, where strategy, sustainability, and fun meet. Play now!",
};

const page = () => {
  return <GameComponent />;
};

export default page;
