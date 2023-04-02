// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ERROR_RES } from "@/types/common/api";
import { GET_PRODUCT_DETAIL_RES } from "@/types/store/api";
import { delay } from "@/utils/common";
import { formatProductId, getProductDetail } from "@/utils/store";
import type { NextApiRequest, NextApiResponse } from "next";

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
