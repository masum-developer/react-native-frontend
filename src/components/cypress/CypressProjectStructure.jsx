import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const list = [
    "cypress - It is the root folder and is created when the project is initialized.",
    "downloads- When some files are downloaded by running a test file. It gets downloaded into this folder.",
    "e2e - All the end-to-end testing files are stored in this folder.",
    "fixtures- When some static data is needed. We store the data inside this folder like a JSON file.",
    "support - It stores script files related to the project.",
    "videos- It is to store the videos of the test report.",
    "screenshot- It is to store the screenshot of the test report."
]

const CypressProjectStructure = () => {
    return (
        <Box>
            <Typography variant='h3'>Project Structure of a Cypress Project</Typography>
            <ImageComp image={"/cypress/cypress-structure.png"} imageTitle={"Screenshot: Cypress project structure"}></ImageComp>

            <Box mt={3}>
                <Process list={list}></Process>
            </Box>

        </Box>
      )
}

export default CypressProjectStructure;