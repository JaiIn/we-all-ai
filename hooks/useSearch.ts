import { useState, useMemo } from 'react';
import { AiTool } from '@/types';
import { getAllTools, getCategories } from '@/lib/data';

export interface SearchFilters {
  category?: string;
  pricing?: 'free' | 'paid' | 'all';
}

export interface SearchResult {
  tools: AiTool[];
  totalCount: number;
  hasMore: boolean;
}

export interface UseSearchProps {
  initialQuery?: string;
  initialFilters?: Partial<SearchFilters>;
}

export function useSearch({ initialQuery = '', initialFilters = {} }: UseSearchProps = {}) {
  const [query, setQuery] = useState(initialQuery);
  const [searchQuery, setSearchQuery] = useState(initialQuery); // 실제 검색에 사용되는 쿼리
  const [filters, setFilters] = useState<SearchFilters>({
    pricing: 'all',
    ...initialFilters,
  });
  const [isSearching, setIsSearching] = useState(false);

  const allTools = getAllTools();
  const categories = getCategories();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim() && !hasActiveFilters()) {
      return {
        tools: [],
        totalCount: 0,
        hasMore: false
      };
    }

    let filteredTools = allTools;

    // 텍스트 검색 - 이름과 카테고리만 적용
    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase().trim();
      const categoryNames = categories.map(cat => cat.name.toLowerCase());
      
      filteredTools = filteredTools.filter(tool => {
        // 도구 이름에서 검색
        const nameMatch = tool.name.toLowerCase().includes(searchTerm);
        
        // 카테고리 이름에서 검색
        const currentCategory = categories.find(cat => cat.id === tool.category);
        const categoryMatch = currentCategory ? currentCategory.name.toLowerCase().includes(searchTerm) : false;
        
        return nameMatch || categoryMatch;
      });
    }

    // 카테고리 필터
    if (filters.category && filters.category !== 'all') {
      filteredTools = filteredTools.filter(tool => tool.category === filters.category);
    }

    // 가격 필터
    if (filters.pricing === 'free') {
      filteredTools = filteredTools.filter(tool => tool.pricing.free);
    } else if (filters.pricing === 'paid') {
      filteredTools = filteredTools.filter(tool => !tool.pricing.free);
    }

    // 관련성에 따른 정렬
    if (searchQuery.trim()) {
      filteredTools = filteredTools.sort((a, b) => {
        const aScore = calculateRelevanceScore(a, searchQuery);
        const bScore = calculateRelevanceScore(b, searchQuery);
        return bScore - aScore;
      });
    }

    return {
      tools: filteredTools,
      totalCount: filteredTools.length,
      hasMore: false
    };
  }, [searchQuery, filters, allTools, categories]);

  function hasActiveFilters(): boolean {
    return !!(
      (filters.category && filters.category !== 'all') ||
      (filters.pricing && filters.pricing !== 'all')
    );
  }

  function calculateRelevanceScore(tool: AiTool, searchQuery: string): number {
    const searchTerm = searchQuery.toLowerCase();
    let score = 0;

    // 이름에서 매칭 (가중치 높음)
    if (tool.name.toLowerCase().includes(searchTerm)) {
      score += 10;
      if (tool.name.toLowerCase().startsWith(searchTerm)) {
        score += 5; // 시작 부분 매칭 보너스
      }
    }

    // 카테고리 이름에서 매칭
    const currentCategory = categories.find(cat => cat.id === tool.category);
    if (currentCategory && currentCategory.name.toLowerCase().includes(searchTerm)) {
      score += 8;
    }

    // 인기도 보너스 제거
    // if (tool.isPopular) score += 1;
    // if (tool.isFeatured) score += 1;

    return score;
  }

  function updateFilters(newFilters: Partial<SearchFilters>) {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }

  function clearFilters() {
    setFilters({ pricing: 'all' });
  }

  function clearSearch() {
    setQuery('');
    setSearchQuery('');
    clearFilters();
  }

  function handleSearch(newQuery: string) {
    setSearchQuery(newQuery.trim());
  }

  // 검색 제안을 위한 함수
  function getSearchSuggestions(searchQuery: string, limit: number = 5): string[] {
    if (!searchQuery.trim()) return [];

    const suggestions = new Set<string>();
    const searchTerm = searchQuery.toLowerCase();

    // 도구 이름에서 제안
    allTools.forEach(tool => {
      if (tool.name.toLowerCase().includes(searchTerm)) {
        suggestions.add(tool.name);
      }
    });

    // 카테고리에서 제안
    categories.forEach(category => {
      if (category.name.toLowerCase().includes(searchTerm)) {
        suggestions.add(category.name);
      }
    });

    return Array.from(suggestions).slice(0, limit);
  }

  return {
    query,
    setQuery,
    searchQuery,
    handleSearch,
    filters,
    updateFilters,
    clearFilters,
    clearSearch,
    searchResults,
    isSearching,
    setIsSearching,
    getSearchSuggestions,
    hasActiveFilters: hasActiveFilters(),
    categories
  };
}
