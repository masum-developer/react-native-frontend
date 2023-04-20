import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';



const codeblock = `app.get('/', (req, res) => {
    res.send('Hello, world!');
});`;
const userAgent = '';
const userId = '';

const codeblock2 = `app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30
    };
    res.status(200).json(userData);
  });`

const ResObj = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is res object?</Typography>
            <Typography variant='subtitle2'>
                In the context of web development using the Express.js framework for Node.js, res is an object that represents the server's response to an incoming HTTP request that is sent by a client, such as a web browser or a mobile app.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                The res object is one of two main objects used in Express.js for handling HTTP requests and responses, along with the req object, which represents the client's request to the server.
            </Typography>


            <Typography variant='subtitle2'>
                The res object contains methods and properties that are used to generate and send the server's response to the client, including setting the response status code, headers, and body.
                <br></br>
                For example, in an Express.js route handler, we can use the res object to send a simple response to the client:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography mt={1} variant='subtitle2'>
                In this example, res is an object that we use to send a response to the client's request to the root URL (/). We use the send() method of the res object to send the message "Hello, world!" as the response body. The send() method also sets the content type header to "text/html" by default.

                We can also use the res object to set other response headers and send more complex responses, such as JSON data or HTML templates.

                Overall, the res object is a fundamental part of the Express.js web framework and is used extensively in handling HTTP requests and building web applications and APIs.
            </Typography>

            <Box mt={2}>
                <Typography variant='h3'>Example in route</Typography>

                <Typography variant='subtitle2'>Here's an example of an incoming request in an Express.js route handler:</Typography>

                <CodeBox codeSnippet={codeblock2}></CodeBox>

                <Typography mt={1} variant='subtitle2'>
                    In this example, we define a route handler for a GET request to a URL that includes a user ID parameter (/users/:id). Inside the handler function, we use the req.params object to extract the user ID from the URL, and we create some example user data for the requested user.
                </Typography>

                <Typography mt={1} variant='subtitle2'>
                    We then use the res object to set the HTTP status code to 200 (OK) using the status() method, and we send the user data as a JSON response using the json() method.

                    The json() method of the res object sets the content type header to "application/json" and sends the data as a JSON-encoded response. This is a common way to send data back to a client in a RESTful API.

                    Overall, the res object in Express.js provides a flexible and powerful way to send responses to clients, with a wide range of methods and properties for setting response headers, status codes, and data.
                </Typography>
            </Box>
        </Box>
    );
};

export default ResObj;