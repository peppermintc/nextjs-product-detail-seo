import { ProductList } from "@/types/store/data";
import Link from "next/link";
import React from "react";

const ProductList = ({ productList }: { productList: ProductList }) => {
  return (
    <section>
      {productList.map((product, index) => (
        <Link key={index} href={`/store/product/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </section>
  );
};

export default ProductList;
