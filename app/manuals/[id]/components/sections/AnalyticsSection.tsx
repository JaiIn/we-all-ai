export default function AnalyticsSection() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        📈 성과 분석 & 개선
      </h2>
      
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-indigo-800 mb-3">데이터 기반 의사결정으로 블로그 성과 극대화</h3>
        <p className="text-indigo-700">
          추측이 아닌 데이터로 블로그를 개선하세요. 
          올바른 지표 분석과 지속적인 개선으로 6개월 내에 트래픽을 10배 늘릴 수 있습니다.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">핵심 지표 모니터링</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">📊 Google Analytics 4 필수 지표</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">오가닉 트래픽</div>
            <div className="text-sm text-blue-700 mb-1">검색 엔진 방문자</div>
            <div className="text-xs text-gray-600">월별, 주별 추세 분석</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">평균 체류시간</div>
            <div className="text-sm text-green-700 mb-1">콘텐츠 몰입도</div>
            <div className="text-xs text-gray-600">2분 이상이 이상적</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">바운스 율</div>
            <div className="text-sm text-purple-700 mb-1">콘텐츠 만족도</div>
            <div className="text-xs text-gray-600">50% 이하가 좋음</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">페이지뷰</div>
            <div className="text-sm text-orange-700 mb-1">전체 참여도</div>
            <div className="text-xs text-gray-600">세션당 2+ 페이지</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">🔍 Google Search Console 핵심 메트릭</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-gray-700 mb-3">검색 성과 지표:</h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                <span className="text-blue-800 font-medium">클릭수 (Clicks)</span>
                <span className="text-blue-600 text-sm">실제 방문자 수</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                <span className="text-green-800 font-medium">노출수 (Impressions)</span>
                <span className="text-green-600 text-sm">검색 결과 노출</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                <span className="text-purple-800 font-medium">클릭률 (CTR)</span>
                <span className="text-purple-600 text-sm">제목 매력도</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                <span className="text-orange-800 font-medium">평균 순위</span>
                <span className="text-orange-600 text-sm">SEO 효과 측정</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-3">이상적인 지표 범위:</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">클릭률 (CTR)</span>
                <span className="text-gray-600">3-5% 이상</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">평균 순위</span>
                <span className="text-gray-600">1-3페이지 (1-30위)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">노출 대비 클릭</span>
                <span className="text-gray-600">지속적 증가</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">인덱싱 속도</span>
                <span className="text-gray-600">24시간 이내</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">성과 개선 전략</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">🚀 트래픽 증가 전략</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-green-700 mb-3">오가닉 트래픽 개선:</h5>
              <ul className="text-green-600 text-sm space-y-2">
                <li>• 낮은 CTR 페이지 제목 수정</li>
                <li>• 메타 설명 매력도 향상</li>
                <li>• 롱테일 키워드 추가 타겟팅</li>
                <li>• 내부 링크 구조 개선</li>
                <li>• 콘텐츠 업데이트 및 확장</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-green-700 mb-3">속도 최적화:</h5>
              <ul className="text-green-600 text-sm space-y-2">
                <li>• 이미지 압축 및 WebP 사용</li>
                <li>• 불필요한 플러그인 제거</li>
                <li>• CDN 도입 고려</li>
                <li>• 캐싱 설정 최적화</li>
                <li>• Core Web Vitals 개선</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">📝 콘텐츠 품질 개선</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-blue-700 mb-3">낮은 성과 콘텐츠 진단:</h5>
              <ul className="text-blue-600 text-sm space-y-2">
                <li>• 체류시간 1분 이하: 제목-내용 불일치</li>
                <li>• 바운스 율 80% 이상: 콘텐츠 품질 문제</li>
                <li>• 높은 노출수 낮은 클릭: 제목 문제</li>
                <li>• 낮은 내부 링크 클릭: 관련성 부족</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-700 mb-3">개선 액션 플랜:</h5>
              <ul className="text-blue-600 text-sm space-y-2">
                <li>• 도입부 매력도 향상 (첫 100자)</li>
                <li>• H2 소제목 구체화 및 명확화</li>
                <li>• 시각자료 (이미지, 도표) 추가</li>
                <li>• 실용적인 팁/체크리스트 삽입</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">A/B 테스트 전략</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🧪 체계적인 A/B 테스트 방법</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-gray-700 mb-3">테스트 요소별 우선순위:</h5>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                <span className="text-red-800 font-medium">제목 (Title)</span>
                <span className="text-red-600 text-sm">가장 높은 임팩트</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                <span className="text-orange-800 font-medium">메타 설명</span>
                <span className="text-orange-600 text-sm">높은 임팩트</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                <span className="text-yellow-800 font-medium">도입부 (첫 문단)</span>
                <span className="text-yellow-600 text-sm">중간 임팩트</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="text-blue-800 font-medium">CTA 버튼</span>
                <span className="text-blue-600 text-sm">중간 임팩트</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-3">테스트 진행 방법:</h5>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-800 rounded-full p-1 text-xs font-bold">1</div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">기준선 설정</div>
                  <div className="text-gray-600">현재 성과 1-2주 측정</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 text-green-800 rounded-full p-1 text-xs font-bold">2</div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">변형 버전 제작</div>
                  <div className="text-gray-600">한 번에 하나 요소만 변경</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 text-purple-800 rounded-full p-1 text-xs font-bold">3</div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">결과 분석</div>
                  <div className="text-gray-600">최소 2-4주 데이터 수집</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">자동화된 성과 모니터링</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🤖 AI 활용 성과 분석 자동화</h4>
        <div className="space-y-4">
          <div className="bg-gray-100 border border-gray-300 rounded p-4">
            <h5 className="font-medium text-gray-800 mb-2">주간 성과 분석 프롬프트:</h5>
            <div className="bg-white rounded p-3 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"다음 데이터를 분석하고 개선점을 제안해주세요:

📊 이번 주 성과:
- 오가닉 트래픽: [X,XXX명] (전주 대비 [±X%])
- 평균 체류시간: [X분 XX초] (전주 대비 [±X%])
- 바운스율: [XX%] (전주 대비 [±X%])
- 상위 10위 키워드: [X개] (전주 대비 [±X개])
- 평균 CTR: [X.X%] (전주 대비 [±X.X%])

🎯 분석 요청사항:
1. 가장 큰 개선 기회는 무엇인가?
2. 우선순위별 액션 플랜 3가지
3. 다음 주 집중해야 할 지표
4. 잠재적 위험 요소 및 대응책

각 항목별로 구체적이고 실행 가능한 조언을 해주세요."`}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">자동화 도구 조합:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Google Analytics API</li>
                <li>• Search Console API</li>
                <li>• ChatGPT API (분석)</li>
                <li>• Zapier (워크플로우)</li>
                <li>• Google Sheets (데이터)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">알림 설정:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 트래픽 20% 이상 감소 시</li>
                <li>• CTR 1% 이상 하락 시</li>
                <li>• 새 키워드 상위 진입 시</li>
                <li>• 페이지 오류 발생 시</li>
                <li>• 주간 리포트 자동 생성</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h4>
        <p className="text-yellow-700 text-sm">
          성과 분석의 핵심은 '꾸준함'입니다. 매일 체크하지 말고 주 1회, 월 1회 정기적으로 분석하세요. 
          단기 변동에 일희일비하지 말고 장기 트렌드에 집중하는 것이 중요합니다. 
          데이터는 거짓말하지 않지만, 잘못 해석하면 잘못된 결론에 도달할 수 있으니 
          항상 '왜 이런 결과가 나왔을까?'를 생각해보세요.
        </p>
      </div>
    </div>
  );
}
