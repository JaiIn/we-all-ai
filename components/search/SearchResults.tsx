import { AiTool } from '@/types';
import ToolCard from '@/components/category/ToolCard';

interface SearchResultsProps {
  tools: AiTool[];
  query: string;
}

export default function SearchResults({ tools, query }: SearchResultsProps) {
  // 검색어 하이라이트 함수
  const highlightText = (text: string, searchQuery: string): string => {
    if (!searchQuery.trim()) return text;
    
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-700 px-1 rounded">$1</mark>');
  };

  return (
    <div>
      {/* 정렬 옵션 */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          검색 결과
        </h2>
        
        <select className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white text-sm">
          <option value="relevance">관련성순</option>
          <option value="name">이름순</option>
          <option value="popular">인기순</option>
          <option value="free">무료 우선</option>
        </select>
      </div>

      {/* 도구 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className="transform transition-all duration-300 hover:scale-105"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <ToolCard tool={tool} index={index} />
          </div>
        ))}
      </div>

      {/* 페이지네이션 (추후 구현) */}
      {tools.length >= 20 && (
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              이전
            </button>
            <div className="flex space-x-1">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    page === 1
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
