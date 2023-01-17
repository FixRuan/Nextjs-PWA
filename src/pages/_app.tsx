import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next PWA</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}