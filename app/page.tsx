"use client";

import Link from "next/link";
import { getCategories, getToolsByCategory, getSiteStats } from "@/lib/data";

export default function Home() {
  const categories = getCategories();
  const stats = getSiteStats();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Find the Perfect{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Tool
          </span>{" "}
          for Your Needs
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교해보세요. 
          코딩부터 창작까지, 당신이 필요한 AI 도구가 여기 있습니다.
        </p>
        
        {/* 검색바 */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="AI 도구를 검색해보세요..."
              className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            <button className="absolute right-2 top-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              검색
            </button>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.totalTools}+</div>
            <div className="text-gray-600 dark:text-gray-400">AI 도구</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.totalCategories}</div>
            <div className="text-gray-600 dark:text-gray-400">카테고리</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.freeToolsCount}</div>
            <div className="text-gray-600 dark:text-gray-400">무료 도구</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">{stats.totalReviews.toLocaleString()}</div>
            <div className="text-gray-600 dark:text-gray-400">리뷰</div>
          </div>
        </div>
      </section>

      {/* 카테고리별 AI 도구 그리드 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          카테고리별 AI 도구 탐색
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => {
            const categoryTools = getToolsByCategory(category.id).slice(0, 2);
            
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden h-[420px] flex flex-col">
                {/* 카테고리 헤더 */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: category.color + "20" }}
                    >
                      <div
                        className="w-5 h-5 rounded"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {category.description}
                  </p>
                  <Link
                    href={`/${category.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>더보기</span>
                    <span>→</span>
                  </Link>
                </div>

                {/* 도구 목록 */}
                <div className="p-6 space-y-4 flex-1">
                  {categoryTools.length > 0 ? (
                    categoryTools.map((tool) => (
                      <div key={tool.id} className="group">
                        <div className="flex items-start justify-between mb-2">
                          <Link
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            {tool.name}
                          </Link>
                          <div className="flex items-center space-x-1">
                            {tool.pricing.free && (
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                                무료
                              </span>
                            )}
                            {tool.isPopular && (
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                                인기
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                          {tool.shortDescription}
                        </p>
                        <div className="text-xs text-gray-500">
                          {tool.pricing.free 
                            ? "무료" 
                            : `$${tool.pricing.startingPrice}/월부터`
                          }
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-4">
                      곧 도구가 추가될 예정입니다
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}