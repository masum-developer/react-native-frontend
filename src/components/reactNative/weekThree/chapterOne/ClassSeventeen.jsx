import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const code1 = `

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to My App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Explore our features:</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Interview</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;


`;

const ClassSeventeen = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Class 17: Designing our Home Page
      </Typography>

      <Typography mb={2}>
        Designing a home page in a React Native application involves structuring
        the layout, styling components, and adding necessary functionality.
        Here's a guide on how to design a basic home page in React Native:
      </Typography>
      <Box>
        <StepComp stepText="Step 1: Create Component Structure"></StepComp>

        <Typography mt={2}>
          Define the structure of your home page component. This might include a
          header, navigation buttons, content sections, etc. Use appropriate
          React Native components such as View, Text, TouchableOpacity, Image,
          etc.
        </Typography>
        <CodeBox codeSnippet={code1}></CodeBox>
      </Box>
      <Box>
        <StepComp stepText="Step 2: Style Components"></StepComp>

        <Typography mt={2}>
          Use the StyleSheet API to define styles for your components. You can
          define styles for text, buttons, containers, etc., using properties
          like fontSize, backgroundColor, padding, margin, etc.
        </Typography>
      </Box>
      <Box>
        <StepComp stepText="Step 3: Add Functionality"></StepComp>

        <Typography mt={2}>
          Implement functionality for navigation buttons or any other
          interactive elements. You can use React Navigation or any other
          navigation library for navigating to different screens.
        </Typography>
      </Box>
      <Box>
        <StepComp stepText="Step 4: Test and Iterate"></StepComp>

        <Typography mt={2}>
          Test your home page layout on various devices and screen sizes. Make
          adjustments to ensure a consistent and userfriendly experience across
          different platforms.
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassSeventeen;
