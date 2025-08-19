import { AiTool, CategoryInfo } from "@/types";
import categoriesData from "@/data/categories.json";
import toolsData from "@/data/tools.json";

// 카테고리 데이터 가져오기
export function getCategories(): CategoryInfo[] {
  return categoriesData as CategoryInfo[];
}

// 모든 AI 도구 데이터 가져오기
export function getAllTools(): AiTool[] {
  return toolsData as AiTool[];
}

// 특정 카테고리의 도구들 가져오기
export function getToolsByCategory(categoryId: string): AiTool[] {
  const tools = getAllTools();
  return tools.filter(tool => tool.category === categoryId);
}

// 인기 도구들 가져오기
export function getPopularTools(limit: number = 6): AiTool[] {
  const tools = getAllTools();
  return tools
    .filter(tool => tool.isPopular)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

// 추천 도구들 가져오기
export function getFeaturedTools(limit: number = 4): AiTool[] {
  const tools = getAllTools();
  return tools
    .filter(tool => tool.isFeatured)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

// ID로 특정 도구 가져오기
export function getToolById(id: string): AiTool | undefined {
  const tools = getAllTools();
  return tools.find(tool => tool.id === id);
}

// 카테고리 정보 가져오기
export function getCategoryById(id: string): CategoryInfo | undefined {
  const categories = getCategories();
  return categories.find(category => category.id === id);
}

// 무료 도구들 가져오기
export function getFreeTools(): AiTool[] {
  const tools = getAllTools();
  return tools.filter(tool => tool.pricing.free);
}

// 유료 도구들 가져오기
export function getPaidTools(): AiTool[] {
  const tools = getAllTools();
  return tools.filter(tool => !tool.pricing.free);
}

// 최근 업데이트된 도구들 가져오기
export function getRecentlyUpdatedTools(limit: number = 5): AiTool[] {
  const tools = getAllTools();
  return tools
    .filter(tool => tool.lastUpdated)
    .sort((a, b) => {
      const dateA = new Date(a.lastUpdated!);
      const dateB = new Date(b.lastUpdated!);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, limit);
}

// 카테고리별 도구 수 통계
export function getCategoryStats(): { category: string; count: number; name: string }[] {
  const tools = getAllTools();
  const categories = getCategories();
  
  const stats = categories.map(category => {
    const count = tools.filter(tool => tool.category === category.id).length;
    return {
      category: category.id,
      name: category.name,
      count
    };
  });
  
  return stats.sort((a, b) => b.count - a.count);
}

// 전체 통계 정보
export function getSiteStats() {
  const tools = getAllTools();
  const categories = getCategories();
  
  return {
    totalTools: tools.length,
    totalCategories: categories.length,
    freeToolsCount: tools.filter(tool => tool.pricing.free).length,
    paidToolsCount: tools.filter(tool => !tool.pricing.free).length,
    averageRating: tools.reduce((sum, tool) => sum + (tool.rating || 0), 0) / tools.length,
    totalReviews: tools.reduce((sum, tool) => sum + (tool.reviewCount || 0), 0)
  };
}