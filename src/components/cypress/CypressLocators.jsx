import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const list = [
    "This Cypress test case opens the 'https://staging-ecom.techserve4u.com/' website.",
    "It interacts with the search feature, entering 'Slim' and initiating a search.",
    "By utilizing specific CSS selectors, it identifies the first product in the search results and validates that it contains the expected text, 'Denim Slim Fit Jeans for Men.'",
    "The test case passes when the expected product is found, confirming the proper functionality of the search feature."
]

const CypressLocators = () => {
  return (
    <Box>
        <Typography variant='h3'>Cypress Locators</Typography>

        <Typography variant='subtitle2'>
        Locators are used in Cypress to identify and interact with elements in a web application. Cypress supports a variety of locators, including CSS selectors, and XPath expressions.
        </Typography> 

        <ImageComp image={"/cypress/cypress-locators.png"} imageTitle={"Screenshot: Cypress locator codesnippet"}></ImageComp>

       <Process list={list}></Process>
       <br></br>
       <Typography variant='subtitle2'>
        You can run this by using the command 'npx cypress open'. This is what you will see in the Cypress UI:
       </Typography>

       <ImageComp image={"/cypress/cypress-output-ui.png"} imageTitle={"Screenshot: Cypress test output"}></ImageComp>

    </Box>
  )
}

export default CypressLocators;