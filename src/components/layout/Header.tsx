import Image from "next/image";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
    return (
        <header
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-b sticky top-0 z-50 border-zinc-200 dark:border-zinc-800">
            <div className="flex justify-between items-center gap-3 px-4 py-2">
                <MobileNav/>

                <div className="flex items-center gap-3">
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
                </div>

                <div className="flex items-center gap-3" aria-label="Main navigation" role="navigation">
                    <Nav/>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}
