import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryById, getToolsByCategorySync } from "@/lib/data";
import CategoryPageClient from "./CategoryPageClient";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryById(category);
  
  if (!categoryInfo) {
    return {
      title: '페이지를 찾을 수 없습니다',
    };
  }

  const tools = getToolsByCategorySync(category);
  const freeCount = tools.filter(tool => tool.pricing.free).length;
  const totalCount = tools.length;

  return {
    title: `${categoryInfo.name} AI 도구`,
    description: `${categoryInfo.description} ${totalCount}개의 ${categoryInfo.name} AI 도구 중 ${freeCount}개는 무료로 사용할 수 있습니다.`,
    openGraph: {
      title: `${categoryInfo.name} AI 도구 | We All AI`,
      description: `${categoryInfo.description} 최고의 ${categoryInfo.name} AI 도구들을 탐색해보세요.`,
      url: `https://we-all-ai.vercel.app/${category}`,
    },
    keywords: [
      `${categoryInfo.name} AI`,
      `${categoryInfo.name} 도구`,
      'AI 도구',
      '인공지능',
      ...tools.slice(0, 5).map(tool => tool.name), // 상위 5개 도구 이름
    ],
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  return <CategoryPageClient category={category} />;
}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        {/* 브레드크럼 */}
        <Breadcrumb items={breadcrumbItems} />

        {/* 카테고리 헤더 */}
        <CategoryHeader
          categoryInfo={categoryInfo}
          freeToolsCount={freeTools.length}
          paidToolsCount={paidTools.length}
          totalToolsCount={tools.length}
        />

        {/* 도구 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* 하단 네비게이션 */}
        <CategoryNavigation />
      </div>
      
      {/* CSS 애니메이션 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </AnimatedBackground>
  );
}
