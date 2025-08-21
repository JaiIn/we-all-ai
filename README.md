# We All AI

다양한 AI 도구들을 쉽게 찾고 탐색할 수 있는 종합 디렉토리 플랫폼

## 프로젝트 개요

We All AI는 다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾을 수 있도록 도와주는 웹 플랫폼입니다. 사용자가 필요에 따라 적합한 AI 도구를 빠르게 발견하고 비교할 수 있습니다.

## 기술 스택

- **Next.js 15.4.7** (App Router)
- **React 19.1.0** + TypeScript
- **Tailwind CSS v4** (PostCSS)
- **최신 보안 설정** (헤더 보안, 이미지 최적화)

## 주요 기능

### 인터랙티브 홈페이지
- **스크롤 기반 애니메이션**: 3단계 스크롤 섹션으로 구성된 몰입형 경험
  1. **히어로 섹션**: AI 도구 검색의 시작점
  2. **통계 섹션**: 플랫폼 신뢰성을 보여주는 주요 지표
  3. **카테고리 미리보기**: 12개 카테고리 간단 소개
- **자동 숨김 헤더**: 스크롤 시 헤더 자동 숨김/표시, 마우스 호버로 재표시
- **간결한 네비게이션**: 핵심 메뉴만 포함된 깔끔한 헤더
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원

### 체계적인 카테고리 시스템
12개 주요 분야별 AI 도구 분류:
1. **🔧 코딩 & 개발**: GitHub Copilot, Cursor, Tabnine 등
2. **✏️ 글쓰기 & 문서**: ChatGPT, Claude, Notion AI, Grammarly 등
3. **🖼️ 이미지 & 디자인**: DALL-E 3, Midjourney, Stable Diffusion 등
4. **🎤 음성 & 오디오**: ElevenLabs, Murf, Speechify 등
5. **🎬 영상 & 애니메이션**: Runway ML, Pika Labs, Synthesia 등
6. **🎵 음악 & 사운드**: Suno, Udio, AIVA 등
7. **📊 데이터 & 분석**: Claude with Analysis, DataRobot 등
8. **🔍 검색 & 리서치**: Perplexity AI, You.com, Consensus 등
9. **🌐 번역 & 언어**: DeepL, Google Translate, QuillBot 등
10. **💬 프레젠테이션**: Gamma, Beautiful.AI, Tome 등
11. **🤖 챗봇 & 자동화**: Intercom AI, Zendesk AI, Voiceflow 등
12. **🎓 교육 & 학습**: Khan Academy AI, Duolingo, Socratic 등

### 상세한 도구 정보
- **완전한 도구 정보**: 기능, 가격, 특징, 사용 사례
- **실시간 링크**: 각 도구의 공식 웹사이트 연결
- **태그 시스템**: 무료/유료, 인기도 표시
- **직관적 아이콘**: 각 카테고리별 의미있는 SVG 아이콘

## 📁 프로젝트 구조

```
we-all-ai/
├── app/                    # Next.js App Router
│   ├── [category]/        # 동적 카테고리 페이지
│   ├── categories/        # 카테고리 탐색 페이지
│   ├── search/           # 검색 페이지
│   ├── layout.tsx        # 루트 레이아웃 (헤더/푸터)
│   ├── page.tsx          # 인터랙티브 홈페이지
│   ├── globals.css       # 전역 스타일
│   ├── robots.ts         # SEO 로봇 설정
│   ├── sitemap.ts        # 사이트맵 생성
│   └── icon.svg          # 브랜드 파비콘
├── components/           # 재사용 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   │   ├── AnimatedBackground.tsx
│   │   ├── CategoryIcon.tsx
│   │   ├── StructuredData.tsx
│   │   └── WebVitals.tsx
│   ├── category/        # 카테고리 관련
│   ├── search/          # 검색 관련
│   ├── Header.tsx       # 자동 숨김 네비게이션 헤더
│   └── Footer.tsx       # 푸터 컴포넌트
├── data/                # AI 도구 데이터
│   ├── categories.json  # 12개 카테고리 정보
│   └── tools/          # 카테고리별 도구 데이터 (13개 파일)
├── hooks/               # React 커스텀 훅
├── lib/                 # 유틸리티 함수
│   ├── data.ts         # 데이터 처리 및 통계 로직
│   └── utils.ts        # 공통 유틸리티
├── types/              # TypeScript 타입 정의
│   └── index.ts        # 도구 및 카테고리 인터페이스
└── public/             # 정적 에셋
    └── favicon.svg     # SVG 파비콘
```

## 🎯 구현된 주요 기능

### 1. 인터랙티브 홈페이지
- ✅ 3단계 스크롤 애니메이션 (히어로 → 통계 → 카테고리)
- ✅ 실시간 스크롤 감지 및 섹션별 애니메이션
- ✅ 카테고리별 의미있는 SVG 아이콘
- ✅ 글래스모피즘과 그라데이션 배경
- ✅ "탐색하기" 버튼으로 카테고리 페이지 연결

### 2. 스마트 헤더 시스템
- ✅ 스크롤 방향 감지로 자동 숨김/표시
- ✅ 마우스 호버 시 헤더 재표시
- ✅ 글래스모피즘 효과
- ✅ 간결한 네비게이션 (홈, 카테고리, 검색)

### 3. 카테고리 탐색 페이지
- ✅ 전체 카테고리 상세 표시
- ✅ 각 카테고리별 도구 미리보기 (2개씩)
- ✅ 클릭 가능한 카테고리 제목
- ✅ 일관된 아이콘 시스템

### 4. 데이터 아키텍처
- ✅ 카테고리별 독립적인 JSON 파일
- ✅ TypeScript 타입 안전성
- ✅ 통계 정보 자동 계산
- ✅ 확장 가능한 구조

## 📊 데이터 구조

### AI 도구 정보
```typescript
interface AiTool {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: Category;
  url: string;
  pricing: {
    free: boolean;
    startingPrice?: number;
    currency: string;
  };
  features: string[];
  tags: string[];
  logo?: string;
  rating?: number;
  isPopular?: boolean;
  isFeatured?: boolean;
}
```

### 카테고리 정보
```typescript
interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  color: string; // 브랜드 컬러
}
```

## 🚀 프로젝트 현황

### ✅ 완료된 기능
- **기반 아키텍처**: Next.js 15 + TypeScript + Tailwind CSS 설정
- **홈페이지**: 3단계 스크롤 애니메이션 (히어로 → 통계 → 카테고리)
- **헤더 시스템**: 스크롤 감지 자동 숨김/표시, 마우스 호버 재표시
- **카테고리 시스템**: 12개 카테고리별 색상 및 아이콘
- **동적 라우팅**: `[category]` 페이지로 개별 카테고리 접근
- **검색 기능**: 전용 검색 페이지 및 필터링 시스템
- **데이터 구조**: JSON 기반 모듈화된 데이터 관리
- **SEO 최적화**: 메타데이터, 구조화된 데이터, robots, sitemap
- **성능 최적화**: 동적 import, 이미지 최적화, 웹 바이탈

### 🎯 현재 상태
- **총 카테고리**: 12개 (코딩, 글쓰기, 이미지, 음성, 영상 등)
- **데이터 파일**: 13개 (categories.json + 12개 도구 파일)
- **컴포넌트**: 모듈화된 22개 컴포넌트
- **페이지**: 홈, 카테고리 목록, 개별 카테고리, 검색
- **빌드 상태**: 프로덕션 준비 완료

### 📋 향후 계획
- **콘텐츠 확장**: 각 카테고리별 AI 도구 데이터 보강
- **UI/UX 개선**: 도구 상세 페이지, 비교 기능
- **고급 기능**: 북마크, 리뷰 시스템, 추천 알고리즘

## 🎨 디자인 특징

### 시각적 아이덴티티
- **브랜드 컬러**: 블루-퍼플 그라데이션 (#3B82F6 → #9333EA)
- **카테고리별 색상**: 각 분야를 대표하는 고유 컬러
- **파비콘**: 브랜드 "W" 로고

### UX 원칙
- **직관적 네비게이션**: 홈 → 카테고리 → 개별 도구
- **점진적 공개**: 스크롤에 따른 정보 단계별 표시
- **즉시 피드백**: 호버 및 클릭에 대한 즉각적 반응
- **접근성**: 명확한 대비와 의미있는 구조

## 개발 가이드

### 프로젝트 실행
```bash
npm run dev    # 개발 서버 실행
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 서버 실행
npm run lint   # ESLint 검사
```

### 새로운 AI 도구 추가
1. 해당 카테고리의 `data/tools/tools_[category].json` 파일 수정
2. `types/index.ts`의 `AiTool` 인터페이스 참조
3. 필수 필드: id, name, description, shortDescription, category, url, pricing

### 새로운 카테고리 추가
1. `data/categories.json`에 카테고리 정보 추가
2. `data/tools/tools_[new-category].json` 파일 생성
3. `lib/data.ts`의 import 및 switch 문 업데이트
4. `components/common/CategoryIcon.tsx`에 아이콘 추가

---

**We All AI** - 차세대 AI 도구 디렉토리 플랫폼