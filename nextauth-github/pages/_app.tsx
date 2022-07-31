import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"

import Layout from './components/Layout'
import Header from "./components/Header"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
