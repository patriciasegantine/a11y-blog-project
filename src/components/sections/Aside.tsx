import CategoryList from "./CategoryList";
import PostsList from "./PostsList";
import {useCategories} from "@/hooks/useCategories";
import {db} from "@/lib/data/postsDatabase";

export default function Aside() {
    const {categories} = useCategories();
    const mostReadPosts = db.getMostReadPosts();

    return (
        <aside
            className="w-full md:w-64 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg md:sticky md:top-8 md:self-start flex flex-col gap-8">
            <CategoryList categories={categories}/>

            <hr className="border-zinc-300 dark:border-zinc-600"/>

            {mostReadPosts.length > 0 ? (
                <PostsList title="Most Read" posts={mostReadPosts} ariaLabelledby="aside-most-read-posts"/>
            ) : (
                <div className="py-8">
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        No posts found. Please check back later.
                    </p>
                </div>
            )}
        </aside>
    );
}
