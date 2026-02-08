import {Category} from "@/types/category";

export type Post = {
    id: string;
    title: string;
    date: string;
    content: string;
    isFeatured?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    imageCredit?: string;
    imageSource?: string;
    subtitle?: string;
    category?: Category;
    tags: string[];
    views?: number;
};