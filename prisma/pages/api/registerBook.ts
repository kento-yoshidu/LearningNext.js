import prisma from "../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await prisma.book.create({
      data: {
        title: req.body.title
      }
    })

    res.status(200).json({
      data: "OK"
    })
  } catch (err) {
    res.json({
      ok: false, err
    })
  }
}

export default handler
