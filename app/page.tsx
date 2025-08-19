"use client";

import Link from "next/link";
import { getCategories, getPopularTools, getSiteStats } from "@/lib/data";

export default function Home() {
  const categories = getCategories();
  const popularTools = getPopularTools(6);
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

      {/* 카테고리 그리드 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          카테고리별 AI 도구 탐색
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${category.id}`}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: category.color + "20" }}
              >
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: category.color }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 인기 도구 */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            인기 AI 도구
          </h2>
          <Link
            href="/popular"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            모든 인기 도구 보기 →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                        {categories.find(c => c.id === tool.category)?.name}
                      </span>
                      {tool.pricing.free && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                          무료
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {tool.rating?.toFixed(1)}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      ({tool.reviewCount?.toLocaleString()} 리뷰)
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {tool.shortDescription}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {tool.pricing.free 
                      ? "무료" 
                      : `$${tool.pricing.startingPrice}/월부터`
                    }
                  </div>
                  <Link
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    사이트 방문
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            더 많은 AI 도구를 찾고 계신가요?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            12개 카테고리에서 {stats.totalTools}개 이상의 AI 도구를 둘러보세요
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            모든 카테고리 보기
          </Link>
        </div>
      </section>
    </div>
  );
}