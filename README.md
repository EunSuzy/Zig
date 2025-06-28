# 모바일 앱 서비스 Monorepo

## 📱 프로젝트 개요
모바일 앱 서비스를 위한 Monorepo 프로젝트입니다.

## 🏗️ 프로젝트 구조
```
/
├── backend/          # Spring Boot 백엔드
├── frontend/         # React Native + Expo 프론트엔드
├── shared/           # 공통 타입, 유틸리티
├── docs/            # 프로젝트 문서
└── scripts/         # 빌드, 배포 스크립트
```

## 🛠️ 기술 스택

### Backend
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Security**
- **Spring Data JPA**
- **MySQL**
- **Firebase Admin SDK**

### Frontend
- **React Native**
- **Expo SDK 50**
- **TypeScript**
- **NativeWind (Tailwind CSS)**
- **React Navigation**
- **Firebase SDK**

## 🚀 개발 환경 설정

### Prerequisites
- Node.js 18+
- Java 17+
- Android Studio / Xcode
- Expo CLI

### 설치 및 실행
```bash
# 전체 의존성 설치
npm run install:all

# 백엔드 실행
npm run dev:backend

# 프론트엔드 실행
npm run dev:frontend
```

## 📋 브랜치 전략
- `main`: 프로덕션 코드
- `BE`: 백엔드 개발 브랜치
- `FE`: 프론트엔드 개발 브랜치
- `feat/*`: 기능 개발
- `fix/*`: 버그 수정
- `refactor/*`: 리팩토링
- `chore/*`: 설정 변경

## 📝 개발 가이드
자세한 개발 가이드는 `docs/` 폴더를 참조하세요.
