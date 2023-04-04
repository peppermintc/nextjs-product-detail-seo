import { GET_PRODUCT_LIST_RES } from "@/types/store/api";
import { PRODUCT_LIST } from "@/types/store/data";

import Head from "next/head";
import { lazy } from "react";

const ProductList = lazy(() => import("@/components/ProductList"));

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://nextjs-product-detail-seo.vercel.app";

function Store({ productList }: { productList: PRODUCT_LIST }) {
  return (
    <>
      <Head>
        <title>Store Page</title>
        <meta name="description" content="Store page description" />
      </Head>

      <h1>Product List</h1>

      <ProductList productList={productList} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_BASE_URL}/api/store/list`);
  const data: GET_PRODUCT_LIST_RES = await res.json();
  const productList = data.list;

  return {
    props: {
      productList,
    },
  };
}

export default Store;
