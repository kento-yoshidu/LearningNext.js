import React from "react"
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <>
      <header>
        <h1>header</h1>

        {session ? (
          <>
            <h2>{session?.user?.name}さんでログイン中</h2>
            <button onClick={() => signOut()}>サインアウト</button>
          </>
        ) : (
          <>
            <button onClick={() => signIn()} >サインイン</button>
          </>
        )}
      </header>
    </>
  )
}

export default Header
