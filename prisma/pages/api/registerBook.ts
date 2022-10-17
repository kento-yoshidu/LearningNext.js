import prisma from "../../lib/prisma"

const handler = async (req, res) => {
  try {
    await prisma.post.create({
      data: {
        id: 100,
        title: "test"
      }
    })

    res.json({
      ok: true
    })

    return
  } catch (err) {
    res.json({
      ok: false, err
    })
  }
}

export default handler
