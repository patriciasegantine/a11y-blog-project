import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function PostLoading() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <article className="mx-auto px-4 py-8 max-w-3xl">
                <div className="mb-8 animate-pulse">
                    <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                </div>

                <div className="mb-8 animate-pulse">
                    <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                </div>

                <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
                </div>

                <div className="flex justify-center mt-12">
                    <LoadingSpinner/>
                </div>
            </article>
        </div>
    );
}
