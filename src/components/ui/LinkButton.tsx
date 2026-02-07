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
    "inline-flex items-center gap-2 px-4 py-2 rounded font-medium transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1";

  const variants: Record<Variant, string> = {
    dark:
      "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 focus-visible:ring-zinc-900 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-900",
    cyan:
      "bg-cyan-900 dark:bg-cyan-900 text-white hover:bg-cyan-600 focus-visible:ring-cyan-500 focus-visible:ring-offset-2",
    green:
      "bg-green-900 dark:bg-green-900 text-white hover:bg-green-600 focus-visible:ring-green-500 focus-visible:ring-offset-2",
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
