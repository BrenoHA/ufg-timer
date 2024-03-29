/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>UFG Timer 🕓</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="title" content="UFG Timer 🕓" />
        <meta
          name="description"
          content="Para você que não aguenta mais esse semestre e quer saber quando isso tudo vai acabar 👍"
        />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta property="og:title" content="UFG Timer 🕓" />
        <meta
          property="og:description"
          content="Para você que não aguenta mais esse semestre e quer saber quando isso tudo vai acabar 👍"
        />
        <meta property="og:image" content="https://i.ibb.co/xJmbv2L/Thumb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
        <meta property="twitter:title" content="UFG Timer 🕓" />
        <meta
          property="twitter:description"
          content="Para você que não aguenta mais esse semestre e quer saber quando isso tudo vai acabar 👍"
        />
        <meta property="twitter:image" content="https://i.ibb.co/xJmbv2L/Thumb.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
