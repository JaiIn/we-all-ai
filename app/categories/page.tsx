"use client";

import { getCategories } from "@/lib/data";
import BackgroundGradient from "@/components/common/BackgroundGradient";
import FadeInUpAnimation from "@/components/common/FadeInUpAnimation";
import CategoriesPageHeader from "@/components/category/CategoriesPageHeader";
import CategoryCard from "@/components/category/CategoryCard";
import CategoriesPageFooter from "@/components/category/CategoriesPageFooter";

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <BackgroundGradient>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        {/* 헤더 */}
        <CategoriesPageHeader />

        {/* 카테고리별 AI 도구 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* 하단 CTA */}
        <CategoriesPageFooter />
      </div>
      
      {/* CSS 애니메이션 */}
      <FadeInUpAnimation />
    </BackgroundGradient>
  );
}
