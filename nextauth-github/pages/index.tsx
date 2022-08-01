import type { NextPage } from 'next'

import Link from "next/link"

import { useSession, signIn, signOut } from "next-auth/react"

import Main from './components/Main'
import PageTitle from './components/PageTitle'
import Button from './components/Button'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <PageTitle pageTitle="HOME" />

      <Main>
        {session ? (
          <>
            <h2>{session?.user?.name}さんでログインしています。</h2>

            <p className="border"><Link href="/item">アイテム一覧を見る</Link></p>
            {/*<button onClick={() => signOut()}>ログアウトする</button>*/}
            <Button
              func={signOut}
              text="ログアウトする" 
              />
          </>
        ) : (
          <>
            <h2>まだログインしていません。</h2>

            <Button
              func={signIn}
              text="ログインする"
            />

            <p><Link href="/item">アイテム一覧を見る</Link></p>
          </>
        )}
      </Main>
    </>
  )
}

export default Home
