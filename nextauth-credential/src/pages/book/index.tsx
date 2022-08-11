import { GetStaticProps } from "next"
import { PrismaClient } from "@prisma/client"

import type { Book } from "../../../@types/types"

const Book = ({ books }: { books: Book[] }) => (
  <>
    {books.map((book) => (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
      </div>
    ))}
  </>
)

export default Book

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient() 
  const books = await prisma.book.findMany()

  return {
    props: { books }
  }
}
