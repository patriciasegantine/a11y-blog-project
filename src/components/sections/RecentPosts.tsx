import React from "react";
import {Post} from "@/types/post";

type RecentPostsProps = {
    title?: string;
    posts: Post[];
};

export default function RecentPosts({title = "Recent Posts", posts}: RecentPostsProps) {
    const headingId = "aside-recent-posts";
    return (
        <section aria-labelledby={headingId}>
            <h3 id={headingId} className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                {title}
            </h3>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post?.id}>
                        <a
                            href={`#${post.id}`}
                            className="block group"
                        >
                            <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition line-clamp-2">
                                {post.title}
                            </h4>
                            <time className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                                {post.date}
                            </time>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
