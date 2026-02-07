import Image from "next/image";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
    return (
        <header
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-b sticky top-0 z-50 border-zinc-200 dark:border-zinc-800"
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 ">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Blog Logo"
                        width={100}
                        height={80}
                        className="h-10 w-auto rounded-lg"
                    />
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        Blog
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <Nav/>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}
