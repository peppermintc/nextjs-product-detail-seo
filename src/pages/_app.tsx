import Loading from "@/components/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { isPageLoading } = usePageLoading();

  if (isPageLoading) return <Loading />;
  else return <Component {...pageProps} />;
}
