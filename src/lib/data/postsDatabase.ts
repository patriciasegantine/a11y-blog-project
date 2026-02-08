import 'server-only';
import {Post} from "@/types/post";
import {Category} from "@/types/category";

const posts: Post[] = [
    {
        id: "7c9c4c9a-3c2e-4e6a-9c92-1e8c2a9a1f01",
        title: "Everyone Else Seems Ahead — What You're Not Seeing",
        date: "2026-02-08T00:00:00Z",
        subtitle: "Behind every 'overnight success' there is invisible context. How to stop comparing timelines and reconnect with your own pace.",
        imageSrc: "https://images.unsplash.com/photo-1541397436527-c5d6df584ce1?q=80&w=2000",
        imageAlt: "A man standing on a train platform wearing a tan coat and black backpack, watching a blur of a green and blue train speed past. The word 'Edward' is visible on the train window.",
        imageCredit: 'kwan fung',
        imageSource: "unsplash.com",
        isFeatured: true,
        category: Category.IDENTITY_TIME,
        tags: ["comparison", "time", "self-knowledge", "anxiety", "routine"],
        views: 3420,
        content:
            "When it feels like everyone else is 'ahead', you are almost always comparing other people's highlights with your behind-the-scenes reality. You see promotions, relationships, trips, and achievements — but not the support they had, the failed attempts, the networks, the mental health struggles, the luck, or the timing. Comparison strips away context. And when context disappears, the conclusion often becomes self-blame: 'I'm behind.' A fairer way to look at this is to ask: what am I not seeing? What assumptions am I making about other people's lives? What if my pace is being shaped by real factors — limits, resources, priorities, survival? You don't need to rush to prove your worth. You need clarity to choose the next step that actually fits your life right now. That isn't giving up. It's maturity.",
    },
    {
        id: "a2d1f7c4-5a3b-4f5c-9c7f-3a8e2c9f0b12",
        title: "I Thought I'd Be Someone Else by Now",
        date: "2026-02-07T00:00:00Z",
        subtitle:
            "When life no longer resembles the original plan, identity can be rebuilt gently — without erasing who you've already been.",
        imageSrc: "https://source.unsplash.com/1600x900/?mirror,reflection",
        imageAlt: "A reflection in a mirror, suggesting identity, change, and self-recognition",
        imageCredit: 'kwan fung',
        imageSource: "unsplash.com",
        category: Category.IDENTITY_TIME,
        tags: ["identity", "transition", "purpose", "change", "self-compassion"],
        views: 2890,
        content:
            "There is a quiet grief that appears when you realise you didn't become the person you once imagined. This isn't just about missed goals — it's about identity. A past version of you had certainties, timelines, and a strong sense of 'should'. When that collapses, it can feel like a lack of discipline, when in reality it was a lack of predictability. People change. Priorities change. Bodies change. Contexts change. Starting again doesn't have to mean a dramatic rupture; it can be a series of honest adjustments. Instead of asking 'Who should I be?', try asking 'Who am I becoming through the choices I'm making now?'. Identity isn't a finished statue — it's a process. And processes are far slower than the internet would have you believe.",
    },
    {
        id: "5f3a1d9e-9e8c-4d7a-8a22-1c6e3f4b9d45",
        title: "Feeling 'Behind' Is an Emotion — Not a Fact",
        date: "2026-02-06T00:00:00Z",
        subtitle:
            "Timeline anxiety thrives on unrealistic standards. How to replace self-pressure with clearer, fairer criteria.",
        imageSrc: "https://source.unsplash.com/1600x900/?calendar,anxiety",
        imageAlt:
            "A calendar and handwritten notes representing deadline pressure and anxiety",
        category: Category.IDENTITY_TIME,
        tags: ["anxiety", "self-esteem", "pressure", "comparison", "boundaries"],
        views: 2145,
        content:
            "'I'm behind' often sounds like a diagnosis — but it's actually a feeling. It shows up when you believe there is a single 'correct' pace for life and that you've failed to keep up. That pace, however, usually comes from inherited expectations: family, the job market, social media, friends, or an idealised version of yourself. To ground yourself, replace the question 'Am I behind?' with 'Behind compared to what, exactly?'. Behind for whom? With which resources? Under what conditions? Facts tend to have clear criteria; emotions are heavy, vague, and all-encompassing. Criteria help. Do you want financial stability? Health? Time? Relationships? When you define what genuinely matters to you, the sense of being 'behind' loses its grip — because you stop running towards goals that were never really yours.",
    },
    {
        id: "8c1e7f22-4a5d-4b9a-9d6f-3c2a8e91b233",
        title: "A Stable Job Shouldn't Cost You Your Mental Health",
        date: "2026-02-05T00:00:00Z",
        subtitle:
            "Stability should not require suffering. Practical boundaries for protecting energy without romanticising burnout.",
        imageSrc: "https://source.unsplash.com/1600x900/?work,burnout",
        imageAlt:
            "An exhausted person in a work environment, symbolising burnout",
        category: Category.WORK_MONEY_MEANING,
        tags: ["work", "burnout", "boundaries", "mental-health", "stability"],
        views: 3210,
        content:
            "Many people accept almost any condition because 'at least it's a job'. And yes — bills require realism. But treating suffering as the unavoidable cost of stability creates a dangerous cycle. Sleep is traded for output, leisure for urgency, the body for productivity. Boundaries work best when they are specific and repeatable: defined working hours, realistic capacity, clear priorities, documented requests, and written agreements. It also helps to name what drains you — endless meetings, artificial urgency, ever-expanding scope. You may not be able to change everything at once, but you can stop blaming yourself for failing to meet infinite demands. Healthy stability isn't perfection; it's sustainability.",
    },
    {
        id: "2b7d9f4e-3c6a-4f88-9a31-6e2c9d8a41ef",
        title: "When Work Pays the Bills but Drains the Life Out of You",
        date: "2026-02-04T00:00:00Z",
        subtitle:
            "If your job sustains you financially but empties you emotionally, small shifts can help restore a sense of agency.",
        imageSrc: "https://source.unsplash.com/1600x900/?office,night",
        imageAlt:
            "An office at night with lights on, suggesting exhaustion and routine",
        category: Category.WORK_MONEY_MEANING,
        tags: ["work", "meaning", "routine", "energy", "balance"],
        views: 1876,
        content:
            "Not everyone can quit everything and 'follow their dream'. And not everyone needs to. Sometimes the shift is quieter: reclaiming agency. Meaning isn't always a grand purpose — it's the feeling that your time belongs to you. This can look like renegotiating deliverables, releasing guilt when you say no, or creating small zones of autonomy: an hour without screens, a realistic hobby, healthcare, a course that restores curiosity. It also means separating your worth from your performance. A job can pay the bills without defining who you are. When you stop demanding passion from work as a moral obligation, you make room to build meaning elsewhere — without burning yourself down.",
    },
    {
        id: "9a4e2d6c-1f5b-4b3a-8c92-7e6d4a1f0021",
        title: "I Didn't Dream of a Career — I Wanted Stability",
        date: "2026-02-03T00:00:00Z",
        subtitle:
            "Not everyone has a calling. Wanting security is not a lack of ambition — it's a life strategy.",
        imageSrc: "https://source.unsplash.com/1600x900/?money,coffee,planning",
        imageAlt:
            "A planner, coffee, and everyday objects representing stability and realism",
        category: Category.WORK_MONEY_MEANING,
        tags: ["career", "stability", "money", "reality", "autonomy"],
        views: 2567,
        content:
            "There is cultural pressure to turn work into passion. If you don't have a 'dream job', it can feel like a personal failure. But wanting stability isn't a lack of vision — it's vision grounded in reality. For many people, stability means leaving survival mode: paying bills, having predictability, supporting family, taking care of health. The question doesn't have to be 'What is my professional purpose?'. It can be 'What level of security do I want to build, and why?'. From there, choices become lighter: a steadier job, savings, transferable skills, gradual transitions. A career's value isn't measured by glamour, but by what it allows you to sustain.",
    },
    {
        id: "6f1b8c3a-2d7e-4f9a-9e44-1a8c5d3f9b77",
        title: "Functioning Anxiety Is Still Anxiety",
        date: "2026-02-02T00:00:00Z",
        subtitle:
            "Productivity can mask distress. How to recognise anxiety disguised as efficiency and control.",
        imageSrc: "https://source.unsplash.com/1600x900/?anxiety,notes",
        imageAlt:
            "Restless hands and notes, symbolising hidden anxiety",
        category: Category.MENTAL_HEALTH,
        tags: ["anxiety", "productivity", "control", "mental-health", "self-care"],
        views: 2934,
        content:
            "'High-functioning' anxiety is deceptive because it produces results. You deliver, organise, anticipate problems, avoid mistakes. From the outside it looks like competence; on the inside it's constant tension. The body stays on alert, the mind never rests, and small errors feel like threats. Many people only notice when the cost shows up: insomnia, irritability, pain, exhaustion, panic. Naming it isn't about labels — it's about listening. A common sign is when rest triggers guilt and silence feels unbearable. Practical steps start small: reduce multitasking, leave margins in your schedule, name catastrophic thoughts, ask for help, and treat self-care as maintenance, not a reward. You don't need to break down to deserve support.",
    },
    {
        id: "3e9a5d2c-8b6f-4c7a-9a11-0d2f4e8c77aa",
        title: "You're Not Lazy — You're Exhausted",
        date: "2026-02-01T00:00:00Z",
        subtitle:
            "When energy disappears, self-criticism grows. How burnout disguises itself as a lack of discipline.",
        imageSrc: "https://source.unsplash.com/1600x900/?tired,bed",
        imageAlt:
            "A person resting, representing fatigue and recovery",
        category: Category.MENTAL_HEALTH,
        tags: ["exhaustion", "burnout", "guilt", "routine", "recovery"],
        views: 3105,
        content:
            "'I'm lazy' is often a simple explanation for a complex problem: depleted energy. Exhaustion isn't a character flaw — it's a nervous system with no reserves left. Burnout can look like procrastination, apathy, irritability, or avoidance. Discipline doesn't appear out of nowhere; it depends on rest, nutrition, support, time, and realistic expectations. A helpful start is shrinking the goal. Instead of 'change my life', try 'take one step that doesn't harm me'. Another clue: laziness usually comes with enjoyment; exhaustion comes with suffering. If you're hating yourself for not performing, that isn't motivation — it's internal abuse. Recovery requires compassion and, often, external changes: workload, environment, boundaries, and professional help.",
    },
    {
        id: "c4e8a2d9-1f6b-4c8e-9d0a-2b7e6f9a1123",
        title: "Therapy Didn't Fix Me — It Taught Me How to Listen",
        date: "2026-01-31T00:00:00Z",
        subtitle:
            "Therapy isn't about repair; it's about language, awareness, and choice.",
        imageSrc: "https://source.unsplash.com/1600x900/?therapy,conversation",
        imageAlt:
            "Two people in conversation, suggesting therapy and attentive listening",
        category: Category.MENTAL_HEALTH,
        tags: ["therapy", "self-knowledge", "emotion", "mental-health", "boundaries"],
        views: 1654,
        content:
            "Many people start therapy hoping to become someone else: more confident, more resolved, free of anxiety. What often changes instead is something quieter but deeper — the ability to listen. To the body, to patterns, to repeated stories, to what you tolerate out of fear and what you avoid out of shame. Therapy helps distinguish feelings from facts and interrupt automatic choices. Life doesn't necessarily become easier, but it becomes clearer. And clarity changes everything: you notice the cost of your habits, recognise triggers, name needs, learn how to ask — and how to refuse. 'It didn't fix me' may be the point. You were never broken. You just needed better tools to understand yourself.",
    },
    {
        id: "1b7f3e8a-5c9d-4a22-9e61-8d3a4f5c9012",
        title: "Growing Up Isn't About Confidence",
        date: "2026-01-30T00:00:00Z",
        subtitle:
            "Maturity is learning to tolerate uncertainty and discomfort without falling apart.",
        imageSrc: "https://source.unsplash.com/1600x900/?growth,forest,path",
        imageAlt:
            "A path through a forest, symbolising gradual growth",
        category: Category.SLOW_GROWTH_REAL_LIFE,
        tags: ["growth", "uncertainty", "maturity", "anxiety", "real-life"],
        views: 2341,
        content:
            "Confidence is helpful, but it isn't a prerequisite for action. Often, what's missing isn't self-belief — it's tolerance. Tolerance for the discomfort of trying without guarantees, speaking without control, changing your mind, making imperfect choices. Growing up means trading the pursuit of certainty for the ability to navigate 'maybe'. That includes accepting loss, disapproval, and an unrevealed future. The good news is that tolerance can be trained: through small steps, repetition, self-compassion, and boundaries. You don't need to feel ready to begin — you need to withstand the discomfort of beginning.",
    },
    {
        id: "9e2c6a7b-4f3d-4a8e-9b91-1c5d7f8a2234",
        title: "Learning to Say No Without Explaining Yourself",
        date: "2026-01-29T00:00:00Z",
        subtitle:
            "Over-explaining is often fear. How to set boundaries with clarity, respect, and firmness — without guilt.",
        imageSrc: "https://source.unsplash.com/1600x900/?boundaries,stop",
        imageAlt:
            "A stop sign, symbolising boundaries",
        category: Category.SLOW_GROWTH_REAL_LIFE,
        tags: ["boundaries", "assertiveness", "saying-no", "relationships", "autonomy"],
        views: 1923,
        content:
            "Many people struggle to say no not because they lack opinions, but because they fear the impact: disappointment, rejection, loss of affection. So 'no' becomes a request for permission, followed by long justifications. The problem is that over-explaining doesn't always create understanding — it often invites negotiation and guilt. A healthy no can be brief and kind: 'I won't be able to', 'Not today', 'I'd rather not'. You don't owe a thesis on your limits. The discomfort is real, but temporary. And each time you respect yourself, you teach others how to treat you. People who only like you without boundaries don't like you — they like access.",
    },
    {
        id: "4a9e8d3f-2c6b-4d1a-9f7e-5b8a2c901234",
        title: "Some Lessons Only Make Sense in Retrospect",
        date: "2026-01-28T00:00:00Z",
        subtitle:
            "Understanding often arrives late — and that isn't failure. How to look back without punishing yourself.",
        imageSrc: "https://source.unsplash.com/1600x900/?sunset,road",
        imageAlt:
            "A road at sunset, symbolising reflection and learning",
        category: Category.SLOW_GROWTH_REAL_LIFE,
        tags: ["retrospect", "learning", "self-compassion", "growth", "memory"],
        views: 1432,
        content:
            "Some lessons only become obvious once you've lived through the chapter. That isn't a lack of intelligence — it's a lack of experience. The present mind wants to rewrite the past using today's knowledge, and shame appears: 'How did I not see this?'. But your past self didn't have the same resources, awareness, therapy, emotional maturity, or support. They were doing the best they could with what they had. Looking back honestly doesn't have to be a sentence; it can be an integration. You can acknowledge mistakes without reducing yourself to them. And you can be grateful for survival — sometimes that 'bad' decision was the only one available. Retrospection isn't for punishment. It's for release.",
    },
];

/**
 * Database operations (server-only)
 */
export const db = {
    getAllPosts: () => posts,
    getPostById: (id: string) => posts.find(post => post.id === id) || null,
    getPostsByCategory: (category: Category) => posts.filter(post => post.category === category),
    getPostsByTag: (tag: string) => posts.filter(post => post.tags.includes(tag)),
    getTags: () => [...new Set(posts.flatMap(post => post.tags))].sort(),
    getFeaturedPost: () => posts.find(post => post.isFeatured),
    getRecentPosts: (limit: number = 5) => posts.slice(0, limit),
    getMostReadPosts: (limit: number = 5) => posts
        .filter(post => !post.isFeatured)
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, limit),
};
