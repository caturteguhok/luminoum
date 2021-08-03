import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/Home.module.scss";

const App = ({ Component, pageProps }: AppProps) => {
 return (
  <>
   <Head>
    <title>Luminoum</title>
    {/* Primary Meta Tags */}
    <meta name="title" content="Luminoum" />
    <meta name="description" content="Luminoum" />
    <meta name="theme-color" content="#092c52" />
    {/* Favicon */}
    <link rel="icon" href="http://luminoum.com/dev/images/logo.png" />
    {/* Fonts */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
     href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap"
     rel="stylesheet"
    />
   </Head>
   <Component {...pageProps} />
  </>
 );
};

export default App;
