import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import AxeAccessibilityInit from "@/components/AxeAccessibilityInit";
import Aside from "@/components/sections/Aside";
import Footer from "@/components/sections/Footer";
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
        <html lang="en" className={inter.variable}>

        <body className={`${inter.className} antialiased`}>
        <Header/>

        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_16rem] gap-8">
            <main id="main-content" role="main">
                {children}
            </main>
            <Aside/>
        </div>

        <Footer/>
        <AxeAccessibilityInit/>
        </body>
        </html>
    );
}
