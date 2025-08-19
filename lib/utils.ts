import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 가격 포맷팅 함수
export function formatPrice(price: number, currency: string = "USD"): string {
  if (price === 0) return "무료";
  
  const formatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  
  return formatter.format(price);
}

// 평점을 별 표시로 변환
export function formatRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(5 - fullStars - (hasHalfStar ? 1 : 0));
}

// 리뷰 수 포맷팅
export function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

// 카테고리 이름을 한글로 변환
export function getCategoryDisplayName(categoryId: string): string {
  const categoryNames: Record<string, string> = {
    coding: "코딩 & 개발",
    writing: "글쓰기 & 문서",
    image: "이미지 & 디자인",
    voice: "음성 & 오디오",
    video: "영상 & 애니메이션",
    music: "음악 & 사운드",
    data: "데이터 & 분석",
    search: "검색 & 리서치",
    translation: "번역 & 언어",
    presentation: "프레젠테이션",
    chatbot: "챗봇 & 자동화",
    education: "교육 & 학습",
  };
  
  return categoryNames[categoryId] || categoryId;
}

// URL 슬러그 생성
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// 텍스트 자르기
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
}