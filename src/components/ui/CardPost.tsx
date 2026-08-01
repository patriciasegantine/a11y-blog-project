import Link from "next/link";
import {Post} from "@/types/post";
import {formatPostDate} from "@/utils/formatPostDate";
import {categoryLabels} from "@/types/category";

export default function CardPost({post}: { post: Post }) {
    const headingId = `post-${post.id}`;

    return (
        <article className="border-b border-stone-300 py-6 first:border-t dark:border-stone-700" aria-labelledby={headingId}>
            <Link href={`/posts/${post.id}`} className="group grid gap-3 focus-ring md:grid-cols-[9rem_1fr] md:gap-6">
                <p className="pt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                    {post.category && (
                        <span className="block text-(--accent)">
                            {categoryLabels[post.category]}
                        </span>
                    )}
                    <time>{formatPostDate(post)}</time>
                </p>
                <span>
                    <h3 id={headingId} className="max-w-3xl font-serif text-lg font-normal leading-snug text-stone-900 transition group-hover:text-(--accent) dark:text-stone-100 md:text-xl">
                        {post.title}
                    </h3>
                    {post.subtitle && (
                        <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                            {post.subtitle}
                        </span>
                    )}
                </span>
            </Link>
        </article>
    );
}
