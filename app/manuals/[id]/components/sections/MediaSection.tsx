export default function MediaSection() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        🖼️ 이미지 & 미디어 제작
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">시각적 콘텐츠가 블로그 성공을 좌우합니다</h3>
        <p className="text-purple-700">
          연구에 따르면 이미지가 포함된 블로그 포스트는 그렇지 않은 포스트보다 94% 더 많은 조회수를 기록합니다. 
          AI를 활용하면 전문 디자이너 없이도 고품질 비주얼 콘텐츠를 제작할 수 있습니다.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI 이미지 생성 전략</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-3">📸 썸네일 이미지</h4>
          <ul className="text-blue-700 space-y-2 text-sm">
            <li>• 클릭률 결정하는 핵심 요소</li>
            <li>• 1200×630px 권장 크기</li>
            <li>• 텍스트 오버레이 공간 확보</li>
            <li>• 브랜드 컬러 일관성</li>
            <li>• 감정을 자극하는 비주얼</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">📊 설명 이미지</h4>
          <ul className="text-green-700 space-y-2 text-sm">
            <li>• 복잡한 개념 시각화</li>
            <li>• 단계별 프로세스 도해</li>
            <li>• 비교 차트 및 그래프</li>
            <li>• 인포그래픽 스타일</li>
            <li>• 이해도 향상 효과</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h4 className="font-semibold text-orange-800 mb-3">🎨 분위기 이미지</h4>
          <ul className="text-orange-700 space-y-2 text-sm">
            <li>• 글의 톤앤매너 강화</li>
            <li>• 독자 몰입도 증가</li>
            <li>• 섹션 구분 효과</li>
            <li>• 브랜드 이미지 통일</li>
            <li>• 시각적 휴식 제공</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI 도구별 활용 가이드</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">🎭 Midjourney 활용법</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-700 mb-3">썸네일 이미지 프롬프트:</h5>
              <div className="bg-gray-100 border border-gray-300 rounded p-3 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"Professional blog thumbnail about [주제], 
modern design, clean typography space, 
bright vibrant colors, eye-catching composition, 
marketing style, 16:9 aspect ratio, 
high contrast --ar 16:9 --v 6"`}
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-3">설명 이미지 프롬프트:</h5>
              <div className="bg-gray-100 border border-gray-300 rounded p-3 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"Infographic illustration explaining [개념], 
step-by-step visual guide, minimal design, 
professional color scheme, easy to understand, 
white background, technical diagram style 
--ar 1:1 --v 6"`}
              </div>
            </div>
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3">
            <p className="text-blue-800 text-sm"><strong>팁:</strong> --stylize 값을 조정해서 스타일 강도를 조절하세요 (0-1000)</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">🤖 DALL-E 3 활용법</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-700 mb-3">비즈니스 이미지 프롬프트:</h5>
              <div className="bg-gray-100 border border-gray-300 rounded p-3 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"Create a professional illustration showing [컨셉]. 
Use a modern, clean design with a corporate color palette. 
The image should be suitable for a business blog post. 
Include subtle gradients and minimalist elements."`}
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-3">교육 콘텐츠 프롬프트:</h5>
              <div className="bg-gray-100 border border-gray-300 rounded p-3 text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`"Design an educational infographic about [주제]. 
Use clear icons, readable fonts, and a logical flow. 
The style should be friendly and approachable, 
suitable for beginners learning about this topic."`}
              </div>
            </div>
          </div>
          <div className="mt-4 bg-green-50 border border-green-200 rounded p-3">
            <p className="text-green-800 text-sm"><strong>장점:</strong> ChatGPT Plus에 포함되어 추가 비용 없이 사용 가능</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">🎨 Canva AI 활용법</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-700 mb-3">강점:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 텍스트 오버레이 쉬움</li>
                <li>• 브랜드 키트 일관성</li>
                <li>• 다양한 템플릿</li>
                <li>• 소셜미디어 크기 자동 조정</li>
                <li>• 협업 기능</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-3">활용 시나리오:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 블로그 썸네일 제작</li>
                <li>• 소셜미디어 포스트</li>
                <li>• 간단한 인포그래픽</li>
                <li>• 제품 목업 이미지</li>
                <li>• 브랜드 일관성 유지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">이미지 최적화 가이드</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-4">⚡ 기술적 최적화</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-gray-700 mb-3">파일 형식 선택:</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                <span className="text-green-800 font-medium">WebP</span>
                <span className="text-green-600">최고 (30-35% 절약)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                <span className="text-blue-800 font-medium">JPEG</span>
                <span className="text-blue-600">사진용 (호환성 좋음)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                <span className="text-purple-800 font-medium">PNG</span>
                <span className="text-purple-600">투명 배경 필요시</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-3">크기 최적화:</h5>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>썸네일:</strong> 1200×630px</li>
              <li>• <strong>본문 이미지:</strong> 800×600px</li>
              <li>• <strong>파일 크기:</strong> 100KB 이하</li>
              <li>• <strong>압축률:</strong> 80-85% 권장</li>
              <li>• <strong>반응형:</strong> srcset 활용</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-4">🔍 SEO 최적화</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h5 className="font-medium text-yellow-800 mb-2">파일명 최적화</h5>
              <div className="text-xs text-yellow-700 space-y-1">
                <div className="bg-white rounded p-2 font-mono">keyword-description.webp</div>
                <p>키워드-설명.확장자 형식</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h5 className="font-medium text-blue-800 mb-2">Alt 텍스트</h5>
              <div className="text-xs text-blue-700 space-y-1">
                <div className="bg-white rounded p-2">"키워드가 포함된 이미지 설명"</div>
                <p>시각 장애인 접근성 + SEO</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <h5 className="font-medium text-green-800 mb-2">캡션 활용</h5>
              <div className="text-xs text-green-700 space-y-1">
                <div className="bg-white rounded p-2">추가 키워드 자연스럽게</div>
                <p>이미지 하단 설명문</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">인포그래픽 제작 전략</h3>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-indigo-800 mb-3">📊 데이터 시각화의 힘</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">30x</div>
            <div className="text-sm text-indigo-700">더 많이 읽힘</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">3x</div>
            <div className="text-sm text-purple-700">더 많이 공유됨</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">650%</div>
            <div className="text-sm text-pink-700">기억률 향상</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">40%</div>
            <div className="text-sm text-orange-700">이해도 증가</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🎯 인포그래픽 유형별 활용</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-gray-700 mb-3">통계형 인포그래픽:</h5>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• 설문조사 결과 시각화</li>
              <li>• 시장 분석 데이터</li>
              <li>• 성장률, 비율 표시</li>
              <li>• 비교 차트 제작</li>
            </ul>
            <div className="mt-3 bg-gray-100 rounded p-3 text-xs font-mono text-gray-700">
              AI 프롬프트: "Create a statistical infographic showing [데이터], use charts and graphs, professional design"
            </div>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-3">프로세스형 인포그래픽:</h5>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• 단계별 가이드 도식화</li>
              <li>• 워크플로우 시각화</li>
              <li>• 타임라인 표현</li>
              <li>• 의사결정 플로우차트</li>
            </ul>
            <div className="mt-3 bg-gray-100 rounded p-3 text-xs font-mono text-gray-700">
              AI 프롬프트: "Design a step-by-step process infographic for [프로세스], use arrows and icons"
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">동영상 콘텐츠 전략</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🎬 블로그 + 동영상 시너지</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <h5 className="font-medium text-red-800 mb-2">유튜브 임베딩</h5>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• 체류시간 3배 증가</li>
              <li>• SEO 순위 향상</li>
              <li>• 구독자 유입</li>
              <li>• 다채널 트래픽</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <h5 className="font-medium text-blue-800 mb-2">GIF 애니메이션</h5>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• 복잡한 과정 설명</li>
              <li>• 사용법 데모</li>
              <li>• 인터랙션 효과</li>
              <li>• 소셜 공유 증가</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <h5 className="font-medium text-green-800 mb-2">스크린 캡처</h5>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• 튜토리얼 가이드</li>
              <li>• 도구 사용법</li>
              <li>• 결과 증명</li>
              <li>• 신뢰도 향상</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">브랜드 일관성 유지</h3>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🎨 비주얼 브랜딩 시스템</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-700 mb-3">컬러 팔레트 정의:</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">주 색상 (Primary)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">보조 색상 (Secondary)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-500 rounded"></div>
                  <span className="text-sm text-gray-600">중성 색상 (Neutral)</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-3">타이포그래피:</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• <strong>제목:</strong> 굵고 임팩트 있는 폰트</li>
                <li>• <strong>본문:</strong> 가독성 좋은 산세리프</li>
                <li>• <strong>강조:</strong> 브랜드 색상 활용</li>
                <li>• <strong>크기:</strong> 일관된 폰트 크기 체계</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">이미지 제작 워크플로우</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">⚡ 효율적인 제작 프로세스</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full p-2 text-sm font-bold">1</div>
            <div>
              <h5 className="font-medium text-gray-800">콘텐츠 분석</h5>
              <p className="text-gray-600 text-sm">글의 핵심 메시지와 필요한 이미지 유형 파악</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 text-green-800 rounded-full p-2 text-sm font-bold">2</div>
            <div>
              <h5 className="font-medium text-gray-800">이미지 기획</h5>
              <p className="text-gray-600 text-sm">썸네일, 설명 이미지, 분위기 이미지 리스트 작성</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 text-purple-800 rounded-full p-2 text-sm font-bold">3</div>
            <div>
              <h5 className="font-medium text-gray-800">AI 생성</h5>
              <p className="text-gray-600 text-sm">준비된 프롬프트로 배치 작업으로 이미지 생성</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 text-orange-800 rounded-full p-2 text-sm font-bold">4</div>
            <div>
              <h5 className="font-medium text-gray-800">후처리</h5>
              <p className="text-gray-600 text-sm">크기 조정, 압축, 워터마크, SEO 최적화</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h4>
        <p className="text-yellow-700 text-sm">
          이미지는 블로그의 로딩 속도에 큰 영향을 미칩니다. 
          WebP 형식 사용과 적절한 압축으로 성능을 최적화하세요. 
          또한 모든 이미지에 의미있는 alt 텍스트를 추가해서 접근성과 SEO를 동시에 개선할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
