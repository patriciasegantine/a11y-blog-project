import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/sections/Header";

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
        <html lang="en" suppressHydrationWarning>
        <body className="antialiased" suppressHydrationWarning>
        <Header />

        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_16rem] gap-8">
            <main id="main-content" role="main">
                {children}
            </main>
        </div>

        </body>
        </html>
    );
}
