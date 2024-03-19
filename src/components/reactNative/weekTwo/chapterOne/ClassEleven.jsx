import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";

import Process from "../../../EnvironmentSetup/Process";
import CodeBox from "../../../global/CodeBox";

const btn = `
import React from 'react';
import { View, Button, Alert } from 'react-native';

   const App = () => {
     const handlePress = () => {
       Alert.alert('Button Pressed!');
     };

     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Button title="Press Me" onPress={handlePress} />
       </View>
     );
   };

   export default App;


`;

const touchableOpacity = `
import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'reactnative';

const App = () => {
  const handlePress = () => {
    Alert.alert('TouchableOpacity Pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ padding: 10, backgroundColor: 'blue', color: 'white' }}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;


`;

const list1 = [
  "1. Create a new file named HomePage.js.",
  "2. Copy the provided code into HomePage.js.",
  "3. Import and use the HomePage component in your main application file or any other component where you want to display the home page.",
];

const ClassEleven = () => {
  return (
    <Box>
      <Typography variant="h3">
        Class 11: Handling User Input with Buttons and Touchables
      </Typography>
      <Typography fontWeight="bold">
        In React Native, handling user input is crucial for creating interactive
        user interfaces. Buttons and Touchables are components specifically
        designed for this purpose. Here's an overview of these components along
        with links to their official documentation:
      </Typography>
      <br />
      <StepComp stepText="1. Button:"></StepComp>

      <Typography my={2}>
        The Button component provides a simple button user interface. It's
        typically used for triggering actions or navigation. Buttons can have a
        title and an optional onPress callback function.
      </Typography>
      <Typography>Example usage:</Typography>
      <CodeBox codeSnippet={btn} />
      <br />
      <StepComp stepText="2. Touchables:"></StepComp>

      <Typography mt={2}>
        Touchables are components that respond to touches. There are several
        types of touchables available in React Native, such as TouchableOpacity,
        TouchableHighlight, TouchableNativeFeedback, and
        TouchableWithoutFeedback. These components provide more customization
        options compared to the Button component.
      </Typography>

      <Typography my={2}>Example usage of TouchableOpacity:</Typography>
      <CodeBox codeSnippet={touchableOpacity} />
    </Box>
  );
};

export default ClassEleven;
