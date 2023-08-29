import React from 'react'
import { Stack, Link } from '@chakra-ui/react'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <>
        <Stack className={style.navbar} spacing={"50px"} direction={"row-reverse"} >
            <Link>Privacy Policy</Link>
            <Link>Contact</Link>
            <Link>Templates</Link>
            <Link>Home</Link>
        </Stack>
    </>
  )
}
