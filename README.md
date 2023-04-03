### Next.js + Typescript 템플릿

`yarn create next-app --typescript`

---

### API Routes 추가

- GET /store/list api 추가

  - 응답 값: 상품 리스트
  - 딜레이: 3000ms

  ```javascript
  /** /pages/api/store/list.ts > 상품 리스트 API 핸들러 */
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<GET_PRODUCT_LIST_RES>
  ) {
    if (req.method === "GET") {
      delay(() => res.status(200).json(GET_PRODUCT_LIST_RES_SAMPLE), 3000);
    }
  }
  ```

- GET /store/product/:id api 추가

  - 응답 값: 상품 상세 정보
  - 딜레이: 랜덤(Math.random \* 1000)

  ```javascript
  /** /pages/api/store/product.ts > 상품 상세 정보 API 핸들러 */
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<GET_PRODUCT_DETAIL_RES | ERROR_RES>
  ) {
    /** GET /api/store/product/:id */
    if (req.method === "GET") {
      /** 상품 ID 값 */
      const productId = formatProductId(req.query.id);

      if (!productId) {
        res.status(400).json({ error: "Wrong Product ID" });
        return;
      }

      /** 상품 상세 정보 */
      const productDetail = getProductDetail(productId);

      if (!productDetail) {
        res.status(400).json({ error: "No Matching product with ID" });
      } else {
        delay(() => res.status(200).json(productDetail), Math.random() * 1000);
      }
    }
  }
  ```

---

### 사용할 컴포넌트 추가

- ProductList
- ProductDetail
- Loading

### 커스텀 훅 추가

- usePageLoading: getServerSideProps 사용시 페이지 로딩 상태를 사용하기 위한 훅

---

### 페이지 추가

- store 페이지
  - 오픈그래프 메타 태그 추가
- product 페이지
  - 오픈그래프 메타 태그 추가

---

### Vercel 배포

- dev 환경에서 테스트시 아래 .env.local 파일 root 디렉토리에 추가 필요

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

---

### facebook 공유 링크 디버깅
