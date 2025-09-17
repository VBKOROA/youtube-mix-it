# Mix It! 🎵

> YouTube 동영상을 한 번의 클릭으로 믹스 리스트로 변환하는 Chrome 확장 프로그램

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6.svg)](https://www.typescriptlang.org/)

## ✨ 주요 기능

- **원클릭 믹스 변환**: YouTube 동영상 페이지에서 버튼 하나로 믹스 리스트 생성
- **자동 리디렉션**: 현재 탭에서 바로 믹스 리스트로 이동
- **깔끔한 UI**: 모던하고 직관적인 팝업 인터페이스
- **빠른 접근**: 브라우저 툴바에서 즉시 사용 가능

## 🚀 설치 방법

### Chrome 웹 스토어에서 설치 (권장)
*곧 출시 예정*

### 개발자 모드로 설치
1. 이 저장소를 클론하거나 다운로드
2. 프로젝트 빌드
   ```bash
   npm run build
   ```
3. Chrome에서 `chrome://extensions/` 접속
4. 우상단의 "개발자 모드" 활성화
5. "압축해제된 확장 프로그램을 로드합니다" 클릭
6. `dist` 폴더 선택

## 🎯 사용법

1. YouTube 동영상 페이지에서 확장 프로그램 아이콘 클릭
2. "Mix It!" 버튼 클릭
3. 자동으로 믹스 리스트가 시작됩니다

## 🛠️ 개발

### 요구사항
- Node.js 16+
- TypeScript 5.9+

### 빌드
```bash
# 의존성 설치
npm install

# 프로젝트 빌드
npm run build
```

### 프로젝트 구조
```
mix-it/
├── src/
│   └── popup.ts          # 메인 로직
├── public/
│   ├── manifest.json     # 확장 프로그램 설정
│   ├── popup.html        # 팝업 UI
│   └── icon.png          # 확장 프로그램 아이콘
├── dist/                 # 빌드 결과물
└── package.json
```

## 🤝 기여하기

1. 이 저장소를 Fork
2. 새로운 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

---

<div align="center">
  Made with ❤️ for YouTube music lovers
</div>