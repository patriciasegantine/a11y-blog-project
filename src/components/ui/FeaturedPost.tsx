import Image from "next/image";
import {Featured} from "@/types/post";
import LinkButton from "@/components/ui/LinkButton";

export default function FeaturedPost({feature}: { feature: Featured }) {
    return (
        <article
            className="overflow-hidden rounded-lg bg-white dark:bg-zinc-800 shadow border border-zinc-400 dark:border-zinc-700">
            <div className="relative h-64 w-full md:h-80 lg:h-96">
                <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority
                />
            </div>

            <div className="p-6">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {feature.title}
                </h2>
                {feature.subtitle && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {feature.subtitle}
                    </p>
                )}
                {feature.excerpt && (
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">{feature.excerpt}</p>
                )}
                <div className="flex justify-center">
                    <LinkButton href={feature.href} ariaLabel={`Learn more about: ${feature.title}`} variant="cyan">
                        Learn more
                    </LinkButton>
                </div>
            </div>
        </article>
    );
}
