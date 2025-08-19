import Link from 'next/link';

interface SearchHeaderProps {
  query: string;
  setQuery: (query: string) => void;
  totalResults: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export default function SearchHeader({
  query,
  setQuery,
  totalResults,
  hasActiveFilters,
  onClearFilters
}: SearchHeaderProps) {
  return (
    <div className="mb-8">
      {/* 브레드크럼 */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          홈
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white font-medium">
          검색
        </span>
      </nav>

      {/* 검색 제목 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {query ? (
            <>
              '<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {query}
              </span>' 검색 결과
            </>
          ) : (
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI 도구 검색
            </span>
          )}
        </h1>
        
        {/* 결과 수 표시 */}
        {(query || hasActiveFilters) && (
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <span>
              총 <span className="font-semibold text-gray-900 dark:text-white">{totalResults}</span>개의 AI 도구를 찾았습니다
            </span>
            
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                필터 초기화
              </button>
            )}
          </div>
        )}
      </div>

      {/* 큰 검색창 */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="AI 도구를 검색해보세요... (예: ChatGPT, 이미지 생성, 코딩)"
            className="w-full px-8 py-6 text-lg border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:bg-gray-800/50 dark:text-white backdrop-blur-sm shadow-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
