import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';


const UserStoryAgileALM = () => {
    return (
        <Box>
            <Typography variant='h3'>Creating a User Story Automation in AgileALM</Typography>
    
            <Typography variant='subtitle1'>Once you enter an organization in AgileALM and you want to create a new user story, you can do so by clicking on Sprints, going to Taskboard and clicking on New Work Item button.
            </Typography> 
            <ImageComp image={'/cypress/automation/userstory/cypress-userstory.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>So far what we are creating functions to select an organization after logging in. After that we need to choose which project the user story should be created in. 
            </Typography> 
            <Typography variant='subtitle1'>The function goToTaskboard() allows the users to click on Sprints in the sidebar and directly to to the Taskboard. creatingWorkItem() function clicks on the New Work Item dropdown button and clicks on the User Story option.
            </Typography> 

            <ImageComp image={'/cypress/automation/userstory/cypress-us-1.png'}></ImageComp>
            <br></br>

            <Typography variant='subtitle1'>By this point you will see the popup to input all the details for the user story.
            </Typography> 

            <ImageComp image={'/cypress/automation/userstory/cypress-us.png'}></ImageComp>
            
            <br></br>

            <Typography variant='subtitle1'>Here we are setting the title, description, assignment, effort and the business value. Eventually we are clicking on the Save button to make sure the user story gets saved. 
            </Typography> 
            <ImageComp image={'/cypress/automation/userstory/cypress-us-2.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>Create the 'userstory.cy.js' file. Here we are logging in using the credentials stored in userLoginData. In the createUserStory() function we are passing in the arguments for the user story details such as name of organization, project, title and description of the user story and etc.
            </Typography> 
            <ImageComp image={'/cypress/automation/userstory/cypress-us.cy.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>In the terminal run the command 'npx cypress open' to run the project. You will see the user story created successfully.
            </Typography> 
            <ImageComp image={'/cypress/automation/userstory/cypress-us-complete.png'}></ImageComp>
            <br></br>

        </Box>
      )
}

export default UserStoryAgileALM;