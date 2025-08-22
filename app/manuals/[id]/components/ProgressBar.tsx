interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">학습 진행률</span>
        <span className="text-sm font-semibold text-blue-600">{progress}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* 진행 애니메이션 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        {/* 단계 표시 점들 */}
        <div className="absolute inset-0 flex justify-between items-center">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                i < currentStep
                  ? 'bg-blue-500 border-blue-500 shadow-sm'
                  : i === currentStep - 1
                  ? 'bg-blue-500 border-blue-500 ring-2 ring-blue-200'
                  : 'bg-white border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        {currentStep} / {totalSteps} 단계 완료
      </div>
    </div>
  );
}
