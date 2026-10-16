"use client";

import {axeAccessibilityReport} from "@/utils/axeAccessibilityReport";
import {useEffect} from "react";

export default function AxeAccessibilityInit() {
    useEffect(() => {
        let disposed = false;
        let stop: (() => void) | undefined;
        axeAccessibilityReport().then((cleanup) => {
            if (disposed) cleanup();
            else stop = cleanup;
        }).catch((error) => console.warn("Accessibility audit initialization failed:", error));
        return () => {
            disposed = true;
            stop?.();
        };
    }, []);
    return null;
}
