"use client";

import {useNavigation} from "@/hooks/useNavigation";

export default function Nav() {
    const {navLinks, isActive} = useNavigation();

    return (
        <nav
            className="hidden md:flex gap-8"
            aria-label="Main navigation">
            {
                navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`transition rounded-md px-3 py-2 font-medium ${
                            isActive(link.href)
                                ? "text-zinc-900 dark:text-white bg-zinc-200 dark:bg-cyan-700"
                                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                    >
                        {link.label}
                    </a>
                ))}
        </nav>
    );
}
