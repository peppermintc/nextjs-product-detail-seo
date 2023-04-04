import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page description" />
      </Head>

      <Link href="/store">스토어 페이지로 이동</Link>
    </>
  );
}
