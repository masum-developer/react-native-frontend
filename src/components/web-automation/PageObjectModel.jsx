import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const list = ['Modularity and Reusability: The POM promotes a modular approach by encapsulating each page or component of the application into a separate module. This allows for easy reuse of code across multiple tests, reducing duplication and promoting code efficiency.',
'Readability and Maintainability: With the POM, test code becomes more readable and easier to maintain. Test scenarios can be written using intuitive and descriptive method names specific to each page or component.',
'Separation of Concerns: The POM separates the concerns between the test logic and the UI interactions. Testers can focus on writing test scenarios without being concerned about the technical implementation details of the UI'
]

const PageObjectModel = () => {
    return (
        <Box>
            <Typography variant='h3'>What is Page Object Model?</Typography>
    
            <Typography variant='subtitle2'>Page Object Model (POM) is a design pattern that helps organize and manage test code by encapsulating the application's web pages into reusable objects. It promotes modularity, maintainability, and reusability of test code.
            </Typography> 
            <br></br>
           <Typography variant='subtitle2'>The main idea behind the Page Object Model is to create a separate JavaScript module for each web page or component of your application. Each module represents a page or component and contains methods and properties that encapsulate the interactions and assertions specific to that page or component.
           </Typography>
           
           <br></br>

           <Typography variant='h3'>Why do we use Page Object Model?</Typography>
           <Typography variant='subtitle2'>The Page Object Model (POM) is used in test automation to enhance the structure, readability, and maintainability of test code. Here are some key reasons why the POM is commonly used:</Typography>

           <Process list={list}></Process>
    
        </Box>
      )
}

export default PageObjectModel;
