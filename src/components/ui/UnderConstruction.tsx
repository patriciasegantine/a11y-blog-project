import React from 'react';

const UnderConstruction = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent">
            <div className="max-w-6xl mx-auto px-4 py-30">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    <div className="relative">
                        <svg
                            className="w-24 h-24 text-amber-500 dark:text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            />
                        </svg>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
                            Under Construction
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
                            We're working hard to bring you something amazing. This page will be available soon!
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400">
                        <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-current animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-current animate-pulse delay-150"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;

