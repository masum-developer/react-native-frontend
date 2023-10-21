import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';


const TaskAgileALM = () => {
    return (
        <Box>
            <Typography variant='h3'>Creating a Task Automation in AgileALM</Typography>
    
            <Typography variant='subtitle1'>Inorder to create a task, we need to first login to AgileALM, select the organization, choose the project, navigate to the user story and create the task. Let's take a look at how it works:
            </Typography> 

            <ImageComp image={'/cypress/automation/task/cypress-task-1.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>Here we are clicking on the dropdown menu and choosing the "Task" option.
            </Typography> 
            <ImageComp image={'/cypress/automation/task/cypress-task-snippet1.png'}></ImageComp>
            <br></br>

            <Typography variant='subtitle1'>At this stage this is what you are suppose to see as the "Task" option is getting clicked in the dropdown menu. Now we need to add the details for the task.
            </Typography> 
            <ImageComp image={'/cypress/automation/task/cypress-task-popup.png'}></ImageComp>
            <br></br>

            <Typography variant='subtitle1'>Here we are inserting the details into our task, such as the title, description, effort, business value and etc. We are also clicking on the Save button to make sure the task is saved.
            </Typography> 

            <ImageComp image={'/cypress/automation/task/cypress-task-js.png'}></ImageComp>

            <Typography variant='subtitle1'>Create the task.cy.js file and call the functions.
            </Typography> 


        </Box>
      )
}

export default TaskAgileALM;