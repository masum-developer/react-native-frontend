import { Box, Typography } from '@mui/material';
import React from 'react';

const WebsiteLayoutOutput = () => {
    return (
        <Box mt={3} >
            <section style={{}}>
                 <nav style={{ backgroundColor:"black",paddingBlock:"20px",justifyContent:"space-between",alignItems:"center"}}>
                    <ul style={{
                        listStyle: "none",
                        margin: "0", padding: "0", display:"flex" ,alignItems:"center",justifyContent:"space-evenly"}}>
                        <li style={{ margin: "0px 10px" }}>
                            <a style={{fontSize:"20px",color:"violet",textDecoration:"none"}} href="#">Home</a></li>
                        <li style={{ margin: "0px 10px" }}>
                            <a style={{fontSize:"20px",color:"violet",textDecoration:"none"}} href="#">About</a></li>
                        <li style={{ margin: "0px 10px" }}>
                            <a  style={{fontSize:"20px",color:"violet",textDecoration:"none"}}href="#">Contact</a></li>
        </ul>
      </nav>
            </section>
            <div style={{
                backgroundImage: "url('hero.png')",
                backgroundColor:"rgba(0,0,0,0.5)",
                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
                height: "300px"
                
            }}>
      
                
               
             
                
                
	
            </div>
            <footer style={{
                paddingBlock: "20px",
            }}>
                <p style={{
                    color:"white",backgroundColor:"black",textAlign:"center",padding:"10px"}}>CopyRights by TS4U @2023</p>
            </footer>
           
      

        </Box>

    )
}

export default WebsiteLayoutOutput;













