import styles from "./postUser.module.css"
import Image from "next/image";
import { getUser } from "../../lib/data";
// const getData=  async(userid)=>{
//     const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`,{cache:"no-store"});
//     if(!res.ok){
//        throw new Error("Something went wrong")
//     }
//     return res.json()
//    }
  
const postUser = async({userId}) => {
  //fetch data with an api
    // const post = await getData(userId)

    //fetch data without an api
    const user = await getUser(userId);
    console.log(user)
  return (
    <div className={styles.container}>
        <Image className={styles.avatar} src={user.img?user.img:"/noavatar.png"}  alt="" width={50} height={50}/>
        <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
        </div>

    </div>
  )
}

export default postUser
