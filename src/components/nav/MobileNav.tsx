"use client";

import {useEffect, useState} from "react";
import {useNavigation} from "@/hooks/useNavigation";
import MenuIcon from "@/components/icon/menu-icon";
import CloseIcon from "@/components/icon/close-icon";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const {navLinks, isActive, pathname} = useNavigation();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

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
                className="flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
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
                className={`fixed top-[57px] left-0 bottom-0 w-64 bg-zinc-50 dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                aria-label="Mobile navigation"
            >
                <div className="flex flex-col p-4 gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`transition rounded-md px-4 py-3 font-medium text-left ${
                                isActive(link.href)
                                    ? "text-zinc-900 dark:text-white bg-zinc-200 dark:bg-cyan-700"
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
