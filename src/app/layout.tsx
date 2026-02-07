import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import AxeAccessibilityInit from "@/components/AxeAccessibilityInit";
import {PostsProvider} from "@/contexts/PostsContext";
import Aside from "@/components/sections/Aside";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Blog</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="antialiased">
        <PostsProvider>
            <Header/>

            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_16rem] gap-8">
                <main id="main-content" role="main">
                    {children}
                </main>
                <Aside/>
            </div>

            <Footer/>
            <AxeAccessibilityInit/>
        </PostsProvider>
        </body>
        </html>
    );
}
