import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

const manuals = {
  'shortform': {
    title: 'AI 숏폼 생성 매뉴얼',
    description: 'AI를 활용해서 매력적인 숏폼 콘텐츠를 만드는 완벽 가이드',
    category: '콘텐츠 제작',
    difficulty: '초급',
    duration: '3-5시간',
    color: 'bg-pink-500',
    icon: '🎬'
  },
  'webtoon': {
    title: 'AI 웹툰 제작 매뉴얼',
    description: 'AI로 나만의 웹툰을 기획부터 연재까지 완성하는 실전 가이드',
    category: '창작',
    difficulty: '중급',
    duration: '12-18시간',
    color: 'bg-purple-500',
    icon: '🎨'
  },
  'blog': {
    title: 'AI 블로그 포스팅 매뉴얼',
    description: 'SEO 최적화된 고품질 블로그 콘텐츠 제작 및 수익화 전략',
    category: '마케팅',
    difficulty: '초급',
    duration: '2-4시간',
    color: 'bg-green-500',
    icon: '📝'
  },
  'game-assets': {
    title: 'AI 게임 에셋 제작 매뉴얼',
    description: '상업적 품질의 게임 에셋을 제작하고 판매하는 완벽 가이드',
    category: '게임 개발',
    difficulty: '고급',
    duration: '8-12시간',
    color: 'bg-blue-500',
    icon: '🎮'
  },
  'branding': {
    title: 'AI 로고 & 브랜딩 매뉴얼',
    description: '전문적 품질의 로고와 브랜드 아이덴티티 설계 가이드',
    category: '디자인',
    difficulty: '중급',
    duration: '6-10시간',
    color: 'bg-indigo-500',
    icon: '🏷️'
  },
  'music': {
    title: 'AI 음악 앨범 제작 매뉴얼',
    description: '상업적 품질의 음악 앨범을 기획부터 배급까지 완성하는 가이드',
    category: '음악',
    difficulty: '고급',
    duration: '15-25시간',
    color: 'bg-red-500',
    icon: '🎵'
  }
};

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const manual = manuals[params.id as keyof typeof manuals];
  
  if (!manual) {
    return {
      title: '매뉴얼을 찾을 수 없습니다 - We All AI'
    };
  }

  return {
    title: `${manual.title} - We All AI`,
    description: manual.description,
  };
}

export function generateStaticParams() {
  return Object.keys(manuals).map((id) => ({
    id,
  }));
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case '초급': return 'bg-green-100 text-green-800';
    case '중급': return 'bg-yellow-100 text-yellow-800';
    case '고급': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function ManualDetailPage({ params }: Props) {
  const manual = manuals[params.id as keyof typeof manuals];

  if (!manual) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 네비게이션 */}
        <div className="mb-8">
          <Link
            href="/manuals"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            매뉴얼 목록으로 돌아가기
          </Link>
        </div>

        {/* 헤더 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className={`${manual.color} px-8 py-12 text-center text-white`}>
            <div className="text-6xl mb-4">{manual.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {manual.title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {manual.description}
            </p>
          </div>

          <div className="px-8 py-6 bg-gray-50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">카테고리:</span>
              <span className="font-medium text-gray-900">{manual.category}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(manual.difficulty)}`}>
                {manual.difficulty}
              </span>
              <span className="text-sm text-gray-600">
                ⏱️ {manual.duration}
              </span>
            </div>
          </div>
        </div>

        {/* 컨텐츠 영역 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="text-center py-20">
            <div className="text-6xl mb-8">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              매뉴얼 준비 중입니다
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              해당 매뉴얼의 상세 내용을 준비하고 있습니다. 
              곧 완성된 가이드를 만나보실 수 있습니다.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/manuals"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-medium rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 mr-4"
              >
                다른 매뉴얼 보기
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}