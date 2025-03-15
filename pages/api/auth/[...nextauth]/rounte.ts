import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "../../../../lib/supabase";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name } = user;

      const { data, error } = await supabase
        .from("users")
        .upsert([{ email, name }], { onConflict: ["email"] });

      if (error) {
        console.error("Error saving user:", error);
        return false;
      }
      return true;
    },
  },
});
