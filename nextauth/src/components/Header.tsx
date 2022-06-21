import React from "react"
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <>
      <header>
        <h1>header</h1>

        {session?.user?.name && (
          <>
            <h2>{session.user.name}さんでログイン中</h2>
          </>
        )}
      </header>
    </>
  )
}

export default Header
