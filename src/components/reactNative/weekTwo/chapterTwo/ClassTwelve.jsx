import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const view = `
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

`;

const list1 = ["Key Features:"];

const ClassTwelve = () => {
  return (
    <Box>
      <Typography variant="h3">Chapter 2: Implementing Navigation</Typography>
      <Typography variant="h4">
        Class 12: Introduction to React Navigation Library
      </Typography>
      <Typography fontWeight="bold" my={2}>
        Introduction to React Navigation Library
      </Typography>
      <Typography my={2}>
        React Navigation is a popular navigation library for React Native
        applications. It provides a robust and customizable solution for
        managing navigation between different screens in your app. Whether
        you're building a simple app with a few screens or a complex application
        with nested navigation hierarchies, React Navigation can accommodate
        your needs.
      </Typography>

      <StepComp stepText="Key Features:"></StepComp>
      <Typography fontWeight="bold" my={2}>
        1. Cross Platform Compatibility:
      </Typography>

      <Typography my={2}>
        React Navigation is designed to work seamlessly across both iOS and
        Android platforms. It provides consistent navigation behavior and UI
        components regardless of the platform, ensuring a unified user
        experience.
      </Typography>
      <Typography fontWeight="bold" my={2}>
        2. Multiple Navigation Types:
      </Typography>

      <Typography my={2}>
        React Navigation offers various navigation types, including stack
        navigation, tab navigation, drawer navigation, and more. You can choose
        the navigation type that best suits your app's navigation flow and user
        interface requirements.
      </Typography>
      <Typography fontWeight="bold" my={2}>
        3. Customizable and Extensible:
      </Typography>

      <Typography my={2}>
        React Navigation allows for extensive customization and extension. You
        can customize navigation headers, transitions, gestures, and other
        aspects of navigation behavior to match your app's design and branding.
        Additionally, you can create custom navigators and components to
        implement unique navigation patterns.
      </Typography>
      <Typography fontWeight="bold" my={2}>
        4. Declarative API:
      </Typography>

      <Typography my={2}>
        React Navigation follows a declarative API approach, making it intuitive
        and easy to use. You define your app's navigation structure
        declaratively using JavaScript objects, which are then translated into
        navigators and screens by React Navigation.
      </Typography>
      <StepComp stepText="Getting Started:"></StepComp>
      <Typography my={2}>
        To start using React Navigation in your React Native project, follow
        these steps:
      </Typography>
      <Typography fontWeight="bold" my={2}>
        1. Installation:
      </Typography>
      <Typography>Install the required packages using npm or yarn:</Typography>
      <CodeBox codeSnippet={view}></CodeBox>

      <Typography fontWeight="bold" my={2}>
        2. Choose a Navigator:
      </Typography>
      <Typography>
        Choose the appropriate navigator (e.g., Stack Navigator, Tab Navigator)
        based on your app's navigation requirements. Import the selected
        navigator from @reactnavigation/native and configure it with your
        screens.
      </Typography>

      <Typography fontWeight="bold" my={2}>
        3. Define Screens:
      </Typography>
      <Typography>
        Define your app's screens as React components. Each screen component
        represents a unique view in your app.
      </Typography>
      <Typography fontWeight="bold" my={2}>
        4. Set up Navigation:
      </Typography>
      <Typography>
        Set up navigation between screens using the navigator's API methods,
        such as navigate, push, goBack, etc. Pass necessary parameters to
        screens as needed.
      </Typography>

      <Typography fontWeight="bold" my={2}>
        5. Run Your App:
      </Typography>
      <Typography>
        Run your React Native app to see the navigation in action. You should be
        able to navigate between screens using the defined navigation logic.
      </Typography>
    </Box>
  );
};

export default ClassTwelve;
