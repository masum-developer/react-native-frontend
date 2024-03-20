import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const step1 = `
import { StyleSheet } from 'react-native';

`;

const step2 = `
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'fff',
    },
    text: {
      fontSize: 20,
      color: '333',
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'fff',
      fontSize: 16,
    },
  });
  

`;

const step3 = `

import React from 'react';
import { View, Text, TouchableOpacity } from 'reactnative';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;


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
const ClassSixteen = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Week 3: Styling and Theming
      </Typography>

      <Typography mb={2}>Chapter 1: Styling in React Native</Typography>
      <Typography>
        Class 16: Basics of Styling Components with Stylesheets
      </Typography>
      <Typography>
        Styling components in React Native is similar to styling in web
        development, but it uses a subset of CSS properties and a different
        approach for creating stylesheets. Here's a basic overview of how to
        style components using stylesheets in React Native:
      </Typography>
      <Box>
        <StepComp stepText="Step 1: Import StyleSheet"></StepComp>
        <Typography mt={2}>
          In your React Native component file, import the StyleSheet module from
          reactnative:
        </Typography>
        <CodeBox codeSnippet={step1}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 2: Define Styles"></StepComp>
        <Typography mt={2}>
          Create a stylesheet using the StyleSheet.create() method. This method
          takes an object where keys are style names and values are style
          definitions:
        </Typography>
        <CodeBox codeSnippet={step2}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 3: Apply Styles"></StepComp>
        <Typography mt={2}>
          Apply styles to your components using the style prop. You can either
          apply a single style or an array of styles:
        </Typography>
        <CodeBox codeSnippet={step3}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 4: ComponentSpecific Styles"></StepComp>
        <Typography mt={2}>
          You can also define styles directly within component definitions using
          inline styles. However, using stylesheets is recommended for better
          organization and reusability.
        </Typography>
        <CodeBox codeSnippet={step4}></CodeBox>
      </Box>
      <br />
    </Box>
  );
};

export default ClassSixteen;
