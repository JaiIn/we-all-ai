# We All AI

AI 도구들을 쉽게 찾고 탐색할 수 있는 종합 디렉토리 플랫폼

## 프로젝트 개요

We All AI는 다양한 분야의 AI 도구들을 한 곳에서 쉽게 찾을 수 있도록 도와주는 웹 플랫폼입니다. 사용자가 필요에 따라 적합한 AI 도구를 빠르게 발견하고 비교할 수 있습니다.

## 주요 기능

### 🏠 메인 페이지
- **히어로 섹션**: AI 도구 검색의 시작점
- **카테고리 그리드**: 12개 주요 분야별 AI 도구 분류
- **인기 도구**: 가장 많이 조회된 AI 도구들
- **통합 검색**: 도구명, 기능, 카테고리별 검색

### 📂 카테고리별 탐색
- **필터링**: 가격대, 기능, 플랫폼별 필터
- **정렬**: 인기순, 가격순, 이름순 정렬
- **카드 레이아웃**: 직관적인 도구 정보 표시

### 📄 도구 상세 정보
- **완전한 도구 정보**: 기능, 가격, 특징, 사용 사례
- **공식 링크**: 각 도구의 공식 웹사이트 연결
- **태그 시스템**: 관련 기능 및 특성 표시

## 카테고리 구성

### 1. 코딩 & 개발 (Coding & Development)
GitHub Copilot, Cursor, Replit Ghostwriter, Tabnine, Amazon CodeWhisperer 등
AI 코드 생성, 디버깅, 리팩토링 도구들

### 2. 글쓰기 & 문서 (Writing & Documents)
ChatGPT, Claude, Notion AI, Grammarly, Jasper AI, Copy.ai 등
텍스트 생성, 편집, 문법 교정 도구들

### 3. 이미지 & 디자인 (Image & Design)
DALL-E 3, Midjourney, Stable Diffusion, Adobe Firefly, Leonardo AI 등
이미지 생성, 편집, 디자인 도구들

### 4. 음성 & 오디오 (Voice & Audio)
ElevenLabs, Murf, Speechify, Replica Studios, Otter.ai 등
음성 합성, 변환, 오디오 처리 도구들

### 5. 영상 & 애니메이션 (Video & Animation)
Runway ML, Pika Labs, Synthesia, Stable Video Diffusion, Luma AI 등
비디오 생성, 편집, 애니메이션 도구들

### 6. 음악 & 사운드 (Music & Sound)
Suno, Udio, AIVA, Amper Music, Boomy 등
음악 생성, 작곡, 사운드 디자인 도구들

### 7. 데이터 & 분석 (Data & Analytics)
Claude with Analysis, ChatGPT Code Interpreter, DataRobot, H2O.ai 등
데이터 분석, ML 모델링, 시각화 도구들

### 8. 검색 & 리서치 (Search & Research)
Perplexity AI, You.com, Consensus, Elicit, ChatPDF 등
AI 검색, 문서 분석, 리서치 도구들

### 9. 번역 & 언어 (Translation & Language)
DeepL, Google Translate, QuillBot, Grammarly, WriteSonic 등
번역, 언어 학습, 텍스트 개선 도구들

### 10. 프레젠테이션 (Presentation)
Gamma, Beautiful.AI, Tome, Slidebean, Canva Presentations 등
AI 프레젠테이션 생성, 슬라이드 디자인 도구들

### 11. 챗봇 & 자동화 (Chatbot & Automation)
Intercom AI, Zendesk AI, Voiceflow, Botpress 등
고객 서비스, 업무 자동화 도구들

### 12. 교육 & 학습 (Education & Learning)
Khan Academy AI, Duolingo, Socratic, Coursera AI tutors 등
AI 튜터, 학습 지원, 교육 도구들

## 기술 스택

### Frontend
- **Next.js 14**: React 기반 풀스택 프레임워크
- **TypeScript**: 타입 안전성 보장
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **Shadcn/ui**: 모던 UI 컴포넌트 라이브러리

### 검색 & 필터링
- **Fuse.js**: 클라이언트 사이드 퍼지 검색
- **로컬 데이터**: JSON 기반 도구 정보 관리

### 디자인 시스템
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **다크/라이트 모드**: 사용자 테마 선택
- **색상 시스템**: 카테고리별 고유 색상 구분

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── (categories)/      # 카테고리별 페이지
│   │   ├── coding/
│   │   ├── writing/
│   │   ├── image/
│   │   └── ...
│   ├── tool/[id]/         # 개별 도구 상세 페이지
│   └── layout.tsx         # 루트 레이아웃
├── components/            # 재사용 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── CategoryCard.tsx  # 카테고리 카드
│   ├── ToolCard.tsx      # 도구 카드
│   └── SearchBar.tsx     # 검색 컴포넌트
├── data/                 # 정적 데이터
│   ├── tools.json        # AI 도구 데이터
│   └── categories.json   # 카테고리 정보
├── lib/                  # 유틸리티 함수
│   ├── search.ts         # 검색 로직
│   └── utils.ts          # 공통 유틸리티
└── types/                # TypeScript 타입 정의
    └── index.ts
```

## 데이터 구조

### AI 도구 정보
```typescript
interface AiTool {
  id: string;
  name: string;
  description: string;
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
}
```

### 카테고리 정보
```typescript
type Category = 
  | 'coding' 
  | 'writing' 
  | 'image' 
  | 'voice' 
  | 'video' 
  | 'music'
  | 'data'
  | 'search'
  | 'translation'
  | 'presentation'
  | 'chatbot'
  | 'education';
```

## 개발 로드맵

### Phase 1: 기본 구조
- [x] 프로젝트 초기 설정
- [ ] 기본 레이아웃 구현
- [ ] 홈페이지 카테고리 그리드
- [ ] 기본 라우팅 설정

### Phase 2: 핵심 기능
- [ ] AI 도구 데이터 구조 설계
- [ ] 카테고리별 페이지 구현
- [ ] 도구 카드 컴포넌트
- [ ] 기본 검색 기능

### Phase 3: 고급 기능
- [ ] 필터링 시스템
- [ ] 정렬 기능
- [ ] 도구 상세 페이지
- [ ] 반응형 디자인 최적화

### Phase 4: UX 개선
- [ ] 다크/라이트 모드
- [ ] 성능 최적화
- [ ] SEO 최적화
- [ ] 애니메이션 효과

## 목표

- **사용자 중심**: 직관적이고 사용하기 쉬운 인터페이스
- **포괄성**: 다양한 분야의 AI 도구 정보 제공
- **정확성**: 최신 정보와 정확한 도구 설명
- **접근성**: 모든 사용자가 쉽게 이용할 수 있는 플랫폼