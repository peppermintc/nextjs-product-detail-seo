import { PRODUCT_LIST } from "@/constants/store";
import { PRODUCT_DETAIL } from "@/types/store/data";

/**
 * 상품 리스트에서 ID로 상품 정보를 반환
 * @argument productId 상품 ID
 * @returns 상품 상세 정보
 */
const getProductDetail = (productId: number): PRODUCT_DETAIL | undefined => {
  const productDetail = PRODUCT_LIST.find(
    (product) => product.id === productId
  );

  return productDetail;
};

/**
 * Query String으로 전달 받은 ID 값을 Number 타입으로 변환
 * @argument id 상품 ID
 * @returns 상품 ID
 */
const formatProductId = (id: unknown): number | null => {
  return Number(id) || null;
};

export { getProductDetail, formatProductId };
