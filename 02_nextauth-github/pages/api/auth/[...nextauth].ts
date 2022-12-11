import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      /* @ts-ignore */
      clientId: process.env.GITHUB_ID,
      /* @ts-ignore */
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  pages: {
    signIn: "/auth/signin"
  }
})
