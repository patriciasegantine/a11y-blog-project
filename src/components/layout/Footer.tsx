"use client";

import React from "react";
import GitHubIcon from "@/components/icon/github-icon";

export default function Footer() {
    return (
        <footer aria-label="Footer" role="contentinfo"
                className="mt-auto border-t border-stone-300 dark:border-stone-700">
            <div className="mx-auto max-w-7xl px-5 py-10 text-sm text-stone-600 dark:text-stone-300 sm:px-8 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="leading-relaxed">
                        {`© ${new Date().getFullYear()} - Built by `}
                        <a
                            href="https://patriciasegantine.vercel.app"
                            className="underline decoration-stone-400 underline-offset-4 transition hover:text-(--accent) focus-ring dark:decoration-stone-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Patricia Segantine
                        </a>
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <p className="md:text-right">
                            Writing without a finished map.
                        </p>

                        <a
                            href="https://github.com/patriciasegantine/a11y-blog-project"
                            className="flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-(--accent) transition rounded focus-ring"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon className="h-4 w-4"/>
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
