import { PRODUCT_DETAIL, PRODUCT_LIST } from "./data";

/** 상품 상세 정보 응답 */
type GET_PRODUCT_DETAIL_RES = PRODUCT_DETAIL;

/** 상품 리스트 응답 */
interface GET_PRODUCT_LIST_RES {
  list: PRODUCT_LIST;
  total: number;
}

export type {
  /** 상품 상세 정보 응답 */
  GET_PRODUCT_DETAIL_RES,
  /** 상품 리스트 응답 */
  GET_PRODUCT_LIST_RES,
};
