import { getCategories } from '@/lib/data'

export default function sitemap() {
  const categories = getCategories();
  const baseUrl = 'https://we-all-ai.vercel.app';

  // 기본 페이지들
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ];

  // 카테고리 페이지들 추가
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...categoryRoutes];
}
