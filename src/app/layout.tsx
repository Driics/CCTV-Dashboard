import type {Metadata} from "next";
import "./globals.css";
import {Inter as FontSans} from "next/font/google"
import React from "react";
import {cn} from "@/lib/utils";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const fontSans = FontSans({
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
})
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru" className={`scroll-smooth`}>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
        )}>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
