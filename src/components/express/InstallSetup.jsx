import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import StepComp from '../EnvironmentSetup/StepComp';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';



const list = [
    "1) Install Node.js: Download and install Node.js from the official website https://nodejs.org.",
    "2) Create a new Node.js project: Create a new directory for your Node.js project and navigate to it in the terminal. Use the command npm init to create a new package.json file, which will keep track of your project dependencies and other details.",
    "3) Install Express.js: Install the express package, which is a popular Node.js web framework, by running the command npm install express.",
    "Create the server: Create a new file, such as server.js, and import the express package at the top of the file. Use the express() function to create a new instance of the framework, and define the HTTP routes and handlers that you want to use.",
    "Start the server: Use the listen() method to start the server and listen for incoming HTTP requests. Specify the port number on which the server should listen, such as app.listen(3000)."
];

const codeblock = `// Import the express package
const express = require('express');

// Create a new instance of the express framework
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server and listen for incoming requests
app.listen(5000, () => {
  console.log('Server started on port 5000');
});`;


const list1 = [
    "Run 'npm init' to intial a node project",
];

const list2 = [
    "Give all the information about the project like name, description, entry point, author, etc",
    "After putting all these information a 'package.json' will be created for the project",
    "This 'package.js' file holds the project's configuration informations",
];

const list3 = [
    `Add a script "start": "node server.js" in the package.json file to run the project.`
];

const list4 = [
    `If we hit 'npm start' in the command line it will start the server immediately on 5000 port.`
];

const list5 = [
    `If we open a browser and hit in 'localhost:5000' it will give a 'Hello, World!' as response.`
];

const list2_2 = [
    "Install Express js as dependency in the project"
]

const InstallSetup = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>How to use ExpressJs?</Typography>
            <Typography variant='subtitle2'>
                Here are the basic steps to use Express.js in your Node.js project:
            </Typography>

            <Block list={list}></Block>


            <Typography mt={2} variant='subtitle2'>
                Here's an example of a basic Express.js server:
            </Typography>

            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography variant='subtitle2'>
                In this example, we create a new instance of the Express.js framework using the express() function. We define a route handler for the root path using the get() method, which responds with the message "Hello, world!" when a client accesses the root path ("/") of the server.
            </Typography>

            <Typography mt={1} variant='subtitle2'>
                We then use the listen() method to start the server and make it listen on port 3000. When the server starts running, we log a message to the console to indicate that it is running.

                You can test the server by opening a web browser and navigating to "http://localhost:3000". This should display the message "Hello, world!" in your browser.
            </Typography>

            <Typography mt={3} variant='h3'>How to create and run in local machine?</Typography>

            <Box mt={1}>
                <StepComp stepText="Step 1:"></StepComp>
                <ImageComp image={"/node/Screenshot_1.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list1}></Process>
            </Box>


            <Box mt={3}>
                <StepComp stepText="Step 2:"></StepComp>
                <ImageComp image={"/node/Screenshot_2.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list2}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 3:"></StepComp>
                <ImageComp image={"/node/Screenshot_6.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list2_2}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 4:"></StepComp>
                <ImageComp image={"/node/Screenshot_3.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list3}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 5:"></StepComp>
                <ImageComp image={"/node/Screenshot_4.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list4}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 6:"></StepComp>
                <ImageComp image={"/node/Screenshot_5.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list5}></Process>
            </Box>
        </Box>
    );
};

export default InstallSetup;