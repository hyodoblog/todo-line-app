import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'

// import CredentialsProvider from 'next-auth/providers/credentials'
import LineProvider from 'next-auth/providers/line'

export const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   credentials: {},
    //   authorize: async ({ idToken }: any, _req) => {
    //     if (idToken) {
    //       try {
    //         console.info(idToken)
    //         return {
    //           id: '',
    //           name: '',
    //           email: '',
    //           image: ''
    //         }
    //       } catch (err) {
    //         console.error(err)
    //       }
    //     }
    //     return null
    //   }
    // })
    LineProvider({
      clientId: String(process.env.LINE_CLIENT_ID),
      clientSecret: String(process.env.LINE_CLIENT_SECRET)
    })
  ]
}

export default NextAuth(authOptions)
