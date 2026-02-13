interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        id: "blog-purpose",
        question: "What is the purpose of this blog?",
        answer:
            "Adult life doesn't come with a manual, so we created this space to share insights and practical advice on a wide range of topics. Our goal is to provide a helpful guide for navigating the challenges and opportunities that life throws your way.",
    },
    {
        id: "topics-covered",
        question: "What kind of topics do you write about?",
        answer:
            "We cover everything and anything that can help improve our readers' lives. This includes subjects like personal finance, career advice, health and wellness, relationships, and essential life skills, all the things you wish you'd been taught in school.",
    },
    {
        id: "who-writes",
        question: "Who writes the articles?",
        answer:
            "Our articles are written by a diverse group of contributors who share their personal experiences, professional expertise, and well-researched knowledge. We believe in offering a variety of perspectives to make our content relatable and trustworthy.",
    },
    {
        id: "professional-advice",
        question: "Is the content professional advice?",
        answer:
            "While we aim to provide accurate and helpful information, our articles are for informational and educational purposes only. They are not a substitute for professional advice. For specific issues, particularly with health or finances, we always recommend consulting a qualified professional.",
    },
    {
        id: "suggest-topic",
        question: "Can I suggest a topic for a posts?",
        answer:
            "Absolutely! We love hearing from our community. If there's a challenge you're facing or a topic you'd like us to cover, please send your suggestions via our contact form. Your feedback helps us make our content more relevant and useful.",
    },
    {
        id: "contribute",
        question: "How can I contribute to the blog?",
        answer:
            "We welcome contributions from our readers. If you have a story, a lesson learned, or advice you believe could help others, please get in touch. We have a simple review process to ensure all content aligns with our mission of helping people navigate adult life.",
    },
];
