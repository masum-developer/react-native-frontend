import { Box, Typography } from "@mui/material";
import React from "react";

import CodeBox from "../../../global/CodeBox";

const start = `
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start

`;

const ClassSeven = () => {
  return (
    <Box>
      <Typography variant="h3">
        Class 7: Understanding the Basic Structure of a React Native App
      </Typography>
      <Typography>
        In Class 7, we will dive into the basic structure of a React Native app.
        Understanding the structure of a React Native app is essential for
        efficient development and maintenance of mobile applications.
      </Typography>
      <Typography variant="h4" mb={1}>
        Introduction:
      </Typography>

      <Typography>
        A React Native app consists of several components and directories, each
        serving a specific purpose in the apps architecture. By familiarizing
        yourself with these components and directories, you can navigate and
        manage your React Native projects effectively.
      </Typography>
      <Typography>Basic Structure Overview:</Typography>
      <StepComp stepText="1. Entry Point:"></StepComp>
      <Typography>
        The entry point of a React Native app is typically the App.js file,
        which serves as the main component of the application. In App.js, you
        define the root component of your app and any initial configurations or
        setups required.
      </Typography>
      <CodeBox codeSnippet={start}></CodeBox>
    </Box>
  );
};

export default ClassSeven;
