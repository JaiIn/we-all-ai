"use client";

import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 기본 그라데이션 배경 */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 -z-20" />
      
      {/* 유체 애니메이션 레이어 1 - 서버사이드에서도 안전 */}
      <div className="fixed inset-0 -z-10">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="wave1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0.6">
                <animate 
                  attributeName="stop-opacity" 
                  values="0.6;0.2;0.6" 
                  dur="4s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wave2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.25)" stopOpacity="0.5">
                <animate 
                  attributeName="stop-opacity" 
                  values="0.5;0.1;0.5" 
                  dur="6s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wave3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" stopOpacity="0.4">
                <animate 
                  attributeName="stop-opacity" 
                  values="0.4;0.1;0.4" 
                  dur="8s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* 움직이는 원형 그라데이션들 */}
          <circle fill="url(#wave1)" r="25" cx="20" cy="20">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 60,40; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="25;35;25"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle fill="url(#wave2)" r="20" cx="80" cy="30">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -50,50; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="20;30;20"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle fill="url(#wave3)" r="30" cx="50" cy="80">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 30,-60; 0,0"
              dur="18s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="30;40;30"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle fill="url(#wave1)" r="15" cx="10" cy="70">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 70,-30; 0,0"
              dur="22s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="15;25;15"
              dur="14s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle fill="url(#wave2)" r="18" cx="90" cy="70">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -40,-40; 0,0"
              dur="16s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="18;28;18"
              dur="11s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* CSS로 만든 유체 애니메이션 - 서버사이드에서도 안전 */}
      <div className="fixed inset-0 -z-10">
        <div className="fluid-animation">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>
        </div>
      </div>

      {/* 파티클 효과 - 클라이언트에서만 렌더링 */}
      {isClient && (
        <div className="fixed inset-0 -z-10">
          <div className="particles">
            {Array.from({ length: 50 }, (_, i) => {
              // 시드 기반으로 일관된 랜덤 값 생성
              const seed1 = (i * 9301 + 49297) % 233280;
              const seed2 = (i * 9343 + 49999) % 233280;
              const seed3 = (i * 9377 + 48271) % 233280;
              
              const left = (seed1 / 233280) * 100;
              const delay = (seed2 / 233280) * 20;
              const duration = 15 + (seed3 / 233280) * 20;
              
              return (
                <div 
                  key={i} 
                  className="particle"
                  style={{
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 콘텐츠 */}
      {children}

      {/* CSS 애니메이션 스타일 */}
      <style jsx>{`
        .fluid-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          mix-blend-mode: multiply;
          animation: blob 7s ease-in-out infinite;
          transform-origin: 50% 50%;
        }

        .blob-1 {
          top: 0;
          left: 0;
          width: 600px;
          height: 600px;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          animation: blob 20s ease-in-out infinite;
        }

        .blob-2 {
          top: 50%;
          right: 0;
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1));
          animation: blob 25s ease-in-out infinite reverse;
        }

        .blob-3 {
          bottom: 0;
          left: 20%;
          width: 500px;
          height: 500px;
          background: linear-gradient(45deg, rgba(236, 72, 153, 0.08), rgba(59, 130, 246, 0.08));
          animation: blob 30s ease-in-out infinite;
        }

        .blob-4 {
          top: 20%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1));
          animation: blob 15s ease-in-out infinite reverse;
        }

        .blob-5 {
          bottom: 20%;
          right: 20%;
          width: 350px;
          height: 350px;
          background: linear-gradient(45deg, rgba(168, 85, 247, 0.08), rgba(34, 197, 94, 0.08));
          animation: blob 18s ease-in-out infinite;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(200px, -50px) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 100px) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
          }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
          border-radius: 50%;
          animation: float linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        /* 다크 모드에서의 추가 효과 */
        @media (prefers-color-scheme: dark) {
          .blob {
            filter: blur(60px);
          }
          
          .blob-1 {
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15));
          }
          
          .blob-2 {
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.15));
          }
          
          .blob-3 {
            background: linear-gradient(45deg, rgba(236, 72, 153, 0.12), rgba(59, 130, 246, 0.12));
          }
          
          .blob-4 {
            background: linear-gradient(45deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15));
          }
          
          .blob-5 {
            background: linear-gradient(45deg, rgba(168, 85, 247, 0.12), rgba(34, 197, 94, 0.12));
          }
        }

        /* 성능 최적화 */
        .blob, .particle {
          will-change: transform;
        }

        /* 모션 감소 설정을 선호하는 사용자를 위한 설정 */
        @media (prefers-reduced-motion: reduce) {
          .blob, .particle {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
