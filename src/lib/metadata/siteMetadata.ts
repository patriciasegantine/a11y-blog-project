import type {Metadata} from "next";

export const siteMetadata: Metadata = {
    title: {
        default: "The No-Manual Life",
        template: "%s | The No-Manual Life"
    },
    description: "Figuring life out, one mistake at a time.",
    keywords: ["blog", "accessibility", "a11y", "web development", "personal blog"],
    authors: [{name: "The No-Manual Life"}],
    creator: "The No-Manual Life",
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://thenomanuallife.com",
        siteName: "The No-Manual Life",
        title: "The No-Manual Life",
        description: "Figuring life out, one mistake at a time.",
    },
    twitter: {
        card: "summary_large_image",
        title: "The No-Manual Life",
        description: "Figuring life out, one mistake at a time.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

