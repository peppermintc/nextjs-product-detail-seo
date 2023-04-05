import MetaOpengraph from "@/components/MetaOpengraph";
import { GET_PRODUCT_DETAIL_RES } from "@/types/store/api";

import Head from "next/head";
import { GetServerSidePropsContext } from "next/types";
import { lazy } from "react";

const ProductDetail = lazy(() => import("@/components/ProductDetail"));

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://nextjs-product-detail-seo.vercel.app";

function Product({ productDetail }: { productDetail: GET_PRODUCT_DETAIL_RES }) {
  return (
    <>
      <Head>
        <title>{productDetail.name}</title>
        <meta name="description" content="Product page description" />

        <MetaOpengraph
          type="website"
          title={productDetail.name}
          description={`${productDetail.name} description`}
          image={productDetail.imageURL.src}
          url={`${API_BASE_URL}/store/product/${productDetail.id}`}
        />
      </Head>

      <ProductDetail productDetail={productDetail} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;
  const res = await fetch(`${API_BASE_URL}/api/store/product?id=${id}`);
  const productDetail: GET_PRODUCT_DETAIL_RES = await res.json();

  return {
    props: {
      productDetail,
    },
  };
}

export default Product;
