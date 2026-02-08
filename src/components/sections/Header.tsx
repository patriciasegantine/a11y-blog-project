import Image from "next/image";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
    return (
        <header
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-b sticky top-0 z-50 border-zinc-200 dark:border-zinc-800"
        >
            <div className="flex justify-between items-center gap-3 px-4 py-3">
                <div className="flex items-center gap-3">
                    {/* Light mode logo */}
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Blog Logo"
                        width={100}
                        height={80}
                        className="h-10 w-auto rounded-lg dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                        src="/assets/images/logo-dark.svg"
                        alt="Blog Logo"
                        width={100}
                        height={80}
                        className="h-10 w-auto rounded-lg hidden dark:block"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
                            The No-Manual Life
                        </h1>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            Figuring life out, one mistake at a time.
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Nav/>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}
