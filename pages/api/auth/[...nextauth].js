import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: '592872620291-3ngod31jglnsh8vijjevmv15gs0ve67u.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ]
})
