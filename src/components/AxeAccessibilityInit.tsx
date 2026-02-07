"use client";
import { axeAccessibilityReport } from "@/utils/axeAccessibilityReport";
import { useEffect } from "react";

export default function AxeAccessibilityInit() {
  useEffect(() => {
    axeAccessibilityReport();
  }, []);
  return null;
}
