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

### 컴포넌트 추가

- ProductList
- ProductDetail
- Loading

---

### 페이지 추가

- store 페이지
  - 오픈그래프 메타 태그 추가
  - suspense & lazy 적용
- product 페이지
  - 오픈그래프 메타 태그 추가
  - suspense & lazy 적용

---

### Vercel 배포

---

### facebook 공유 링크 디버깅
