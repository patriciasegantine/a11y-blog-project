import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full">
            <LoadingSpinner/>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading content...
            </p>
        </div>
    );
}
