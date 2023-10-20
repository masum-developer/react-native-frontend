import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const OrganizationAgileALM = () => {
  return (
    <Box>
            <Typography variant='h3'>Creating an Organization Automation in AgileALM</Typography>
    
            <Typography variant='subtitle1'>Now that we have successfully logged into our account, we can create a new organization.
            We will inspect the 'Create An Organization' button and copy the relative cssSelector.
            </Typography> 
            <ImageComp image={'/cypress/automation/organization/cypress-org-button.png'} imageTitle={"Screenshot: Organization button"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>Just like how we created a page object module for the login functionality, we will do the same for creating an organization.
            </Typography> 
            <ImageComp image={"/cypress/automation/organization/cypress-setInfo.png"} imageTitle={"Screenshot: AgileALM Homepage"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>Inorder to create an organization we need to set the name and description for the organization and click on the 'Save' button. We will inspect each of these elements and copy the respective cssSelectors.</Typography>

            <ImageComp image={"/cypress/automation/organization/cypress-orgdetails.png"} imageTitle={"Screenshot: AgileALM Homepage"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>We've created a function called createOrganization() that takes in the the parameters 'name' and 'description'. When this function is called all the other functions are called with it. This allows us to reuse the code and makes it cleaner.</Typography>

            <ImageComp image={"/cypress/automation/organization/cypress-orgFunc.png"} imageTitle={"Screenshot: AgileALM Homepage"}></ImageComp>

            <br></br>

            <Typography variant='subtitle1'>The beforeEach hook ensures that the baseUrl we specify in the 'cypress.config.js' file is visited before each test in the suite. We are logging in using the data from the userLoginData fixture and the 'createOrganization' function is called with the name, 'Organization 1' and description, 'We will be learning Cypress in this Organization' as parameters.</Typography> 

            <br></br>

            <Typography variant='subtitle1'>In the terminal run the command 'npx cypress open' to run the project. After opening Cypress UI you will see on the right side of the screen that the Organization 1 has successfully been created.</Typography> 

            <ImageComp image={"/cypress/automation/organization/cypress-orgCreated.png"} imageTitle={"Screenshot: AgileALM Homepage"}></ImageComp>

            <br></br>
            <Typography variant='h3'>Defining the baseUrl</Typography>

            <Typography variant='subtitle1'>The baseUrl property in a Cypress configuration file is used to define the base URL for your web application. It specifies the root URL that Cypress will use as the starting point for running your end-to-end tests.</Typography>

            <ImageComp image={"/cypress/automation/organization/cypress-baseUrl.png"} imageTitle={"Screenshot: AgileALM Homepage"}></ImageComp>           

            <br></br>
        </Box>
  )
}


export default OrganizationAgileALM;