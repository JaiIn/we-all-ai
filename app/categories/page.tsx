"use client";

import Link from "next/link";
import { getCategories, getToolsByCategory } from "@/lib/data";

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="relative">
      {/* 배경 그라데이션 */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI 도구 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              카테고리별 탐색
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            분야별로 정리된 AI 도구들을 탐색하고, 당신의 프로젝트에 맞는 완벽한 도구를 찾아보세요.
          </p>
        </div>

        {/* 카테고리별 AI 도구 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const categoryTools = getToolsByCategory(category.id).slice(0, 2);
            
            return (
              <div 
                key={category.id} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden h-[420px] flex flex-col hover:shadow-xl transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* 카테고리 헤더 */}
                <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: category.color + "20" }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg"
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
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1 hover:space-x-2 transition-all duration-300"
                  >
                    <span>더보기</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                {/* 도구 목록 */}
                <div className="p-6 space-y-4 flex-1">
                  {categoryTools.length > 0 ? (
                    categoryTools.map((tool) => (
                      <div key={tool.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-lg p-3 -m-3 transition-all duration-300">
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
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                                무료
                              </span>
                            )}
                            {tool.isPopular && (
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
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

        {/* 하단 CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            더 많은 AI 도구를 찾고 계신가요?
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
      
      {/* CSS 애니메이션 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
