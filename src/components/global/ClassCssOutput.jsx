import { Box, Typography } from '@mui/material';
import React from 'react';

const ClassCssOutput = () => {
    return (
        <Box mt={1} >
            <div style={{
                   border: "1px solid #ccc",
                   padding:" 10px",
                   marginBottom: "20px"}}>
  <h2>Box Title</h2>
  <p>Box content goes here...</p>
</div>

<div style={{
                   border: "1px solid #ccc",
                   padding:" 10px",
                   marginBottom: "20px"}}>
  <h2>Another Box Title</h2>
  <p>More box content goes here...</p>
</div>




        </Box>

    )
}

export default ClassCssOutput;