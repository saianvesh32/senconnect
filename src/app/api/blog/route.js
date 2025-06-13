// "use server"
// import connectToDb from "../../../lib/utils";
import connectToDb from "../../../lib/utils";
import {Post} from "../../../lib/models"
import { NextResponse } from "next/server";
export const GET = async()=>{
   try{
    console.log("heyy iam in route2") 
    await connectToDb();
    const posts= await Post.find();
    console.log(posts);
    return NextResponse.json(posts);
}catch(error){
    console.log(error);
    throw new Error("Failed to fetch posts!");
}

}