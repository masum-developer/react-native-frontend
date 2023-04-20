import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';



const codeblock = `app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // retrieve user data based on userId
    // send response to client
  });`;
const userAgent = '';
const userId = '';

const codeblock2 = `app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userAgent = req.headers['user-agent'];
    console.log('Received GET request for user ${userId} with User-Agent: ${userAgent}');
    // retrieve user data based on userId
    // send response to client
  });`

const ReqObj = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is req object?</Typography>
            <Typography variant='subtitle2'>
                In the context of web development using the Express.js framework for Node.js, req is an object that represents an incoming HTTP request that is sent by a client, such as a web browser or a mobile app.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                The req object is one of two main objects used in Express.js for handling HTTP requests and responses, along with the res object, which represents the server's response to the client's request.
            </Typography>


            <Typography variant='subtitle2'>
                The req object contains information about the incoming request, such as the HTTP method (e.g. GET, POST, PUT, DELETE), the URL of the requested resource, the headers sent by the client, and any data sent in the request body.
                <br></br>
                For example, if you have a route handler for a GET request to a particular route:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography mt={1} variant='subtitle2'>
                In this example, req is an object that contains information about the incoming GET request to the /users/:id route, which includes a parameter :id. The route handler can access the params property of the req object to retrieve the id parameter and use it to retrieve data for the requested user.

                Overall, the req object is a fundamental part of the Express.js web framework and is used extensively in handling HTTP requests and building web applications and APIs.
            </Typography>

            <Box mt={2}>
                <Typography variant='h3'>Example in route</Typography>

                <Typography variant='subtitle2'>Here's an example of an incoming request in an Express.js route handler:</Typography>

                <CodeBox codeSnippet={codeblock2}></CodeBox>

                <Typography mt={1} variant='subtitle2'>
                    In this example, we define a route handler for a GET request to a URL that includes a user ID parameter (/users/:id). Inside the handler function, we use the req.params object to extract the user ID from the URL, and we use the req.headers object to extract the User-Agent header from the HTTP request.

                    We then log a message to the console indicating that we have received a GET request for the specified user ID, along with the User-Agent header that was sent with the request.
                </Typography>

                <Typography mt={1} variant='subtitle2'>
                    We can use the user ID and any other information from the request to retrieve data for the requested user and send a response back to the client.

                    This is just a basic example, but the req object in Express.js can contain a wide range of information and can be used in many different ways depending on the needs of your application.
                </Typography>
            </Box>
        </Box>
    );
};

export default ReqObj;