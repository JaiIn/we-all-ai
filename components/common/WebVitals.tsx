'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // 개발 환경에서만 콘솔에 출력
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    
    // 프로덕션에서는 분석 서비스로 전송 가능
    // 예: Google Analytics, Vercel Analytics 등
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        custom_parameter_1: metric.value,
        custom_parameter_2: metric.label,
      });
    }
  });

  return null;
}
