import { Box, Typography } from '@mui/material';
import React from 'react';

const  CssGridOutput1 = () => {
    return (
        <Box mt={1} >
         
<div style={{
                   
                display: "grid",
                gridTemplateColumns:"auto auto auto auto",
                gap:"10px",
                backgroundColor: "#2199",
                padding:"10px"
            }} >
                <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>1</div>
  <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>2</div>
  <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>3</div>  
  <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                    fontSize: "30px"
                }}>4</div>
                 <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>4</div>
                 <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>5</div>
                 <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>6</div>
                 <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                    fontSize: "30px"
                }}>7</div>
                <div style={{
                    backgroundColor: "#fff",
                    border:"1px solid black",
                    textAlign: "center",
                    padding:"5px",
                    
                fontSize:"30px"}}>8</div>

               
            </div>

        </Box>

    )
}

export default CssGridOutput1;