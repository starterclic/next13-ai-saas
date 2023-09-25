"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f99c03a2-47e3-4eab-9404-4efeca7b8367");
  }, []);

  return null;
};
