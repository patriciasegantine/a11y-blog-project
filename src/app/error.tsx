"use client";

import {useEffect} from "react";
import Error from "@/components/ui/Error";

/**
 * Global Error Boundary
 * Catches errors from the entire application and provides recovery option
 */

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global error:", error);
    }, [error]);

    return (
        <html>
        <body>
        <div className="container mx-auto px-4 py-8">
            <Error error={error.message || "Something went wrong!"}/>
            <div className="mt-6 flex justify-center">
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Try again"
                >
                    Try Again
                </button>
            </div>
        </div>
        </body>
        </html>
    );
}
