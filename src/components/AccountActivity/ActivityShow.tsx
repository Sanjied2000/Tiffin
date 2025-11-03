'use client';
import React from "react";

import Profile from "@/components/AccountActivity/Profile";
import Rewards from "@/components/AccountActivity/Rewards";
import Orders from "@/components/AccountActivity/Orders";

import { useAccountButtonStore } from "@/store/accountButtonStore";

export const ActivityShow = () => {
  const { buttonNum } = useAccountButtonStore();

  const renderComponent = () => {
    switch (buttonNum) {
      case 0:
        return <Profile />;
      case 1:
        return <Rewards />;
      case 2:
        return <Orders />;
      default:
        return null;
    }
  };

  return <div>{renderComponent()}</div>;
};
