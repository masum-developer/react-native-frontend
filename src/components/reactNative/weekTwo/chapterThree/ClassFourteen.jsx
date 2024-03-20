import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const step1 = `

npm install @reactnavigation/native @reactnavigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

`;

const step2 = `
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

`;
const step3 = `

import React from 'react';
import { View, Text, Button } from 'react-native'; // Note the correct import statement for 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export { HomeScreen, DetailsScreen }; // Exporting the components for use in other files


`;
const step4 = `
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

`;
const step5 = `
<Button
  title="Go to About"
  onPress={() => navigation.navigate(About)}
/>

`;
const ClassFourteen = () => {
  return (
    <Box>
      <Typography variant="h3">
        Chapter 3: Building the App Skeleton of TS4U
      </Typography>
      <Typography variant="h4">
        Class 14: Setting Up Navigation to Different Screens
      </Typography>
      <Typography>
        Setting up navigation to different screens in a React Native app
        involves using a navigation library like React Navigation to define
        navigation paths and transition between screens. Here's a guide on how
        to set up navigation to different screens using React Navigation:
      </Typography>
      <br />
      <Box>
        <StepComp stepText="Step 1: Install React Navigation"></StepComp>
        <br />
        <Typography my={2}>
          If you haven't already, install React Navigation and its dependencies
          in your React Native project:
        </Typography>
        <CodeBox codeSnippet={step1}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 2: Import Dependencies"></StepComp>
        <Typography my={2}>
          In your entry file (e.g., App.js), import the necessary dependencies:
        </Typography>
        <CodeBox codeSnippet={step2}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 3: Create Screens"></StepComp>
        <Typography my={2}>
          Define your screen components. Each screen should be a React
          component:
        </Typography>
        <CodeBox codeSnippet={step3}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 4: Create Stack Navigator"></StepComp>
        <Typography my={2}>
          Create a stack navigator and define the navigation paths:
        </Typography>
        <CodeBox codeSnippet={step4}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 5: Navigate Between Screens"></StepComp>
        <Typography my={2}>
          In your screen components, use the navigation.navigate() function to
          navigate to different screens:
        </Typography>
        <CodeBox codeSnippet={step5}></CodeBox>
      </Box>
    </Box>
  );
};

export default ClassFourteen;
