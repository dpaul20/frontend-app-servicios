import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      id: string;
      email: string;
      name: string;
      image: string;
    };
  }
}
