import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { FetchFromApi } from './utils/FetchFromApi'
import { useParams } from 'react-router-dom'
export default function SearchFeed() {
  const {searchTerm} = useParams();
  const [videos,setvideos] = useState([]);
  useEffect(() => {
      FetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
          setvideos(data.items);
        })
        .catch((error) => {
         
          console.error('Error fetching data:', error);
        });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{
      overflow:'auto',
      height:'90vh',
      flex:2
    }}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}> 
     Search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span> Videos
    </Typography>
    <Videos videos={videos} />
    </Box>
  )
}
