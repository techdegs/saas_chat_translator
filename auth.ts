import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { adminDb } from "./firebaseAdmin";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  //add user id to user details after login 
  //Custom callbacks to show user in firestore (google signin)
  callbacks:{
    session: async({session, token}) => {
      if(session?.user){
        if(token.sub){
          session.user.id = token.sub;
          //create next-auth.d.ts file to solve this id error
        }
      }
      return session;
    },
    jwt: async({user, token}) => {
      if(user){
        token.sub = user.id
      }
      return token;
    }
  },
  session: {
    strategy: "jwt",
  },
  adapter: FirestoreAdapter(adminDb)
} satisfies NextAuthOptions;