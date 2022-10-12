import type { NextPage } from 'next'

import "../src/components/SearchResult"
import { SearchResultField } from '../src/components/SearchResult'

const Home: NextPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <h1>Next.js</h1>

      <SearchResultField />
    </>

  )
}

export default Home
