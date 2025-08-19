"use client";

import { useSearchParams } from 'next/navigation';

import { useSearch } from '@/hooks/useSearch';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import FadeInUpAnimation from '@/components/common/FadeInUpAnimation';
import SearchHeader from '@/components/search/SearchHeader';
import SearchFilters from '@/components/search/SearchFilters';
import SearchResults from '@/components/search/SearchResults';
import SearchEmpty from '@/components/search/SearchEmpty';

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  
  // URL 파라미터에서 초기 상태 구성
  const initialQuery = searchParams?.get('q') || '';
  const initialCategory = searchParams?.get('category');
  const initialPricing = searchParams?.get('pricing');

  const initialFilters = {
    category: initialCategory || undefined,
    pricing: (initialPricing as 'free' | 'paid' | 'all') || 'all'
  };

  const {
    query,
    setQuery,
    filters,
    updateFilters,
    clearFilters,
    searchResults,
    hasActiveFilters,
    categories
  } = useSearch({ initialQuery, initialFilters });

  const hasSearchQuery = query.trim().length > 0;
  const hasResults = searchResults.tools.length > 0;
  const showResults = hasSearchQuery || hasActiveFilters;

  return (
    <AnimatedBackground>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        {/* 검색 헤더 */}
        <SearchHeader 
          query={query}
          setQuery={setQuery}
          totalResults={searchResults.totalCount}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearFilters}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 검색 필터 (사이드바) */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <SearchFilters
              filters={filters}
              updateFilters={updateFilters}
              categories={categories}
              resultCount={searchResults.totalCount}
            />
          </div>

          {/* 검색 결과 */}
          <div className="flex-1 min-w-0">
            {showResults ? (
              hasResults ? (
                <SearchResults tools={searchResults.tools} />
              ) : (
                <SearchEmpty 
                  query={query} 
                  hasFilters={hasActiveFilters}
                  onClearFilters={clearFilters}
                />
              )
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="mb-8">
                    <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      AI 도구를 검색해보세요
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      원하는 AI 도구를 찾기 위해 검색어를 입력하거나 필터를 사용해보세요.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <FadeInUpAnimation />
    </AnimatedBackground>
  );
}
