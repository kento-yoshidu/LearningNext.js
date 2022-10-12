import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"

import Layout from './components/Layout'
import Header from "./components/Header"
import AuthWrapper from './components/AuthWrapper'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </SessionProvider>
  )
}

export default MyApp
