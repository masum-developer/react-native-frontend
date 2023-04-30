import { Box, Typography } from '@mui/material';
import React from 'react';

const  CssGridOutput2 = () => {
    return (
        <Box mt={1} >
         
<div style={{
                   
                display: "grid",
                gap:"10px",
                backgroundColor: "#2199",
                padding:"10px"
            }} >
                <div style={{
                    backgroundColor: "#fff",
                    fontSize:"30px",
                    gridColumn: "1/ span 2",
                    gridRow:"1",
                    textAlign: "center",
                    padding:"5px",
                    border:"1px solid black",
                    
                fontSize:"30px"}}>1</div>
  <div style={{
                    backgroundColor: "#fff",
                    fontSize:"30px",
                    gridColumn: "1/ span 2",
                    gridRow:"2",
                    textAlign: "center",
                    padding:"5px",
                    border:"1px solid black",
                    
                fontSize:"30px"}}>2</div>
  <div style={{
                    backgroundColor: "#fff",
                    fontSize:"30px",
                   
                    textAlign: "center",
                    padding:"5px",
                    
                    border:"1px solid black",
                fontSize:"30px"}}>3</div>  
 
                 <div style={{
                    backgroundColor: "#fff",
                    fontSize:"30px",
                    
                    textAlign: "center",
                    padding:"5px",
                    
                    border:"1px solid black",
                fontSize:"30px"}}>4</div>
                 <div style={{
                    backgroundColor: "#fff",
                    fontSize:"30px",
                    gridColumn:"3",
                    gridRow:"1/ span 3",
                    textAlign: "center",
                    padding:"5px",
                    border:"1px solid black",
                    
                fontSize:"30px"}}>5</div>
                 
            </div>

        </Box>

    )
}

export default CssGridOutput2;