import Link from "next/link";
import { AiTool } from "@/types";

interface ToolCardProps {
  tool: AiTool;
  index: number;
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="p-6">
        {/* 도구 헤더 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {tool.name}
              </h3>
            </Link>
            
            {/* 태그들 */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tool.pricing.free && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  무료
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 도구 설명 */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {tool.shortDescription}
        </p>

        {/* 주요 기능 */}
        {tool.features && tool.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              주요 기능
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {tool.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 가격 정보 */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
          <div className="text-sm">
            {tool.pricing.free ? (
              <span className="text-green-600 font-medium">
                무료 사용 가능
              </span>
            ) : (
              <span className="text-gray-600">
                ${tool.pricing.startingPrice}/월부터
              </span>
            )}
          </div>
          
          <Link
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            사용하기
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
