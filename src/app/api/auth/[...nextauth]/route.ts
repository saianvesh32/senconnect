import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
// import { sql } from '@vercel/postgres';
import { db } from '../../../../lib/db';
const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        rollno: {},
        password: {},
      },
      async authorize(credentials, req) {
        //

        // const user = await db.User.findOne({ roll: credentials.rollno });
        // console.log(user);

        // if (!user) {
        //   return null;
        // }

        // const passwordCorrect = await compare(
        //   credentials.password,
        //   user.password
        // )

     

        // if (passwordCorrect) {
        //   return {
        //     id: user.id,
        //     email: user.email,
        //   };
        // }

        return null;
      },
    }),
  ],
})