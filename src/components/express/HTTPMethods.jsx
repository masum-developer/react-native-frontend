import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';
import Block from '../global/Block';
import Process from '../EnvironmentSetup/Process';

const codeblock = `app.get('/users', function(req, res) {
    // Handle GET request for /users route
});`;
const userAgent = '';
const userId = '';

const codeblock2 = `app.post('/users', function(req, res) {
    // Handle POST request for /users route
});`

const list = [
    "1) GET: The GET method is used to retrieve data from a server. When a client sends a GET request to a server, the server responds with the requested data, typically in the form of an HTML page or a JSON object.",
    "2) POST: The POST method is used to submit data to a server. When a client sends a POST request to a server, the server receives the data and can store it or perform other actions based on the data.",
    "3) PUT: The PUT method is used to update data on a server. When a client sends a PUT request to a server, the server updates the specified data with the new data provided in the request.",
    "4) DELETE: The DELETE method is used to delete data from a server. When a client sends a DELETE request to a server, the server deletes the specified data.",
    "5) PATCH: The PATCH method is used to update a subset of data on a server. It is similar to the PUT method, but is used to update only specific fields or properties of the data."
];

const codeblock3 = `app.put('/users/:id', function(req, res) {
    // Handle PUT request for /users/:id route
});`

const list1 = [
    "1) Retrieving data: The GET method is used to retrieve data from a server. This can include web pages, images, videos, and other types of content.",
    "2) Submitting data: The POST method is used to submit data to a server. This can include form data, JSON objects, and other types of data that need to be stored or processed on the server.",
    "3) Updating data: The PUT and PATCH methods are used to update data on a server. This can include updating individual fields or properties of a resource, or replacing an entire resource with new data.",
    "Deleting data: The DELETE method is used to delete data from a server. This can include deleting entire resources, or individual fields or properties of a resource."
];

const codeblock4 = `app.delete('/users/:id', function(req, res) {
    // Handle DELETE request for /users/:id route
});`

const codeblock5 = `
// app.js

const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(3000, function() {
  console.log('Server started on port 3000');
});`

const HTTPMethods = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is HTTP methods?</Typography>
            <Typography variant='subtitle2'>

                HTTP (Hypertext Transfer Protocol) is the protocol used by web browsers and servers to communicate with each other. In HTTP, there are several methods that can be used to send and receive data between the client and the server. Here are some of the most commonly used HTTP methods:
            </Typography>

            <Block list={list}></Block>


            <Box mt={2}>
                <Typography variant='h3'>Why HTTP methods is used?</Typography>

                <Typography variant='subtitle2'>HTTP methods are used to interact with web servers and retrieve or modify data. They are an essential part of building web applications, as they allow developers to perform a wide variety of tasks, such as retrieving data, submitting data, updating data, and deleting data.</Typography>

                <Typography mt={1} variant='subtitle2'>
                    Here are some specific use cases for HTTP methods:
                </Typography>

                <Block list={list1}></Block>

                <Typography mt={1} variant='subtitle2'>
                    Overall, routing is an essential part of building web applications, as it allows developers to handle client requests, organize their code, create RESTful APIs, and enforce security. By using routing effectively, developers can build robust and reliable web applications that meet the needs of their users.
                </Typography>

                <Box mt={2}>

                    <Typography variant='subtitle2'>
                        Overall, HTTP methods are an essential tool for building web applications that interact with web servers. By using these methods effectively, developers can create robust and reliable applications that meet the needs of their users.
                    </Typography>

                </Box>

                <Box mt={2}>
                    <Typography variant='h3'>HTTP methods in ExpressJs</Typography>
                    <Box mt="2">
                        <Typography variant='subtitle2'>
                            In Express.js, the HTTP methods are used to define routes for handling different types of requests. Here are some examples of how HTTP methods can be used in Express.js:
                        </Typography>

                        <Typography variant='subtitle2'>
                            1) GET: The GET method is used to handle requests for retrieving data from a server. In Express.js, you can define a route to handle GET requests like this:
                            <CodeBox codeSnippet={codeblock}></CodeBox>
                            <Typography variant='subtitle2'>
                                This route would handle GET requests to the /users URL path.
                            </Typography>
                        </Typography>
                    </Box>


                    <Box mt="2">

                        <Typography variant='subtitle2'>
                            2) POST: The POST method is used to handle requests for submitting data to a server. In Express.js, you can define a route to handle POST requests like this:
                        </Typography>
                        <CodeBox codeSnippet={codeblock2}></CodeBox>

                        <Typography variant='subtitle2'>
                            This route would handle POST requests to the /users URL path.
                        </Typography>

                    </Box>


                    <Box mt="2">

                        <Typography variant='subtitle2'>
                            3) PUT: The PUT method is used to handle requests for updating data on a server. In Express.js, you can define a route to handle PUT requests like this:
                        </Typography>
                        <CodeBox codeSnippet={codeblock3}></CodeBox>

                        <Typography variant='subtitle2'>
                            This route would handle PUT requests to the /users/:id URL path, where :id is a parameter that can be used to identify a specific user.
                        </Typography>

                    </Box>


                    <Box mt="2">

                        <Typography variant='subtitle2'>
                            4) DELETE: The DELETE method is used to handle requests for deleting data from a server. In Express.js, you can define a route to handle DELETE requests like this:
                        </Typography>
                        <CodeBox codeSnippet={codeblock4}></CodeBox>

                        <Typography variant='subtitle2'>
                            This route would handle DELETE requests to the /users/:id URL path, where :id is a parameter that can be used to identify a specific user.
                        </Typography>

                    </Box>


                </Box>
            </Box>
        </Box>
    );
};

export default HTTPMethods;