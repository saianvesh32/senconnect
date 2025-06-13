import connectToDb from "../../../../lib/utils";
import {Post} from "../../../../lib/models"
import { NextResponse } from "next/server";
export const GET = async(request,{params})=>{
   try{
    const {slug}= params;
    console.log("heyy iam in route5") 
    await connectToDb();
    const post= await Post.findOne({slug});
    console.log(post);
    return NextResponse.json(post);
}catch(error){
    console.log(error);
    throw new Error("Failed to fetch posts!");
}

}