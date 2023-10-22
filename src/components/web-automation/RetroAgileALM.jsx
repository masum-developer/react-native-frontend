import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';


const RetroAgileALM = () => {
    return (
        <Box>
            <Typography variant='h3'>Creating a Retro Board Automation in AgileALM</Typography>

            <Typography variant='subtitle1'>Inorder to create a retro board in AgileALM, we need to navigate to the 'Retro Board' option in the sidebar and then click on the 'Create Board' button.</Typography> 

            <ImageComp image={'/cypress/automation/retro/cypress-retro.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>We will create a file called 'Retro.js' file where we will define the functions.</Typography> 
            
            <ImageComp image={'/cypress/automation/retro/cypress-retro-1.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>So far in the file we are navigating to the "Retro Board" option in the sidebar using the goToRetro() function. Using the createButton() function we are clicking on the Create Board button. The setName() function has a parameter of name which will be the name of the retro board.</Typography>
            <ImageComp image={'/cypress/automation/retro/cypress-retro-cy1.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>In the terminal run the command 'npx cypress open' to see the output. You will see the modal for creating the retro board. The name "Retroboard 1" has been inserted due to the "retro.setName('Retroboard 1')" function.</Typography>
            <ImageComp image={'/cypress/automation/retro/cypress-retro-out-1.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>After typing the name in the field, we are using the saveBoard() function to save the retro board. <br></br>
            Now that the retro board has been created we want to be able to click on the specified retro board using clickBoard(board) function. The retro we want to complete will be passed in as an argument in the clickBoard().</Typography> 
            <ImageComp image={'/cypress/automation/retro/cypress-retro-view.png'}></ImageComp>
            <br></br>
            <Typography variant='subtitle1'>When you click on a retro board, we need to select each of the input fields of each column so we can insert values in them.<br></br>Here we have three functions, one for each of the input fields. All the text for 'Went Well', 'To Improve', and 'Action Items' are being passed as arguments.</Typography>
            <ImageComp image={'/cypress/automation/retro/cypress-retro-2.png'}></ImageComp>
            <Typography variant='subtitle1'>Update the retro.cy.js and call the rest of the functions.</Typography>
            <ImageComp image={'/cypress/automation/retro/cypress-retro-donecy.png'}></ImageComp>

            <br></br>

            <Typography variant='subtitle1'>In the terminal type the command 'npx cypress open' to run the project. You will see the retro board completed.</Typography>
            <ImageComp image={'/cypress/automation/retro/cypress-retro-complete.png'}></ImageComp>





        </Box>
      )
}

export default RetroAgileALM;