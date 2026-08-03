import type {ReactNode} from "react";

type PageHeaderProps = {
    eyebrow: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    titleId?: string;
    variant?: "page" | "article";
};

export default function PageHeader({eyebrow, title, description, titleId, variant = "page"}: PageHeaderProps) {
    const isArticle = variant === "article";

    return (
        <header className="max-w-3xl">
            <div className={isArticle
                ? "flex flex-wrap items-center gap-2 text-sm text-stone-500 dark:text-stone-400"
                : "font-serif text-base italic text-(--accent)"
            }>
                {eyebrow}
            </div>
            <h1 id={titleId} className="mt-4 font-serif text-3xl font-normal leading-[1.1] text-stone-900 dark:text-stone-100 md:text-5xl">
                {title}
            </h1>
            {description && (
                <p className="mt-3 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-300 md:text-lg">
                    {description}
                </p>
            )}
        </header>
    );
}
