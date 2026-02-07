import LinkButton from "./LinkButton";
import {Post} from "@/types/post";

type CardPostProps = {
    post: Post;
};

export default function CardPost({post}: CardPostProps) {
    const headingId = `post-${post.id}`;

    return (
        <article
            className="rounded-lg bg-white dark:bg-zinc-800 shadow border border-zinc-200 dark:border-zinc-700"
            aria-labelledby={headingId}
        >
            <div className="p-6">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{post.date}</p>
                <h3 id={headingId} className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                    {post.title}
                </h3>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300">{post.subtitle}</p>
                <div className="mt-4">
                    <LinkButton href="#" ariaLabel={`Read more about: ${post.title}`} variant="cyan">
                        Read more
                    </LinkButton>
                </div>
            </div>
        </article>
    );
}
