"use client"
import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLinks/navLinks";
import { handleLogout } from "../../../lib/action";
import { useState } from "react";
import Image from "next/image";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "students",
    path: "/about",
  },
  {
    title:"notifications",
    path:"/notifications",
  },
  {
    title: "Projects",
    path: "/contact",
  },
  {
    title: "placements",
    path: "/placements",
  },
];

const Links = ({session}) => {
   const [open,setOpen]=useState(false)
      // TEMPORARY
    // console.log("from Links section:   ",session.user);
   const isAdmin = true;
  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {
        links.map((link=>(
          <NavLink item={link} key={link.title} />
        )))
      }
      {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
              </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
    </div>
    <Image src="/menu.png" alt="" width={30} height={30}  className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}/>
    {
      open && <div className={styles.mobileLinks}>
        {
          links.map((link)=>(
            <NavLink item={link} key={link.title}/>
          ))
        }
      </div>
    }
        </div>
  )
}

export default Links
