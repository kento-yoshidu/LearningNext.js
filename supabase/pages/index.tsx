import type { NextPage } from 'next'
import { GetStaticProps } from "next"
import prisma from "../lib/prisma"

const Home: NextPage = (props) => {
  console.log(props)
  return (
    <h1>Next.js with Supabase</h1>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
