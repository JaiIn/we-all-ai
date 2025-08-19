// 카테고리 타입 정의
export type Category = 
  | 'coding' 
  | 'writing' 
  | 'image' 
  | 'voice' 
  | 'video' 
  | 'music'
  | 'data'
  | 'search'
  | 'translation'
  | 'presentation'
  | 'chatbot'
  | 'education';

// 가격 정보 타입
export interface PricingInfo {
  free: boolean;
  startingPrice?: number;
  currency: string;
  plans?: {
    name: string;
    price: number;
    features: string[];
  }[];
}

// AI 도구 정보 타입
export interface AiTool {
  id: string;
  name: string;
  description: string;
  shortDescription: string; // 카드에 표시할 짧은 설명
  category: Category;
  url: string;
  pricing: PricingInfo;
  features: string[];
  tags: string[];
  logo?: string;
  screenshots?: string[];
  rating?: number;
  reviewCount?: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  lastUpdated?: string;
}

// 카테고리 정보 타입
export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  color: string;
  toolCount?: number;
}

// 검색 필터 타입
export interface SearchFilters {
  category?: Category;
  pricing?: 'free' | 'paid' | 'freemium';
  features?: string[];
  tags?: string[];
  rating?: number;
}

// 정렬 옵션 타입
export type SortOption = 'name' | 'popularity' | 'rating' | 'price' | 'recent';

// 검색 결과 타입
export interface SearchResult {
  tools: AiTool[];
  totalCount: number;
  filters: SearchFilters;
  sortBy: SortOption;
}

// 통계 정보 타입
export interface SiteStats {
  totalTools: number;
  totalCategories: number;
  popularCategories: {
    category: Category;
    count: number;
  }[];
}