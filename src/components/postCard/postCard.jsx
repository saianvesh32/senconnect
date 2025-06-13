import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"
const postCard = ({posts}) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      
       <div className={styles.top}>
        <div className={styles.imageContainer}>
          { posts.img && (<Image src={posts.img} alt=""className={styles.img2} fill/>) }
        </div>
        <span className={styles.date}>01.01.2024</span>
       </div>
       <div className={styles.bottom}>
        <h1 className={styles.title}>{posts.title}</h1>
        <p className={styles.desc}>{posts.body}</p>
        <Link href={`/blog/${posts.slug}`} className={styles.link}>READ MORE</Link>
       </div>

    </div>
  )
}

export default postCard
