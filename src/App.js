import React, { Component }  from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar,Feed,VideoDetail,ChannelDetail,SearchFeed } from "./components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
      </BrowserRouter> 
    </div>
  );
}

export default App;
