import Link from 'next/link';

interface SearchEmptyProps {
  query: string;
  hasFilters: boolean;
  onClearFilters: () => void;
}

export default function SearchEmpty({ query, hasFilters, onClearFilters }: SearchEmptyProps) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        {/* 빈 상태 아이콘 */}
        <div className="mb-8">
          <svg className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {query ? `'${query}'에 대한 검색 결과가 없습니다` : '검색 결과가 없습니다'}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {hasFilters 
              ? '다른 필터 조건을 시도해보세요.' 
              : '다른 검색어를 시도하거나 철자를 확인해보세요.'
            }
          </p>
        </div>

        {/* 제안 액션 */}
        <div className="space-y-4">
          {hasFilters && (
            <button
              onClick={onClearFilters}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              모든 필터 제거
            </button>
          )}
          
          <Link
            href="/categories"
            className="block w-full px-6 py-3 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            카테고리별 둘러보기
          </Link>
        </div>
      </div>
    </div>
  );
}
