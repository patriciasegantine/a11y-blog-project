import FeaturedPost from "@/components/sections/FeaturedPost";
import CardPost from "@/components/ui/CardPost";
import {db} from "@/lib/data/postsDatabase";
import {Suspense} from "react";
import Loading from "@/components/ui/Loading";

export const revalidate = 60;
export default function Home() {
    const featuredPost = db.getFeaturedPost();
    const recentsPost = db.getRecentPosts(5);

    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="mx-auto space-y-8">
                {featuredPost && (
                    <Suspense fallback={<Loading/>}>
                        <FeaturedPost post={featuredPost}/>
                    </Suspense>
                )}

                <section className="py-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Recent Posts
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Latest reflections on identity, work, mental health, and slow growth
                        </p>
                    </div>

                    {recentsPost.length > 0 ? (
                        <div className="space-y-8">
                            {recentsPost.map((post) => (
                                <CardPost key={post.id} post={post}/>
                            ))}
                        </div>
                    ) : (
                        <div className="py-8">
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                No posts found. Please check back later.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}


