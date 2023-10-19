import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { FetchFromApi } from './utils/FetchFromApi'

export default function ChannelDetail() {
  const [ChannelDetail,setChannelDetail] = useState(null)
  const [videos,setvideos] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    FetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setvideos(data?.items))
  },[id])
  return (
    <Box>
      <div style={{
       background: 'linear-gradient(153deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      zIndex:10,
      height:'300px'
      }}  />
      <ChannelCard channelDetail={ChannelDetail} marginTop="-110px"  /> 
       <Box sx={{display:'flex',p:'2'} }>
        <Box sx={{mr:{sm:'160px'}}} />
        <Videos videos={videos} />
       </Box>
    </Box>

  )
}
