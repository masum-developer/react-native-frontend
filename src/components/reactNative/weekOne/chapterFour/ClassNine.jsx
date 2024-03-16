import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const start = `
import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const BasicComponentsExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>
      <Image source={require(./assets/logo.png)} style={styles.logo} />
      <TextInput placeholder="Enter your name" style={styles.input} />
      <ScrollView>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={() => alert(Button pressed)} style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: center,
    justifyContent: center,
  },
  title: {
    fontSize: 24,
    fontWeight: bold,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: 80%,
    height: 40,
    borderWidth: 1,
    borderColor: ccc,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: white,
    fontWeight: bold,
  },
});

export default BasicComponentsExample;



`;
const list1 = [
  "1. Create a new file named HomePage.js.",
  "2. Copy the provided code into HomePage.js.",
  "3. Import and use the HomePage component in your main application file or any other component where you want to display the home page.",
];

const ClassNine = () => {
  return (
    <Box>
      <Typography variant="h3">
        Class 9: Introduction to Basic React Native Components (View, Text,
        etc.)
      </Typography>
      <Typography mb={1}>
        In Class 9, we will introduce fundamental React Native components that
        are essential building blocks for creating user interfaces in React
        Native applications. Understanding these basic components is crucial for
        developing UIs with React Native effectively.
      </Typography>
      <Typography variant="h4">
        Introduction to React Native Components:
      </Typography>
      <Typography>
        React Native provides a variety of builtin components that you can use
        to create user interfaces. These components allow you to structure and
        display content on the screen, handle user input, apply styles, and
        more.
      </Typography>
      <Box>
        <Typography my={2} variant="h4">
          Basic React Native Components:
        </Typography>
        <StepComp stepText="1. View:"></StepComp>
        <Typography my={2}>
          The View component is like a <span style={{ color: "red" }}>div</span>{" "}
          element in web development. It is used to structure and layout
          content, similar to a container. Views can contain other components
          and are used to create the overall layout of your app.
        </Typography>
        <StepComp stepText="2. Text:"></StepComp>
        <Typography my={2}>
          The Text component is used to display text content on the screen. It
          supports styling properties such as font size, color, weight,
          alignment, and more.
        </Typography>
        <StepComp stepText="3. Image:"></StepComp>
        <Typography my={2}>
          The Image component is used to display images in your app. It supports
          various sources for images, including local assets, network URLs, and
          base64 encoded data.
        </Typography>
        <StepComp stepText="4. TextInput:"></StepComp>
        <Typography my={2}>
          The TextInput component allows users to enter text input via a
          keyboard. It supports features such as placeholder text, secure text
          entry (passwords), and controlled or uncontrolled input modes.
        </Typography>
        <StepComp stepText="5. ScrollView:"></StepComp>
        <Typography my={2}>
          The ScrollView component provides a scrollable container for content
          that exceeds the screen size. It automatically scrolls vertically when
          the content overflows the available space.
        </Typography>
        <StepComp stepText="6. TouchableOpacity:"></StepComp>
        <Typography my={2}>
          The TouchableOpacity component provides touchable feedback for
          components, similar to buttons. It supports onPress events and
          provides visual feedback when pressed.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4">Implementation Examples:</Typography>
        <CodeBox codeSnippet={start}></CodeBox>
      </Box>
    </Box>
  );
};

export default ClassNine;
