import Link from "next/link"
import type { NextPage } from 'next'

import Books from './components/books'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>

      <Link href="/postBook">登録</Link>

      <Books />
    </>
  )
}

export default Home
