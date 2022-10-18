import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const CreatePost = () => {
  const { data, error } = useSWR("/api/registerBook", fetcher)

  console.log(data, error)

  return (
    <h1>create</h1>
  )
}

export default CreatePost
