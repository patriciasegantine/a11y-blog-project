import React from "react";

type Variant = "dark" | "cyan" | "green" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
    fullWidth?: boolean;
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
};

export default function Button({
    children,
    variant = "dark",
    size = "md",
    className = "",
    fullWidth = false,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    disabled = false,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-in-out shadow-sm hover:shadow-md focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm disabled:hover:translate-y-0 hover:cursor-pointer disabled:hover:cursor-default";

    const variants: Record<Variant, string> = {
        dark:
            "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-100",
        cyan:
            "bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800",
        green:
            "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
        ghost:
            "bg-transparent text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-200 dark:active:bg-zinc-700 shadow-none",
    };

    const sizes: Record<Size, string> = {
        sm: "px-4 py-2 text-sm min-h-9",
        md: "px-6 py-3 text-base min-h-10",
        lg: "px-8 py-4 text-lg min-h-12",
    };

    const variantClasses = variants[variant] ?? variants.dark;
    const sizeClasses = sizes[size] ?? sizes.md;
    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            {...props}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            className={`${base} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`}
        >
            {children}
        </button>
    );
}
