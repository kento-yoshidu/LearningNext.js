import { GetServerSideProps } from "next"
import { useEffect } from "react"
import useSWR from "swr"
import prisma from "../lib/prisma"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const CreatePost = ({ result }) => {
  return (
    <>
      <h1>create</h1>
    </>
  )
}

export default CreatePost


export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch("http://localhost:3000/api/registerBook")

  return  {
    props: { result }
  }
}
