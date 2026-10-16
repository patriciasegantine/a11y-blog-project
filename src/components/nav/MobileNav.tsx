"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import {useNavigation} from "@/hooks/useNavigation";
import MenuIcon from "@/components/icon/menu-icon";
import CloseIcon from "@/components/icon/close-icon";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const {navLinks, isActive} = useNavigation();

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 48rem)");
        const closeOnDesktop = () => {
            if (desktop.matches) setIsOpen(false);
        };
        desktop.addEventListener("change", closeOnDesktop);
        return () => desktop.removeEventListener("change", closeOnDesktop);
    }, []);

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <button type="button" aria-label="Open navigation menu"
                    className="flex h-10 w-10 items-center justify-center rounded-md transition hover:bg-stone-200 focus-ring dark:hover:bg-stone-800 md:hidden">
                    <MenuIcon className="h-5 text-foreground"/>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-60 bg-black/50"/>
                <Dialog.Content aria-describedby={undefined}
                    className="fixed inset-y-0 left-0 z-70 w-64 overflow-y-auto border-r border-stone-300 bg-background p-4 dark:border-stone-700">
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <Dialog.Title className="font-serif text-xl">Navigation</Dialog.Title>
                        <Dialog.Close asChild>
                            <button type="button" aria-label="Close navigation menu" className="flex h-10 w-10 items-center justify-center rounded-md focus-ring">
                                <CloseIcon className="h-5 text-foreground"/>
                            </button>
                        </Dialog.Close>
                    </div>
                    <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className={`rounded-md px-4 py-3 font-medium transition focus-ring ${isActive(link.href)
                                    ? "bg-(--accent) text-background"
                                    : "text-(--muted) hover:bg-stone-200 hover:text-foreground dark:hover:bg-stone-800"}`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
