import prisma from "../../lib/prisma"

const getAllBoos = async (req, res) => {
  try {
    const result = await prisma.post.findMany()

    res.json({

    })
  } catch (e) {
    console.log(e)

    res.json({
      status: "500"
    })
  }
}