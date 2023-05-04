import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from "@mui/material";

const AnimationOutput = () => {
    const Keyframes = styled("div")({
        "@keyframes pulsate": {
            from: {
                opacity: 1,
                transform: "scale(1)"
            },
            to: {
                opacity: 0,
                transform: "scale(2)"
            }
        },
        animation: "pulsate 2s infinite",
        position:"relative"
        
    });
    return (
       <Box mt={1} style={{alignItems:"center",justifyContent:"center"}}>
           
            <div >
                <Keyframes style={{
                    color
                        : "#92B", 
               textAlign:"center",}}><b><h1>Welcome to TS4U Bootcamp</h1></b></Keyframes>
            </div>
            </Box>





       

    )
}

export default AnimationOutput;