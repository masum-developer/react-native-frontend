import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';




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

const NodeInstallation = () => {
    return (
        <Box>
            <Typography variant='h3'>How to install NodeJs?</Typography>
            <Typography variant='subtitle2'>
                Follow these steps to install Node.js on your computer:
            </Typography>

            <Box mt={3}>

                <Box mt={3}>
                    <StepComp stepText="Step 1:"></StepComp>
                    <Process list={["Open your web browser and go to the official Node.js website at https://nodejs.org."]}></Process>
                    
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 2:"></StepComp>
                    <Process list={["On the Node.js homepage, you'll see two versions available, 'LTS' and 'Current':"]}></Process>
                    <ImageComp image={"/node/nodejshomepage.png"} imageTitle={"Screenshot: Nodejs Homepage"}></ImageComp>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 3:"></StepComp>
                    <Process list={["Click on the 'LTS' button to download the installer. The website will automatically detect your operating system (Windows, macOS, or Linux) and provide the appropriate installer download link."]}></Process>
                    {/* <ImageComp image={"/react/Screenshot_3.png"} imageTitle={"Screenshot 3: Installing"}></ImageComp> */}
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 4:"></StepComp>
                    <Process list={["Once the installer is downloaded, locate the file and double-click on it to run it. This will start the Node.js installation process."]}></Process>
                    <ImageComp image={"/node/installer.png"} imageTitle={"Screenshot: Nodejs installer"}></ImageComp>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 5:"></StepComp>
                    <Process list={["The installer will guide you through the installation process. You will see a series of screens with instructions. To proceed, just click 'Next' or 'Continue' on each screen."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 6:"></StepComp>
                    <Process list={["After the installation is complete, open your computer's command prompt (Windows) or terminal (macOS/Linux). Type the following commands to verify that Node.js is installed:"]}></Process>
                    <ImageComp image={"/node/terminalcommand.png"} imageTitle={"Screenshot: Nodejs version terminal command"}></ImageComp>
                </Box>
                

                
            </Box>
        </Box>
                 
    );
};

export default NodeInstallation;