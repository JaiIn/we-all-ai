import Link from "next/link";
import { CategoryInfo } from "@/types";
import CategoryIcon from "@/components/common/CategoryIcon";
import CategoryToolsPreview from "./CategoryToolsPreview";
import { getToolsByCategory } from "@/lib/data";

interface CategoryCardProps {
  category: CategoryInfo;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const categoryTools = getToolsByCategory(category.id).slice(0, 2);
  
  return (
    <div 
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden h-[420px] flex flex-col transition-shadow duration-300"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* 카테고리 헤더 */}
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <Link href={`/${category.id}`} className="block group cursor-pointer">
          <div className="flex items-center space-x-3 mb-2">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: category.color }}
            >
              <CategoryIcon categoryId={category.id} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {category.name}
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {category.description}
          </p>
        </Link>
      </div>

      {/* 도구 목록 */}
      <div className="p-6 flex-1">
        <CategoryToolsPreview tools={categoryTools} />
      </div>
    </div>
  );
}
