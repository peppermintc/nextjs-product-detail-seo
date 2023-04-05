import { PRODUCT_DETAIL } from "@/types/data/store";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const ProductDetail = ({
  productDetail,
}: {
  productDetail: PRODUCT_DETAIL;
}) => {
  return (
    <>
      <h1>{productDetail.name}</h1>
      <h3>Product ID: {productDetail.id}</h3>

      <Image
        width={300}
        height={300}
        src={productDetail.imageURL}
        alt={`${productDetail.name} product image`}
      />

      <br />

      <Link href={"/store"}>Back to store page</Link>
    </>
  );
};

export default ProductDetail;
