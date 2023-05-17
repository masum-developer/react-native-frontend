import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from "@mui/material";


   

const TransitionOutput = () => {
     const Keyframes = styled("div")({
        "@keyframes element": {
            from: {
                opacity: 1,
                transform: "scale(1)",
               
            },
            to: {
                opacity: 0,
                transform: "scale(2)",
                
            }
        },
        animation: "element 3s infinite",
        position:"relative"
        
    });

  
    
    return (
        <Box mt={1} style={{ alignItems: "center", justifyContent: "center" }}>
           
           
            <div  >
              <Keyframes style={{
                color: "black",
                textAlign: "center",
                transition: " 0.5s ease-in-out",
                
            }}>
                  <b><h1 >Welcome to the Abroad</h1></b>
              </Keyframes>
            </div>
        </Box>
        
        





       

    )
}

export default TransitionOutput;