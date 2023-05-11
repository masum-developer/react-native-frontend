import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';
import Block from '../global/Block';
import Process from '../EnvironmentSetup/Process';



const codeblock = `app.get('/', function(req, res) {
    res.send('Hello World!');
});`;
const userAgent = '';
const userId = '';

const codeblock2 = `app.get('/users/:userId', function(req, res) {
    var userId = req.params.userId;
    // do something with the userId
    res.send('User profile for user ' + userId);
});`

const list = [
    "1) Handling client requests: Routing is used to handle client requests and provide appropriate responses. By defining routes in a web application, developers can specify which code should be executed when a client makes a request to a particular URL.",
    "2) Organizing code: Routing can be used to organize code in a web application. By grouping related routes together, developers can organize their code in a logical and efficient way, which can make it easier to maintain and update the application over time.",
    "3) Creating RESTful APIs: Routing is an important part of creating RESTful APIs. By defining routes for different HTTP verbs (GET, POST, PUT, DELETE, etc.) and URL patterns, developers can create a consistent and predictable API that follows the principles of REST.",
    "Enforcing security: Routing can be used to enforce security in a web application. By requiring authentication for certain routes or limiting access to certain URLs, developers can ensure that sensitive data is protected and that the application is secure."
];

const codeblock3 = `const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Define a route for a specific URL pattern with a parameter
app.get('/users/:id', function(req, res) {
  const userId = req.params.id;
  res.send(User profile for user with ID ${userId});
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});`

const list1 = [
    "A route for the root URL ('/'), which responds with the message 'Hello World!'.",
    "A route for URLs with the pattern '/users/:id', where :id is a parameter that can be used to identify a specific user. This route uses req.params.id to extract the user ID from the request parameters and responds with a message that includes the user ID."
];

const codeblock4 = `
// routes.js

const express = require('express');
const router = express.Router();

// Define a route for the root URL
router.get('/', function(req, res) {
  res.send('Hello World!');
});

// Define a route for a specific URL pattern with a parameter
router.get('/users/:id', function(req, res) {
  const userId = req.params.id;
  res.send(User profile for user with ID ${userId});
});

module.exports = router;`

const codeblock5 = `
// app.js

const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(3000, function() {
  console.log('Server started on port 3000');
});`

const ExpressRouting = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is Routing?</Typography>
            <Typography variant='subtitle2'>
                Express.js routing is the process of mapping HTTP requests to specific routes or endpoints in a web application. In an Express.js application, routing is used to handle client requests and provide appropriate responses. Express.js provides a simple and flexible way to define routes and handle requests, allowing developers to build complex web applications with ease.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                Routes in Express.js are defined using a combination of HTTP verbs (GET, POST, PUT, DELETE, etc.) and URL patterns. For example, a route for handling a GET request to the root URL of a web application might look like this:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography mt={1} variant='subtitle2'>
                {`This code sets up a route for handling a GET request to the root URL of the application ('/'). When a client makes a GET request to the root URL, the function specified in the second argument (function(req, res) { ... }) is executed. This function sends the response 'Hello World!' back to the client.`}
            </Typography>

            <Box mt={2}>
                {/* <Typography variant='h3'>Example in route</Typography> */}

                <Typography variant='subtitle2'>Routes can also include URL parameters, which allow developers to handle dynamic URLs. For example, a route for handling a GET request to a user profile page might look like this:</Typography>

                <CodeBox codeSnippet={codeblock2}></CodeBox>

                <Typography mt={1} variant='subtitle2'>
                    In this example, the :userId URL parameter is defined in the route pattern. When a client makes a GET request to a URL that matches this pattern (e.g. /users/123), the function specified in the second argument is executed, and the userId parameter is extracted from the request object (req.params.userId) and used to generate the response.
                </Typography>

                <Box mt={2}>
                    <Typography variant='h3'>Why Routing is used?</Typography>
                </Box>
                <Typography mt={1} variant='subtitle2'>
                    Routing is used in web applications for several reasons:
                </Typography>

                <Block list={list}></Block>

                <Typography mt={1} variant='subtitle2'>
                    Overall, routing is an essential part of building web applications, as it allows developers to handle client requests, organize their code, create RESTful APIs, and enforce security. By using routing effectively, developers can build robust and reliable web applications that meet the needs of their users.
                </Typography>

                <Box mt={2}>

                    <Typography variant='h3'>How to do Routing?</Typography>

                    <Typography variant='subtitle2'>
                        In Express.js, routing is accomplished by using the app object, which represents the Express.js application, to define routes for different HTTP methods and URL patterns. Here's an example of how to use routing in Express.js:
                    </Typography>

                    <CodeBox codeSnippet={codeblock3}></CodeBox>

                    <Typography variant='subtitle2'>
                        In this example, we use the app.get() method to define two routes:
                    </Typography>
                    <Process list={list1}></Process>
                    <Typography variant='subtitle2'>
                        Once the routes are defined, we start the server using the app.listen() method and specify the port to listen on (in this case, port 3000).
                    </Typography>
                    <Typography variant='subtitle2'>
                        This is just a simple example, but with Express.js routing, you can define as many routes as you need to handle different HTTP methods, URL patterns, and request parameters. Routing in Express.js is a powerful and flexible tool for building web applications with a clear and organized structure.
                    </Typography>
                </Box>

                <Box mt={2}>
                    <Typography variant='h3'>Routing with Router()</Typography>
                    <Typography variant='subtitle2'>
                        In Express.js, the Router() method can be used to define routes in a separate module or file, which can make it easier to organize and maintain larger applications. Here's an example of how to use the Router() method to define routes in a separate file:
                    </Typography>

                    <CodeBox codeSnippet={codeblock4}></CodeBox>

                    <Typography variant='subtitle2'>
                        In this example, we use the Router() method to define two routes in a separate file called routes.js. The Router() method returns a router object that can be used to define routes using the same syntax as the app object.
                    </Typography>
                    <Typography variant='subtitle2'>
                        Once the routes are defined in the separate file, we can use them in our main application file using the app.use() method:
                    </Typography>

                    <CodeBox codeSnippet={codeblock5}></CodeBox>

                    <Typography variant='subtitle2'>
                        In this example, we use the app.use() method to mount the routes object on the root URL ('/'). This means that any requests to the root URL or URLs with the pattern '/users/:id' will be handled by the routes defined in the routes.js file.
                    </Typography>
                    <Typography variant='subtitle2'>
                        Using the Router() method to define routes in a separate file can make it easier to organize and maintain larger applications, as it allows developers to separate their code into modular components.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ExpressRouting;