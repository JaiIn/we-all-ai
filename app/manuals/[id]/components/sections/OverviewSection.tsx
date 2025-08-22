export default function OverviewSection() {
  return (
    <div className="space-y-8">
      {/* 소개 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📝 AI 블로그 포스팅 완벽 가이드
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          AI를 활용하여 SEO 최적화된 고품질 블로그 콘텐츠를 제작하고, 
          안정적인 수익을 창출하는 전략을 단계별로 학습하세요.
        </p>
      </div>

      {/* 매뉴얼 개요 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">🎯 이 매뉴얼의 목표</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">전략적 블로그 기획</h4>
                <p className="text-gray-600 text-sm">수익성 높은 니치 선정과 타겟 오디언스 분석</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">AI 콘텐츠 제작</h4>
                <p className="text-gray-600 text-sm">고품질 블로그 포스트 생성 및 편집 기법</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">SEO 최적화</h4>
                <p className="text-gray-600 text-sm">검색 엔진 상위 노출을 위한 전략과 기법</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">4</div>
              <div>
                <h4 className="font-semibold text-gray-900">수익화 전략</h4>
                <p className="text-gray-600 text-sm">다양한 수익 모델과 장기적 성장 방안</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 예상 성과 */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">📈 예상 성과</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">3개월</div>
            <div className="text-gray-900 font-medium mb-1">월 10,000 PV 달성</div>
            <div className="text-gray-600 text-sm">안정적인 트래픽 기반 구축</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">6개월</div>
            <div className="text-gray-900 font-medium mb-1">월 50만원 수익</div>
            <div className="text-gray-600 text-sm">다양한 수익 모델 결합</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">12개월</div>
            <div className="text-gray-900 font-medium mb-1">월 200만원+ 수익</div>
            <div className="text-gray-600 text-sm">자동화된 수익 시스템</div>
          </div>
        </div>
      </div>

      {/* 학습 대상 */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">👥 이런 분들께 추천합니다</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">블로그로 부수입을 만들고 싶은 분</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">AI 도구를 활용하고 싶은 초보자</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">콘텐츠 제작 시간을 단축하고 싶은 분</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">SEO 마케팅을 배우고 싶은 분</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">온라인 비즈니스를 시작하고 싶은 분</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">체계적인 블로그 전략을 세우고 싶은 분</span>
            </div>
          </div>
        </div>
      </div>

      {/* 필요 도구 */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">🛠️ 필요한 도구</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">무료 도구:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">ChatGPT 무료 버전</div>
                  <div className="text-sm text-gray-600">기본적인 콘텐츠 생성</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Google 도구들</div>
                  <div className="text-sm text-gray-600">Analytics, Search Console</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Canva 무료</div>
                  <div className="text-sm text-gray-600">기본 이미지 디자인</div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">추천 유료 도구:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">$20</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">ChatGPT Plus</div>
                  <div className="text-sm text-gray-600">고품질 콘텐츠 생성</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">$29</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Ubersuggest</div>
                  <div className="text-sm text-gray-600">키워드 리서치</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">$15</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Canva Pro</div>
                  <div className="text-sm text-gray-600">전문 디자인 도구</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 시작하기 전 체크리스트 */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">✅ 시작하기 전 체크리스트</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-700">블로그 플랫폼 선택 완료 (워드프레스, 티스토리 등)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-700">도메인 준비 및 호스팅 설정</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-700">Google Analytics 계정 생성</span>
            </label>
          </div>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-700">Search Console 설정 완료</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-700">기본 AI 도구 계정 준비</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-700">콘텐츠 제작 시간 확보 (주 5-10시간)</span>
            </label>
          </div>
        </div>
      </div>

      {/* 학습 로드맵 */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">🗺️ 학습 로드맵</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">블로그 전략 수립</h4>
              <p className="text-gray-600 text-sm">니치 선정, 타겟 오디언스 마케팅 전략 기획</p>
            </div>
            <span className="text-sm text-gray-500">30분</span>
          </div>
          <div className="ml-4 border-l-2 border-gray-200 pl-4 pb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">SEO & 키워드 리서치</h4>
                <p className="text-gray-600 text-sm">검색 엔진 최적화를 위한 키워드 분석 및 전략</p>
              </div>
              <span className="text-sm text-gray-500">45분</span>
            </div>
          </div>
          <div className="ml-4 border-l-2 border-gray-200 pl-4 pb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">3</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">AI 콘텐츠 작성</h4>
                <p className="text-gray-600 text-sm">프롬프트 엔지니어링과 고품질 블로그 포스트 제작</p>
              </div>
              <span className="text-sm text-gray-500">60분</span>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm py-2">
            ... 총 10개 섹션 계속
          </div>
        </div>
      </div>

      {/* 시작 버튼 */}
      <div className="text-center pt-8">
        <p className="text-gray-600 mb-6">모든 준비가 완료되었다면, 다음 단계로 이동하세요!</p>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 max-w-md mx-auto">
          <h4 className="font-semibold mb-2">🚀 지금 바로 시작하세요</h4>
          <p className="text-blue-100 text-sm mb-4">첫 번째 단계인 '블로그 전략 수립'으로 이동하여 학습을 시작하세요.</p>
          <div className="text-xs text-blue-200">예상 소요 시간: 2-4시간</div>
        </div>
      </div>
    </div>
  );
}
