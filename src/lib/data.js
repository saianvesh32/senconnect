// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];
"use server";
import { Post } from "./models";
import { User } from "./models";
import connectToDb from "./utils"
import { unstable_noStore as noStore } from "next/cache";

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts= async()=>{
    try{
      connectToDb();
      console.log("hii");
    //   console.log(Post);
      const posts= await Post.find();
      console.log(posts)
      return posts;
    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
};
export const getPost= async(slug)=>{
    try{
        connectToDb();
        const post= await Post.findOne({slug});
        return post;
      }catch(error){
        console.log("Iam in error");
          console.log(error);
          throw new Error("Failed to fetch posts!");
      }

};
export const getUser = async(id)=>{
    noStore();
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    }
    catch(error){
        console.log(error);
        throw new Error("Failed to fetch user!");
    }

};
export const getUsers = async(id)=>{
    try{
        connectToDb();
        const users = await User.find();
        return users;
    }
    catch(error){
        console.log(error);
        throw new Error("Failed to fetch user!");
    }

};

