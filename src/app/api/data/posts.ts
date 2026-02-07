import {Post} from "@/types/post";

export const posts: Post[] = [
    {
        id: "ai-guardrails",
        title: "AI guardrails: from hype to trustworthiness",
        subtitle: "Published on 6 February 2026",
        date: "6 February 2026",
        excerpt:
            "Practical, testable steps to make AI-powered systems more dependable: data quality, evaluation, security, privacy, and observability.",
        imageSrc: "/assets/images/ai-guardrails.svg",
        imageAlt:
            "Abstract illustration of a chip with connected nodes, representing guardrails and safety in AI systems",
        isFeatured: true,
    },
    {
        id: "responsible-ai-evals",
        title: "Responsible AI evaluations that actually catch regressions",
        date: "7 February 2026",
        excerpt:
            "A lightweight evaluation loop you can automate in CI: baselines, golden sets, and drift alerts without slowing teams down.",
    },
    {
        id: "privacy-first-ml",
        title: "Privacy-first ML pipelines for regulated data",
        date: "5 February 2026",
        excerpt:
            "From minimization to retention and audit trails, a practical checklist for teams handling sensitive inputs.",
    },
    {
        id: "secure-prompting",
        title: "Secure prompting patterns for tool-using agents",
        date: "2 February 2026",
        excerpt:
            "Threat models, guard clauses, and output contracts that reduce prompt-injection risk in real systems.",
    },
    {
        id: "observability-ml",
        title: "Observability for ML: metrics that matter",
        date: "31 January 2026",
        excerpt:
            "A focused set of signals for quality, cost, and reliability, plus how to make them actionable.",
    },
    {
        id: "accessibility-ai",
        title: "Designing AI features with accessibility in mind",
        date: "28 January 2026",
        excerpt:
            "Inclusive defaults, assistive tech compatibility, and content patterns that improve outcomes for everyone.",
    },
];
