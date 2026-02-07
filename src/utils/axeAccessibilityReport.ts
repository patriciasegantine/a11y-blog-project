export async function axeAccessibilityReport() {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "development") return;

  try {
    const axeReact = (await import("@axe-core/react")).default;
    const React = (await import("react")).default;
    const ReactDOM = (await import("react-dom")).default;

    axeReact(React, ReactDOM, 1000);
  } catch (err) {
    console.warn("axe accessibility init failed:", err);
  }
}
