import axios from "axios";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@dominio.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const response = await axios.post(
          process.env.BACKEND_URL + "/auth/signin",
          {
            email: credentials.email,
            password: credentials.password,
          }
        );

        if (response.status === 401 || response.status === 400) {
          throw new Error("Invalid credentials");
        }

        return {
          email: response.data.email,
          name: response.data.name,
          image: response.data.image,
          id: response.data.id,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
