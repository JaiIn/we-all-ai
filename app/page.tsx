"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { getCategories, getSiteStats } from "@/lib/data";
import { useEffect, useState } from "react";
import CategoryIcon from "@/components/common/CategoryIcon";
import AnimatedBackground from "@/components/common/AnimatedBackground";

// 동적 import로 성능 최적화
const SearchSection = dynamic(() => import("@/components/search/SearchSection"), {
  loading: () => (
    <div className="max-w-3xl mx-auto mb-8">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-16 rounded-2xl"></div>
    </div>
  ),
});

const StructuredData = dynamic(() => import("@/components/common/StructuredData"), {
  ssr: false,
});

export default function Home() {
  const categories = getCategories();
  const stats = getSiteStats();
  const [, setCurrentSection] = useState(0);
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
    <>
      <StructuredData />
      <AnimatedBackground>
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

            {/* 검색 섹션 */}
            <SearchSection />

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
              원하는걸 얻을 수 있는
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                 AI 도구 플랫폼
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              {/* <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stats.totalReviews.toLocaleString()}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-lg">리뷰</div>
                </div>
              </div> */}
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
        
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => {

              return (
                <div 
                  key={category.id} 
                  className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible.categories 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    animationDelay: isVisible.categories ? `${index * 100}ms` : '0ms',
                    animation: isVisible.categories ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: category.color }}
                      >
                        <CategoryIcon categoryId={category.id} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* 탐색하기 버튼 */}
          <div className="text-center">
            <Link
              href="/categories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>모든 AI 도구 탐색하기</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
      </AnimatedBackground>
    </>
  );
}
