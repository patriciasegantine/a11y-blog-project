import React from "react";
import Link from "next/link";
import {Post} from "@/types/post";
import {formatPostDate} from "@/utils/formatPostDate";

type RecentPostsProps = {
    title?: string;
    posts: Post[];
};

export default function RecentPosts({title = "Recent Posts", posts}: RecentPostsProps) {
    return (
        <section aria-labelledby={"aside-recent-posts"}>
            <strong id={title} className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 block">
                {title}
            </strong>

            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post?.id}>
                        <Link
                            href={`/post/${post.id}`}
                            className="block group"
                        >
                            <strong
                                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-600 transition line-clamp-2">
                                {post.title}
                            </strong>
                            <time className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                                {formatPostDate(post)}
                            </time>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
