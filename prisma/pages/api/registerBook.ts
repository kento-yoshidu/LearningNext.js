import prisma from "../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.post.create({
      data: {
        title: "test"
      }
    })

    res.json({
      ok: true
    })

    return data
  } catch (err) {
    res.json({
      ok: false, err
    })

    return "error"
  }
}

export default handler
