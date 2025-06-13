
// import { getUser } from "../../../lib/data";
// import Image from "next/image";
// // import Projects from "../../../components/projects/page" 
// import MeetupBtn from "../../../components/MeetupBtn/MeetupBtn"
// // Fetch user data based on the user ID from the API
// const getData = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/profiles/${id}`, { cache: "no-store" });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };


// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;
//   const user = await getUser(slug);
//   return {
//     title: `${user.year}'s Profile`,
//     description: `Profile of ${user.year}`,
//   };
// };

// const SingleProfilePage = async ({ params }) => {
//   const { slug } = params;
//   const user = await getData(slug);

//   return (
        
//     <div className="relative p-4 bg-gray-100">
//       {/* Profile card container */}
//       <div className="flex">
//       <div className="relative pb-36 left-2 p-6 bg-white rounded-lg shadow-md w-64">
//         <div className="flex items-center mb-4">
//           {/* Placeholder avatar image; replace with a real image URL if available */}
//           <Image
//            src={"/noAvatar.png"} // Replace with actual avatar URL if available
//             alt="User Avatar"
//             width={80}
//             height={80}
//             className="rounded-full"
//           />
//           <div className="ml-4">
//             <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
//             <p className="text-sm text-gray-500">{user.email}</p>
//           </div>
//         </div>
//         <div className="mt-4">
//           <p className="text-lg text-gray-700"><strong>Year:</strong> {user.year}</p>
//           <p className="text-lg text-gray-700"><strong>Branch:</strong> {user.branch}</p>
//         </div>
        
//       </div>
//       <div  className="relative left-10 ">
//           <MeetupBtn seniorId={slug} juniorId={'66f0ed1cfea24af2bd5e21f0'}/>
//       </div>
//       </div>
//       //projects
//       <div className="p-4 flex gap-4">
//         <h1 className="text-3xl">Projects :</h1>
//         <div className="projectcards text-black">
//             <div className="eachproject">
//                 <h3 className="text-black text-xl">Project Name</h3>
//                 <p className="text-black text-lg">Description</p>
//                 <p className="text-black text-lg">Github Link</p>
//             </div>
//         </div>
//         <div className="projectcards">
//             <div className="eachproject">
//                 <h3 className="text-black text-xl">Project Name</h3>
//                 <p className="text-black text-lg">Description</p>
//                 <p className="text-black text-lg">Github Link</p>
//             </div>
//         </div>
//       </div>
//       <div>
//         {/* <Projects/> */}
//       </div>

//     </div>
    
//   );
// };

// export default SingleProfilePage;

import React from 'react'

const page = () => {
  return (
    <div>
      <h1>slug</h1>
    </div>
  )
}

export default page
