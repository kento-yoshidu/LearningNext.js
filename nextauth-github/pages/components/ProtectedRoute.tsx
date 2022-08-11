import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  // authenticated or unauthenticated or loading
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push("/auth/signin")
    }
  }, [router, status])

  if (status === 'unauthenticated') {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRouter

