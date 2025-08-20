import { CategoryInfo } from "@/types";
import CategoryIcon from "@/components/common/CategoryIcon";

interface CategoryHeaderProps {
  categoryInfo: CategoryInfo;
  freeToolsCount: number;
  paidToolsCount: number;
  totalToolsCount: number;
}

export default function CategoryHeader({ 
  categoryInfo, 
  freeToolsCount, 
  paidToolsCount, 
  totalToolsCount 
}: CategoryHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl"
          style={{ backgroundColor: categoryInfo.color }}
        >
          <CategoryIcon categoryId={categoryInfo.id} />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {categoryInfo.name}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        {categoryInfo.description}
      </p>
      
      {/* 통계 */}
      <div className="flex justify-center items-center space-x-8 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">
            무료 도구 {freeToolsCount}개
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-600">
            유료 도구 {paidToolsCount}개
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-gray-600">
            총 {totalToolsCount}개 도구
          </span>
        </div>
      </div>
    </div>
  );
}
