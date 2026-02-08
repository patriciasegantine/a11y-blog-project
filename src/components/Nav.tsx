"use client";

import {usePathname} from "next/navigation";
import {NavigationLabel, NavigationPath, NavLink} from "@/types/navigation";

export default function Nav() {
    const pathname = usePathname();
    const navLinks: NavLink[] = [
        {href: NavigationPath.HOME, label: NavigationLabel.HOME},
        {href: NavigationPath.ARTICLES, label: NavigationLabel.ARTICLES},
        {href: NavigationPath.ABOUT, label: NavigationLabel.ABOUT},
        {href: NavigationPath.CONTACT, label: NavigationLabel.CONTACT},
    ];

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

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
