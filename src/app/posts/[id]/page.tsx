import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {db} from "@/lib/data/postsDatabase";
import ImageCreditOverlay from "@/components/ui/ImageCreditOverlay";
import PageHeader from "@/components/layout/PageHeader";
import {categoryLabels} from "@/types/category";
import {formatPostDate} from "@/utils/formatPostDate";
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
        <div className="pb-14 pt-8 md:pb-20 md:pt-12">
            <article>
                <Link href="/posts" className="font-serif text-sm italic underline decoration-stone-300 underline-offset-4 transition hover:text-(--accent) focus-ring text-(--accent) dark:decoration-stone-700">
                    <span aria-hidden="true">←</span> Back to the journal
                </Link>

                <div className="mt-8">
                    <PageHeader
                        variant="article"
                        eyebrow={
                            <>
                                {post.category && <span className="font-serif italic text-(--accent)">{categoryLabels[post.category]}</span>}
                                {post.category && <span aria-hidden="true">·</span>}
                                <time>{formatPostDate(post)}</time>
                            </>
                        }
                        title={post.title}
                        description={post.subtitle}
                    />
                </div>

                {post.imageSrc && (
                    <div className="relative mt-10 aspect-16/7 w-full max-w-6xl overflow-hidden bg-stone-200 dark:bg-stone-800">
                        <Image
                            src={post.imageSrc}
                            alt={post.imageAlt || post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 1152px"
                            priority
                        />
                        <ImageCreditOverlay author={post.imageCredit} source={post.imageSource}/>
                    </div>
                )}

                <div className="mt-12 max-w-3xl text-stone-800 dark:text-stone-200 md:ml-12 lg:ml-20">
                    <p className="font-serif text-xl leading-9 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-(--accent) md:text-2xl md:leading-10">
                        {post.introduction}
                    </p>

                    {post.body.length > 0 && (
                        <div className="mt-10 space-y-7 font-serif text-lg leading-8 md:text-xl md:leading-9">
                            {post.body.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    )}

                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-stone-300 pt-6 font-sans dark:border-stone-700">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="text-sm font-medium text-stone-500 dark:text-stone-400">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <footer className="border-t border-stone-300 pt-8 font-sans dark:border-stone-700">
                        <Link href="/posts" className="text-sm font-medium text-(--accent) hover:text-(--accent) focus-ring">
                            Browse more writing <span aria-hidden="true">→</span>
                        </Link>
                    </footer>
                </div>
            </article>
        </div>
    );
}
