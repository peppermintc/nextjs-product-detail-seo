import { PRODUCT_DETAIL } from "@/types/data/store";
import NIKE_SHOE_IMAGE_1 from "@/img/nike_shoe_1.webp";
import NIKE_SHOE_IMAGE_2 from "@/img/nike_shoe_2.webp";
import NIKE_SHOE_IMAGE_3 from "@/img/nike_shoe_3.webp";

/** 상품 상세 정보 */
const PRODUCT_DETAIL_1: PRODUCT_DETAIL = {
  id: 1,
  name: "Product Name 1",
  imageURL: NIKE_SHOE_IMAGE_1,
};

const PRODUCT_DETAIL_2: PRODUCT_DETAIL = {
  id: 2,
  name: "Product Name 2",
  imageURL: NIKE_SHOE_IMAGE_2,
};

const PRODUCT_DETAIL_3: PRODUCT_DETAIL = {
  id: 3,
  name: "Product Name 3",
  imageURL: NIKE_SHOE_IMAGE_3,
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
