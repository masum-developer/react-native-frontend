import { Box, Typography } from '@mui/material';
import React from 'react';

const FlexboxOutput2 = () => {
    return (
        <Box mt={1} >
         
<div style={{
                   
                display: "flex",
                flexDirection:"column",
                flexWrap: "nowrap",
                backgroundColor: "dodgerblue"
            }} >
                <div style={{
                    backgroundColor: "#f1f1f1",
                    width: "100px",
                    margin: "10px", textAlign: "center",
                    lineHeight: "75px",
                fontSize:"30px"}}>1</div>
  <div style={{
                    backgroundColor: "#f1f1f1",
                    width: "100px",
                    margin: "10px", textAlign: "center",
                    lineHeight: "75px",
                fontSize:"30px"}}>2</div>
  <div style={{
                    backgroundColor: "#f1f1f1",
                    width: "100px",
                    margin: "10px", textAlign: "center",
                    lineHeight: "75px",
                fontSize:"30px"}}>3</div>  
  <div style={{
                    backgroundColor: "#f1f1f1",
                    width: "100px",
                    margin: "10px", textAlign: "center",
                    lineHeight: "75px",
                fontSize:"30px"}}>4</div>

               
</div>




        </Box>

    )
}

export default FlexboxOutput2;