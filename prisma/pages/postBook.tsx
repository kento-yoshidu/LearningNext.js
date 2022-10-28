import React, { ReactSVG } from "react"
import { useRouter } from "next/router"

const PostBook = () => {
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    const data = {
      title: e.target.title.value
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/registerBook'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)

    console.log({ response })

    if (response.ok) {
      router.push("/")
    } else {
      router.push("/error")
    }
  }

  return (
    <>
      <h1>postBook</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">First name:</label>
        <input type="text" id="title" name="title" />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PostBook

// https://zenn.dev/tiwu_dev/articles/a7ebe4d36e4b74
