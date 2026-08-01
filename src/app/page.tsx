import FeaturedPost from "@/components/sections/FeaturedPost";
import CardPost from "@/components/ui/CardPost";
import {db} from "@/lib/data/postsDatabase";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const RECENT_POSTS_COUNT = 5;

export const revalidate = 60;
export default function Home() {
    const featuredPost = db.getFeaturedPost();
    const recentPosts = db.getRecentPosts(RECENT_POSTS_COUNT).filter((post) => !post.isFeatured);

    return (
        <div className="pb-14">
            <Reveal>
                <section className="max-w-5xl pb-10 pt-8 md:pb-14 md:pt-12" aria-labelledby="home-title">
                    <PageHeader
                        titleId="home-title"
                        eyebrow="Notes for an unfinished life"
                        title="No manual. Still, meaning."
                        description="Notes on life, faith, technology, and becoming."
                    />
                </section>
            </Reveal>

            {featuredPost && (
                <Reveal delay={0.1}>
                    <FeaturedPost post={featuredPost}/>
                </Reveal>
            )}

            <Reveal delay={0.2}>
                <section className="mt-14 max-w-6xl border-t border-stone-300 py-9 dark:border-stone-700 md:py-10" aria-labelledby="recent-posts-title">
                    <div className="mb-5 flex flex-col gap-4 border-l-2 border-(--accent) py-1 pl-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="font-serif text-sm italic text-(--accent)">Recent writing</p>
                            <h2 id="recent-posts-title" className="mt-1 font-serif text-2xl font-normal text-stone-900 dark:text-stone-100 md:text-3xl">
                                From the journal
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-stone-600 dark:text-stone-300 md:text-right">
                            Reflections, lessons, and questions worth keeping.
                        </p>
                    </div>

                    {recentPosts.map((post) => <CardPost key={post.id} post={post}/>)}

                    <div className="mt-6">
                        <Link href="/posts" className="font-serif text-lg italic underline decoration-stone-300 underline-offset-8 transition hover:text-(--accent) focus-ring text-(--accent) dark:decoration-stone-700">
                            Browse all writing →
                        </Link>
                    </div>
                </section>
            </Reveal>
        </div>
    );
}
