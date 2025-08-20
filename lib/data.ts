import { AiTool, CategoryInfo } from "@/types";
import categoriesData from "@/data/categories.json";

// 카테고리별 도구 파일 import
import codingTools from "@/data/tools/tools_coding.json";
import writingTools from "@/data/tools/tools_writing.json";
import imageTools from "@/data/tools/tools_image.json";
import voiceTools from "@/data/tools/tools_voice.json";
import videoTools from "@/data/tools/tools_video.json";
import musicTools from "@/data/tools/tools_music.json";
import dataTools from "@/data/tools/tools_data.json";
import searchTools from "@/data/tools/tools_search.json";
import translationTools from "@/data/tools/tools_translation.json";
import presentationTools from "@/data/tools/tools_presentation.json";
import chatbotTools from "@/data/tools/tools_chatbot.json";
import educationTools from "@/data/tools/tools_education.json";

// 카테고리 데이터 가져오기
export function getCategories(): CategoryInfo[] {
  return categoriesData as CategoryInfo[];
}

// 모든 AI 도구 데이터 가져오기 (모든 카테고리 파일 합치기)
export function getAllTools(): AiTool[] {
  const allTools = [
    ...codingTools,
    ...writingTools,
    ...imageTools,
    ...voiceTools,
    ...videoTools,
    ...musicTools,
    ...dataTools,
    ...searchTools,
    ...translationTools,
    ...presentationTools,
    ...chatbotTools,
    ...educationTools
  ] as AiTool[];
  
  return allTools;
}

// 데이터 최적화 - 필요한 데이터만 로드
export async function getToolsByCategory(categoryId: string) {
  try {
    // 동적 import로 필요한 카테고리만 로드
    switch (categoryId) {
      case 'coding':
        const codingTools = await import('@/data/tools/tools_coding.json');
        return codingTools.default as AiTool[];
      case 'writing':
        const writingTools = await import('@/data/tools/tools_writing.json');
        return writingTools.default as AiTool[];
      case 'image':
        const imageTools = await import('@/data/tools/tools_image.json');
        return imageTools.default as AiTool[];
      case 'voice':
        const voiceTools = await import('@/data/tools/tools_voice.json');
        return voiceTools.default as AiTool[];
      case 'video':
        const videoTools = await import('@/data/tools/tools_video.json');
        return videoTools.default as AiTool[];
      case 'music':
        const musicTools = await import('@/data/tools/tools_music.json');
        return musicTools.default as AiTool[];
      case 'data':
        const dataTools = await import('@/data/tools/tools_data.json');
        return dataTools.default as AiTool[];
      case 'search':
        const searchTools = await import('@/data/tools/tools_search.json');
        return searchTools.default as AiTool[];
      case 'translation':
        const translationTools = await import('@/data/tools/tools_translation.json');
        return translationTools.default as AiTool[];
      case 'presentation':
        const presentationTools = await import('@/data/tools/tools_presentation.json');
        return presentationTools.default as AiTool[];
      case 'chatbot':
        const chatbotTools = await import('@/data/tools/tools_chatbot.json');
        return chatbotTools.default as AiTool[];
      case 'education':
        const educationTools = await import('@/data/tools/tools_education.json');
        return educationTools.default as AiTool[];
      default:
        return [];
    }
  } catch (error) {
    console.error(`Error loading tools for category ${categoryId}:`, error);
    return [];
  }
}

// 기존 동기 버전 (하위 호환성을 위해 유지)
export function getToolsByCategorySync(categoryId: string): AiTool[] {
  // 각 카테고리별로 직접 해당 파일에서 가져오기
  switch (categoryId) {
    case 'coding':
      return codingTools as AiTool[];
    case 'writing':
      return writingTools as AiTool[];
    case 'image':
      return imageTools as AiTool[];
    case 'voice':
      return voiceTools as AiTool[];
    case 'video':
      return videoTools as AiTool[];
    case 'music':
      return musicTools as AiTool[];
    case 'data':
      return dataTools as AiTool[];
    case 'search':
      return searchTools as AiTool[];
    case 'translation':
      return translationTools as AiTool[];
    case 'presentation':
      return presentationTools as AiTool[];
    case 'chatbot':
      return chatbotTools as AiTool[];
    case 'education':
      return educationTools as AiTool[];
    default:
      return [];
  }
}

// 계산된 인기 도구들 가져오기 (가나다순)
export function getPopularTools(limit: number = 6): AiTool[] {
  const tools = getAllTools();
  return tools
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, limit);
}

// 최근 도구들 가져오기 (추천 대신 최근 업데이트 기준)
export function getFeaturedTools(limit: number = 4): AiTool[] {
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
  
  // rating이 있는 도구들의 가상 리뷰 수 계산 (rating * 200 정도로 가정)
  const totalReviews = tools.reduce((sum, tool) => {
    return sum + (tool.rating ? Math.floor(tool.rating * 250) : 100);
  }, 0);
  
  return {
    totalTools: tools.length,
    totalCategories: categories.length,
    freeToolsCount: tools.filter(tool => tool.pricing.free).length,
    paidToolsCount: tools.filter(tool => !tool.pricing.free).length,
    averageRating: tools.reduce((sum, tool) => sum + (tool.rating || 4.0), 0) / tools.length,
    totalReviews: totalReviews
  };
}