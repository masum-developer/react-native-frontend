import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';



const list = [
    "1) JavaScript expertise: Because Node.js is based on JavaScript, developers can use the same language for both front-end and back-end development, which can streamline the development process and reduce the learning curve.",
    "2) Fast and scalable: Node.js is built on the V8 JavaScript engine, which is known for its speed and efficiency. It also uses a non-blocking I/O model, which allows it to handle large numbers of connections simultaneously without slowing down.",
    "3) Rich library of packages: Node.js has a large ecosystem of third-party packages and modules available through its package manager, npm. This makes it easy for developers to add functionality to their applications without having to write everything from scratch.",
    "Cross-platform: Node.js is cross-platform, which means it can run on a variety of operating systems, including Windows, macOS, and Linux.",
    "Community support: Node.js has a large and active community of developers who contribute to its development, offer support, and create useful tools and packages."
];

const list2 = [
    "1) Building web applications: Node.js can be used to create server-side applications, such as web APIs, web servers, and real-time chat applications. It is well-suited for building scalable, high-performance applications that can handle large numbers of simultaneous connections.",
    "2) Building command-line tools: Node.js can be used to create command-line tools and scripts for automating tasks and processes, such as build scripts, deployment scripts, and data processing tools.",
    "3) Building desktop applications: Node.js can be used to build cross-platform desktop applications using frameworks such as Electron. This allows developers to use web technologies, such as HTML, CSS, and JavaScript, to create desktop applications that can run on Windows, macOS, and Linux.",
    "4) Building IoT devices: Node.js can be used to build Internet of Things (IoT) devices, such as sensors and controllers, that can communicate with other devices and services over the web.",
    "5) Data processing and analysis: Node.js can be used to process and analyze large datasets, such as log files, sensor data, and social media feeds. It can be used in conjunction with tools such as Apache Hadoop and Apache Spark to build big data processing pipelines."
]

const list3 = [
    "1) Express.js: Express.js is a minimalist web framework that provides a simple, flexible way to build web applications and APIs. It provides a wide range of features, such as routing, middleware support, and template engines, and can be easily extended with third-party modules.",
    "2) Koa.js: Koa.js is a lightweight web framework that is designed to be modular and flexible. It provides a set of features for building web applications and APIs, such as request and response handling, middleware support, and error handling.",
    "3) Nest.js: Nest.js is a progressive web framework that is built on top of Express.js and provides a set of features for building scalable, maintainable applications. It uses TypeScript for development, which adds strong typing and other language features to JavaScript.",
    "4) Hapi.js: Hapi.js is a configuration-centric web framework that provides a set of features for building web applications and APIs. It includes features such as routing, input validation, and caching, and can be extended with third-party plugins.",
    "5) Meteor.js: Meteor.js is a full-stack JavaScript framework that provides a set of features for building web and mobile applications. It includes features such as real-time data updates, hot code reloading, and server-side rendering."
]

const NodeIntroduction = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is NodeJs?</Typography>
            <Typography variant='subtitle2'>
                Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It is built on top of the V8 JavaScript engine, which is the same engine used by Google Chrome.

                Node.js allows developers to use JavaScript for both front-end and back-end development, making it a versatile tool for building web applications. It also provides a rich set of modules and packages through its package manager, npm, which allows developers to easily add functionality to their applications.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                One of the key advantages of Node.js is its ability to handle large numbers of simultaneous connections with high throughput, making it a popular choice for building scalable web applications, real-time chat applications, and streaming services. It is also used for building command-line tools, desktop applications, and IoT (Internet of Things) devices.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why NodeJs is used?</Typography>
                <Typography variant='subtitle2'>
                    Node.js offers several benefits that make it a popular choice for web development, including:
                </Typography>
                <Block list={list}></Block>
                <Typography variant='subtitle2'>
                    Overall, Node.js is a versatile tool that can be used for a wide range of tasks, making it a popular choice for developers in many different industries and applications.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>What can be build with NodeJs?</Typography>
                <Typography variant='subtitle2'>
                    Node.js can be used for a variety of tasks, including:
                </Typography>
                <Block list={list2}></Block>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>What is framework?</Typography>
                <Typography variant='subtitle2'>
                    A framework is a set of pre-written code and tools that provides a structure for building software applications. Frameworks provide developers with a set of libraries, modules, and conventions that can be used to develop applications faster and more efficiently.

                    Frameworks can be general-purpose or designed for a specific type of application, such as web development or mobile app development. They typically include common features and functionalities, such as data modeling, user authentication, and error handling, which can be customized and extended by developers to meet the specific requirements of their application.
                </Typography>

                <Typography mt={2} variant='subtitle2'>
                    Frameworks can be built on top of programming languages such as Java, Python, Ruby, and JavaScript, and provide developers with a set of standard practices, design patterns, and tools that can help streamline the development process.

                    Using a framework can offer several benefits, such as improved productivity, better code organization, and easier maintenance. However, frameworks can also have a learning curve, and developers need to invest time in understanding the framework's architecture and conventions to use it effectively.
                </Typography>

                <Typography variant='subtitle2' mt={2}>
                    Node.js has several popular frameworks that can be used for building web applications, including:
                </Typography>
                <Block list={list3}></Block>
                <Typography variant='subtitle2'>
                    These are just a few of the many Node.js frameworks available. The choice of framework depends on the specific needs and requirements of the project, as well as the preferences of the development team.
                </Typography>

                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: We'll learn ExpressJs as our backend framework throught the bootcamp!</MuiAlert>
                </Box>
            </Box>

        </Box>
    );
};

export default NodeIntroduction;