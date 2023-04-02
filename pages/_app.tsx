import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop - наш лучший топ</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="st</link>ylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}
