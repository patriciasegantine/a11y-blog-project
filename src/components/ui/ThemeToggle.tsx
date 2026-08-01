"use client";
import {useSyncExternalStore} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
    const isDark = useSyncExternalStore(
        (onStoreChange) => {
            window.addEventListener("themechange", onStoreChange);
            return () => window.removeEventListener("themechange", onStoreChange);
        },
        () => document.documentElement.classList.contains("dark"),
        () => false,
    );

    const toggle = () => {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        document.documentElement.classList.toggle("light", !next);
        localStorage.setItem("theme", next ? "dark" : "light");
        window.dispatchEvent(new Event("themechange"));
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-pressed={!!isDark}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="h-10 w-10 cursor-pointer rounded-full text-(--muted) transition hover:bg-stone-200 hover:text-foreground focus-ring dark:hover:bg-stone-800"
        >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-4" aria-hidden="true"/>
        </button>
    );
}
