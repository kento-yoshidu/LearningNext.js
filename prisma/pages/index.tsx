import type { NextPage } from 'next'

import Books from './components/books'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>

      <Books />
    </>
  )
}

export default Home
