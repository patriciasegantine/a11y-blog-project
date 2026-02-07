"use client";

import React from "react";
import GitHubIcon from "@/components/icon/github-icon";

export default function Footer() {
    return (
        <footer aria-label="Footer" role="contentinfo"
                className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-800 backdrop-blur">
            <div className="container mx-auto px-4 py-6 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="leading-relaxed">
                        {`© ${new Date().getFullYear()} - Developed by Patricia Segantine`}
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <p className="md:text-right">
                            This blog is an accessibility showcase.
                        </p>

                        <a
                            href="https://github.com/patriciasegantine/a11y-blog-project"
                            className="text-zinc-700 dark:text-zinc-300 hover:text-cyan-900 dark:hover:text-cyan-600 transition flex items-center gap-2"
                            aria-label="Go to GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
