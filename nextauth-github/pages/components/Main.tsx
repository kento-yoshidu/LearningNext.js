import type { ReactNode } from "react"

const Main = ({ children }: { children: ReactNode }) => (
  <main className="h-96 m-8 w-1/2 mx-auto border">
    {children}
  </main>
)

export default Main
