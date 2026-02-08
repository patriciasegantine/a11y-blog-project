import Image from "next/image";
import {Post} from "@/types/post";
import LinkButton from "@/components/ui/LinkButton";
import {formatPostDate} from "@/utils/formatPostDate";
import ImageCreditOverlay from "@/components/ui/ImageCreditOverlay";

export default function FeaturedPost({post}: { post: Post }) {
    if (!post.isFeatured) return null;

    return (
        <article
            className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 w-full md:h-80 lg:h-96 overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                    <span
                        className="inline-block bg-cyan-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        ✨ Featured
                    </span>
                </div>
                {post.imageSrc && (
                    <Image
                        src={post.imageSrc}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        priority
                    />
                )}
                <ImageCreditOverlay author={post?.imageCredit} source={post?.imageSource}/>
            </div>

            <div className="p-8">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 leading-tight">
                    {post.title}
                </h2>
                {post.subtitle && (
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wide">
                        Published on {formatPostDate(post)}
                    </p>
                )}
                {post.subtitle && (
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">{post.subtitle}</p>
                )}
                <div className="flex">
                    <LinkButton href={`/post/${post.id}`} ariaLabel={`Learn more about: ${post.title}`} variant="cyan">
                        Read more
                    </LinkButton>
                </div>
            </div>
        </article>
    );
}
