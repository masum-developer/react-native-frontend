import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const step1 = `
npm install @react-navigation/native @react-navigation/stack
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
import { View, Text } from 'react-native'; // Correct import statement for 'react-native'

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function InterviewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Interview Screen</Text>
    </View>
  );
}

function AuthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Authentication Screen</Text>
    </View>
  );
}

export { ChatScreen, CalendarScreen, NotificationsScreen, InterviewScreen, AuthScreen }; // Exporting the components for use in other files



`;
const step4 = `
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Interview" component={InterviewScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
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
const ClassFifteen = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Class 15: Placeholder Screens for Chat, Calendar, Notifications, and
        Interview and auth screen
      </Typography>

      <Typography mb={2}>
        To create placeholder screens for Chat, Calendar, Notifications,
        Interview, and an authentication screen in a React Native app using
        React Navigation, you can follow these steps:
      </Typography>
      <Box>
        <StepComp stepText="Step 1: Install React Navigation"></StepComp>
        <Typography mt={2}>
          If you haven't already, install React Navigation and its dependencies
          in your React Native project:
        </Typography>
        <CodeBox codeSnippet={step1}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 2: Import Dependencies"></StepComp>
        <Typography mt={2}>
          In your entry file (e.g., App.js), import the necessary dependencies:
        </Typography>
        <CodeBox codeSnippet={step2}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 3: Create Placeholder Screens"></StepComp>
        <Typography mt={2}>
          Define placeholder components for Chat, Calendar, Notifications,
          Interview, and authentication screens:
        </Typography>
        <CodeBox codeSnippet={step3}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 4: Create Stack Navigator"></StepComp>
        <Typography mt={2}>
          Create a stack navigator and define the navigation paths:
        </Typography>
        <CodeBox codeSnippet={step4}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 5: Run Your App"></StepComp>
        <Typography mt={2}>
          Run your React Native app to see the placeholder screens for Chat,
          Calendar, Notifications, Interview, and authentication.
        </Typography>
      </Box>
      <br />
    </Box>
  );
};

export default ClassFifteen;
