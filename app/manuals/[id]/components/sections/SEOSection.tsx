export default function SEOSection() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        🔍 키워드 리서치 & SEO 전략
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">키워드가 블로그 성공의 열쇠입니다</h3>
        <p className="text-blue-700">
          올바른 키워드 선택은 블로그 트래픽의 80%를 결정합니다. 
          AI를 활용하면 경쟁사보다 훨씬 효율적으로 키워드를 발굴할 수 있습니다.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI 활용 키워드 발굴</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🤖 ChatGPT 키워드 리서치 프롬프트</h4>
        <div className="bg-white border border-gray-300 rounded p-4 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"[니치 분야]에서 블로그 포스팅할 수 있는 키워드를 다음 기준으로 50개 제안해주세요:

1. 롱테일 키워드 (3-5단어)
2. 검색 의도별 분류:
   - 정보성 (how to, what is, why)
   - 상업성 (best, review, comparison)
   - 내비게이셔널 (브랜드명, 제품명)
3. 난이도별 분류:
   - 쉬움 (경쟁 낮음)
   - 보통 (중간 경쟁)
   - 어려움 (높은 경쟁)

각 키워드에 대해 예상 검색량과 경쟁 수준을 표시해주세요."`}
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">키워드 검증 도구</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">🆓 무료 도구</h4>
          <ul className="text-green-700 space-y-2 text-sm">
            <li>• <strong>구글 키워드 플래너</strong> - 공식 검색량 데이터</li>
            <li>• <strong>Ubersuggest</strong> - 일일 3회 무료 검색</li>
            <li>• <strong>Answer The Public</strong> - 질문형 키워드</li>
            <li>• <strong>구글 트렌드</strong> - 트렌드 분석</li>
            <li>• <strong>구글 자동완성</strong> - 실시간 인기 키워드</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-3">💎 유료 도구</h4>
          <ul className="text-blue-700 space-y-2 text-sm">
            <li>• <strong>SEMrush</strong> ($99/월) - 전문 SEO 분석</li>
            <li>• <strong>Ahrefs</strong> ($99/월) - 백링크 + 키워드</li>
            <li>• <strong>KWFinder</strong> ($29/월) - 쉬운 키워드 발굴</li>
            <li>• <strong>SE Ranking</strong> ($39/월) - 순위 추적</li>
            <li>• <strong>Mangools</strong> ($29/월) - 올인원 SEO</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">키워드 우선순위 매트릭스</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">📊 키워드 스코어링 시스템</h4>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
          <p className="text-yellow-800 font-medium text-center">
            키워드 스코어 = (검색량 × 관련성 × 수익성) ÷ (경쟁 강도 × 난이도)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-700 mb-2">평가 기준 (1-5점)</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>검색량:</strong> 월 1,000이하=1, 10,000이상=5</li>
              <li>• <strong>관련성:</strong> 니치 관련도</li>
              <li>• <strong>수익성:</strong> 수익화 가능성</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-2">낮을수록 좋은 지표</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>경쟁 강도:</strong> 상위 페이지 강도</li>
              <li>• <strong>난이도:</strong> 랭킹 달성 어려움</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">검색 의도별 키워드 전략</h3>

      <div className="space-y-4 mb-8">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800 mb-2">🔍 정보성 키워드 (Informational)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-purple-700 text-sm mb-2"><strong>예시:</strong></p>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• "블로그 시작하는 방법"</li>
                <li>• "SEO란 무엇인가"</li>
                <li>• "키워드 리서치 하는법"</li>
              </ul>
            </div>
            <div>
              <p className="text-purple-700 text-sm mb-2"><strong>전략:</strong></p>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• 상세한 가이드 포스트</li>
                <li>• 단계별 튜토리얼</li>
                <li>• 내부 링크로 연결</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h4 className="font-semibold text-orange-800 mb-2">💰 상업성 키워드 (Commercial)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-orange-700 text-sm mb-2"><strong>예시:</strong></p>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• "최고의 블로그 플랫폼"</li>
                <li>• "SEO 도구 비교"</li>
                <li>• "워드프레스 테마 추천"</li>
              </ul>
            </div>
            <div>
              <p className="text-orange-700 text-sm mb-2"><strong>전략:</strong></p>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• 제품 리뷰 포스트</li>
                <li>• 비교 분석 글</li>
                <li>• 제휴 링크 포함</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">🎯 거래성 키워드 (Transactional)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-green-700 text-sm mb-2"><strong>예시:</strong></p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• "블로그 호스팅 구매"</li>
                <li>• "SEO 도구 할인"</li>
                <li>• "워드프레스 설치 서비스"</li>
              </ul>
            </div>
            <div>
              <p className="text-green-700 text-sm mb-2"><strong>전략:</strong></p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• 랜딩 페이지 최적화</li>
                <li>• 명확한 CTA 버튼</li>
                <li>• 긴급성 강조</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">경쟁사 분석 방법</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🕵️ AI 활용 경쟁사 분석 프롬프트</h4>
        <div className="bg-gray-100 border border-gray-300 rounded p-4 text-sm font-mono text-gray-700 whitespace-pre-wrap mb-4">
{`"다음 키워드 '[타겟 키워드]'의 구글 검색 결과 상위 10개 페이지를 분석하고 다음 정보를 정리해주세요:

1. 콘텐츠 형태 분석:
   - 평균 글자 수
   - 제목 패턴
   - 목차 구조
   - 이미지/미디어 사용량

2. SEO 최적화 현황:
   - 제목 태그 패턴
   - 메타 설명 스타일
   - 내부 링크 개수
   - 관련 키워드 사용

3. 차별화 포인트:
   - 부족한 정보는 무엇인가?
   - 더 나은 접근 방법은?
   - 추가할 수 있는 가치는?"`}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded">
            <div className="font-semibold text-blue-800">분석 도구</div>
            <div className="text-blue-600 text-sm mt-1">SimilarWeb, SEMrush</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded">
            <div className="font-semibold text-green-800">콘텐츠 분석</div>
            <div className="text-green-600 text-sm mt-1">글자 수, 구조, 깊이</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded">
            <div className="font-semibold text-purple-800">차별화</div>
            <div className="text-purple-600 text-sm mt-1">독창적 관점, 추가 정보</div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">롱테일 키워드 발굴 전략</h3>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-indigo-800 mb-3">🎯 왜 롱테일 키워드인가?</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">70%</div>
            <div className="text-sm text-indigo-700">전체 검색의 비율</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">3-5배</div>
            <div className="text-sm text-purple-700">높은 전환율</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">낮음</div>
            <div className="text-sm text-pink-700">경쟁 강도</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🔍 롱테일 키워드 발굴 기법</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full p-2 text-sm font-bold">1</div>
            <div>
              <h5 className="font-medium text-gray-800">구글 자동완성 활용</h5>
              <p className="text-gray-600 text-sm">메인 키워드 입력 후 나오는 추천 검색어들 수집</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 text-green-800 rounded-full p-2 text-sm font-bold">2</div>
            <div>
              <h5 className="font-medium text-gray-800">연관 검색어 분석</h5>
              <p className="text-gray-600 text-sm">검색 결과 하단의 "관련 검색어" 섹션 활용</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 text-purple-800 rounded-full p-2 text-sm font-bold">3</div>
            <div>
              <h5 className="font-medium text-gray-800">질문형 키워드</h5>
              <p className="text-gray-600 text-sm">how, what, why, when, where로 시작하는 키워드</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 text-orange-800 rounded-full p-2 text-sm font-bold">4</div>
            <div>
              <h5 className="font-medium text-gray-800">지역 + 키워드</h5>
              <p className="text-gray-600 text-sm">지역명과 결합한 로컬 SEO 키워드</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h4>
        <p className="text-yellow-700 text-sm">
          키워드 리서치는 한 번으로 끝나지 않습니다. 매월 새로운 키워드를 발굴하고, 
          기존 키워드의 성과를 분석해서 지속적으로 개선해나가세요. 
          AI 도구를 활용하면 이 과정을 10배 빠르게 할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
