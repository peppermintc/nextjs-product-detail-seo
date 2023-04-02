import { ProductDetail } from "@/types/store/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const ProductDetail = ({ productDetail }: { productDetail: ProductDetail }) => {
  return (
    <>
      <h1>{productDetail.name}</h1>
      <h3>Product ID: {productDetail.id}</h3>

      <Image
        src={productDetail.imageURL}
        alt={`${productDetail.name} product image`}
      />

      <Link href={"/store"}>Back to store page</Link>
    </>
  );
};

export default ProductDetail;
