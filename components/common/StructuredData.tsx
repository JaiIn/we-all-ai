'use client';

import Script from 'next/script';
import { getCategories } from '@/lib/data';

export default function StructuredData() {
  const categories = getCategories();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "We All AI",
    "description": "다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교할 수 있는 종합 디렉토리",
    "url": "https://we-all-ai.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://we-all-ai.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "AI 도구 카테고리",
      "description": "12개 분야별 AI 도구 카테고리",
      "numberOfItems": categories.length,
      "itemListElement": categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "name": category.name,
          "description": category.description,
          "url": `https://we-all-ai.vercel.app/${category.id}`
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
