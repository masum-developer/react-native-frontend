import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import StepComp from '../EnvironmentSetup/StepComp';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';



const codeblock = `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
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

const NodeServer = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is Server?</Typography>
            <Typography variant='subtitle2'>
                A server is a program that listens for incoming network requests and responds to them. The server can handle requests from multiple clients simultaneously, using non-blocking I/O to handle the requests efficiently and without blocking other requests.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>How to create a NodeJs server?</Typography>
                <Typography variant='subtitle2'>
                    To create a server in Node.js, you can use the built-in http module, which provides an API for creating and configuring HTTP servers. The http module allows you to create a server that listens for incoming requests on a specified port, and then define how the server should respond to different types of requests.
                </Typography>
                <CodeBox codeSnippet={codeblock}></CodeBox>

                <Typography variant='subtitle2'>
                    In this example, we create a server using the createServer() method of the http module. The createServer() method takes a callback function that is called whenever a new request is received by the server. In the callback function, we set the HTTP status code to 200 (OK), set the content type to plain text, and send a simple "Hello, World!" message as the response body.

                    We then use the listen() method to start the server and make it listen on port 3000. When the server starts running, we log a message to the console to indicate that it is running.
                </Typography>
                <Typography mt={1} variant='subtitle2'>
                    You can test this server by opening a web browser and navigating to "http://localhost:3000/".
                </Typography>
            </Box>

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
                <ImageComp image={"/node/Screenshot_3.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list3}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 4:"></StepComp>
                <ImageComp image={"/node/Screenshot_4.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list4}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 5:"></StepComp>
                <ImageComp image={"/node/Screenshot_5.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list5}></Process>
            </Box>

        </Box>
    );
};

export default NodeServer;