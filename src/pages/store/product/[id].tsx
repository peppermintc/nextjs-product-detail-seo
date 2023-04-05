import MetaOpengraph from "@/components/MetaOpengraph";
import MetaTwitter from "@/components/MetaTwitter";
import ProductDetail from "@/components/ProductDetail";
import { GET_PRODUCT_DETAIL_RES } from "@/types/api/store";

import Head from "next/head";
import { GetServerSidePropsContext } from "next/types";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nextjs-product-detail-seo.vercel.app"
    : "http://localhost:3000";

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
          url={`${BASE_URL}/store/product/${productDetail.id}`}
        />

        <MetaTwitter
          card="summary"
          title={productDetail.name}
          description={`${productDetail.name} description`}
          image={productDetail.imageURL.src}
        />
      </Head>

      <ProductDetail productDetail={productDetail} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;
  const res = await fetch(`${BASE_URL}/api/store/product?id=${id}`);
  const productDetail: GET_PRODUCT_DETAIL_RES = await res.json();

  return {
    props: {
      productDetail,
    },
  };
}

export default Product;
