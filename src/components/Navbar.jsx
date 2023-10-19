import { Stack } from '@mui/material'
import React from 'react'
import { logo } from './utils/constant'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
export default function Navbar() {
  return (
    <Stack
    direction={"row"}
    alignItems={"center"}
    p={2}
    sx={{position:'sticky',top:'0',justifyContent:'space-between'}}
    >
        <Link to={'/'} style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt='logo' height={45}></img>
        </Link>
      <SearchBar />
    </Stack>
  )
}
