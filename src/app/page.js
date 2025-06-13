"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Home = () => {

  return (
    <div className="relative overflow-hidden w-full">
     
      <h1 className="text-3xl text-indigo-50  text-center">
        Our seniors are the backbone of our communities, offering a wealth of
        experience, wisdom, and stories that deserve to be celebrated and shared.
      </h1>
      <div className="pt-10 whitespace-nowrap overflow-hidden">
        <div className="flex animate-scroll">
          {/* Add your images here */}
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img1.png"
              alt="Image 1"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img2.png"
              alt="Image 2"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img3.png"
              alt="Image 3"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img4.png"
              alt="Image 4"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          {/* Duplicate images for continuous scrolling effect */}
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img1.png"
              alt="Image 1"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img2.png"
              alt="Image 2"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img3.png"
              alt="Image 3"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex-shrink-0 mr-4"> {/* Added margin-right */}
            <Image
              src="/img4.png"
              alt="Image 4"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
// "use client";

// import Image from "next/image";
// import { useSession } from "next-auth/react";
// // import { getUser } from "../lib/data";
// const Home = () => {

//   // console.log(user.id);
//   // console.log("from Home:::::   ",session.user)
//   // const  userbyId = await getUser(user.id);
//   // console.log("userbyId$$$$$$$$$$$$$$$$$$$$    ", userbyId)
//   return (
//     <div className="relative overflow-hidden w-full">
//       <h1 className="text-3xl text-indigo-50 text-center">
//         Our seniors are the backbone of our communities, offering a wealth of
//         experience, wisdom, and stories that deserve to be celebrated and shared.
//       </h1>

//       {/* Conditionally render user details if the user is logged in */}
//       {user && (
//         <div className="user-details text-center mt-6">
//           <h2 className="text-lg">{user.id}</h2>
//           <p className="text-lg">Email: {user.email}</p>
//           {user.img && (
//             <div className="flex justify-center mt-4">
//               <Image
//                 src={user.img}  // Assuming the 'img' field contains the image URL
//                 alt={user.username}
//                 width={100}
//                 height={100}
//                 className="rounded-full"
//               />
//             </div>
//           )}
//         </div>
//       )}

//       <div className="pt-10 whitespace-nowrap overflow-hidden">
//         <div className="flex animate-scroll">
//           {/* Your scrolling images */}
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img1.png"
//               alt="Image 1"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img2.png"
//               alt="Image 2"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img3.png"
//               alt="Image 3"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img4.png"
//               alt="Image 4"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           {/* Duplicate images for continuous scrolling */}
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img1.png"
//               alt="Image 1"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img2.png"
//               alt="Image 2"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img3.png"
//               alt="Image 3"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//           <div className="flex-shrink-0 mr-4">
//             <Image
//               src="/img4.png"
//               alt="Image 4"
//               width={200}
//               height={200}
//               className="w-48 h-48 object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Add animation styles */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 15s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;
