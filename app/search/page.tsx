import React from 'react';
import { Metadata } from 'next';
import SearchPageClient from './SearchPageClient';

export const metadata: Metadata = {
  title: 'AI 도구 검색',
  description: '원하는 AI 도구를 빠르게 찾아보세요. 카테고리별 필터링과 가격 필터로 원하는 AI 도구를 쉽게 발견할 수 있습니다.',
  openGraph: {
    title: 'AI 도구 검색 | We All AI',
    description: '원하는 AI 도구를 빠르게 찾아보세요.',
  },
};

// Suspense 로딩 중 표시할 간단한 폴백 컴포넌트
const Loading = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-semibold">Loading...</h2>
      <p>검색 페이지를 불러오는 중입니다.</p>
    </div>
  </div>
);

export default function SearchPage() {
  return (
    <React.Suspense fallback={<Loading />}>
      <SearchPageClient />
    </React.Suspense>
  );
}