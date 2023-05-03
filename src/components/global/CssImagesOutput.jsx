import { Box, Typography } from '@mui/material';
import React from 'react';

const CssImagesOutput = () => {
    return (
        <Box mt={3} >
            <div style={{
                backgroundImage: "url('mern.png')",
                backgroundColor:"rgba(0,0,0,0.5)",
                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
                height:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"black"
            }}>
		<h1>Welcome to My TS4U Website</h1>
	</div>
            <div style={{
                backgroundColor: "#fff",
                padding:"20px", margin:"20px",boxShadow:"0px 0px 5px rgba(0,0,0,0.5)"}}>
		<p style={{color:"blue"}}><b>We offer the best IT Engineering Bootcamp Program for both IT professionals and non-IT professionals. We commit to providing 100% effort to getting you a high-paying job with 85% success rate. Let's begin your career together.</b></p>
	</div>

        </Box>

    )
}

export default CssImagesOutput;













