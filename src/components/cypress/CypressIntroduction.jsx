import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';

const list = [
    "End-to-end testing: Cypress is explicitly designed for end-to-end testing of web applications, which involves simulating user interactions with the application and verifying that it works as intended. This type of testing is important for ensuring that the application is functional and meets the requirements of its users.",
    "Fast and reliable testing: Cypress is known for its fast and reliable testing capabilities, which can help developers and QA engineers save time and ensure that tests are accurate and repeatable.",
    "Real-time reloads and test debugging: Cypress provides real-time reloads and test debugging, which can help developers and QA engineers quickly identify and fix issues in their tests and applications. We don't have to debug on the code like in method, function, etc.",
    "Cross browsers support (multiple browsers) and also we can run remotely or locally (Jenkins)."
];


const CypressIntroduction = () => {
  return (
        <Box>
            <Typography variant='h3'>What is Cypress?</Typography>
            <Typography variant='subtitle2'>Cypress is an open-source end-to-end testing framework designed to help developers and QA engineers test modern web applications. Cypress is built on top of a powerful browser automation engine and provides a range of features to help you write, run, and debug tests for your web applications.</Typography>
            <br></br>
            <Typography variant='subtitle2'>
            Cypress is mainly used for testing modern web applications but we can test any application that runs on the browser. It is a JavaScript is based testing tool. It is open source and it was released under MIT License.
            </Typography>

            <Box mt={3}>
                <Typography mt={3} variant='h3'>Why is Cypress used?</Typography>
                <Typography variant='subtitle2'>Cypress is used for a variety of reasons, but here are some of the main reasons why developers and QA engineers use Cypress for testing web applications:</Typography>

                <Block list={list}></Block>
            </Box>
            
        </Box>
    );
}

export default CypressIntroduction;
