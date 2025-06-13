// import styles from "./singlePost.module.css";
// import Image from "next/image";
// import PostUser from "../../../components/postUser/postUser";
// import { Suspense } from "react";
// import { getPost } from "../../../lib/data";
// const getData=  async(slug)=>{
//   const res= await fetch(`https://blogapp321.vercel.app/api/blog/${slug}`,{cache:"no-store"});
//   if(!res.ok){
//      throw new Error("Something went wrong");
//   }
//   console.log("hmm");
//   return res.json();
//  }
// export const generateMetadata = async ({ params }) => {
//   "use server"
//   const { slug } = params;

//   const post = await getPost(slug);
// console.log(post)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

// const SinglePostPage = async({params}) => {
//   "use server"
//   console.log(params);
//   const {slug}= params;
// //fetch data with an api
//   const post = await getData(slug);

//   //fetch data without an api
//   // const post = await getPost(slug);
//   console.log(post)
//   return (
//     <div className={styles.container}>
//     { post.img && (
//       <div className={styles.imgContainer}>
//       <Image className={styles.img} src={post.img} alt="" fill/>
//      </div>
//     )}
//      <div className={styles.textContainer}>
//           <h1 className={styles.title}>{post.title}</h1>
//           <div className={styles.details}>
//                 { post &&  (<Suspense fallback={<div>Loading...</div>}>
//                 <PostUser userId={post.userId}/>
//                 </Suspense>)}
//                 <div className={styles.detailText}>
//                    <span className={styles.detailTitle}>Published</span>
//                    <span className={styles.detailValue}>01.01.2024</span>
//                 </div>
//           </div>
//           <div className={styles.content}>
//             {post.desc}
//           </div>
//      </div>
//     </div>
//   )
// }

// export default SinglePostPage
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>hello World</h1>
    </div>
  )
}

export default page
