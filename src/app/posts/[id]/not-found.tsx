import LinkButton from "@/components/ui/LinkButton";

/**
 * Displayed when notFound() is called or route doesn't exist
 */

export default function PostNotFound() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="mx-auto px-4 py-16 max-w-3xl text-center">
                <h1 className="text-6xl font-bold text-zinc-900 dark:text-white mb-4">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6">
                    Post Not Found
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    The post you're looking for doesn't exist or has been removed.
                </p>
                <LinkButton
                    href="/"
                    variant="cyan"
                    ariaLabel="Go back to homepage"
                >
                    Back to Home
                </LinkButton>
            </div>
        </div>
    );
}
