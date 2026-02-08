import Link from "next/link";
import {Category, categoryLabels} from "@/types/category";

type CategoryListProps = {
    title?: string;
    categories: Category[];
};

export default function CategoryList({title = "Categories", categories}: CategoryListProps) {
    const headingId = "aside-categories";
    return (
        <section aria-labelledby={headingId}>
            <h3 id={headingId} className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                {title}
            </h3>
            <nav aria-label={title}>
                <ul className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link
                                href={`/posts/category/${encodeURIComponent(category)}`}
                                className="block bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-700 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition"
                            >
                                {categoryLabels[category]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}
