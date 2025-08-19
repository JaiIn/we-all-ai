# We All AI

다양한 AI 도구들을 쉽게 찾고 탐색할 수 있는 종합 디렉토리 플랫폼

## 🌟 프로젝트 개요

We All AI는 다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾을 수 있도록 도와주는 웹 플랫폼입니다. 사용자가 필요에 따라 적합한 AI 도구를 빠르게 발견하고 비교할 수 있습니다.

## ✨ 주요 기능

### 🏠 인터랙티브 홈페이지
- **스크롤 기반 애니메이션**: 3단계 스크롤 섹션으로 구성된 몰입형 경험
  1. **히어로 섹션**: AI 도구 검색의 시작점
  2. **통계 섹션**: 플랫폼 신뢰성을 보여주는 주요 지표
  3. **카테고리 미리보기**: 12개 카테고리 간단 소개
- **자동 숨김 헤더**: 스크롤 시 헤더 자동 숨김/표시, 마우스 호버로 재표시
- **통합 검색**: 헤더에 위치한 AI 도구 검색 기능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원

### 📂 체계적인 카테고리 시스템
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

### 📄 상세한 도구 정보
- **완전한 도구 정보**: 기능, 가격, 특징, 사용 사례
- **실시간 링크**: 각 도구의 공식 웹사이트 연결
- **태그 시스템**: 무료/유료, 인기도 표시
- **직관적 아이콘**: 각 카테고리별 의미있는 SVG 아이콘

## 🛠️ 기술 스택

### Frontend
- **Next.js 15.4.7**: React 기반 풀스택 프레임워크 (App Router)
- **React 19.1.0**: 최신 React 기능 활용
- **TypeScript**: 완전한 타입 안전성 보장
- **Tailwind CSS 4**: 유틸리티 기반 스타일링
- **Turbopack**: 빠른 개발 서버

### 디자인 시스템
- **글래스모피즘**: backdrop-blur 효과로 모던한 UI
- **그라데이션 배경**: 다층 배경으로 깊이감 연출
- **스크롤 애니메이션**: 사용자 스크롤에 반응하는 인터랙션
- **다크/라이트 모드 지원**: 사용자 선호도에 따른 테마
- **반응형 그리드**: 디바이스별 최적화된 레이아웃

### 데이터 관리
- **JSON 기반**: 카테고리별 분리된 정적 데이터
- **타입 안전성**: TypeScript 인터페이스로 데이터 구조 정의
- **모듈화**: 카테고리별 독립적인 데이터 파일

## 📁 프로젝트 구조

```
we-all-ai/
├── app/                    # Next.js App Router
│   ├── categories/         # 카테고리 탐색 페이지
│   │   └── page.tsx       # 모든 카테고리 상세 탐색
│   ├── layout.tsx         # 루트 레이아웃 (헤더/푸터)
│   ├── page.tsx           # 인터랙티브 홈페이지
│   ├── globals.css        # 전역 스타일
│   └── icon.svg           # 브랜드 파비콘
├── components/            # 재사용 컴포넌트
│   ├── Header.tsx         # 자동 숨김 네비게이션 헤더
│   └── Footer.tsx         # 푸터 컴포넌트
├── data/                  # AI 도구 데이터
│   ├── categories.json    # 12개 카테고리 정보
│   └── tools/            # 카테고리별 도구 데이터
│       ├── tools_coding.json
│       ├── tools_writing.json
│       └── ... (12개 파일)
├── lib/                   # 유틸리티 함수
│   ├── data.ts           # 데이터 처리 및 통계 로직
│   └── utils.ts          # 공통 유틸리티
├── types/                # TypeScript 타입 정의
│   └── index.ts          # 도구 및 카테고리 인터페이스
└── public/               # 정적 에셋
    └── favicon.svg       # SVG 파비콘
```

## 🎯 구현된 주요 기능

### 1. 인터랙티브 홈페이지
- ✅ 3단계 스크롤 애니메이션 (히어로 → 통계 → 카테고리)
- ✅ 실시간 스크롤 감지 및 섹션별 애니메이션
- ✅ 카테고리별 의미있는 SVG 아이콘
- ✅ 글래스모피즘과 그라데이션 배경
- ✅ "탐색하기" 버튼으로 카테고리 페이지 연결

### 2. 스마트 헤더 시스템
- ✅ 검색창 통합 (데스크톱/모바일 최적화)
- ✅ 스크롤 방향 감지로 자동 숨김/표시
- ✅ 마우스 호버 시 헤더 재표시
- ✅ 글래스모피즘 효과

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

## 🚀 개발 로드맵

### ✅ Phase 1: 기반 구조 (완료)
- [x] Next.js 프로젝트 초기 설정
- [x] TypeScript 및 Tailwind CSS 구성
- [x] 기본 컴포넌트 및 레이아웃
- [x] 데이터 구조 설계

### ✅ Phase 2: 핵심 UI (완료)
- [x] 인터랙티브 홈페이지 구현
- [x] 스크롤 애니메이션 시스템
- [x] 자동 숨김 헤더
- [x] 카테고리 탐색 페이지
- [x] 반응형 디자인

### 🔄 Phase 3: 고급 기능 (진행 중)
- [ ] 개별 카테고리 페이지 (`/coding`, `/writing` 등)
- [ ] 검색 기능 구현
- [ ] 필터링 및 정렬 시스템
- [ ] 도구 상세 페이지

### 📋 Phase 4: 콘텐츠 & 최적화
- [ ] 모든 카테고리별 AI 도구 데이터 입력
- [ ] 이미지 및 로고 에셋 추가
- [ ] SEO 최적화
- [ ] 성능 최적화
- [ ] 다크모드 토글 구현

## 🎨 디자인 특징

### 시각적 아이덴티티
- **브랜드 컬러**: 블루-퍼플 그라데이션 (#3B82F6 → #9333EA)
- **카테고리별 색상**: 각 분야를 대표하는 고유 컬러
- **아이콘 시스템**: SVG 기반 의미있는 아이콘
- **파비콘**: 브랜드 "W" 로고

### UX 원칙
- **직관적 네비게이션**: 홈 → 카테고리 → 개별 도구
- **점진적 공개**: 스크롤에 따른 정보 단계별 표시
- **즉시 피드백**: 호버 및 클릭에 대한 즉각적 반응
- **접근성**: 명확한 대비와 의미있는 구조

## 💡 혁신적인 기능들

1. **스크롤 스토리텔링**: 사용자 스크롤에 따라 단계별로 정보 전달
2. **컨텍스트 어웨어 헤더**: 사용자 행동에 반응하는 스마트 UI
3. **글래스모피즘 디자인**: 현대적이고 세련된 반투명 효과
4. **의미론적 아이콘**: 각 카테고리의 본질을 담은 직관적 아이콘
5. **모듈러 데이터**: 확장 가능하고 유지보수하기 쉬운 구조

## 🎯 목표 및 비전

- **사용자 중심**: 직관적이고 사용하기 쉬운 인터페이스
- **포괄성**: 다양한 분야의 AI 도구 정보 제공
- **정확성**: 최신 정보와 정확한 도구 설명
- **접근성**: 모든 사용자가 쉽게 이용할 수 있는 플랫폼
- **확장성**: 새로운 도구와 카테고리 쉽게 추가 가능

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

---

**We All AI** - AI 도구 탐색의 새로운 표준을 제시합니다.