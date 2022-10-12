import type { AppProps } from 'next/app'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
