import React from 'react';

interface ErrorProps {
    error: string;
}

const Error = ({error}: ErrorProps) => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <p className="text-center text-red-600 dark:text-red-400">Error: {error}</p>
            </div>
        </div>
    );
};

export default Error;