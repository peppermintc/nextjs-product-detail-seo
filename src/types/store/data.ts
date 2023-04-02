/** 상품 상세 정보 */
interface ProductDetail {
  id: number;
  name: string;
  imageURL: string;
}

/** 상품 리스트 */
type ProductList = ProductDetail[];

export type { ProductDetail, ProductList };
