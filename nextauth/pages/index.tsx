import { signIn, signOut, useSession } from "next-auth/react"
import type { NextPage } from "next"
import { stat } from "fs"

const Home: NextPage = () => {
  const {data: session, status} = useSession()

  if (status === "loading") {
    return <div>...Loading...</div>
  }

  console.log(session)

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
