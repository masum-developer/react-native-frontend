import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const code2 = `
npm install react-native-elements
`;
const code3 = `
import React from 'react';
import { Button } from 'react-native-elements';

const MyButton = () => {
  return (
    <Button
      title="Press me"
      onPress={() => console.log('Button pressed')}
    />
  );
};

export default MyButton;

`;

const ClassTwenty = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Chapter 3: Enhancing User Interface
      </Typography>
      <Typography variant="h4">
        Class 20: Using Third Party Component Library
      </Typography>

      <Typography mb={2}>
        Integrating third party component libraries in your React Native
        application can significantly enhance development speed and provide
        access to a wide range of prebuilt UI components. Here's a guide on how
        to use a third party component library in your React Native project:
      </Typography>
      <Box>
        <StepComp stepText="Step 1:"></StepComp>
        <Typography mt={1} fontWeight="bold">
          Choose a Component Library:
        </Typography>

        <Typography my={1}>
          There are several popular component libraries available for React
          Native, such as React Native Elements, React Native Paper, NativeBase,
          and UI Kitten. Choose a library that aligns with your project
          requirements and design preferences.
        </Typography>
      </Box>
      <Box>
        <StepComp stepText="Step 2:"></StepComp>
        <Typography fontWeight="bold" mt={1}>
          Install the Library:
        </Typography>
        <Typography my={2}>
          Install the chosen component library and its dependencies using a
          package manager like npm or yarn. For example, to install React Native
          Elements:
        </Typography>
        <CodeBox codeSnippet={code2}></CodeBox>
      </Box>
      <Box>
        <br />
        <StepComp stepText="Step 3:"></StepComp>
        <Typography fontWeight="bold" mt={1}>
          Import Components:
        </Typography>

        <Typography my={2}>
          Import the components you want to use from the library into your React
          Native files. For instance, if you want to use a button from React
          Native Elements:
        </Typography>
        <CodeBox codeSnippet={code3}></CodeBox>
      </Box>
      <Box>
        <br />
        <StepComp stepText="Step 4:"></StepComp>
        <Typography fontWeight="bold" mt={1}>
          {" "}
          Configure and Style Components:
        </Typography>
        <Typography my={2}>
          Configure and style the components as needed using the library's
          documentation and APIs. Each library has its own set of props and
          customization options. Refer to the library's documentation for
          detailed usage instructions and examples.
        </Typography>
      </Box>
      <Box>
        <StepComp stepText="Step 5:"></StepComp>
        <Typography fontWeight="bold" mt={1}>
          Test Components:
        </Typography>

        <Typography my={2}>
          Test the components in your application to ensure they work as
          expected and integrate seamlessly with your existing codebase. Make
          any necessary adjustments to the component configuration and styling
          based on your testing results.
        </Typography>
      </Box>
      <Box>
        <StepComp stepText="Step 6:"></StepComp>
        <Typography fontWeight="bold" mt={1}>
          Explore Additional Features:
        </Typography>
        <Typography my={2}>
          Explore additional features and components offered by the library to
          further enhance your application's functionality and user experience.
          Many component libraries provide a wide range of UI elements,
          navigation components, form elements, and more.
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassTwenty;
