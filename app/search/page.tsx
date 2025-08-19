import React from 'react';
import SearchPageClient from './SearchPageClient';

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