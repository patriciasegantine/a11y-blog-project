"use client";

import FeaturedPost from "@/components/ui/FeaturedPost";
import {usePosts} from "@/contexts/PostsContext";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

export default function Home() {
    const {getFeaturedPost, loading, error} = usePosts();
    const featuredPost = getFeaturedPost();

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="max-w-6xl mx-auto px-4 space-y-8">
                {featuredPost && <FeaturedPost post={featuredPost}/>}
            </div>
        </div>
    );
}
