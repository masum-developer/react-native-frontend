import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const positive = [
    "This test case visits the 'https://google.com' website using cy.visit.",
    'It then checks the page title using cy.title().',
    "The assertion cy.title().should('eq', 'Google') checks if the page title is equal to 'Google'. This is a positive test, meaning it expects the title to be 'Google'."
]

const negative = [
    'This test case is similar to the previous one.',
    "It visits 'https://google.com' and checks the page title.",
    "However, the assertion cy.title().should('eq', 'Goggle') checks if the page title is equal to 'Goggle', which is a negative test. It expects the title not to be 'Goggle'."
]

const CypressAssertion = () => {
  return (
    <Box>
        <Typography variant='h3'>Test Cases with Assertions</Typography>

        <Typography variant='subtitle2'>
        A test case with assertions is a specific test scenario designed to verify that a particular aspect or functionality of a software application behaves as expected. Assertions are statements or conditions that are checked during the execution of the test case to determine whether the software behaves correctly.
        </Typography> 

        <Typography variant='subtitle2'>When writing a test case with assertions, you define both the steps to interact with the application and the expected outcomes that should be confirmed through these assertions.</Typography>

       <Process list={['In the first line we declare <reference  types="cypress"/>. This is reference directive that includes Cypress type definitions for autocomplete support in the file']}></Process>

        <ImageComp image={"/cypress/cypress-code.png"} imageTitle={"Screenshot: Cypress project structure"}></ImageComp>
        <br></br>
        <Typography variant='subtitle2'>Here we have two test cases (using the it() blocks) within a suite named 'Suite name test'.The testcase 'Verify title'</Typography>
        <br></br>
       <Typography variant='subtitle2'>These test cases verify the title of the Google website, one with a positive expectation and the other with a negative expectation. Let's break down what each test case is doing:</Typography> 

       <br></br>
       <Typography variant='subtitle1'>Verify title positive:</Typography>
       <Process list={positive}></Process>

       <br></br>
       <Typography variant='subtitle1'>Verify title negative:</Typography>
       <Process list={negative}></Process>

    </Box>
  )
}

export default CypressAssertion;