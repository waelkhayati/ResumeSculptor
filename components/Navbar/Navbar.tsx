import React from 'react'
import { Stack, Link } from '@chakra-ui/react'
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <>
        <Stack className={styles.navbar} direction={"row-reverse"} >
            <Link>Privacy Policy</Link>
            <Link>Contact</Link>
            <Link>Templates</Link>
            <Link>Home</Link>
        </Stack>
    </>
  )
}
