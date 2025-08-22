export default function StrategySection() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        🎯 블로그 전략 수립
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">니치 선정이 성공의 80%를 결정합니다</h3>
        <p className="text-blue-700">
          올바른 니치 선정은 블로그 성공의 가장 중요한 요소입니다. 
          수익성과 경쟁도, 그리고 개인적 관심도를 모두 고려해야 합니다.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">수익성 높은 니치 분야</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">🏆 고수익 니치 (CPC $5-15)</h4>
          <ul className="text-green-700 space-y-1 text-sm">
            <li>• 금융/투자 전략</li>
            <li>• 부동산 가이드</li>
            <li>• 건강/의료 정보</li>
            <li>• 교육/온라인 강의</li>
            <li>• 기술/프로그래밍</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-3">📈 중수익 니치 (CPC $1-3)</h4>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• 여행 가이드</li>
            <li>• 요리/레시피</li>
            <li>• 육아/가족</li>
            <li>• 패션/뷰티</li>
            <li>• 취미/DIY</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">니치 검증 체크리스트</h3>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="space-y-3">
          {[
            "월 검색량 10,000+ 키워드 20개 이상 존재",
            "경쟁 강도가 중간 이하 수준",
            "수익화 모델 3가지 이상 가능",
            "콘텐츠 아이디어 100개 이상 도출 가능",
            "개인적 관심이나 전문성 보유"
          ].map((item, index) => (
            <label key={index} className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">💡 Pro Tip</h4>
        <p className="text-gray-700 text-sm">
          완벽한 니치를 찾으려고 너무 오래 고민하지 마세요. 
          80% 확신이 들면 시작하고, 운영하면서 개선해나가는 것이 더 효과적입니다.
        </p>
      </div>
    </div>
  );
}
