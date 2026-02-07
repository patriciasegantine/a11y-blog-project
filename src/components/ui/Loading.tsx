import React from 'react';
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Loading = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <LoadingSpinner/>
            </div>
        </div>
    );
};

export default Loading;