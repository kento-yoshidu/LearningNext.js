import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="bg-gradient-to-tr from-violet-500 via-blue-400 to-cyan-500 h-screen flex flex-col align-center font-mono py-16">
    {children}
  </div>
)

export default Layout
