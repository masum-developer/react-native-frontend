import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';

const list = [
    "1) Flexibility: Express.js is designed to be flexible, allowing developers to build applications using the tools and libraries that best suit their needs. This flexibility allows developers to customize and extend their applications as needed, without being tied to specific conventions or frameworks.",
    "2) Ease of use: Express.js is easy to learn and use, making it a popular choice for developers who are new to web development or to Node.js. Its simple API and middleware architecture make it easy to get started and build applications quickly.",
    "3) Performance: Express.js is designed to be fast and efficient, using non-blocking I/O and other performance optimization techniques to handle large numbers of concurrent connections and requests.",
    "Large ecosystem: Express.js has a large and active community of developers, with a wide range of third-party modules and tools available for building web applications and APIs. This ecosystem makes it easy to find and use existing code and tools, and to contribute to the development of the framework",
    "Express.js is designed to be scalable, allowing developers to build applications that can handle increasing amounts of traffic and data without sacrificing performance. This scalability is essential for building web applications and APIs that can handle large numbers of users and requests."
];

const ExpressIntro = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is ExpressJs?</Typography>
            <Typography variant='subtitle2'>
            Express.js is a popular open-source web framework for Node.js that provides a set of features and tools for building web applications and APIs. It is designed to be flexible, scalable, and easy to use, and is widely used by developers for building web applications and APIs.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
            Express.js provides a range of features that make it easy to handle HTTP requests and responses, including: Routing, Middleware, Templating, Error handling, Database integration, etc.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why ExpressJs is used?</Typography>
                <Typography variant='subtitle2'>
                There are several reasons why developers choose to use Express.js for building web applications and APIs:
                </Typography>
                <Block list={list}></Block>
            </Box>
        </Box>
    );
};

export default ExpressIntro;