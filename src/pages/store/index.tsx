import ProductList from "@/components/ProductList";
import { GET_PRODUCT_LIST_RES } from "@/types/api/store";
import { PRODUCT_LIST } from "@/types/data/store";

import Head from "next/head";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nextjs-product-detail-seo.vercel.app"
    : "http://localhost:3000";

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
  const res = await fetch(`${BASE_URL}/api/store/list`);
  const data: GET_PRODUCT_LIST_RES = await res.json();
  const productList = data.list;

  return {
    props: {
      productList,
    },
  };
}

export default Store;
