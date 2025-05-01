// auth.ts
import GoogleProvider from "next-auth/providers/google"; // import google provider for OAuth
import type { NextAuthOptions } from "next-auth"; // import NextAuth types

export const authConfig: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET, // setting secret for JWT (must be set in .env for production)
    providers: [
        GoogleProvider({clientId: process.env.GOOGLE_CLIENT_ID!, // getting google client id from env
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!, //getting google client secret from env
        }),
    ],
    session: {strategy: "jwt", // using JWT for session management
    },
    callbacks: {async session({ session }) { return session;},
    },
};
