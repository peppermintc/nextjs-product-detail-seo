import { PRODUCT_LIST } from "@/types/store/data";
import Link from "next/link";
import React from "react";

const ProductList = ({ productList }: { productList: PRODUCT_LIST }) => {
  return (
    <section>
      {productList.map((product, index) => (
        <li key={index}>
          <Link href={`/store/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </section>
  );
};

export default ProductList;
