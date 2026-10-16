export async function axeAccessibilityReport(): Promise<() => void> {
    if (typeof window === "undefined" || process.env.NODE_ENV !== "development") return () => {};

    const {default: axe} = await import("axe-core");
    let disposed = false;
    let timer: ReturnType<typeof setTimeout>;
    const options: MutationObserverInit = {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["class", "aria-expanded", "aria-hidden", "data-state"],
    };
    const observer = new MutationObserver(schedule);

    async function report() {
        if (disposed) return;
        observer.disconnect();
        try {
            const {violations, incomplete} = await axe.run(document, {
                runOnly: {type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]},
            });
            if (disposed) return;
            if (violations.length) console.warn("Accessibility violations:", violations);
            if (incomplete.length) console.info("Accessibility checks requiring manual review:", incomplete);
        } catch (error) {
            if (!disposed) console.warn("Accessibility audit failed:", error);
        } finally {
            if (!disposed) observer.observe(document.body, options);
        }
    }

    function schedule() {
        clearTimeout(timer);
        timer = setTimeout(report, 1000);
    }

    observer.observe(document.body, options);
    schedule();
    return () => {
        disposed = true;
        clearTimeout(timer);
        observer.disconnect();
    };
}
