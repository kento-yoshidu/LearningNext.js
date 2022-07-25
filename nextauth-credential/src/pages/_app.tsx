import { SessionProvider } from 'next-auth/react'

import Header from '../components/Header'
import type { AppProps } from 'next/app'

import "../../styles/globals.css"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>

      <Header />

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
