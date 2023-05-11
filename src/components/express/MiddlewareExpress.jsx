import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';
import Block from '../global/Block';
import Process from '../EnvironmentSetup/Process';



const codeblock = `
const express = require('express');
const app = express();

// Define a middleware function that logs all incoming requests
app.use(function(req, res, next) {
  console.log(Incoming request for $'{req.url});
  next();
});

// Define a route handler that sends a response to the client
app.get('/', function(req, res) {
  res.send('Hello World!');
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
    "1) Routing: Middleware functions can be used to define routes for handling incoming requests. This allows developers to create modular and reusable code that can be used across different applications and routes.",
    "2) Error handling: Middleware functions can be used to handle errors and exceptions in a centralized way, making it easier to debug and troubleshoot problems in an application.",
    "3) Authentication and authorization: Middleware functions can be used to handle authentication and authorization, as well as other security-related tasks, such as sanitizing user input and preventing SQL injection attacks.",
    "4) Parsing request bodies: Middleware functions can be used to parse request bodies and transform data into a format that can be easily used by the application.",
    "5) Logging: Middleware functions can be used to log requests and responses, providing developers with valuable information about how the application is being used and how it is performing.",
    "6) Caching: Middleware functions can be used to cache responses and reduce the amount of time it takes to serve requests."
];

const MiddlewareExpress = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is Middleware?</Typography>
            <Typography variant='subtitle2'>
                In web development, middleware refers to a software layer that sits between the application and the underlying system or framework. Middleware is used to handle common tasks and features that are needed by many applications, such as logging, authentication, and error handling.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                In the context of Express.js, middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform actions on the request and response objects, modify the request and response objects, or pass control to the next middleware function in the stack.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Middleware functions in Express.js are executed sequentially in the order they are declared in the code. Middleware functions can be defined globally for the entire application or can be used for specific routes.

                Here's an example of how middleware can be used in Express.js:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography mt={1} variant='subtitle2'>
                In this example, we define a middleware function that logs all incoming requests to the console. We then use the app.use() method to register this middleware function for all routes in the application. Finally, we define a route handler for the root URL that sends a response to the client.

                When a client sends a request to the server, the middleware function is executed first, and logs the incoming request to the console. The request is then passed on to the route handler, which sends a response to the client.
            </Typography>

            <Box mt={2}>
                <Typography variant='h3'>Why middleware is used?</Typography>

                <Typography variant='subtitle2'>Middleware is a key feature of the Express.js framework, and is used for a variety of reasons, including:</Typography>

                <Typography mt={1} variant='subtitle2'>
                    In this example, the :userId URL parameter is defined in the route pattern. When a client makes a GET request to a URL that matches this pattern (e.g. /users/123), the function specified in the second argument is executed, and the userId parameter is extracted from the request object (req.params.userId) and used to generate the response.
                </Typography>

                <Box mt={2}>
                    <Typography variant='h3'>Why Routing is used?</Typography>
                </Box>

                <Block list={list}></Block>

                <Typography mt={1} variant='subtitle2'>
                    Overall, middleware is an essential tool for building robust and scalable web applications with Express.js. By using middleware effectively, developers can create applications that are modular, extensible, and secure, and that provide a great user experience.
                </Typography>

                <Box mt={2}>

                    <Typography variant='h3'>How to create a custom middleware?</Typography>

                    <Typography variant='subtitle2'>

                        In Express.js, custom middleware functions can be created to handle specific tasks or features that are needed by an application. Custom middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform actions on the request and response objects, modify the request and response objects, or pass control to the next middleware function in the stack.
                    </Typography>

                    <CodeBox codeSnippet={codeblock2}></CodeBox>

                    <Typography variant='subtitle2'>
                        In this example, we define a custom middleware function called logRequests that logs all incoming requests to the console. We then use the app.use() method to register this middleware function for all routes in the application. Finally, we define a route handler for the root URL that sends a response to the client.
                    </Typography>
                    <Typography variant='subtitle2'>
                        When a client sends a request to the server, the logRequests middleware function is executed first, and logs the incoming request to the console. The request is then passed on to the route handler, which sends a response to the client.

                        Custom middleware functions can be used for a wide variety of tasks in Express.js, such as handling authentication, parsing request bodies, and handling errors. Middleware is a powerful and flexible tool for building web applications with a clear and organized structure.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MiddlewareExpress;