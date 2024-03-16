import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const start = `
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TS4U App</Text>
      <Text style={styles.subtitle}>Explore and Enjoy!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
    backgroundColor: f0f0f0,
  },
  title: {
    fontSize: 24,
    fontWeight: bold,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 333,
  },
});

export default HomePage;


`;
const list1 = [
  "1. Create a new file named HomePage.js.",
  "2. Copy the provided code into HomePage.js.",
  "3. Import and use the HomePage component in your main application file or any other component where you want to display the home page.",
];

const ClassEight = () => {
  return (
    <Box>
      <Typography variant="h3">
        Chapter 4: Building the Basic Home Screen of TS4U
      </Typography>
      <Typography variant="h4" mb={1}>
        Class 8: Designing a Simple Home Screen Layout
      </Typography>
      <CodeBox codeSnippet={start}></CodeBox>
      <Typography variant="h4" my={1}>
        Explanation:
      </Typography>
      <Typography my={1}>
        This code defines a functional component called HomePage. Inside the
        component, a View component is used as the container for the home page
        content. Two Text components are included to display the title and
        subtitle of the home page. Styles are defined using the
        StyleSheet.create() method to apply formatting to the text elements and
        container. The HomePage component is exported as the default export to
        be used in other parts of the application.
      </Typography>
      <Box>
        <Typography>
          To use this code in your React Native Expo project:
        </Typography>
        <Process list={list1}></Process>
        <Typography my={2}>
          This simple home page design provides a starting point for further
          customization and expansion of your Ts4U apps user interface.
        </Typography>
        <br />
      </Box>
    </Box>
  );
};

export default ClassEight;
