import type { Metadata } from "next";
import "./globals.css";
import { overpass } from "@/lib/fonts";
import Providers from "./providers";
import { SITE_CONFIG } from "@/lib/const";
import Navbar from "@/components/navbar/navbar";
import BottomNav from "@/components/navbar/bottom-nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${overpass.className} bg-fill-box text-white`}>
                <Providers>
                    <Navbar />
                    <BottomNav />

                    {children}
                </Providers>
                <Footer />
            </body>
        </html>
    );
}
