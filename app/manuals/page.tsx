import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '사용 매뉴얼 - We All AI',
  description: 'AI를 활용한 다양한 분야의 실전 매뉴얼. 숏폼, 웹툰, 블로그, 게임, 브랜딩, 음악 제작까지.',
};

const manuals = [
  {
    id: 'shortform',
    title: 'AI 숏폼 생성 매뉴얼',
    description: 'AI를 활용해서 매력적인 숏폼 콘텐츠를 만드는 완벽 가이드',
    category: '콘텐츠 제작',
    difficulty: '초급',
    duration: '3-5시간',
    color: 'bg-pink-500',
    icon: '🎬'
  },
  {
    id: 'webtoon',
    title: 'AI 웹툰 제작 매뉴얼',
    description: 'AI로 나만의 웹툰을 기획부터 연재까지 완성하는 실전 가이드',
    category: '창작',
    difficulty: '중급',
    duration: '12-18시간',
    color: 'bg-purple-500',
    icon: '🎨'
  },
  {
    id: 'blog',
    title: 'AI 블로그 포스팅 매뉴얼',
    description: 'SEO 최적화된 고품질 블로그 콘텐츠 제작 및 수익화 전략',
    category: '마케팅',
    difficulty: '초급',
    duration: '2-4시간',
    color: 'bg-green-500',
    icon: '📝'
  },
  {
    id: 'game-assets',
    title: 'AI 게임 에셋 제작 매뉴얼',
    description: '상업적 품질의 게임 에셋을 제작하고 판매하는 완벽 가이드',
    category: '게임 개발',
    difficulty: '고급',
    duration: '8-12시간',
    color: 'bg-blue-500',
    icon: '🎮'
  },
  {
    id: 'branding',
    title: 'AI 로고 & 브랜딩 매뉴얼',
    description: '전문적 품질의 로고와 브랜드 아이덴티티 설계 가이드',
    category: '디자인',
    difficulty: '중급',
    duration: '6-10시간',
    color: 'bg-indigo-500',
    icon: '🏷️'
  },
  {
    id: 'music',
    title: 'AI 음악 앨범 제작 매뉴얼',
    description: '상업적 품질의 음악 앨범을 기획부터 배급까지 완성하는 가이드',
    category: '음악',
    difficulty: '고급',
    duration: '15-25시간',
    color: 'bg-red-500',
    icon: '🎵'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case '초급': return 'bg-green-100 text-green-800';
    case '중급': return 'bg-yellow-100 text-yellow-800';
    case '고급': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function ManualsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 활용 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}실전 매뉴얼
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI를 활용해서 다양한 분야에서 창작하고 수익화할 수 있는 
            <br className="hidden md:block" />
            단계별 실전 가이드를 제공합니다.
          </p>
        </div>

        {/* 매뉴얼 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manuals.map((manual) => (
            <div
              key={manual.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* 아이콘 헤더 */}
              <div className={`${manual.color} px-6 py-8 text-center`}>
                <div className="text-4xl mb-2">{manual.icon}</div>
                <div className="text-white text-sm font-medium opacity-90">
                  {manual.category}
                </div>
              </div>

              {/* 컨텐츠 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {manual.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {manual.description}
                </p>

                {/* 메타 정보 */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(manual.difficulty)}`}>
                    {manual.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⏱️ {manual.duration}
                  </span>
                </div>

                {/* 버튼 */}
                <Link
                  href={`/manuals/${manual.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-medium rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300"
                >
                  매뉴얼 보기
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              더 많은 매뉴얼이 추가됩니다
            </h2>
            <p className="text-gray-600 mb-6">
              AI 기술의 발전과 함께 새로운 분야의 매뉴얼을 지속적으로 업데이트합니다.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}