import type { NextPage } from 'next'
import { GetStaticProps } from "next"
import prisma from "../lib/prisma"

const Home: NextPage = ({ books }) => {
  console.log(books)
  return (
    <>
      {books.map((book) => (
        <>
          <h1>{book.title}</h1>
          <p>{book.isbn}</p>
          <p>{book.rating}</p>
        </>
      ))}
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
