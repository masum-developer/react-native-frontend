import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from "@mui/material";

const OpacityOutput1 = () => {
    const Keyframes = styled("div")({
        "@keyframes pulsate": {
            from: {
                opacity: 3,
                transform: "scale(1)"
            },
            to: {
                opacity: 4,
                transform: "scale(0)"
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
                        : "#AF2D11 ", 
               textAlign:"center",}}><b><h1> TS4U Bootcamp</h1></b></Keyframes>
            </div>
            </Box>





       

    )
}

export default OpacityOutput1;