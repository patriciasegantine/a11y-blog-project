"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import * as Accordion from "@radix-ui/react-accordion";
import {faqItems} from "@/lib/data/faqItems";

export default function FAQ() {
    return (
        <section className="w-full max-w-4xl mx-auto py-12 px-4">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Find answers about how to contribute with posts and other common questions.
                </p>
            </div>

            <Accordion.Root className="space-y-3" type="multiple">
                {faqItems?.map((item) => (
                    <Accordion.Item
                        key={item.id}
                        value={item.id}
                        className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-600 transition"
                    >
                        <Accordion.Trigger
                            className="w-full px-6 py-4 flex items-center justify-between gap-4 bg-white dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition text-left font-medium text-zinc-900 dark:text-white group">
                            <span>{item.question}</span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="w-5 h-5 text-zinc-600 dark:text-zinc-400 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                aria-hidden="true"
                            />
                        </Accordion.Trigger>

                        <Accordion.Content
                            className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {item.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </section>
    );
}

