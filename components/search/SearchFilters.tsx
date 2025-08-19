import type { SearchFilters } from '@/hooks/useSearch';
import { CategoryInfo } from '@/types';

interface SearchFiltersProps {
  filters: SearchFilters;
  updateFilters: (filters: Partial<SearchFilters>) => void;
  categories: CategoryInfo[];
  resultCount: number;
}

export default function SearchFilters({
  filters,
  updateFilters,
  categories,
  resultCount
}: SearchFiltersProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 sticky top-40">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        필터
      </h3>

      <div className="space-y-6">
        {/* 카테고리 필터 */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
            카테고리
          </label>
          <select
            value={filters.category || 'all'}
            onChange={(e) => updateFilters({ category: e.target.value === 'all' ? undefined : e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white text-sm"
          >
            <option value="all">모든 카테고리</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* 가격 필터 */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
            가격
          </label>
          <div className="space-y-2">
            {[
              { value: 'all', label: '전체' },
              { value: 'free', label: '무료' },
              { value: 'paid', label: '유료' }
            ].map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="pricing"
                  value={option.value}
                  checked={filters.pricing === option.value}
                  onChange={(e) => updateFilters({ pricing: e.target.value as 'free' | 'paid' | 'all' })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 특성 필터 */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
            특성
          </label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.isPopular || false}
                onChange={(e) => updateFilters({ isPopular: e.target.checked || undefined })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                인기 도구
              </span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.isFeatured || false}
                onChange={(e) => updateFilters({ isFeatured: e.target.checked || undefined })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                추천 도구
              </span>
            </label>
          </div>
        </div>

        {/* 결과 수 표시 */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <span className="font-medium text-gray-900 dark:text-white">
              {resultCount}
            </span>
            개의 결과
          </div>
        </div>
      </div>
    </div>
  );
}
