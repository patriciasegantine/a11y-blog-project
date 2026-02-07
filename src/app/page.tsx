"use client";

import FeaturedPost from "@/components/sections/FeaturedPost";
import CardPost from "@/components/ui/CardPost";
import {usePosts} from "@/contexts/PostsContext";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";

export default function Home() {
    const {posts, getFeaturedPost, loading, error} = usePosts();
    const featuredPost = getFeaturedPost();
    const regularPosts = posts.filter(post => !post.isFeatured);

    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="max-w-6xl mx-auto px-4 space-y-8">
                {loading && <Loading/>}

                {error && <Error error={error}/>}

                {!loading && !error && posts.length === 0 && (
                    <div className="py-8">
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            no posts found. Please check back later or try refreshing the page.
                        </p>
                    </div>
                )}

                {!loading && !error && featuredPost && (
                    <FeaturedPost post={featuredPost}/>
                )}

                {!loading && !error && regularPosts.map((post) => (
                    <CardPost key={post?.id} post={post}/>
                ))}
            </div>
        </div>
    );
}


