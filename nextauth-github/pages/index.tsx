import type { NextPage } from 'next'

import Link from "next/link"

import { useSession, signIn, signOut } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <h1>Next-auth テストサイト</h1>

      {session ? (
        <>
          <h2>{session?.user?.name}さんでログインしています。</h2>

          <p><Link href="/item">アイテム一覧を見る</Link></p>
          <button onClick={() => signOut()}>ログアウトする</button>
        </>
      ) : (
        <>
          <h2>まだログインしていません。</h2>

          <button onClick={() => signIn()}>Sign in</button>
          <p><Link href="/item">アイテム一覧を見る</Link></p>
        </>
      )}
    </>
  )
}

export default Home
