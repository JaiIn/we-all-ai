import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We All AI - Find the Perfect AI Tool for Your Needs",
  description: "Discover and explore AI tools across 12 categories including coding, writing, image generation, voice synthesis, and more. Your comprehensive AI tools directory.",
  keywords: "AI tools, artificial intelligence, coding AI, writing AI, image generation, voice synthesis, video creation, music generation",
  authors: [{ name: "We All AI" }],
  openGraph: {
    title: "We All AI - AI Tools Directory",
    description: "Comprehensive directory of AI tools across all categories",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}