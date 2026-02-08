import Image from "next/image";
import {notFound} from "next/navigation";
import {db} from "@/lib/data/postsDatabase";
import ImageCreditOverlay from "@/components/ui/ImageCreditOverlay";
import {categoryLabels} from "@/types/category";
import type {Metadata} from "next";
import {buildPostMetadata} from "@/lib/metadata/postMetadata";

interface PostPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {
    const {id} = await params;
    const post = db.getPostById(id);

    return buildPostMetadata(post);
}

export const revalidate = 60;

export default async function PostPage({params}: PostPageProps) {
    const {id} = await params;

    const post = db.getPostById(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen w-full bg-zinc-50 dark:bg-transparent">
            <article className="max-w-3xl mx-auto px-4 py-10">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{post.date}</p>
                <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
                    {post.title}
                </h1>
                {post.subtitle && (
                    <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-300">
                        {post.subtitle}
                    </p>
                )}

                {post.imageSrc && (
                    <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl shadow">
                        <Image
                            src={post.imageSrc}
                            alt={post.imageAlt || post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority
                        />
                        <ImageCreditOverlay author={post.imageCredit} source={post.imageSource}/>
                    </div>
                )}

                {post.content && (
                    <div className="mt-8 space-y-6 text-zinc-800 dark:text-zinc-200 leading-relaxed">
                        <p>{post.content}</p>

                        {post.category && (
                            <div className="mt-6">
                                <span
                                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-cyan-700 dark:bg-cyan-700 rounded-full">
                                    {categoryLabels[post.category]}
                                </span>
                            </div>
                        )}

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </article>
        </div>
    );
}
