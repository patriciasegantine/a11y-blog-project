export type Post = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    isFeatured?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    subtitle?: string;
};