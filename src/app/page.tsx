import MainContent from "@/components/sections/MainContent";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-transparent rounded-md shadow">
            <div className="max-w-6xl mx-auto px-4">
                <MainContent/>
            </div>
        </div>
    );
}
