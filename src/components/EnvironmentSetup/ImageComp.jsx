import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ImageComp = ({ image, imageTitle }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start' }} mt={3}>
            <img style={{ objectFit: 'contain', maxWidth: '100%' }} src={image} alt="screenshot"></img>
            {/* <Typography textAlign={"center"} mt={2} variant='subtitle2'>{imageTitle}</Typography> */}
        </Box>
    );
};

export default ImageComp;