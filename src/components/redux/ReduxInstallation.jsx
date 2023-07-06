import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const ReduxInstallation = () => {
    return (
        <Box>
            <Typography variant='h3'>How to install Redux?</Typography>
    
            <Box mt={3}>
                <Typography variant='subtitle2'>Lets go through the installation steps for Redux:</Typography>
                <Process list={["Open your project's terminal or command prompt."]}></Process>
                <Process list={["Navigate to the root directory of your Next.js project."]}></Process>
                <Process list={["Run the following command to install the necessary Redux packages:"]}></Process>
                <ImageComp image={"/redux/Screenshot_redux.png"} imageTitle={"Screenshot: redux"}></ImageComp>

            </Box>
        </Box>



        

        
    );
};

export default ReduxInstallation;