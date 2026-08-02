import Image from "next/image";
import Link from "next/link";
import {Post} from "@/types/post";
import {formatPostDate} from "@/utils/formatPostDate";
import ImageCreditOverlay from "@/components/ui/ImageCreditOverlay";
import {categoryLabels} from "@/types/category";

export default function FeaturedPost({post}: { post: Post }) {
    if (!post.isFeatured) return null;

    return (
        <article className="mx-auto max-w-6xl">
            {post.imageSrc && (
                <div className="relative aspect-32/9 overflow-hidden bg-stone-200 dark:bg-stone-800 md:mx-4 lg:mx-8">
                    <Image
                        src={post.imageSrc}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1152px"
                        priority
                    />
                    <ImageCreditOverlay author={post.imageCredit} source={post.imageSource}/>
                </div>
            )}

            <div className="mt-8 max-w-3xl text-left md:ml-12 lg:ml-16">
                <p className="font-serif text-xs italic text-(--accent)">A featured reflection</p>
                <h2 className="mt-3 line-clamp-1 font-serif text-2xl font-normal leading-tight text-stone-900 dark:text-stone-100 md:text-3xl">
                    {post.title}
                </h2>
                <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
                    {post.category && `${categoryLabels[post.category]} · `}
                    <time>{formatPostDate(post)}</time>
                </p>
                {post.subtitle && (
                    <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300 md:text-base">
                        {post.subtitle}
                    </p>
                )}
                <Link
                    href={`/posts/${post.id}`}
                    className="mt-4 inline-block font-serif text-base italic underline decoration-stone-300 underline-offset-8 transition hover:text-(--accent) focus-ring text-(--accent) dark:decoration-stone-700"
                >
                    Continue reading →
                </Link>
            </div>
        </article>
    );
}
