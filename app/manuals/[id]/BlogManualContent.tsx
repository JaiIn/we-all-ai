"use client";

import { useState } from 'react';
import TableOfContents from './components/TableOfContents';

// 섹션 컴포넌트들 import
import OverviewSection from './components/sections/OverviewSection';
import StrategySection from './components/sections/StrategySection';
import SEOSection from './components/sections/SEOSection';
import ContentSection from './components/sections/ContentSection';
import MediaSection from './components/sections/MediaSection';
import AnalyticsSection from './components/sections/AnalyticsSection';
import { 
  OptimizationSection, 
  MonetizationSection, 
  AutomationSection, 
  ToolsSection 
} from './components/sections/OtherSections';

const sections = [
  { id: 'overview', title: '개요', icon: '📋' },
  { id: 'strategy', title: '블로그 전략 수립', icon: '🎯' },
  { id: 'seo', title: 'SEO & 키워드 리서치', icon: '🔍' },
  { id: 'content', title: 'AI 콘텐츠 작성', icon: '✍️' },
  { id: 'media', title: '이미지 & 미디어', icon: '🖼️' },
  { id: 'optimization', title: 'SEO 최적화', icon: '🔧' },
  { id: 'analytics', title: '성과 분석', icon: '📈' },
  { id: 'monetization', title: '수익화 전략', icon: '💰' },
  { id: 'automation', title: '자동화 시스템', icon: '🤖' },
  { id: 'tools', title: '추천 도구', icon: '🛠️' },
];

export default function BlogManualContent() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'overview': return <OverviewSection />;
      case 'strategy': return <StrategySection />;
      case 'seo': return <SEOSection />;
      case 'content': return <ContentSection />;
      case 'media': return <MediaSection />;
      case 'optimization': return <OptimizationSection />;
      case 'analytics': return <AnalyticsSection />;
      case 'monetization': return <MonetizationSection />;
      case 'automation': return <AutomationSection />;
      case 'tools': return <ToolsSection />;
      default: return <OverviewSection />;
    }
  };

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <>
      {/* 전역 스타일 - 스크롤바 숨김 */}
      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50">
        {/* 모바일 헤더 */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-20 z-40">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-medium">목차</span>
          </button>
        </div>

        <div className="flex max-w-7xl mx-auto">
          {/* 사이드바 - 고정 높이 */}
          <div className={`
            fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
            w-72 lg:w-64 xl:w-72 bg-white border-r border-gray-200
            transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
            transition-transform duration-300 ease-in-out
            lg:flex lg:flex-col lg:h-screen lg:sticky lg:top-0
          `}>
            {/* 사이드바 헤더 - 고정 */}
            <div className="p-6 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">목차</h3>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 목차 - 스크롤바 숨김 */}
            <div className="flex-1 overflow-y-auto p-4 min-h-0 hide-scrollbar">
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center space-x-3 group ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg flex-shrink-0">{section.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium block truncate">{section.title}</span>
                      <span className="text-xs text-gray-400">Step {index + 1}</span>
                    </div>
                    {activeSection === section.id && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 오버레이 (모바일) */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* 메인 콘텐츠 - 더 넓고 깔끔하게 */}
          <div className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
              {/* 섹션 헤더 - 간소화 */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{sections.find(s => s.id === activeSection)?.icon}</span>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {sections.find(s => s.id === activeSection)?.title}
                  </h1>
                </div>
              </div>

              {/* 콘텐츠 영역 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[800px]">
                {/* 네비게이션 버튼 - 상단으로 이동 */}
                <div className="flex justify-between items-center px-8 lg:px-12 py-6 border-b border-gray-100 bg-gray-50">
                  <button
                    onClick={() => {
                      const prevIndex = Math.max(0, currentSectionIndex - 1);
                      setActiveSection(sections[prevIndex].id);
                    }}
                    disabled={currentSectionIndex === 0}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentSectionIndex === 0
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white border border-gray-200'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>이전</span>
                  </button>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Step {currentSectionIndex + 1} of {sections.length}</span>
                    <span>•</span>
                    <span>{Math.round((currentSectionIndex + 1) / sections.length * 100)}% 완료</span>
                  </div>

                  <button
                    onClick={() => {
                      const nextIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
                      setActiveSection(sections[nextIndex].id);
                    }}
                    disabled={currentSectionIndex === sections.length - 1}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentSectionIndex === sections.length - 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-white bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    <span>다음</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* 메인 콘텐츠 */}
                <div className="p-8 lg:p-12">
                  {renderSection()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
