import type { ReactNode } from "react"

const Main = ({ children }: { children: ReactNode }) => (
  <main className="h-96 p-8 m-8 w-1/2 mx-auto bg-white/20 backdrop-blur-sm rounded text-center">
    {children}
  </main>
)

export default Main
