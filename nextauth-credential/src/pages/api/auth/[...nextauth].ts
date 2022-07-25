import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "User ID",
          type: "text",
          placeholder: "User ID"
        },
        password: {
          label: "Password",
          type: "password"
        },
      },
      authorize: async (credentials, req) => {
        /*
        DB認証
        const postData = {
          user_code: credentials?.usercode,
          password: credentials?.password,
        };
        */

        const user = { id: 1, name: "kento", email: "kento@example.co.jp" }

        if (user) {
          return user;
        } else {
          return null
        }
      }
    })
  ]
})
