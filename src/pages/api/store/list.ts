// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PRODUCT_LIST } from "@/constants/store";
import { GET_PRODUCT_LIST_RES } from "@/types/store/api";
import { delay } from "@/utils/common";
import type { NextApiRequest, NextApiResponse } from "next";

const GET_PRODUCT_LIST_RES_SAMPLE: GET_PRODUCT_LIST_RES = {
  list: PRODUCT_LIST,
  total: PRODUCT_LIST.length,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GET_PRODUCT_LIST_RES>
) {
  if (req.method === "GET") {
    delay(() => res.status(200).json(GET_PRODUCT_LIST_RES_SAMPLE), 2000);
  }
}
