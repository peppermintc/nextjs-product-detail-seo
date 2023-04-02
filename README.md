# Next.js + Typescript 환경 구성

`yarn create next-app --typescript`

# API 추가

- GET /store/list api 추가
  - 응답 값: 상품 리스트
  - 딜레이: 3000ms
- GET /store/product/:id api 추가
  - 응답 값: 상품 상세 정보
  - 딜레이: 랜덤(Math.random \* 10000)

# 컴포넌트 추가

- ProductList
- ProductDetail
- Loading

# 페이지 추가

- store 페이지
  - 오픈그래프 메타 태그 추가
  - suspense & lazy 적용
- product 페이지
  - 오픈그래프 메타 태그 추가
  - promise race 사용
  - suspense & lazy 적용

# Vercel 배포

# facebook 공유 링크 디버깅
