"use client";

import Link from "next/link";
import { getCategories, getToolsByCategory, getSiteStats } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Home() {
  const categories = getCategories();
  const stats = getSiteStats();
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState({ hero: true, stats: false, categories: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // 섹션별 스크롤 위치 계산 - 더 빨리 트리거되도록 조정
      if (scrollY < windowHeight * 0.3) {
        setCurrentSection(0);
        setIsVisible({ hero: true, stats: false, categories: false });
      } else if (scrollY < windowHeight * 0.9) {
        setCurrentSection(1);
        setIsVisible({ hero: true, stats: true, categories: false });
      } else {
        setCurrentSection(2);
        setIsVisible({ hero: true, stats: true, categories: true });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* 배경 그라데이션 */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - 첫 번째 화면 */}
        <section className={`min-h-screen flex items-center justify-center text-center transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Find the Perfect{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Tool
              </span>{" "}
              <br />for Your Needs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교해보세요.
              <br className="hidden md:block" /> 
              코딩부터 창작까지, 당신이 필요한 AI 도구가 여기 있습니다.
            </p>

            {/* 스크롤 힌트 */}
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Stats Section - 두 번째 화면 */}
        <section className={`min-h-screen flex items-center justify-center transition-all duration-1000 delay-300 ${
          isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
              전 세계가 신뢰하는 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                AI 도구 플랫폼
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stats.totalTools}+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">AI 도구</div>
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stats.totalCategories}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">카테고리</div>
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stats.freeToolsCount}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">무료 도구</div>
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stats.totalReviews.toLocaleString()}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">리뷰</div>
                </div>
              </div>
            </div>
            
            {/* 스크롤 힌트 */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* 카테고리별 AI 도구 그리드 - 세 번째 화면 */}
        <section className={`py-20 transition-all duration-1000 delay-600 ${
          isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
            카테고리별 
            <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
              AI 도구 탐색
            </span>
          </h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const categoryTools = getToolsByCategory(category.id).slice(0, 2);
              
              return (
                <div 
                  key={category.id} 
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden h-[420px] flex flex-col hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible.categories 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    animationDelay: isVisible.categories ? `${index * 100}ms` : '0ms',
                    animation: isVisible.categories ? 'fadeInUp 0.6s ease-out forwards' : 'none'
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
                              : `${tool.pricing.startingPrice}/월부터`
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