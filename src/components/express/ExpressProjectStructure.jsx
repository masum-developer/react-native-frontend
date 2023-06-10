import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';

const list = [
    "server.js: The entry point of your application where you initialize Express and set up middleware, routes, and other configurations.",

    "package.json: The file that holds project metadata, dependencies, and scripts.",

    ".env: An optional file for storing environment variables such as database connection details, API keys, and other sensitive information.",

    "routes/: A folder containing route files that handle incoming HTTP requests and define the routes for your application.",

    "controllers/: A folder for controller files that contain the logic to process requests, interact with models (if using a database), and send responses.",

    "app/middleware.js: A folder for custom middleware files that can intercept requests and perform operations such as authentication, logging, and request preprocessing.",

    "app/error.js: This file is for global error handling and and not found handler",

    "utils/: A folder for utility files that contain reusable functions or helper modules.",

    ".gitignore: This file specifies the files and directories that should be ignored by Git version control.",

    "package.json: This file contains the project configuration, scripts, and dependencies for your React app.",

    "README.md: This file typically contains documentation and instructions for setting up and running the project.",

];

const ExpressProjectStructure = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>Project Structure of a ExpressJS application</Typography>
            <Typography variant='subtitle2'>
                When building an Express.js application, organizing the project structure is essential for maintainability and scalability. While there is no strict standard for structuring an Express.js application, the following is a commonly used project structure that can serve as a good starting point:
            </Typography>

            <ImageComp image={"/node/expressJs_structure.png"} imageTitle={"Screenshot 1: Project structure"}></ImageComp>

            <Box mt={3}>
                <Process list={list}></Process>
            </Box>



            <Typography mt={2} variant='subtitle2'>
                Remember, this structure can be adapted based on the specific needs and complexity of your project. It's always a good practice to keep the code organized, maintain clear separation of concerns, and modularize the application components for better readability and maintainability.
            </Typography>
        </Box>
    );
};

export default ExpressProjectStructure;