import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from "@mui/material";

const ShadowOutput = () => {

    return (
       <Box mt={1} style={{alignItems:"center",justifyContent:"center"}}>
           
            <h1 style={{ backgroundColor: "#ffffff", padding: "20px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)", textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}>Welcome to the Abroad</h1>
            <h2 style={{ backgroundColor: "#ffffff", padding: "20px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)", textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}>Follow our page</h2>
            </Box>





       

    )
}

export default ShadowOutput;