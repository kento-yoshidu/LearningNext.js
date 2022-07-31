import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="bg-gradient-to-tr from-violet-500 via-blue-400 to-cyan-500 h-screen">
    {children}
  </div>
)

export default Layout
