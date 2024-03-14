import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";

const start = `
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start

`;

const ClassSix = () => {
  return (
    <Box>
      <Typography variant="h3">Chapter 3: Project Initialization</Typography>
      <Typography variant="h4" mb={1}>
        Class 6: Creating Your First React Native App named TS4U
      </Typography>

      <Typography>
        In Class 6, we will walk through the process of creating your first
        React Native app named TS4U. This class serves as an introduction to
        React Native development and provides handson experience in setting up
        and initializing a basic React Native project.
      </Typography>
      <Typography>Introduction to TS4U:</Typography>
      <Typography>
        TS4U is a simple React Native app that well be creating in this class.
        It will serve as a foundational project for learning React Native
        concepts and building upon them in subsequent If you are new to mobile
        development, the easiest way to get started is with Expo Go.
      </Typography>
      <CodeBox codeSnippet={start}></CodeBox>
    </Box>
  );
};

export default ClassSix;
