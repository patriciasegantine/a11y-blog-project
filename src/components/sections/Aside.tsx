import CategoryList from "./CategoryList";

export default function Aside() {
    return (
        <aside
            className="w-full md:w-64 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg md:sticky md:top-8 md:self-start flex flex-col gap-8">
            <CategoryList categories={["Tech", "Design", "Business", "Innovation"]}/>
        </aside>
    );
}
