import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLEINT_SECRET,
        })
    ]
})
