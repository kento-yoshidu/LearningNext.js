import React from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import ProtectedRouter from "./ProtectedRoute"

const authRoutes = ["/item"]

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const session = useSession()

  if (session.status === 'loading') {
    return null
  }

  return (
    <>
      {authRoutes.includes(router.pathname) ? (
        <ProtectedRouter>{children}</ProtectedRouter>
      ) : (
        children
      )}
    </>
  )
}

export default AuthWrapper
