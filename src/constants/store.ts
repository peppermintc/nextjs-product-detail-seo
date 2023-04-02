import { ProductDetail } from "@/types/store/data";

/** 상품 상세 정보 */
const PRODUCT_DETAIL_1: ProductDetail = {
  id: 1,
  name: "Product Name 1",
  imageURL: "../img/nike_shoe_1.webp",
};

const PRODUCT_DETAIL_2: ProductDetail = {
  id: 2,
  name: "Product Name 2",
  imageURL: "../img/nike_shoe_2.webp",
};

const PRODUCT_DETAIL_3: ProductDetail = {
  id: 3,
  name: "Product Name 3",
  imageURL: "../img/nike_shoe_3.webp",
};

/** 상품 리스트 */
const PRODUCT_LIST = [PRODUCT_DETAIL_1, PRODUCT_DETAIL_2, PRODUCT_DETAIL_3];

export {
  /** 상품 상세 정보 */
  PRODUCT_DETAIL_1,
  PRODUCT_DETAIL_2,
  PRODUCT_DETAIL_3,

  /** 상품 리스트 */
  PRODUCT_LIST,
};
