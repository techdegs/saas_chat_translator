import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";

//this is called module augmentation
declare module 'next-auth'{
  interface Session{
    firebaseToken?: string;
    user:{
      id: string;
    } & DefaultSession["user"]
  }
}