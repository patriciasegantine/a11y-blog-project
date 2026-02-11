"use client";
import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean | null>(true);

    const toggle = () => setIsDark(!isDark);

    return (
        <button
            type="button"
            onClick={toggle}
            aria-pressed={!!isDark}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition hover:cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md px-3 py-2"
        >
            {isDark ? (
                <FontAwesomeIcon icon={faSun} className=" h-4 md:h-6 text-yellow-400" aria-hidden="true"/>
            ) : (
                <FontAwesomeIcon icon={faMoon} className="h-4 md:h-6 text-zinc-300" aria-hidden="true"/>
            )}
        </button>
    );
}