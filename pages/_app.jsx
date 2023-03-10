import 'tailwindcss/tailwind.css'
import Head from "next/head";
import  { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="8A3H1eHioWrjGmLYdNK9Hp_ub_gGdR1sO1OA_nerpGU" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
