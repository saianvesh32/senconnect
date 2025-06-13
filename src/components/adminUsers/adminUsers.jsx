// import { getUsers } from "../../lib/data";
// import styles from "./adminUsers.module.css";
// import Image from "next/image";
// import { deleteUser } from "../../lib/action";

//  const AdminUsers = async () => {
//   const users = await getUsers();

//   return (
//     <div className={styles.container}>
//       <h1>Users</h1>
//       {users.map((user) => (
//         <div className={styles.user} key={user.id}>
//           <div className={styles.detail}>
//             <Image
//               src={user.img || "/noAvatar.png"}
//               alt=""
//               width={50}
//               height={50}
//             />
//             <span>{user.username}</span>
//           </div>
//           <form action={deleteUser}>
//             <input type="hidden" name="id" value={user.id} />
//             <button className={styles.userButton}>Delete</button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminUsers;
// "use client";

// import styles from "./adminUsers.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import Search from "../search/page"; // Ensure this path is correct

// const AdminUsers = ({ plainUsers }) => {
//   const [filters, setFilters] = useState({ query: "", year: "", branch: "" });
//   const [users, setUsers] = useState(plainUsers);

//   function handleFilterChange(newFilters) {
//     setFilters(newFilters);
//   }

//   // Filter the users based on the search term, year, and branch
//   const filteredPlainUsers = plainUsers.filter((user) => {
//     const matchesQuery =
//       user.username?.toLowerCase().includes(filters.query.toLowerCase()) ||
//       user.email?.toLowerCase().includes(filters.query.toLowerCase());

//     const matchesYear = filters.year ? user.year?.toString() === filters.year : true;
//     const matchesBranch = filters.branch
//       ? user.branch?.toLowerCase() === filters.branch.toLowerCase()
//       : true;

//     return matchesQuery && matchesYear && matchesBranch;
//   });

//   return (
//     <div
//       className={`p-6 ${styles.container} bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen`}
//     >
//       {/* Search Component */}
//       <div className="mb-6">
//         <Search placeholder="Search users..." onFilterChange={handleFilterChange} />
//       </div>

//       {/* User List */}
//       {filteredPlainUsers.length > 0 ? (
//         filteredPlainUsers.map((user) => (
//           <div
//             className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-4 mb-4 flex items-center justify-between"
//             key={user._id}
//           >
//             <Link href={`/about/${user._id}`}>
//               <div className="flex items-center space-x-4 cursor-pointer">
//                 <Image
//                   className="rounded-full"
//                   src={user.img || "/noAvatar.png"}
//                   alt=""
//                   width={50}
//                   height={50}
//                 />
//                 <div className="text-lg font-semibold text-gray-800">
//                   <span>{user.username}</span>
//                   <div className="text-sm text-gray-500">
//                     <span>{user.year} year</span>
//                     <span> | {user.branch}</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//             <form>
//               {/* Add any additional buttons or forms here */}
//             </form>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-red-500 font-medium">No users found</p>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;

"use client";
// import Link from "next/link";
// import styles from "./links.module.css"; // You can still use this for custom styles if needed
// import NavLink from "./navLinks/navLinks";
import { useState } from "react";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/outline"; // Tailwind heroicons for notifications

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "Students",
    path: "/students",
  },
  {
    title: "Posts",
    path: "/posts",
  },
  {
    title: "Placements",
    path: "/placements",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const isAdmin = true;

  return (
    <div className="flex items-center justify-between p-4">
      {/* Links */}
      <div className="flex items-center space-x-6">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {/* Notification Icon */}
        <button className="focus:outline-none">
            <BellIcon className="h-6 w-6 text-white"/>
        </button>

        {/* Login Button */}
        <NavLink item={{ title: "Login", path: "/signin" }} />
      </div>

      {/* Mobile Menu Button */}
      <Image
        src="/menu.png"
        alt="Menu"
        width={30}
        height={30}
        className="cursor-pointer md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Mobile Links */}
      {open && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
