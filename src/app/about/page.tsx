import React from "react";
import Image from "next/image";
import ImageCreditOverlay from "@/components/ui/ImageCreditOverlay";

const About = () => {
    return (
        <div
            aria-labelledby="about-title"
            className="min-h-screen w-full bg-zinc-50 dark:bg-transparent"
        >
            <article className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <header className="space-y-4">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Updated February 2026
                    </p>
                    <h1
                        id="about-title"
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white"
                    >
                        About The No-Manual Life
                    </h1>

                    <div className="relative mt-8 h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="/assets/images/about.jpg"
                            alt="A winding path symbolizing life's journey without a manual"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            priority
                        />
                        <ImageCreditOverlay author="Leonardo IA"/>
                    </div>
                </header>

                <section className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                        <em className="text-zinc-800 dark:text-zinc-200">The No-Manual Life</em> exists because
                        adulthood doesn't come with
                        instructions.
                    </p>

                    <p>
                        At some point, we were told we'd "figure it out." That careers would
                        make sense. That relationships would settle. That confidence would
                        arrive quietly — and stay.
                    </p>

                    <p className="font-semibold text-zinc-900 dark:text-white">That's not how it went.</p>
                </section>

                <section aria-labelledby="in-between-years" className="space-y-6">
                    <h2
                        id="in-between-years"
                        className="text-3xl font-bold text-zinc-900 dark:text-white"
                    >
                        The in-between years
                    </h2>

                    <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <p>
                            This is a space for the in-between years — the ones where you're
                            functional on the outside and quietly questioning everything on the
                            inside.
                        </p>

                        <p>
                            Where progress isn't linear, certainty is rare, and most learning
                            happens through mistakes you never planned to make.
                        </p>
                    </div>
                </section>

                <section aria-labelledby="topics" className="space-y-6">
                    <h2
                        id="topics"
                        className="text-3xl font-bold text-zinc-900 dark:text-white"
                    >
                        What we talk about here
                    </h2>

                    <ul className="space-y-3 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-inside marker:text-cyan-600 dark:marker:text-cyan-500">
                        <li>Identity and timing</li>
                        <li>Work, money, and meaning</li>
                        <li>Mental health, without filters or shortcuts</li>
                        <li>The practical logistics of adult life</li>
                        <li>Growth that happens slowly, imperfectly, and out of order</li>
                    </ul>

                    <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                        Not as experts. Not as gurus. Just as people paying attention.
                    </p>
                </section>

                <section aria-labelledby="philosophy" className="space-y-6">
                    <h2
                        id="philosophy"
                        className="text-3xl font-bold text-zinc-900 dark:text-white"
                    >
                        What this space is (and isn't)
                    </h2>

                    <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <p>
                            <em className="text-zinc-800 dark:text-zinc-200">The No-Manual Life</em> isn't about fixing
                            yourself. It's about
                            understanding yourself while you're still becoming.
                        </p>

                        <p>This isn't meant to be a single-voice space.</p>

                        <p>
                            If you have something honest to share — a story, a lesson, a moment of
                            confusion or quiet clarity — you're welcome to reach out. I'd be glad
                            to make room for your experience here.
                        </p>
                    </div>
                </section>

                <footer className="pt-8 mt-12 border-t border-zinc-300 dark:border-zinc-700 space-y-4">
                    <p className="text-lg text-zinc-700 dark:text-zinc-300">
                        No instructions. No formulas.
                    </p>
                    <p className="text-xl font-bold text-zinc-900 dark:text-white">
                        Figuring life out — one mistake at a time.
                    </p>
                </footer>
            </article>
        </div>
    );
};

export default About;