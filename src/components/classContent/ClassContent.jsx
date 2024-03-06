import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ClassContent = ({classContent}) => {
const [data,setData] = useState([])
  useEffect(()=>{
    fetch('courseContent.json')
    .then(response => response.json())
    .then(data => {
        // Work with the fetched JSON data here
        console.log(data); // Just an example, you can do whatever you need with the data
        setData(data)
  
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  },[])

   const myData = classContent;
  return <Box pb={3}>
   <Typography variant='h3'>Content will be loaded after some days.</Typography>


    </Box>;



};

export default ClassContent;
