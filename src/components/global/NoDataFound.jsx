import React from 'react';
import ImageComp from '../EnvironmentSetup/ImageComp';
import { Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const NoDataFound = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <ImageComp image={"/agileALM/data-error.gif"} imageTitle={"Screenshot 1: No data"}></ImageComp>
            </Box>
            <Box mt={3}>
                <MuiAlert style={{ textAlign: 'center' }} severity="info" variant="filled">There is no functionality here for that specific feature!</MuiAlert>
            </Box>
        </>
    );
};

export default NoDataFound;