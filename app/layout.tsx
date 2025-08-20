import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebVitals } from "@/components/common/WebVitals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "We All AI - AI 도구 종합 디렉토리",
    template: "%s | We All AI"
  },
  description: "다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교하세요. 코딩, 글쓰기, 이미지 생성, 음성 합성 등 12개 카테고리의 AI 도구를 탐색할 수 있습니다.",
  keywords: [
    "AI 도구", "인공지능", "ChatGPT", "Claude", "Midjourney", 
    "AI 검색", "코딩 AI", "글쓰기 AI", "이미지 생성", "음성 합성",
    "영상 제작", "음악 생성", "데이터 분석", "번역", "프레젠테이션"
  ],
  authors: [{ name: "We All AI" }],
  creator: "We All AI",
  publisher: "We All AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://we-all-ai.vercel.app",
    title: "We All AI - AI 도구 종합 디렉토리",
    description: "다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교하세요. 12개 카테고리, 수백 개의 AI 도구 정보를 제공합니다.",
    siteName: "We All AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "We All AI - AI 도구 종합 디렉토리",
    description: "다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교하세요.",
  },
  alternates: {
    canonical: "https://we-all-ai.vercel.app",
  },
  verification: {
    google: "UEDWsJYzm35NVCa-FNU0HqrKTmgZQLXoqczYFSf-40M", // Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <WebVitals />
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