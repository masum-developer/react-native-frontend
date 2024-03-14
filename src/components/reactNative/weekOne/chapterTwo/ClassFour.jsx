import { Box, Typography } from "@mui/material";
import React from "react";
import CodeBox from "../../../global/CodeBox";
import StepComp from "../../../EnvironmentSetup/StepComp";
import Process from "../../../EnvironmentSetup/Process";

const list1 = [
  "Go to google and search 'node'.",
  "Click on the link node.js (Offical website).",
];
const list2 = ["Download LTS version", "Install on your pc."];
const css = `
C:\Users>node -v
C:\Users>v20.11.0
`;

const expo = `
C:\Users>npx create-expo-app ts4u
C:\Users>cd ts4u
C:\Users>npx expo start

`;

const expoLinux = `
C:\Users>yarn create-expo-app ts4u
C:\Users>cd ts4u
C:\Users>yarn expo start
`;
const ClassFour = () => {
  return (
    <Box>
      <Typography variant="h3">
        Chapter 2: Setting Up the Development Environment
      </Typography>
      <Typography variant="h4">Class 4: Installing Node and expo</Typography>

      <Typography my={1}>
        Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine.
        It allows you to run JavaScript on the server side, making it a crucial
        component for building JavaScriptbased applications, including React
        Native projects.
      </Typography>
      <StepComp stepText="Step 1:"></StepComp>
      <Process list={list1}></Process>

      <br />
      <StepComp stepText="Step 2:"></StepComp>
      <Process list={list2}></Process>

      <br />
      <StepComp stepText="Step 3:"></StepComp>
      <Typography variant="h4" mt={1}>
        Verify Installation:
      </Typography>
      <Typography mt={1}>
        Once the installation is complete, open a terminal or command prompt and
        type the following command to verify that Node.js has been installed
        successfully:
      </Typography>
      <CodeBox codeSnippet={css}></CodeBox>
      <Typography>
        This command will display the installed version of Node.js.
      </Typography>
      <br />
      <StepComp stepText="Step 4:"></StepComp>
      <Typography mt={1}>
        If you are new to mobile app development, the easiest way to get started
        is with Expo Go. Expo is a set of tools and services built around React
        Native. The most relevant feature for us right now is that it can get
        you writing a React Native app within minutes. You will only need a
        recent version of Node.js and a phone or emulator.
      </Typography>
      <CodeBox codeSnippet={expo}></CodeBox>
      <Typography>For Yarn</Typography>
      <CodeBox codeSnippet={expoLinux}></CodeBox>
    </Box>
  );
};

export default ClassFour;
