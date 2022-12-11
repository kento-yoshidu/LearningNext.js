import { getProviders, signIn, signOut } from "next-auth/react"

import { InferGetServerSidePropsType } from 'next'

const Signin = ({
  providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>signin</h1>

      {Object.values(providers).map((provider) => {
        console.log(provider)

        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, {
              callbackUrl: "/"
            })}>
              Sign in with {provider.name}
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Signin

export const getServerSideProps = async () => {
  return {
    props: {
      providers: await getProviders()
    }
  }
}
