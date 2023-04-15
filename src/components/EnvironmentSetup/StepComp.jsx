import { Box, Typography } from '@mui/material';
import React from 'react';

const StepComp = ({ stepText }) => {
    return (
        <Box py={1} px={1} sx={{ backgroundColor: '#b2a4e9', display: 'inline-block', borderRadius: '5px' }}>
            <Typography variant='h4'>{stepText}</Typography>
        </Box>
    );
};

export default StepComp;