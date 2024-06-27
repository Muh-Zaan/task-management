import { comparePassword } from "@/helper/hashPassword";
import { JwtTokenGenerate } from "@/helper/parseJwtToken";
import { loginConteoller } from "@/lib/controller/user";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7200,
  },
  secret: "secret",
  providers: [
    CredentialsProvider({
      name: "creadentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(creadentials: any) {
        const { email, password } = creadentials as {
          email: string;
          password: string;
        };

        const data: any = {};
        const user = (await loginConteoller(email, password)) as any;
        if (!user) {
          throw new Error(
            `${email} is not registed, please register firts or check again your email`
          );
        }

        const isMathPassword = await comparePassword(user.password, password);
        if (!isMathPassword) {
          throw new Error("Password not match with this email");
        }

        data.id = user.id;
        data.username = user.username;
        data.email = user.email;
        data.photo_profile = user.photo_profile;
        data.created_datetime = user.created_datetime;
        data.updated_datetime = user.updated_datetime;
        return data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.photo_profile = user.photo_profile;
        token.created_datetime = user.created_datetime;
        token.updated_datetime = user.updated_datetime;
        token.accessToken = JwtTokenGenerate({
          id: user.id,
          email: user.email,
        });
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.photo_profile = token.photo_profile;
      session.user.created_datetime = token.created_datetime;
      session.user.updated_datetime = token.updated_datetime;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
