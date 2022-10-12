import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
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
