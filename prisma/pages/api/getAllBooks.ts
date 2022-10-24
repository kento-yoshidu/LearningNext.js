import prisma from "../../lib/prisma"

import { NextApiHandler } from "next"

const getAllBooks: NextApiHandler = async (req, res) => {
  try {
    const data = await prisma.book.findMany()

    res.status(200).json({
      data
    })
  } catch (e) {
    res.json({
      name: "error"
    })
  }
}

export default getAllBooks
