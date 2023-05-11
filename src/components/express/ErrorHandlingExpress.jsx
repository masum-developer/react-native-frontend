import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';
import Block from '../global/Block';
import Process from '../EnvironmentSetup/Process';



const codeblock = `
const express = require('express');
const app = express();

// Middleware function to handle errors
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Route handler that can throw an error
app.get('/', function(req, res) {
  try {
    throw new Error('Something went wrong!');
  } catch(err) {
    // Pass the error to the middleware function
    next(err);
  }
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});`;
const userAgent = '';
const userId = '';


const codeblock2 = `const express = require('express');
const app = express();

// Define a custom middleware function to log all incoming requests
function logRequests(req, res, next) {
  console.log(Incoming request for $'{req.url});
  next();
}

// Use the custom middleware function for all routes
app.use(logRequests);

// Define a route handler that sends a response to the client
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});`

const list = [
    "1) Using the next() function: In Express, middleware functions can handle errors by passing them to the next middleware function in the stack using the next() function. Middleware functions can be defined to handle specific types of errors, or to handle all errors in a generic way.",
    "2) Using the try/catch statement: Route handlers in Express can use the try/catch statement to handle errors that might occur in a specific block of code. If an error occurs, the catch block can be used to log the error or send an error response to the client.",
    "3) Using error handling middleware: Express also provides a built-in error handling middleware function that can be used to handle errors that occur in the application. This middleware function is defined with four parameters (err, req, res, and next), and is called whenever an error is detected in the application.",

];

const list2 = [
    "1) Handling errors that occur during the execution of middleware functions: Middleware functions are a key feature of Express.js, and are used for a variety of purposes, such as handling requests, parsing data, and serving static files. Error handling middleware can be used to catch errors that occur during the execution of middleware functions, log the error, and send an appropriate response to the client.",
    "2) Providing error feedback to developers: Express.js allows developers to log errors that occur during the execution of the application, making it easier to identify and fix bugs. By providing clear and informative error messages, developers can quickly diagnose and address issues with the application.",
    "3) Improving the user experience: Effective error handling in Express.js can help to improve the user experience by providing clear and informative error messages that help users understand what went wrong and how to fix it. This can reduce user frustration and improve the perceived quality of the application."
]

const ErrorHandlingExpress = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is Error Handling?</Typography>
            <Typography variant='subtitle2'>
                In Express, error handling refers to the process of detecting, reporting, and responding to errors that occur during the execution of an Express application. Errors can occur for a variety of reasons, such as invalid input data, network errors, hardware failures, or software bugs.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                Express provides several ways to handle errors, including:
            </Typography>

            <Block list={list}></Block>


            <Box mt={2}>
                <Typography variant='h3'>Why error handling is used?</Typography>

                <Typography variant='subtitle2'>In Express.js, error handling is used for similar reasons as in other software development contexts, such as detecting errors, responding to errors, improving reliability, and enhancing the user experience.</Typography>

                <Typography mt={1} variant='subtitle2'>
                    Some specific reasons why error handling is used in Express.js include:
                </Typography>
                <Block list={list2}></Block>

                <Box mt={2}>

                    <Typography variant='h3'>Example of Error Handling</Typography>

                    <CodeBox codeSnippet={codeblock}></CodeBox>

                    <Typography variant='subtitle2'>

                        In this example, we define a middleware function using app.use() that catches any errors that occur during the execution of the application. The middleware function logs the error to the console and sends a generic error message to the client.
                    </Typography>

                    <Typography mt={1} variant='subtitle2'>
                        We also define a route handler for the root URL that throws an error using the throw keyword. We catch the error using a try/catch statement, and pass it to the middleware function using the next() function.
                    </Typography>
                    <Typography variant='subtitle2'>
                        When a client sends a request to the server, the route handler throws an error, which is caught by the try/catch statement. The error is then passed to the error handling middleware function, which logs the error and sends a generic error message to the client.
                        This is just one example of how error handling can be implemented in Express.js. There are many other ways to handle errors, depending on the specific needs of the application.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ErrorHandlingExpress;