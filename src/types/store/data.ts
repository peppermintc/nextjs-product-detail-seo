/** 상품 상세 정보 */
interface PRODUCT_DETAIL {
  id: number;
  name: string;
  imageURL: string;
}

/** 상품 리스트 */
type PRODUCT_LIST = PRODUCT_DETAIL[];

export type { PRODUCT_DETAIL, PRODUCT_LIST };
