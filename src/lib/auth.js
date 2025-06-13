import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import connectToDb from "./utils";
import { User } from "./models";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// const  login = async(credentials)=>{
//     try{
//         connectToDb();
//         const user = await User.findOne({username:credentials.username});
//         console.log("hii iam in login auth.js");
//         if(!user){
//             throw new Error("Wrong credentials!");

//         }
//         console.log("before password match");
//         const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
//         console.log("password matched");
//         if(!isPasswordCorrect){

//             throw new Error("Wrong credentials!");
//         }
//         console.log("ready to return user");
//         return user;
//     }catch(err){
//         console.log("iam very bad");
//         console.log(err);
//         throw new Error("failed to login!")
//     }
// }
const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      //     async authorize(credentials){
      //         try{
      //             const user = await login(credentials);
      //             console.log("iam good");
      //             return user;
      //         }catch(error){
      //             console.log("iam not good");
      //             console.log(error);
      //             return null;
      //     }
      // }
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // async signIn({user,account,profile}){
    //     console.log(profile);
    //   if(account.provider==="github"){
    //     console.log("iam in github")
    //     connectToDb();
    //     try{
    //         console.log("hello iam in try")
    //         const user= await User.findOne({email:profile.email});

    //         if(!user){
    //             console.log("iam in second time try")
    //            const newUser = new User({
    //             username:profile.login,
    //             email:profile.email,
    //             image:profile.avatar_url,
    //            });
    //            console.log("newUser is the one:",newUser)
    //            await newUser.save();
    //         }
    //     }catch(error){
    //         console.log(error);
    //         return false;
    //     }
    //     return true;
    // }
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
