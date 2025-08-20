"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="text-center mb-16">
      {/* 검색창 */}
      <div className="max-w-3xl mx-auto mb-8">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="찾고 있는 AI 도구를 검색해보세요... (예: ChatGPT, 이미지 생성, 코딩 도구)"
            className="w-full px-8 py-6 text-lg border-2 border-blue-500 dark:border-blue-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-300 dark:bg-gray-800/50 dark:text-white backdrop-blur-sm shadow-xl"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            검색
          </button>
        </form>
      </div>

      {/* 고급 검색 링크 */}
      <Link
        href="/search"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        고급 검색 및 필터 사용하기
      </Link>
    </div>
  );
}
