import { Metadata } from 'next';
import CategoriesPageClient from './CategoriesPageClient';

export const metadata: Metadata = {
  title: 'AI 도구 카테고리',
  description: '12개 카테고리의 AI 도구들을 탐색해보세요. 코딩, 글쓰기, 이미지 생성, 음성 합성, 영상 제작 등 다양한 분야의 AI 도구를 확인하세요.',
  openGraph: {
    title: 'AI 도구 카테고리 | We All AI',
    description: '12개 카테고리의 AI 도구들을 탐색해보세요.',
  },
};

export default function CategoriesPage() {
  return <CategoriesPageClient />;
}
