import { AiTool } from '@/types';
import ToolCard from '@/components/category/ToolCard';

interface SearchResultsProps {
  tools: AiTool[];
}

export default function SearchResults({ tools }: SearchResultsProps) {
  return (
    <div>
      {/* 검색 결과 제목 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          검색 결과
        </h2>
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
