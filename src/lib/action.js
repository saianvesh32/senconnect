"use server";

import { revalidatePath } from "next/cache";
import {signIn,signOut} from "./auth";
import connectToDb from "./utils";
import { Post,User,MeetupRequest } from "./models";
import bcrypt from "bcryptjs";
export const addPost = async (prevState,formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId ,img} = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

//adding User
export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


//deleting User
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


// export const sendRequest=async(newRequest)=>{
//   try{
//     console.log("hii broo iam in sendRequest");
//     connectToDb();
//     const newRequest = new Request({
//       juniorId,
//       seniorId,
//       date,
//       timeFrom,
//       timeTo
//     });
//     console.log("request sent*****************",newRequest);
//     await newRequest.save();
//     console.log("saved to db");
//     return {success:true};
//   }catch(error){
//     console.log(error);
//     return {error: "Something went wrong"};
//   }
// }


export const sendRequest = async (data) => {
  try {
    console.log("hii broo iam in sendRequest..................");
    await connectToDb(); // Await the DB connection
    console.log("hii broo iam in sendRequest..................2");

    const { juniorId, seniorId, date, timeFrom, timeTo } = data; // Extract data
    console.log("hii broo iam in sendRequest..................3");


    const newRequest = new MeetupRequest({
      juniorUser: juniorId,
      seniorUser: seniorId,
      date,
      timeFrom,
      timeTo,
    });
    console.log("hii broo iam in sendRequest..................4");

    console.log("Request sent:", newRequest);
    await newRequest.save(); // Save the request
    console.log("Saved to DB");
    return { success: true };
  } catch (error) {
    console.error("Error saving request:", error);
    return { success: false, error: "Something went wrong" };
  }
};











  export const handleGithubLogin = async () => {
    "use server"
    await signIn('github');
};
export const handleLogout= async () => {
  "use server"
  await signOut();
};

export const register = async(previousState ,formData)=>{
  const {username,email,password,img,passwordRepeat} = Object.fromEntries(formData)
  if(password!==passwordRepeat){
    return {error:"Passwords do not match"};
  }
  try{
    connectToDb();
    const user = await User.findOne({username});
    if(user){
      return {error:"Username already exists"};
    }    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
      username,
      email,
      password:hashedPassword,
      img
    })
    await newUser.save();
    console.log("saved to db");
    return {success:true};
  }catch(error){
    console.log(error);
    return {error: "Something went wrong"};

  }
};

export const login = async(prevState,formData)=>{
  const {username,password} = Object.fromEntries(formData);
  console.log("not logged in");
  try{
    
   await signIn("credentials",{username,password});
   console.log("logged in");
  }catch(err){
    console.log(err);
    if (err.message.includes("Wrong credentials!")) {
      return { error: "Invalid username or password" };
    } 
   throw err;
  }
}

