import { Box, Typography } from '@mui/material';
import React from 'react';

const BoxModelOutput= () => {
    return (
        <Box  >
            <div style={{
        boxSizing: 'border-box',
        width:' 300px',
        height: ' 200px',
        padding: "20px",
        border:" 1px solid black",
        margin: '10px',
                }}>
                <h2>Welcome to TS4U Abroad</h2>
                <p>Here We provide an Awesome Bootcamp.</p>
                <p>Join Us</p>
</div>






        </Box>

    )
}

export default BoxModelOutput;