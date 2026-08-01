import Link from "next/link";
import {redirect} from "next/navigation";
import AnimatedPostsList from "@/components/sections/AnimatedPostsList";
import {db} from "@/lib/data/postsDatabase";
import {Category, categoryLabels} from "@/types/category";
import PageHeader from "@/components/layout/PageHeader";

type PostsPageProps = {
    searchParams: Promise<{ category?: string; q?: string; page?: string }>;
};

export default async function PostsPage({searchParams}: PostsPageProps) {
    const {category: requestedCategory, q: requestedQuery, page: requestedPage} = await searchParams;
    const hasRequestedFilters = requestedCategory !== undefined || requestedQuery !== undefined;

    if (hasRequestedFilters && !requestedCategory && !requestedQuery?.trim()) {
        redirect("/posts");
    }

    const allPosts = db.getAllPosts();
    const availableCategories = [...new Set(allPosts.map((post) => post.category).filter((category): category is Category => Boolean(category)))];
    const activeCategory = availableCategories.find((category) => category === requestedCategory);
    const query = requestedQuery?.trim() ?? "";
    const normalisedQuery = query.toLocaleLowerCase("en");
    const filteredPosts = allPosts.filter((post) => {
        const matchesCategory = !activeCategory || post.category === activeCategory;
        const matchesQuery = !normalisedQuery || post.title.toLocaleLowerCase("en").includes(normalisedQuery);
        return matchesCategory && matchesQuery;
    });
    const hasFilters = Boolean(activeCategory || query);
    const pageSize = 10;
    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
    const parsedPage = Number.parseInt(requestedPage ?? "1", 10);
    const currentPage = Math.min(Math.max(Number.isNaN(parsedPage) ? 1 : parsedPage, 1), totalPages);
    const posts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const pageHref = (page: number) => {
        const params = new URLSearchParams();
        if (query) params.set("q", query);
        if (activeCategory) params.set("category", activeCategory);
        if (page > 1) params.set("page", String(page));
        const search = params.toString();
        return search ? `/posts?${search}` : "/posts";
    };

    return (
        <div className="pb-14 pt-8 md:pb-20 md:pt-12">
            <PageHeader
                eyebrow="Collected writing"
                title="The journal"
                description="Reflections collected along the way, with no finished map."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-12">
                <aside aria-label="Post filters" className="border-t border-stone-300 pt-5 dark:border-stone-700 lg:order-2 lg:sticky lg:top-24 lg:self-start">
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <h2 className="font-serif text-xl text-stone-900 dark:text-stone-100">Find writing</h2>
                        {hasFilters && <span className="text-xs text-(--accent)">Active</span>}
                    </div>

                    <form action="/posts" method="get" role="search" className="space-y-5">
                        <div>
                            <label htmlFor="post-search" className="mb-2 block text-xs font-medium text-stone-600 dark:text-stone-400">Title</label>
                            <input
                                id="post-search"
                                name="q"
                                type="search"
                                defaultValue={query}
                                placeholder="Search titles…"
                                className="min-h-10 w-full border-0 border-b border-stone-400 bg-transparent px-0 py-2 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-0 focus:border-(--accent) dark:border-stone-600 dark:text-stone-100 dark:placeholder:text-stone-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="post-category" className="mb-2 block text-xs font-medium text-stone-600 dark:text-stone-400">Subject</label>
                            <select
                                id="post-category"
                                name="category"
                                defaultValue={activeCategory ?? ""}
                                className="min-h-10 w-full border-0 border-b border-stone-400 bg-background px-0 py-2 text-stone-700 focus:outline-none focus:ring-0 focus:border-(--accent) dark:border-stone-600 dark:text-stone-300"
                            >
                                <option value="">All subjects</option>
                                {availableCategories.map((category) => <option key={category} value={category}>{categoryLabels[category]}</option>)}
                            </select>
                        </div>

                        <button type="submit" className="min-h-9 w-full cursor-pointer border border-stone-400 px-4 py-1.5 text-xs font-medium text-stone-700 transition hover:border-(--accent) hover:text-(--accent) focus-ring dark:border-stone-600 dark:text-stone-300">
                            Filter
                        </button>
                    </form>

                    <div className="mt-5 space-y-3 border-t border-stone-300 pt-4 dark:border-stone-700">
                        <p className="text-sm text-stone-600 dark:text-stone-400" role="status">
                            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
                        </p>
                        {hasFilters && (
                            <Link href="/posts" className="text-sm font-medium text-(--accent) underline underline-offset-4 hover:text-(--accent) focus-ring">
                                Clear filters
                            </Link>
                        )}
                    </div>
                </aside>

                <div className="min-w-0 lg:order-1">
                    <section aria-label={activeCategory ? `${categoryLabels[activeCategory]} posts` : "All posts"}>
                        {posts.length > 0 ? (
                            <AnimatedPostsList key={`${currentPage}-${activeCategory ?? ""}-${query}`} posts={posts}/>
                        ) : (
                            <div className="py-14">
                                <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100">No writing found</h2>
                                <p className="mt-3 text-stone-600 dark:text-stone-300">Try another title or choose a different subject.</p>
                            </div>
                        )}
                    </section>

                    {totalPages > 1 && (
                        <nav aria-label="Posts pagination" className="mt-10 flex items-center justify-between">
                            <Link
                                href={pageHref(currentPage - 1)}
                                aria-disabled={currentPage === 1}
                                tabIndex={currentPage === 1 ? -1 : undefined}
                                className={`font-serif text-sm italic transition focus-ring ${currentPage === 1 ? "pointer-events-none text-stone-400 dark:text-stone-600" : "text-(--accent) hover:underline"}`}
                            >
                                <span aria-hidden="true">←</span> Previous
                            </Link>

                            <ol className="flex items-center gap-1">
                                {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
                                    <li key={page}>
                                        <Link
                                            href={pageHref(page)}
                                            aria-current={page === currentPage ? "page" : undefined}
                                            aria-label={`Page ${page}`}
                                            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition focus-ring ${page === currentPage ? "bg-(--accent) font-medium text-stone-950" : "text-stone-600 hover:text-(--accent) dark:text-stone-400"}`}
                                        >
                                            {page}
                                        </Link>
                                    </li>
                                ))}
                            </ol>

                            <Link
                                href={pageHref(currentPage + 1)}
                                aria-disabled={currentPage === totalPages}
                                tabIndex={currentPage === totalPages ? -1 : undefined}
                                className={`font-serif text-sm italic transition focus-ring ${currentPage === totalPages ? "pointer-events-none text-stone-400 dark:text-stone-600" : "text-(--accent) hover:underline"}`}
                            >
                                Next <span aria-hidden="true">→</span>
                            </Link>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
}
