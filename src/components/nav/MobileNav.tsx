"use client";

import {useEffect, useState} from "react";
import {useNavigation} from "@/hooks/useNavigation";
import MenuIcon from "@/components/icon/menu-icon";
import CloseIcon from "@/components/icon/close-icon";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const {navLinks, isActive} = useNavigation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex h-10 w-10 flex-col items-center justify-center rounded-md transition hover:bg-zinc-100 focus-ring dark:hover:bg-zinc-700"
            >
                <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
                {isOpen ? (
                    <CloseIcon className="h-5 text-zinc-900 dark:text-white"/>
                ) : (
                    <MenuIcon className="h-5 text-zinc-900 dark:text-white"/>
                )}
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav
                id="mobile-menu"
                className={`fixed bottom-0 left-0 top-[73px] z-50 w-64 transform border-r border-stone-300 bg-[#fbf8f1] transition-transform duration-300 ease-in-out dark:border-stone-700 dark:bg-[#1c1b19] ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                aria-label="Mobile navigation"
            >
                <div className="flex flex-col p-4 gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`transition rounded-md px-4 py-3 font-medium text-left ${
                                isActive(link.href)
                                    ? "bg-[var(--accent)] text-stone-950"
                                    : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
}
