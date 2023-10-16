import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const list = [
    'Simplicity and Efficiency: SelectorsHub simplifies the process of selecting and identifying elements on a webpage.',
    'Reduced Errors: Manual selector creation can be error-prone, particularly when dealing with complex web pages.',
    'Test Automation: Test automation frameworks often rely on selectors to interact with elements during testing.'
]

const SelectorsHub = () => {
  return (
    <Box>
        <Typography variant='h3'>What is SelectorsHub?</Typography>

        <Typography variant='subtitle2'>SelectorsHub is a powerful web development and testing tool that streamlines the process of creating and validating CSS and XPath selectors for web elements on a webpage. This browser extension provides web developers and testers with an intuitive and efficient way to generate selectors, simplifying tasks such as web scraping and test automation.
        </Typography> 
        
        <br></br>

        <Typography variant='h3'>Why do we use SelectorsHub?</Typography>
        <Typography variant='subtitle2'>SelectorsHub serves several crucial purposes for web developers and testers:</Typography>
        
        <Process list={list}></Process>
        <br></br>
        <Typography variant='h3'>How to download SelectorsHub?</Typography>
        <Typography variant='subtitle2'>Inorder to download SelectorsHub click on the link: https://chrome.google.com/webstore/detail/selectorshub/ndgimibanhlabgdgjcpbbndiehljcpfh/related</Typography>
       <ImageComp image={"/cypress/cypress-selectorsHub.png"} imageTitle={"Screenshot: SelectorsHub extension download page"}></ImageComp>
       <br></br>
       <Typography variant='subtitle2'>Click on the "Add to Chrome" button highlighted. This will add the SelectorsHub extension.</Typography>
       <br></br>
       
    </Box>
  )
}


export default SelectorsHub;