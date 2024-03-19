import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const step1 = `
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

`;
const ClassThirteen = () => {
  return (
    <Box>
      <Typography variant="h3">
        Class 13: Implementing Stack Navigation in the App
      </Typography>
      <Typography>
        Implementing Stack Navigation in a React Native app using React
        Navigation involves creating a stack navigator and defining the screens
        you want to navigate between. Here's a step by step guide along with
        documentation links:
      </Typography>
      <br />
      <StepComp stepText="Step 1:"></StepComp>
      <Typography>Installation:</Typography>
      <Typography>
        If you haven't already installed React Navigation and its dependencies,
        you need to do so. Run the following command in your project directory:
      </Typography>
      <CodeBox codeSnippet={step1}></CodeBox>
    </Box>
  );
};

export default ClassThirteen;
