"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const NavigationTestPage = () => {

  const router=useRouter();

  const handleClick=()=>{
    console.log("clicked")
    router.push("/")
  }
  return (
    <div>
      <Link href="/" prefetch={false}>click here</Link>
      <button onClick={handleClick}>write and redirect</button>
    </div>
  )
}

export default NavigationTestPage
