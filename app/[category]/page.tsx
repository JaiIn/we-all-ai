"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getToolsByCategory, getCategoryById } from "@/lib/data";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import Breadcrumb from "@/components/common/Breadcrumb";
import CategoryHeader from "@/components/category/CategoryHeader";
import ToolCard from "@/components/category/ToolCard";
import CategoryNavigation from "@/components/category/CategoryNavigation";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params);
  const categoryInfo = getCategoryById(category);
  const tools = getToolsByCategory(category);

  // 유효하지 않은 카테고리인 경우 404 페이지로 이동
  if (!categoryInfo || tools.length === 0) {
    notFound();
  }

  // 무료/유료 도구 개수 계산
  const freeTools = tools.filter(tool => tool.pricing.free);
  const paidTools = tools.filter(tool => !tool.pricing.free);

  // 브레드크럼 데이터
  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "카테고리", href: "/categories" },
    { label: categoryInfo.name }
  ];

  return (
    <AnimatedBackground>
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
