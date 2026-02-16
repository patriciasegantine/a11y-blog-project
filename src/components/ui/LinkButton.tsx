import React from "react";

type Variant = "dark" | "cyan" | "green";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    ariaLabel?: string;
    variant?: Variant;
    className?: string;
};

export default function LinkButton({
                                       children,
                                       ariaLabel,
                                       variant = "dark",
                                       className = "",
                                       ...props
                                   }: LinkButtonProps) {
    const base =
        "inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-200 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-ring";

    const variants: Record<Variant, string> = {
        dark:
            "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-100",
        cyan:
            "bg-cyan-900 text-white hover:bg-cyan-600",
        green:
            "bg-green-600 text-white hover:bg-green-700",
    };

    const variantClasses = variants[variant] ?? variants.dark;

    return (
        <a
            {...props}
            className={`${base} ${variantClasses} ${className}`}
            aria-label={ariaLabel}
        >
            <span>{children}</span>
            <span className="sr-only">, {ariaLabel}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>

        </a>
    );
}
