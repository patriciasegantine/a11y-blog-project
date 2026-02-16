import React from "react";
import Link from "next/link";
import {Post} from "@/types/post";
import {formatPostDate} from "@/utils/formatPostDate";

type PostsListProps = {
    title?: string;
    posts: Post[];
    ariaLabelledby?: string;
};

export default function PostsList({title = "Posts", posts, ariaLabelledby}: PostsListProps) {
    const labelId = ariaLabelledby || `posts-list-${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <section aria-labelledby={labelId}>
            <strong id={labelId} className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 block">
                {title}
            </strong>

            <ul className="space-y-4">
                {posts.map((post, index) => (
                    <li key={post?.id}>
                        <Link
                            href={`/posts/${post.id}`}
                            className="block group focus-ring"
                        >
                            <strong
                                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-600 transition line-clamp-2">
                                {index + 1}. {post.title}
                            </strong>
                            <time className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block ">
                                {formatPostDate(post)}
                            </time>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
