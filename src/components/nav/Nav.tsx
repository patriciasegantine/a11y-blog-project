"use client";

import {useNavigation} from "@/hooks/useNavigation";
import Link from "next/link";

export default function Nav() {
    const {navLinks, isActive} = useNavigation();

    return (
        <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main navigation">
            {
                navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`border-b-2 px-1 py-2 text-sm font-medium transition focus-ring ${
                            isActive(link.href)
                                ? "border-(--accent) text-foreground"
                                : "border-transparent text-(--muted) hover:text-(--accent)"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
        </nav>
    );
}
