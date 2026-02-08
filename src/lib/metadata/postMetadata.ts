import type {Metadata} from "next";
import type {Post} from "@/types/post";

export function buildPostMetadata(post?: Post | null): Metadata {
    if (!post) {
        return {title: "Post Not Found"};
    }

    const description = post.subtitle || post.content.substring(0, 160);

    return {
        title: post.title,
        description,
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description,
            images: post.imageSrc
                ? [
                    {
                        url: post.imageSrc,
                        width: 1200,
                        height: 630,
                        alt: post.imageAlt || post.title,
                    },
                ]
                : [],
            type: "article",
            publishedTime: post.date,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description,
            images: post.imageSrc ? [post.imageSrc] : [],
        },
    };
}

