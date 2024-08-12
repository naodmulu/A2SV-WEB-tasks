import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: { email: string; password: string; }) {
          const formData = JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          });
  
          try {
            const response = await axios.post(
              "https://akil-backend.onrender.com/login",
              formData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
  
            if (response.status === 200) {
              return response.data;  
            }
          } catch (err) {
            console.error(err);
            return null; 
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.accessToken = user.accessToken;  
        }
        return token;
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken;  
        return session;
      },
    },
  });

export {handler as GET, handler as POST}


