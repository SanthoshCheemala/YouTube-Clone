import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import SideBar from './SideBar'
import Videos from './Videos'
import { FetchFromApi } from './utils/FetchFromApi'
export default function Feed() {
  const [selectedCategory,setselectedCategory] = useState('New');
  const [videos,setvideos] = useState([]);
  useEffect(() => {
   

     
      FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => {
          setvideos(data.items);
        })
        .catch((error) => {
         
          console.error('Error fetching data:', error);
        });
  }, [selectedCategory]);
  return (
    <div>
      <Stack sx={{
        flexDirection:{
          sx:"column",md:"row"
        }
      }}>
        <Box sx={{
          height:{sx:"auto",md:"92vh"},
          borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}
        }}>
          <SideBar
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />
          <Typography variant='body2' className='copyright' sx={{
            mt:1.5,color:'#fff'
          }}>
            CopyRight 2023 San Media
          </Typography>
        </Box>
        <Box p={2} sx={{
          overflow:'auto',
          height:'90vh',
          flex:2
        }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}> 
            {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </div>
  )
}
