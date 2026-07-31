import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import AxeAccessibilityInit from "@/components/AxeAccessibilityInit";
import Footer from "@/components/layout/Footer";
import {siteMetadata} from "@/lib/metadata/siteMetadata";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>

        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(){try{var saved=localStorage.getItem("theme");var dark=saved?saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",dark);document.documentElement.classList.toggle("light",!dark)}catch(e){}})();`,
                }}
            />
        </head>

        <body className={`${inter.className} antialiased`}>
        <a
            href="#main-content"
            className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-5 focus-visible:top-5 focus-visible:z-100 focus-visible:rounded-md focus-visible:bg-(--accent) focus-visible:px-4 focus-visible:py-2 focus-visible:font-medium focus-visible:text-stone-950 focus-visible:outline-none"
        >
            Skip to content
        </a>
        <Header/>

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <main id="main-content">
                {children}
            </main>
        </div>

        <Footer/>
        <AxeAccessibilityInit/>
        </body>
        </html>
    );
}
