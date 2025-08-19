import Link from "next/link";

export default function CategoriesPageFooter() {
  return (
    <div className="text-center mt-16">
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        더 많은 AI 도구를 찾고 계신가요?
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
