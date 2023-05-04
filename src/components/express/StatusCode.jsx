import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';
import Block from '../global/Block';



const codeblock = `app.get('/', (req, res) => {
    res.send('Hello, world!');
});`;
const userAgent = '';
const userId = '';

const list = [
    "1xx (Informational): The request was received, and the server is continuing to process it.",
    "2xx (Successful): The request was successfully received, understood, and accepted by the server.",
    "3xx (Redirection): The request requires further action by the client to complete, such as following a redirect.",
    "4xx (Client Error): The request contains invalid or incomplete data, or the server cannot fulfill the request.",
    "5xx (Server Error): The server encountered an error while processing the request."
];

const list2 = [
    "200 OK: The request was successful, and the server has returned the requested data.",
    "404 Not Found: The server cannot find the requested resource.",
    "500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    "401 Unauthorized: The client must provide valid authentication credentials before accessing the requested resource.",
];


const list3 = [
    "Communicating success or failure: Status codes are used to indicate whether a request was successful or encountered an error. This helps clients and servers communicate about the status of the request and take appropriate actions.",
    "Providing additional information: Some status codes include additional information about the request, such as the location of a redirected resource or the reason for a client error. This additional information can be used by clients to handle the response appropriately.",
    "Enabling error handling: Status codes enable clients to handle errors that occur during the processing of an HTTP request. For example, a client can handle a 404 Not Found error by displaying an appropriate message to the user, or by redirecting the user to another page.",
    "Supporting caching and optimization: Status codes can be used to support caching and optimization of HTTP requests. For example, a server can use a 304 Not Modified status code to indicate that a cached version of a resource can be used instead of fetching the resource again.",
]

const StatusCode = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is status code?</Typography>
            <Typography variant='subtitle2'>
                In the context of web development and HTTP (Hypertext Transfer Protocol), a status code is a three-digit number that is returned by a server to a client in response to an HTTP request. The status code indicates the outcome of the request and whether it was successful or encountered an error.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                The HTTP status code is included in the response header of an HTTP response and can be inspected by clients such as web browsers or other software that consume web services. There are five classes of HTTP status codes, each with its own set of codes:
            </Typography>

            <Block list={list}></Block>
            <Box mt={2}>

                <Typography variant='subtitle2'>Some common status codes include::</Typography>

                <Block list={list2}></Block>


                <Typography mt={1} variant='subtitle2'>
                    In summary, an HTTP status code is a three-digit number that indicates the outcome of an HTTP request, and is included in the response header of an HTTP response. The status code provides information about whether the request was successful or encountered an error, and can be used by clients to handle responses appropriately.
                </Typography>
            </Box>

            <Box mt={2}>

                <Typography variant='h3'>Why status code is used?</Typography>

                <Typography variant='subtitle2'>HTTP status codes are used to indicate the outcome of an HTTP request and provide information about whether the request was successful or encountered an error. Status codes are an important part of the HTTP protocol because they provide a standardized way for clients and servers to communicate about the status of a request. Here are some of the reasons why status codes are important:</Typography>

                <Block list={list3}></Block>
            </Box>
        </Box>
    );
};

export default StatusCode;