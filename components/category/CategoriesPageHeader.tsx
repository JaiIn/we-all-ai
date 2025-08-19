interface CategoriesPageHeaderProps {
  title?: string;
  description?: string;
}

export default function CategoriesPageHeader({ 
  title = "AI 도구 카테고리별 탐색",
  description = "분야별로 정리된 AI 도구들을 탐색하고, 당신의 프로젝트에 맞는 완벽한 도구를 찾아보세요."
}: CategoriesPageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
