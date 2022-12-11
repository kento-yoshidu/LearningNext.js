import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-screen flex flex-col align-center font-mono py-16">
    {children}
  </div>
)

export default Layout
