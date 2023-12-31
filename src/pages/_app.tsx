import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Min Thant Khaing | Backend Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
