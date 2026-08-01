import type {ReactNode} from "react";

type PageHeaderProps = {
    eyebrow: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    titleId?: string;
};

export default function PageHeader({eyebrow, title, description, titleId}: PageHeaderProps) {
    return (
        <header className="max-w-3xl">
            <div className="font-serif text-base italic text-[var(--accent)]">
                {eyebrow}
            </div>
            <h1 id={titleId} className="mt-4 font-serif text-3xl font-normal leading-[1.1] text-stone-900 dark:text-stone-100 md:text-5xl">
                {title}
            </h1>
            {description && (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-300 md:text-lg">
                    {description}
                </p>
            )}
        </header>
    );
}
