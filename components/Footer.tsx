import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                We All AI
              </span>
            </Link>
            <p className="text-gray-600 max-w-md">
              다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾고 비교할 수 있는 종합 디렉토리 플랫폼입니다.
            </p>
          </div>

          {/* 카테고리 링크 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              인기 카테고리
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/coding" className="text-gray-600 hover:text-blue-600 transition-colors">
                  코딩 & 개발
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  글쓰기 & 문서
                </Link>
              </li>
              <li>
                <Link href="/image" className="text-gray-600 hover:text-blue-600 transition-colors">
                  이미지 & 디자인
                </Link>
              </li>
              <li>
                <Link href="/voice" className="text-gray-600 hover:text-blue-600 transition-colors">
                  음성 & 오디오
                </Link>
              </li>
            </ul>
          </div>

          {/* 사이트 링크 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              사이트 정보
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-blue-600 transition-colors">
                  모든 카테고리
                </Link>
              </li>
              <li>
                <Link href="/manuals" className="text-gray-600 hover:text-blue-600 transition-colors">
                  사용 매뉴얼
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
                  AI 도구 검색
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2025 We All AI. All rights reserved. | AI 도구 정보는 각 서비스 제공업체에서 제공됩니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
