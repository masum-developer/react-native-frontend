import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const CypressSetup = () => {
  return (
    <Box>
            <Typography variant='h3'>How to setup a Cypress project?</Typography>
            <Typography variant='subtitle2'>
                Follow these steps to initialize a Cypress project on your computer:
            </Typography>

            <Box mt={3}>

                <Box mt={3}>
                    <StepComp stepText="Step 1:"></StepComp>
                    <Process list={["Open Visual Studio Code and create a new folder called 'cypress-basics'"]}></Process>
                    <ImageComp image={"/cypress/cypress-project.png"} imageTitle={"Screenshot: Crypress project in VSCode."}></ImageComp>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 2:"></StepComp>
                    <Process list={["In the terminal type 'npm init' to initialize the node.js project. You can choose to give it a name, description, etc."]}></Process>
                    <ImageComp image={"/cypress/cypress-npminit.png"} imageTitle={"Screenshot: initializing npm in the project"}></ImageComp>
                    <Process list={["Node.js will be succesfully initialized in your project. You will also see a 'package.json' file being created."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 3:"></StepComp>
                    <Process list={["Now, let's install Cypress as a development dependency in your project. Run the following command: 'npm install --save-dev cypress'"]}></Process>
                    <ImageComp image={"/cypress/cypress-dep.png"} imageTitle={"Screenshot: intalling cypress as a dependency"}></ImageComp>
                    <Process list={["You will notice a 'package-lock.json' file and a 'node_modules' file getting created."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 4:"></StepComp>
                    <Process list={["Run the command 'npx cypress open' to run the project."]}></Process>
                    <ImageComp image={"/cypress/cypress-welcome.png"} imageTitle={"Screenshot: Cypress welcome interface"}></ImageComp>
                    <Process list={["E2E Testing is for QE Engineers while Component Testing is for Developers. We will start by learning E2E Testing"]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 5:"></StepComp>
                    <Process list={["After selecting E2E testing, we will be given some built-in configuration files."]}></Process>
                    <ImageComp image={"/cypress/cypress-ui.png"} imageTitle={"Screenshot: Cypress welcome interface"}></ImageComp>
                    <Process list={["Click the 'Continue' button to continue the process."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 6:"></StepComp>
                    <Process list={["You will be asked to choose a browser"]}></Process>
                    <ImageComp image={"/cypress/cypress-browser.png"} imageTitle={"Screenshot: Nodejs version terminal command"}></ImageComp> 
                    <Process list={["After choosing the browser click on the 'Start E2E Testing' button."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 7:"></StepComp>
                    <Process list={["After selecting the browser a new interface of cypress will be opened in a separate browser tab."]}></Process>
                    <ImageComp image={"/cypress/cypress-browser-ui.png"} imageTitle={"Screenshot: Nodejs version terminal command"}></ImageComp> 
                    <Process list={["After choosing the browser click on the 'Start E2E Testing' button."]}></Process>
                </Box>
                
                <Box mt={3}>
                    <StepComp stepText="Step 8:"></StepComp>
                    <Process list={["Built in specs file will be given by these all files and folders."]}></Process>
                    <ImageComp image={"/cypress/cypress-files.png"} imageTitle={"Screenshot: Nodejs version terminal command"}></ImageComp> 
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 9:"></StepComp>
                    <Process list={["If you go back to VS Code, you will see these folders have been created in your project."]}></Process>
                    <ImageComp image={"/cypress/cypress-folders.png"} imageTitle={"Screenshot: Nodejs version terminal command"}></ImageComp>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 10:"></StepComp>
                    <Process list={["Note that these two folders are inside the 'e2e' directory. Delete these two folder and create a new file called 'myTest.cy.js'. It is important to make sure the file extension is '.cy.js'"]}></Process> 
                    <ImageComp image={"/cypress/cypress-test.png"} imageTitle={"Screenshot: Nodejs version terminal command"}></ImageComp>
                    <Process list={["This is the file where we will be writing test cases."]}></Process> 
                     
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 11:"></StepComp>
                    <Process list={["'describe()' is a function used to group related test cases together. It creates a 'test block' and can contain multiple 'it()' blocks."]}></Process> 
                    <ImageComp image={"/cypress/cypress-testcase.png"} imageTitle={""}></ImageComp>
                    <Process list={["'it()' is a function used to define individual test cases within a test block. Each 'it()' block represents a single test scenario that you want to verify."]}></Process> 
                </Box>

                
            </Box>
        </Box>
  )
}

export default CypressSetup