'use client';

import Image from "next/image";
import Nav from "@/components/nav/Nav";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "@/components/nav/MobileNav";
import Link from "next/link";
import AccessibilityButton from "@/components/ui/AccessibilityButton";

export default function Header() {
  
  return (<header
      className="sticky top-0 z-50 w-full border-b border-stone-300 bg-[#fbf8f1]/95 backdrop-blur dark:border-stone-700 dark:bg-[#1c1b19]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-10">
        <MobileNav/>
        
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition focus-ring">
          <Image
            src="/assets/images/logo-dark.svg"
            alt="The No-Manual Life"
            width={80}
            height={60}
            className="hidden h-7 w-auto dark:block"
            aria-hidden="true"
          />
          <Image
            src="/assets/images/logo.svg"
            alt="The No-Manual Life"
            width={80}
            height={60}
            className="h-7 w-auto dark:hidden"
            aria-hidden="true"
          />
          <span className="font-serif text-lg font-normal tracking-wide text-stone-900 dark:text-stone-100 md:text-xl">
            The No-Manual Life
          </span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Nav/>
          <AccessibilityButton/>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}
