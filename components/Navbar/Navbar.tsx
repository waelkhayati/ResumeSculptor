import React from 'react'
import { Stack, Link } from '@chakra-ui/react'
export default function Navbar() {
  return (
    <>
        <Stack direction={"row-reverse"} >
            <Link>Privacy Policy</Link>
            <Link>Contact</Link>
            <Link>Templates</Link>
            <Link>Home</Link>
        </Stack>
    </>
  )
}
