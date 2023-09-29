import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';

const list = [
    "Download and install Node.js. This is JavaScript's runtime engine: https://mern-staging.ts4u.us/?tab=nodejs-introduction",
    "Download and install a code editor. We will use Visual Studio Code: https://mern-staging.ts4u.us/?tab=vscode-installation",
    "Download and install Git. You can follow the installation guide: https://mern-staging.ts4u.us/?tab=git-installation",
    "Initialize a node project.",
    "Install Cypress as a development dependency in the project."


];


const CypressPreReqs = () => {
  return (
        <Box>
            <Typography variant='h3'>What are the Pre-requisite Cypress tools?</Typography>
            <Typography variant='subtitle2'>Before you start using Cypress for web testing, it's crucial to ensure you have the necessary tools and dependencies installed and configured:</Typography>


            <Process list={list}></Process>

            
        </Box>
    );
}

export default CypressPreReqs;
