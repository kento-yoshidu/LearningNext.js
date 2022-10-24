import useSWR from "swr"

/* @ts-ignore */
const fetcher = (...args: string[]) => fetch(...args).then(res => res.json())

const Books = ()=> {
  const { data, error } = useSWR("/api/getAllBooks", fetcher)

  if (error) return <div>An error has ocurred.</div>
  if (!data) return <div>Loading...</div>

  console.log(data.data)

  return (
    <>
      {data.data.map((d) => (
        <div key={d.id}>
          <p>id : {d.id}</p>
          <p>title: {d.title}</p>
          <hr />
        </div>
        ))}
    </>
  )
}

export default Books
