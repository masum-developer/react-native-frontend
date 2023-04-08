import { Box, Typography } from '@mui/material';
import React from 'react';

const HtmlOutput = ({ h1Text, pText }) => {
    return (
        <Box mt={1} sx={{ backgroundColor: '#ECE4EC', padding: '50px 20px' }}>
            {
                h1Text && <Typography variant='h2'>{h1Text}</Typography>
            }

            {
                pText && <Typography variant='subtitle2'>{pText}</Typography>
            }
            
        </Box>
    );
};

export default HtmlOutput;