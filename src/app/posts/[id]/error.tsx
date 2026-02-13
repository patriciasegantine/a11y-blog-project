"use client";

import {useEffect} from "react";
import Error from "@/components/ui/Error";
import LinkButton from "@/components/ui/LinkButton";

/**
 * Specific Error Boundary for posts page
 * Captures errors during posts loading or rendering
 */
export default function PostError({
                                      error,
                                      reset,
                                  }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log do erro para debug
        console.error("Post page error:", error);
    }, [error]);

    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="mx-auto px-4 py-8 max-w-3xl">
                <Error error={error.message || "Failed to load posts"}/>

                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="Try loading the post again"
                    >
                        Try Again
                    </button>

                    <LinkButton
                        href="/"
                        // variant="outline"
                        aria-label="Go back to homepage"
                    >
                        Back to Home
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}