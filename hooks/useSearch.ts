import { useState, useMemo } from 'react';
import { AiTool } from '@/types';
import { getAllTools, getCategories } from '@/lib/data';

export interface SearchFilters {
  category?: string;
  pricing?: 'free' | 'paid' | 'all';
  isPopular?: boolean;
  isFeatured?: boolean;
}

export interface SearchResult {
  tools: AiTool[];
  totalCount: number;
  hasMore: boolean;
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    pricing: 'all'
  });
  const [isSearching, setIsSearching] = useState(false);

  const allTools = getAllTools();
  const categories = getCategories();

  const searchResults = useMemo(() => {
    if (!query.trim() && !hasActiveFilters()) {
      return {
        tools: [],
        totalCount: 0,
        hasMore: false
      };
    }

    let filteredTools = allTools;

    // 텍스트 검색
    if (query.trim()) {
      const searchTerm = query.toLowerCase().trim();
      filteredTools = filteredTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description?.toLowerCase().includes(searchTerm) ||
        tool.shortDescription?.toLowerCase().includes(searchTerm) ||
        tool.features?.some(feature => feature.toLowerCase().includes(searchTerm)) ||
        tool.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      );
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

    // 인기 도구 필터
    if (filters.isPopular) {
      filteredTools = filteredTools.filter(tool => tool.isPopular);
    }

    // 추천 도구 필터
    if (filters.isFeatured) {
      filteredTools = filteredTools.filter(tool => tool.isFeatured);
    }

    // 관련성에 따른 정렬
    if (query.trim()) {
      filteredTools = filteredTools.sort((a, b) => {
        const aScore = calculateRelevanceScore(a, query);
        const bScore = calculateRelevanceScore(b, query);
        return bScore - aScore;
      });
    }

    return {
      tools: filteredTools,
      totalCount: filteredTools.length,
      hasMore: false
    };
  }, [query, filters, allTools]);

  function hasActiveFilters(): boolean {
    return !!(
      (filters.category && filters.category !== 'all') ||
      (filters.pricing && filters.pricing !== 'all') ||
      filters.isPopular ||
      filters.isFeatured
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

    // 짧은 설명에서 매칭
    if (tool.shortDescription?.toLowerCase().includes(searchTerm)) {
      score += 5;
    }

    // 설명에서 매칭
    if (tool.description?.toLowerCase().includes(searchTerm)) {
      score += 3;
    }

    // 기능에서 매칭
    if (tool.features?.some(feature => feature.toLowerCase().includes(searchTerm))) {
      score += 2;
    }

    // 태그에서 매칭
    if (tool.tags?.some(tag => tag.toLowerCase().includes(searchTerm))) {
      score += 2;
    }

    // 인기도 보너스
    if (tool.isPopular) score += 1;
    if (tool.isFeatured) score += 1;

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
    clearFilters();
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
