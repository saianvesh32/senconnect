"use server";
import styles from "./navbar.module.css"
import { auth } from "../../lib/auth";
import Links from "./links/Links"
 const Navbar = async() => {
  const session = await auth();
  return (
  
    <div className={styles.container}>
     <div className={styles.logo}>Srconnect</div>
      <div>
        <Links session={session}/>
      </div>
    </div>
  
  )
}


export default Navbar
