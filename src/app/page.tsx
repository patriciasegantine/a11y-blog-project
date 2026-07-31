import FeaturedPost from "@/components/sections/FeaturedPost";
import CardPost from "@/components/ui/CardPost";
import {db} from "@/lib/data/postsDatabase";
import PageHeader from "@/components/layout/PageHeader";

export const revalidate = 60;
export default function Home() {
    const featuredPost = db.getFeaturedPost();
    const recentsPost = db.getRecentPosts(5);

    return (
        <div className="pb-14">
            <section className="max-w-5xl pb-10 pt-8 md:pb-14 md:pt-12" aria-labelledby="home-title">
                <PageHeader
                    titleId="home-title"
                    eyebrow="Notes for an unfinished life"
                    title="There is no manual. There can still be meaning."
                    description="Notes on life, faith, technology, and everything we learn while becoming."
                />
            </section>

            {featuredPost && <FeaturedPost post={featuredPost}/>}

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
    );
}
