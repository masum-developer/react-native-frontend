import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const list = [
    "Building dynamic user interfaces: React makes it easy to build complex user interfaces by breaking them down into smaller, reusable components. This makes it easier to manage and update the UI as the application grows in complexity.",
    "Declarative programming model: React uses a declarative programming model, which makes it easier to understand and debug the code. Developers can simply describe what they want the UI to look like, and React takes care of the rest.",
    "Virtual DOM: React uses a virtual DOM, which allows it to update the UI efficiently and minimize the number of actual changes made to the DOM. This makes the UI faster and more responsive.",
    "Large ecosystem: React has a large ecosystem of libraries and tools that can be used with it, making it easier to build complex applications quickly and efficiently.",
    "Cross-platform development: React can be used to build both web and mobile applications, using tools like React Native. This makes it easier to develop applications for multiple platforms using the same codebase."
];

const list1 = [
    "The developer creates a hierarchy of components that make up the UI, using React's declarative syntax.",
    "When the UI needs to be updated (for example, when a user interacts with it), React updates its internal representation of the UI (the virtual DOM) to reflect the changes.",
    "React then calculates the difference between the previous version of the virtual DOM and the new version, and determines the minimum set of changes needed to update the actual DOM.",
    "React updates the actual DOM with the changes, resulting in a faster and more efficient update process."
]

const NextInstallation = () => {
    return (
        <Box>
            <Typography variant='h3'>How to install NextJS?</Typography>
            <Typography variant='subtitle2'>
                To install Next.js, you first need to have Node.js and npm (Node Package Manager) installed on your computer. Follow these steps:
            </Typography>

            <Box mt={3}>
                <Typography mt={2} variant='subtitle1'>
                    Download and install Node.js from <a href="https://nodejs.org/">https://nodejs.org/</a> (you can choose either the LTS or Current version).
                </Typography>

                <Typography mt={2} variant='subtitle2'>After installation, open your command prompt or terminal and run the following command to check the version of Node.js installed:</Typography>

                <Box mt={3}>
                    <StepComp stepText="Step 1:"></StepComp>
                    <Process list={["After installation, open your command prompt or terminal and run the following command to check the version of Node.js installed:"]}></Process>
                    <ImageComp image={"/react/Screenshot_1.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 2:"></StepComp>
                    <Process list={["Run the following command to check the version of npm installed:"]}></Process>
                    <ImageComp image={"/react/Screenshot_2.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 3:"></StepComp>
                    <Process list={["Once you have Node.js and npm installed, you can create a new Next.js project. There are a couple of methods to do this:"]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="a: Using npx"></StepComp>
                    <ImageComp image={"/nextjs/Screenshot_3a.png"} imageTitle={"npx screenshot"}></ImageComp>
                    <Process list={["This command uses npx, which comes bundled with Node.js, to generate a new Next.js project called 'my-next-app'. It will set up a basic project structure for you."]}></Process>
                </Box>
                
                <Box mt={3}>
                    <StepComp stepText="b: Using yarn"></StepComp>
                    <Process list={["If you prefer using yarn as your package manager, you can create a new Next.js project by running the following command:"]}></Process>
                    <ImageComp image={"/nextjs/Screenshot_3b.png"} imageTitle={"yarn screenshot"}></ImageComp>
                    <Process list={["Similar to using npx, this creates a Next.js project called 'my-next-app'."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 4:"></StepComp>
                    <Process list={["Once the project is created, navigate into the project's directory and download the dependencies using the commands as follows:"]}></Process>
                    <ImageComp image={"/nextjs/Screenshot_4.png"} imageTitle={"cd screenshot"}></ImageComp>
                    <ImageComp image={"/nextjs/Screenshot_5.png"} imageTitle={"npm install screenshot"}></ImageComp>
                    <Process list={["This command will install all the necessary packages specified in the package.json file."]}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Step 5:"></StepComp>
                    <Process list={["After the dependencies are installed, you can start the Next.js development server. Use the following command to launch the server:"]}></Process>
                    <ImageComp image={"/nextjs/Screenshot_6.png"} imageTitle={"run dev screenshot"}></ImageComp>
                    <Process list={["After you have completed these steps, open your browser and navigate to http://localhost:3000. The server runs on this port by default."]}></Process>
                </Box>


                
            </Box>
        </Box>
    );
};

export default NextInstallation;