export default function ContentSection() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        ✍️ AI 콘텐츠 작성 마스터
      </h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-green-800 mb-3">AI로 10배 빠른 고품질 콘텐츠 제작</h3>
        <p className="text-green-700">
          체계적인 프롬프트 엔지니어링으로 ChatGPT와 Claude를 활용하면 
          기존 대비 10배 빠르게 SEO 최적화된 콘텐츠를 만들 수 있습니다.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">고품질 콘텐츠 작성 시스템</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">📝 4단계 콘텐츠 제작 워크플로우</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: '개요 생성', desc: '구조와 목차 설계', color: 'blue' },
            { step: 2, title: '섹션별 작성', desc: '상세 내용 작성', color: 'green' },
            { step: 3, title: '최적화', desc: 'SEO 및 가독성 개선', color: 'purple' },
            { step: 4, title: '검토', desc: '품질 확인 및 수정', color: 'orange' }
          ].map((item) => (
            <div key={item.step} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Step {item.step}</div>
              <div className="text-sm font-semibold text-gray-800">{item.title}</div>
              <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">1단계: 콘텐츠 개요 생성</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🎯 개요 생성 마스터 프롬프트</h4>
        <div className="bg-white border border-gray-300 rounded p-4 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"다음 키워드에 대한 블로그 포스트 개요를 작성해주세요: '[타겟 키워드]'

요구사항:
1. SEO 최적화된 제목 3가지 옵션 (60자 이내)
2. 메타 설명 (150자 이내, 클릭 유도 포함)
3. 목차 구성 (H2, H3 태그 포함, 8-12개 섹션)
4. 각 섹션별 핵심 내용 요약 (3-4줄)
5. 관련 키워드 15개 (자연스럽게 배치할)
6. 권장 글자 수 (2000-4000자)
7. 대상 독자층 (초보자/중급자/전문가)
8. 검색 의도 분석 (정보성/상업성/거래성)

추가 고려사항:
- E-A-T (전문성, 권위성, 신뢰성) 강화 방안
- 사용자 경험 최적화 요소
- 내부 링크 연결 계획 (5-8개)
- 필요한 이미지/차트 유형

톤앤매너: [전문적이면서 친근한/교육적/실용적] 중 선택
니치: [당신의 니치 분야]"`}
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">2단계: 섹션별 상세 작성</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">📖 도입부 작성 프롬프트</h4>
          <div className="bg-white border border-blue-300 rounded p-4 text-sm font-mono text-blue-700 whitespace-pre-wrap">
{`"다음 주제에 대한 매력적인 도입부를 작성해주세요: '[주제]'

작성 가이드라인:
1. 독자의 고민이나 궁금증으로 시작 (문제 제기)
2. 통계나 데이터로 중요성 강조 (신뢰성)
3. 이 글에서 얻을 수 있는 구체적 혜택 제시
4. 읽기 시간 및 난이도 안내

길이: 150-200자
톤: 친근하면서 전문적
타겟: [대상 독자층]"`}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">📝 본문 섹션 작성 프롬프트</h4>
          <div className="bg-white border border-green-300 rounded p-4 text-sm font-mono text-green-700 whitespace-pre-wrap">
{`"다음 개요를 바탕으로 '[섹션 제목]' 부분을 상세히 작성해주세요:

[섹션 개요 내용]

작성 가이드라인:
1. 단락당 2-3문장으로 간결하게
2. 전문 용어 사용 시 쉬운 설명 추가
3. 구체적인 예시나 데이터 포함 (최소 2개)
4. 실행 가능한 액션 아이템 제공
5. 자연스러운 키워드 배치 (과도하지 않게)
6. 읽기 쉬운 구조 (불릿 포인트, 번호 목록 활용)

포함 요소:
- 소제목 (H3 태그용)
- 핵심 포인트 강조 박스
- 체크리스트나 팁 박스
- 다음 섹션으로의 자연스러운 연결

글자 수: 300-500자
관련 키워드: [해당 섹션 키워드 리스트]"`}
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-semibold text-purple-800 mb-3">🏁 마무리 섹션 프롬프트</h4>
          <div className="bg-white border border-purple-300 rounded p-4 text-sm font-mono text-purple-700 whitespace-pre-wrap">
{`"다음 블로그 포스트의 마무리 섹션을 작성해주세요:

주제: [포스트 주제]
핵심 내용: [주요 포인트 3-5개]

마무리 구성:
1. 핵심 내용 요약 (3-4줄)
2. 독자가 취해야 할 다음 액션 (구체적으로)
3. 추가 리소스나 관련 글 안내
4. 댓글 참여 유도 질문

톤: 격려하고 동기부여하는
길이: 100-150자"`}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">콘텐츠 유형별 템플릿</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">📋 "How-to" 가이드 템플릿</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="font-medium text-gray-800">구조:</div>
            <ul className="space-y-1 ml-4">
              <li>1. 문제 정의 및 중요성</li>
              <li>2. 필요한 준비물/사전 지식</li>
              <li>3. 단계별 상세 설명 (5-10단계)</li>
              <li>4. 주의사항 및 pro 팁</li>
              <li>5. 결과 확인 방법</li>
              <li>6. 추가 리소스</li>
            </ul>
          </div>
          <div className="mt-4 bg-gray-100 rounded p-3 text-xs font-mono text-gray-700">
            키워드 예시: "방법", "하는법", "가이드", "단계"
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">⭐ 제품 리뷰 템플릿</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="font-medium text-gray-800">구조:</div>
            <ul className="space-y-1 ml-4">
              <li>1. 제품 소개 및 첫인상</li>
              <li>2. 주요 특징 및 스펙</li>
              <li>3. 사용 경험 (장점/단점)</li>
              <li>4. 다른 제품과의 비교</li>
              <li>5. 가격 대비 가치 평가</li>
              <li>6. 추천 대상 및 최종 평점</li>
            </ul>
          </div>
          <div className="mt-4 bg-gray-100 rounded p-3 text-xs font-mono text-gray-700">
            키워드 예시: "리뷰", "후기", "추천", "비교"
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">📊 리스트 포스트 템플릿</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="font-medium text-gray-800">구조:</div>
            <ul className="space-y-1 ml-4">
              <li>1. 리스트 선정 기준 설명</li>
              <li>2. 각 항목별 상세 설명</li>
              <li>3. 장단점 비교 테이블</li>
              <li>4. 상황별 추천</li>
              <li>5. 선택 가이드</li>
              <li>6. 자주 묻는 질문 (FAQ)</li>
            </ul>
          </div>
          <div className="mt-4 bg-gray-100 rounded p-3 text-xs font-mono text-gray-700">
            키워드 예시: "최고의", "추천", "순위", "리스트"
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">❓ FAQ 포스트 템플릿</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="font-medium text-gray-800">구조:</div>
            <ul className="space-y-1 ml-4">
              <li>1. 주제 소개 및 중요성</li>
              <li>2. 질문별 상세 답변 (10-15개)</li>
              <li>3. 관련 팁 및 주의사항</li>
              <li>4. 전문가 조언</li>
              <li>5. 추가 리소스</li>
              <li>6. 더 궁금한 점 문의 안내</li>
            </ul>
          </div>
          <div className="mt-4 bg-gray-100 rounded p-3 text-xs font-mono text-gray-700">
            키워드 예시: "질문", "답변", "궁금한", "FAQ"
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI 글쓰기 품질 향상 기법</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🎯 프롬프트 엔지니어링 5원칙</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full p-2 text-sm font-bold">1</div>
            <div>
              <h5 className="font-medium text-gray-800">역할 정의 (Role)</h5>
              <p className="text-gray-600 text-sm">"당신은 [분야]에서 10년 경험을 가진 전문가입니다"</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 text-green-800 rounded-full p-2 text-sm font-bold">2</div>
            <div>
              <h5 className="font-medium text-gray-800">맥락 제공 (Context)</h5>
              <p className="text-gray-600 text-sm">"목표는 [구체적 목표]이고, 독자는 [타겟 독자]입니다"</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 text-purple-800 rounded-full p-2 text-sm font-bold">3</div>
            <div>
              <h5 className="font-medium text-gray-800">형식 지정 (Format)</h5>
              <p className="text-gray-600 text-sm">"다음 형식으로 작성해주세요: [구체적 구조]"</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 text-orange-800 rounded-full p-2 text-sm font-bold">4</div>
            <div>
              <h5 className="font-medium text-gray-800">제약 조건 (Constraints)</h5>
              <p className="text-gray-600 text-sm">"글자 수 제한, 톤앤매너, 포함/제외할 내용"</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-red-100 text-red-800 rounded-full p-2 text-sm font-bold">5</div>
            <div>
              <h5 className="font-medium text-gray-800">예시 제공 (Examples)</h5>
              <p className="text-gray-600 text-sm">"이런 스타일로 작성해주세요: [구체적 예시]"</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">품질 검증 체크리스트</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">✅ 내용 품질 체크</h4>
          <div className="space-y-2">
            {[
              "정확하고 최신 정보인가?",
              "출처가 명확한가?",
              "독창적인 인사이트가 있는가?",
              "실용적인 가치를 제공하는가?",
              "논리적 흐름이 자연스러운가?"
            ].map((item, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-green-700 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">🔍 SEO 최적화 체크</h4>
          <div className="space-y-2">
            {[
              "타겟 키워드가 자연스럽게 포함되었는가?",
              "제목에 키워드가 포함되었는가?",
              "메타 설명이 매력적인가?",
              "내부 링크가 적절히 배치되었는가?",
              "이미지 alt 텍스트가 최적화되었는가?"
            ].map((item, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-blue-700 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI 도구별 활용 전략</h3>

      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">🤖 ChatGPT 활용 전략</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">강점:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 창의적이고 자연스러운 문체</li>
                <li>• 다양한 관점과 아이디어 제시</li>
                <li>• 대화형 브레인스토밍</li>
                <li>• 빠른 초안 작성</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">최적 활용:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 콘텐츠 아이디어 발굴</li>
                <li>• 초안 작성 및 개요 구성</li>
                <li>• 창작 콘텐츠 제작</li>
                <li>• 제목 및 메타 설명 생성</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">🧠 Claude 활용 전략</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">강점:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 긴 문서 분석 및 편집</li>
                <li>• 논리적이고 체계적인 구성</li>
                <li>• 정확한 팩트 체크</li>
                <li>• 전문적인 톤앤매너</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">최적 활용:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 긴 가이드 포스트 작성</li>
                <li>• 기술적 내용 설명</li>
                <li>• 콘텐츠 편집 및 개선</li>
                <li>• 전문성이 요구되는 글</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">콘텐츠 배치 작업 시스템</h3>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-indigo-800 mb-3">⚡ 효율성 극대화 배치 시스템</h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { day: '월', task: '키워드 리서치', desc: '다음 주 분량', color: 'blue' },
            { day: '화', task: '개요 작성', desc: '5개 포스트', color: 'green' },
            { day: '수', task: '초안 작성', desc: '2-3개 완성', color: 'purple' },
            { day: '목', task: '편집 & 최적화', desc: 'SEO 체크', color: 'orange' },
            { day: '금', task: '발행 & 배포', desc: '소셜미디어 연동', color: 'pink' }
          ].map((item) => (
            <div key={item.day} className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <div className="font-bold text-gray-800">{item.day}요일</div>
              <div className="text-sm font-medium text-gray-700 mt-1">{item.task}</div>
              <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h4>
        <p className="text-yellow-700 text-sm">
          AI는 강력한 도구이지만, 인간의 창의성과 경험을 완전히 대체할 수는 없습니다. 
          AI가 생성한 콘텐츠에 개인적인 경험, 독창적인 관점, 실제 사례를 추가해서 
          차별화된 가치를 만들어보세요. 이것이 구글과 독자 모두에게 선호받는 콘텐츠의 비결입니다.
        </p>
      </div>
    </div>
  );
}
