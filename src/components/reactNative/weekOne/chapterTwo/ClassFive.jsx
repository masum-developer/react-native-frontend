import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";

const start = `
cd path/to/your/react_native_project
npx react-native start

`;

const ClassFive = () => {
  return (
    <Box>
      <Typography variant="h3">
        Class 5: Setting up an Emulator and Testing the Environment
      </Typography>
      <Typography>
        In Class 5, we will focus on setting up an emulator and testing the
        React Native development environment. This step is crucial for running
        and debugging React Native applications on virtual devices.
      </Typography>

      <Typography variant="h4" mt={1}>
        Why Set Up an Emulator?
      </Typography>
      <Typography mb={1}>
        Setting up an emulator allows you to simulate a mobile device
        environment on your computer. This is essential for testing your React
        Native applications across different platforms without needing physical
        devices. Emulators enable you to preview your apps behavior, test user
        interactions, and debug issues efficiently.
      </Typography>
      <StepComp stepText="Step 1:"></StepComp>
      <Typography my={1}>
        Select an Emulator: Choose an emulator based on your target platform
        (iOS or Android) and personal preference. Popular choices include:
        Android Emulator (for Android) iOS Simulator (for iOS)
      </Typography>
      <StepComp stepText="Step 2:"></StepComp>
      <Typography my={1}>
        Install Required SDKs: Depending on the emulator you choose, you may
        need to install the respective SDKs: For Android Emulator: Install
        Android Studio and set up Android Virtual Device (AVD). For iOS
        Simulator: Xcode is required, which includes the iOS Simulator.
      </Typography>
      <StepComp stepText="Step 3:"></StepComp>
      <Typography my={1}>
        Launch Emulator: Once the emulator is installed, launch it from the
        respective IDE (Android Studio for Android Emulator, Xcode for iOS
        Simulator).
      </Typography>
      <StepComp stepText="Step 4:"></StepComp>
      <Typography my={1}>
        Test Environment: Ensure that the emulator is running properly and
        responsive. You can verify this by interacting with the virtual device
        and checking for any errors.
      </Typography>
      <StepComp stepText="Step 5:"></StepComp>
      <Typography my={1}>
        Connect to React Native Project: Open your React Native project in a
        terminal or command prompt and run the following command to start the
        Metro Bundler:
      </Typography>
      <CodeBox codeSnippet={start}></CodeBox>
      <br />
      <StepComp stepText="Step 6:"></StepComp>
      <Typography my={1}>
        Run Your App on Emulator: To run your React Native app on the emulator,
        use the following commands based on your target platform: For Android
        Emulator: npx reactnative runandroid For iOS Simulator: npx reactnative
        runios
      </Typography>
      <StepComp stepText="Step 7:"></StepComp>
      <br />
      <Typography>
        Monitor Logs: Keep an eye on the logs output in the terminal/command
        prompt. This will provide valuable information about the apps behavior,
        warnings, and errors.
      </Typography>
      <br />
    </Box>
  );
};

export default ClassFive;
