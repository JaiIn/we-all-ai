import Link from "next/link";
import { AiTool } from "@/types";

interface CategoryToolsPreviewProps {
  tools: AiTool[];
}

export default function CategoryToolsPreview({ tools }: CategoryToolsPreviewProps) {
  if (tools.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center py-4">
        곧 도구가 추가될 예정입니다
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {tools.map((tool) => (
        <div key={tool.id} className="group rounded-lg p-3 -m-3 transition-colors duration-300">
          <div className="flex items-start justify-between mb-2">
            <Link
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors cursor-pointer"
            >
              {tool.name}
            </Link>
            <div className="flex items-center space-x-1">
              {tool.pricing.free && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  무료
                </span>
              )}
              {tool.isPopular && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  인기
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {tool.shortDescription}
          </p>
          <div className="text-xs text-gray-500">
            {tool.pricing.free 
              ? "무료" 
              : `$${tool.pricing.startingPrice}/월부터`
            }
          </div>
        </div>
      ))}
    </div>
  );
}
