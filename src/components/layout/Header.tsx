'use client';

import Image from "next/image";
import Nav from "@/components/nav/Nav";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "@/components/nav/MobileNav";
import Link from "next/link";

export default function Header() {

    return (
        <>
            <header
                className="w-full bg-zinc-50 dark:bg-zinc-800 border-b sticky top-0 z-50 border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto flex justify-between items-center gap-3 px-4 py-2">
                    <MobileNav/>

                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition focus-ring">
                        <Image
                            src="/assets/images/logo-dark.svg"
                            alt="The No-Manual Life"
                            width={80}
                            height={60}
                            className="h-6 md:h-8 w-auto rounded-lg hidden dark:block"
                            aria-hidden="true"
                        />
                        <Image
                            src="/assets/images/logo.svg"
                            alt="The No-Manual Life"
                            width={80}
                            height={60}
                            className="h-6 md:h-8 w-auto rounded-lg dark:hidden"
                            aria-hidden="true"
                        />
                        <h1 className="text-md md:text-xl font-bold text-zinc-900 dark:text-white">
                            The No-Manual Life
                        </h1>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Nav/>
                        <ThemeToggle/>
                    </div>
                </div>
            </header>
        </>
    );
}
