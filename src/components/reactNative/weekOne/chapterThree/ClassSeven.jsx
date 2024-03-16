import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";

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
      <Typography mb={2}>Basic Structure Overview:</Typography>
      <StepComp stepText="1. Entry Point:"></StepComp>
      <Typography mt={2}>
        The entry point of a React Native app is typically the App.js file,
        which serves as the main component of the application. In App.js, you
        define the root component of your app and any initial configurations or
        setups required.
      </Typography>

      <br />
      <StepComp stepText="2. Components:"></StepComp>
      <Typography my={2}>
        React Native apps are composed of reusable components, which are
        JavaScript functions or classes that return JSX elements. Components can
        be functional or classbased and are used to define the UI and behavior
        of different parts of the app.
      </Typography>
      <StepComp stepText="3. Navigation:"></StepComp>
      <Typography my={2}>
        Navigation refers to the mechanism for moving between different screens
        or views within a React Native app. Popular navigation libraries in
        React Native include React Navigation, React Native Navigation, and
        React Router Native.
      </Typography>
      <StepComp stepText="4. Assets:"></StepComp>
      <Typography my={2}>
        The assets directory contains static assets such as images, fonts, and
        other resources used in the app. These assets are typically imported
        into components and referenced using relative paths.
      </Typography>
      <StepComp stepText="5. Styling:"></StepComp>
      <Typography my={2}>
        React Native uses stylesheets to style components, similar to CSS in web
        development. Styles can be defined inline using the style prop or in
        separate stylesheet files using the StyleSheet.create() method.
      </Typography>
      <StepComp stepText="6. State Management:"></StepComp>
      <Typography my={2}>
        State management is a crucial aspect of React Native development,
        allowing components to manage their internal state and data. Popular
        state management libraries in React Native include Redux, MobX, and
        Context API.
      </Typography>
      <StepComp stepText="7. Native Modules:"></StepComp>
      <Typography my={2}>
        React Native allows you to access platform specific native modules and
        APIs using JavaScript. Native modules enable integration with device
        features such as camera, geolocation, and sensors.
      </Typography>
    </Box>
  );
};

export default ClassSeven;
