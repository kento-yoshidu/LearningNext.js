import Link from "next/link"
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <h1>React-hook-form</h1>

      <Link href="/post">Post</Link>
    </>
  )
}

export default Home
