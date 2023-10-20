import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';


const LoginAgileALM = () => {
    return (
        <Box>
            <Typography variant='h3'>Login Automation in AgileALM</Typography>
    
            <Typography variant='subtitle2'>Now that you have the Cypress project setup, we will now start automating the login process for AgileALM
            </Typography> 
            
            {/* <br></br> */}

            <Typography variant='subtitle2'>Inside the 'e2e' directory, create a UI folder. We will store all the Cypress test files inside this directory. Remember to use the '.cy.js' extension for these test files.</Typography>

            <Typography variant='subtitle2'>In addition to that we are maintaining seperation between our test files in the 'UI' directory and our page object module by storing them in the 'pages' directory.</Typography>

            {/* <br></br> */}
            <ImageComp image={"/cypress/cypress-login-setup.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>

            <br></br>

            <Typography variant='subtitle1'>When you visit https://agilealm.cloud/, you will see the homepage of AgileALM. Inorder to login to your account, you have to click on the 'Sign In' button as highlighted below:</Typography>

            <ImageComp image={"/cypress/cypress-agilealm-home.png"} imageTitle={"Screenshot: AgileALM Homepage"}></ImageComp>
            <br></br>

            <Typography variant='subtitle1'>Hover over the 'Sign In' button and right click. Inorder to copy the cssSelector using the SelectorsHub extension you downloaded, just hover over the 'SelectorsHub' option and click on 'Copy Relative cssSelector'.</Typography>

            <ImageComp image={"/cypress/cypress-agilealm-signin.png"} imageTitle={"Screenshot: AgileALM Sign In button inspection"}></ImageComp>

            <br></br>

            <Typography variant='subtitle1'>Now you have copied the cssSelector for the 'Sign In' button. Bring it to the '/pages/Login.js' we created.</Typography>
            <Typography variant='subtitle1'>Inorder to maintain a tidy codebase we can store our cssSelectors in variables so we can reuse it later whenever we want.</Typography>

            <ImageComp image={"/cypress/cypress-agilealm-cssSelector.png"} imageTitle={"Screenshot: clickOnSignInButton method"}></ImageComp>

            <Typography variant='subtitle1'>We now have call this method in the 'login.cy.js' test file.</Typography>

            <ImageComp image={"/cypress/cypress-agilealm-loginFile.png"} imageTitle={"Screenshot: clickOnSignInButton method"}></ImageComp>

            <Typography variant='subtitle1'>We are defining a test suite called 'Login Page Tests'. We are creating a new instance of the 'Login' page object after importing it. In the individual test case we are visiting the AgileALM website and clicking on the Sign In button so far.</Typography>
            <br></br>
            <Typography variant='subtitle1'>In the terminal run the command 'npx cypress open' to run the project. After opening Cypress UI you will see on the right side of the screen that the Sign In button has been successfully clicked and now we have to insert our email and password</Typography>

            <ImageComp image={"/cypress/cypress-agilealm-signin-ui.png"} imageTitle={"Screenshot: Cypress UI for clickOnSignInButton method"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>Just like how we got the cssSelectors for the Sign In button, we have to do the same thing the the email input field, password input field as well as the Login button.</Typography>
            <Typography variant='subtitle1'>We will create methods based on these actions.</Typography>
            <ImageComp image={"/cypress/cypress-login.js.png"} imageTitle={"Screenshot"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>We now have to call the methods we just created in the 'login.cy.js' file.</Typography>
            <ImageComp image={"/cypress/cypress-login.cy-final.png"} imageTitle={"Screenshot"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>In the terminal run the command 'npx cypress open' to run the project. On the right side of the screen you will see that we were successfully able to login to our account.</Typography>
            <ImageComp image={'/cypress/cypress-UI-final.png'} imageTitle={"Screenshot"}></ImageComp>
            <br></br>

            <Typography variant='h3'>What are Fixtures in Cypress?</Typography>
            <Typography variant='subtitle1'>In Cypress, fixtures are used to provide external data to your tests. Fixtures are essentially JSON files that contain data that can be loaded into your Cypress tests. Let's create a fixture file to store our login credentials:</Typography>
            <ImageComp image={'/cypress/cypress-fixture.png'} imageTitle={"Screenshot"}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>We are extracting data from the userLoginData fixture file and passing the values in the setEmail and setPassword methods as parameters.</Typography>
            <br></br>

        </Box>
      )
}

export default LoginAgileALM;