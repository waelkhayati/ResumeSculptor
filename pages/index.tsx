import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import style from "../styles/home.module.css"

export default function Home() {
  return (
    <body className={style.body}>
      <Navbar/>
      <Box className={style.hero}>
        <h1>Welcome to ResumeSculptor</h1>
      </Box>
    </body>
  )
}
