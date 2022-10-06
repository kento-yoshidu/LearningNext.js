import type { NextPage } from 'next'
import useSWR from 'swr'

/*
async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json() as Promise<User | null>);
}
*/

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Home: NextPage = () => {
  const { data, error } = useSWR("https://www.googleapis.com/books/v1/volumes?q=夏目漱石", fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <img
        src={data.items[0].volumeInfo.imageLinks.thumbnail}
      />
    </div>
  )
}

export default Home
