import { ProductDetail, ProductList } from "./data";

/** 상품 상세 정보 응답 */
type GET_PRODUCT_DETAIL_RES = ProductDetail;

/** 상품 리스트 응답 */
interface GET_PRODUCT_LIST_RES {
  list: ProductList;
  total: number;
}

export type {
  /** 상품 상세 정보 응답 */
  GET_PRODUCT_DETAIL_RES,
  /** 상품 리스트 응답 */
  GET_PRODUCT_LIST_RES,
};
