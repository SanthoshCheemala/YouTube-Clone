import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import {Search} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
export default function SearchBar() {
    const [searchTerm,setsearchTerm] = useState('')
    const navigate = useNavigate();
    function handlesubmit(e){
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setsearchTerm('');
        }
    }
  return (   
    <Paper
        component="form"
        onSubmit={(handlesubmit)}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
    >
        <input 
        type="text" 
        className="search-bar"  
        value={searchTerm}
        placeholder='Search...' 
        onChange={(e)=>setsearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{
            p:'10px',color:'red'
        }}>
            <Search />
        </IconButton>

    </Paper>
  )
}
