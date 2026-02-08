"use client";

import CategoryList from "./CategoryList";
import RecentPosts from "./RecentPosts";
import {usePosts} from "@/contexts/PostsContext";
import {useCategories} from "@/hooks/useCategories";

export default function Aside() {
    const {getRecentPosts, loading} = usePosts();
    const {categories} = useCategories();
    const recentPosts = getRecentPosts(3);

    return (
        <aside
            className="w-full md:w-64 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg md:sticky md:top-8 md:self-start flex flex-col gap-8">
            <CategoryList categories={categories}/>

            <hr className="border-zinc-300 dark:border-zinc-600"/>

            {loading ? (
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Loading posts...</div>
            ) : (
                <RecentPosts posts={recentPosts}/>
            )}
        </aside>
    );
}
