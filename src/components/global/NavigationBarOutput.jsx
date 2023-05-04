import { Box, Typography } from '@mui/material';
import React from 'react';

const NavigationbarOutput = () => {
    return (
        <Box mt={3} >
            <section style={{}}>
                 <nav style={{ backgroundColor:"black",paddingBlock:"20px",justifyContent:"space-between",alignItems:"center"}}>
                    <ul style={{
                        listStyle: "none",
                        margin: "0", padding: "0", display:"flex" ,alignItems:"center",justifyContent:"space-evenly"}}>
                        <li style={{ margin: "0px 10px" }}>
                            <a style={{ fontSize: "20px", color: "blue", textDecoration: "none" }} href="#">Home</a></li>
                        <li style={{ margin: "0px 10px" }}>
                            <a  style={{fontSize:"20px",color:"blue",textDecoration:"none"}}href="#">Categories</a></li>
                        <li style={{ margin: "0px 10px" }}>
                            <a style={{fontSize:"20px",color:"blue",textDecoration:"none"}} href="#">About</a></li>
                        <li style={{ margin: "0px 10px" }}>
                            <a style={{ fontSize: "20px", color: "blue", textDecoration: "none" }} href="#">Contact</a></li>
                         
        </ul>
      </nav>
            </section>
         
           
           
      

        </Box>

    )
}

export default NavigationbarOutput;













