import Image from "next/image";
import ImageCreditOverlay from "@/components/ui/ImageCreditOverlay";
import PageHeader from "@/components/layout/PageHeader";

export default function About() {
    return (
        <article className="pb-14 pt-8 md:pb-20 md:pt-12">
            <PageHeader
                eyebrow="About this journal"
                title="A letter about this place"
                description="An evolving journal for questions without simple answers."
            />

            <figure className="mt-8 mb-16 max-w-6xl md:mt-10 md:mb-20">
                <div className="relative aspect-32/9 overflow-hidden bg-stone-200 dark:bg-stone-800 md:mx-4 lg:mx-8">
                    <Image src="/assets/images/about.png" alt="A winding path through a quiet landscape, representing a life without a fixed manual" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority/>
                    <ImageCreditOverlay author="Leonardo IA"/>
                </div>
            </figure>

            <div className="max-w-3xl font-serif text-lg leading-8 text-stone-700 dark:text-stone-300 md:ml-12 md:text-xl md:leading-9 lg:ml-20">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-(--accent)">
                    The No-Manual Life exists because adulthood doesn&apos;t come with a manual. We grow up hearing that clarity arrives with time: that careers eventually make sense, relationships settle into place, faith stops wavering, confidence sticks around for good.
                </p>
                <p className="mt-5">
                    In practice, it rarely works that way. This is where the unfinished parts live: the questions I haven&apos;t resolved, the opinions I&apos;ve changed, the small discoveries and quiet shifts that never quite fit into a tidy story.
                </p>

                <div className="my-14 h-px w-16 bg-(--accent)" aria-hidden="true"/>

                <p>
                    For now, most of what I write about is life itself: identity, work, mental health, timing, the ordinary weight of getting through a day. Further down the line, there may be room for faith and Scripture, thoughts on technology and accessibility, or lessons picked up from building something new.
                </p>
                <p className="mt-5">
                    The topics will shift, because I do too. What stays constant is the intention behind them: to think things through honestly, and to write with some respect for whoever&apos;s reading.
                </p>

                <blockquote className="my-16 border-y border-stone-300 py-10 text-center text-3xl italic leading-snug text-stone-900 dark:border-stone-700 dark:text-stone-100 md:text-4xl">
                    &ldquo;Not writing as someone who has it figured out, but as someone paying attention.&rdquo;
                </blockquote>

                <p>
                    There&apos;s no formula here, no tidy certainty, no expert polish. Just real experience, knowledge earned the hard way, doubt, hope, mistakes, and conversation worth having.
                </p>
                <p className="mt-5">
                    If something here helps you put a name to a feeling, question an assumption, pick up something useful, or simply feel a little less alone, then it&apos;s done its job.
                </p>

                <footer className="mt-16 text-right">
                    <p className="italic text-stone-500 dark:text-stone-400">No perfect map. Keep learning.</p>
                    <p className="mt-3 text-2xl italic text-stone-900 dark:text-stone-100">Patricia</p>
                </footer>
            </div>
        </article>
    );
}
