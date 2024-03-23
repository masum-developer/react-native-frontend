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

const ClassTwentyOne = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Class 21: Refining the UI with Third Party Component Library
      </Typography>

      <Typography mb={2}>
        Using third party component libraries in React Native can significantly
        streamline your development process by providing prebuilt UI components.
        Here's a general guide on how to use a third party component library in
        your React Native project:
      </Typography>
      <Box>
        <StepComp stepText="Step 1:"></StepComp>
        <Typography mt={1}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Choose a Component Library:
          </span>
          First, choose a component library that fits your project requirements.
          Some popular React Native component libraries include:
        </Typography>
        <Typography>
          {" "}
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            React Native Elements:
          </span>{" "}
          A highly customizable cross platform UI toolkit.
        </Typography>
        <Typography>
          {" "}
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            React Native Paper:
          </span>{" "}
          Material Design components for React Native.
        </Typography>
        <Typography>
          {" "}
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            NativeBase:
          </span>{" "}
          Essential crossplatform UI components for React Native.
        </Typography>
        <Typography>
          {" "}
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            UI Kitten:
          </span>{" "}
          Customizable and themeable React Native UI components.
        </Typography>
        <Typography mb={1}>
          Choose a library based on your project needs, design preferences, and
          community support.
        </Typography>
      </Box>
      <Box>
        <StepComp stepText="Step 2:"></StepComp>
        <Typography mt={1}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Install the Library:
          </span>
          Once you've chosen a library, install it using npm or yarn. For
          example, to install React Native Elements:
        </Typography>
        <CodeBox codeSnippet={code2}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 3:"></StepComp>
        <Typography mt={1}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Import and Use Components:
          </span>
          After installing the library, you can import components from the
          library and use them in your React Native components. Here's an
          example of how you can use a button component from React Native
          Elements:
        </Typography>
        <CodeBox codeSnippet={code3}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 4:"></StepComp>
        <Typography mt={1}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Customize and Style Components:
          </span>
          Many third party component libraries provide customization options to
          fit your project's design. Refer to the library's documentation for
          available props, styling options, and customization guides. You can
          customize the components to match your project's design guidelines.
        </Typography>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 5:"></StepComp>
        <Typography mt={1}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Explore Additional Features:
          </span>
          Explore additional components and features provided by the library to
          enhance your application's user interface and functionality. Most
          libraries offer a wide range of components, including buttons, input
          fields, navigation components, and more.
        </Typography>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 6:"></StepComp>
        <Typography mt={1}>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            Test and Iterate:
          </span>
          Test the components in your application to ensure they behave as
          expected and integrate seamlessly with your existing codebase. Make
          any necessary adjustments to the component configuration and styling
          based on your testing results.
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassTwentyOne;
