import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';


const ProjectAgileALM = () => {
    return (
        <Box>
            <Typography variant='h3'>Creating a Project Automation in AgileALM</Typography>

            <Typography variant='subtitle1'>Now that we created an organization, we are going to automate the process of creating projects.
            </Typography> 
            <Typography variant='subtitle1'>We will be copying the cssSelector of the 'New Project' button.
            </Typography> 
            <ImageComp image={'/cypress/automation/project/cypress-newProj.png'} imageTitle={"Screenshot: Organization button"}></ImageComp>

            <br></br>
            
            <Typography variant='subtitle1'>We will create a page object module for creating projects.
            </Typography> 

            <ImageComp image={'/cypress/automation/project/cypress-proj-start.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>We need to create a test file for projects. In the '/e2e/UI' directory we will create a file called 'project.cy.js'.
            </Typography> 

            <ImageComp image={'/cypress/automation/project/cypress-project-code.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>After running the project, you will see that the "New Project" button was successfully clicked and now we have to specify the details of the new project. We will copy the cssSelectors for the Name, Description, and Category input fields as well the Save button.
            </Typography> 

            <ImageComp image={'/cypress/automation/project/cypress-project-open.png'}></ImageComp>

            <br></br>
            <Typography variant='subtitle1'>After copying the cssSelectors, we will create the functions to set the project name, description, category and saving it by clicking on the Save button. When the createProject() function is called, the rest of the functions will be called sequentially.
            </Typography> 

            <ImageComp image={'/cypress/automation/project/cypress-project.js.png'}></ImageComp>
            <br></br>

            <Typography variant='subtitle1'>From the 'project.cy.js' file we will call the createProject() function while passing in all the arguments such as, project name, description, category as well as which organization we want the project to be created in.
            </Typography> 

            <ImageComp image={'/cypress/automation/project/cypress-cypress.final.png'}></ImageComp>
            <br></br>

            <Typography variant='subtitle1'>In the terminal run the command 'npx cypress open' to run the project. You can check AgileALM to see the new project being created in the organization of your choice.
            </Typography> 

            <ImageComp image={'/cypress/automation/project/cypress-created-project.png'}></ImageComp>
            <br></br>



        </Box>
      )
}

export default ProjectAgileALM;