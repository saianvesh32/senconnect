import Image from "next/image"
import styles from "./about.module.css"
import Temp  from "../../components/temp/page"

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div>
        <Temp/>
    </div>
  )
}

export default AboutPage
