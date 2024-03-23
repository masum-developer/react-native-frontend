import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const code1 = `

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

`;

const code2 = `
export const lightTheme = {
    backgroundColor: 'fff',
    textColor: '333',
    buttonColor: 'blue',
  };
  
  export const darkTheme = {
    backgroundColor: '333',
    textColor: 'fff',
    buttonColor: 'green',
  };
  
`;
const code3 = `
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };    
`;

const code4 = `

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'reactnative';
import { ThemeContext, lightTheme, darkTheme } from './ThemeProvider';

const HomeScreen = () => {
const { theme, toggleTheme } = useContext(ThemeContext);
const currentTheme = theme === 'light' ? lightTheme : darkTheme;

return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <Text style={[styles.text, { color: currentTheme.textColor }]}>Hello, World!</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: currentTheme.buttonColor }]} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'fff',
  },
});

export default HomeScreen;

`;

const ClassEighteen = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Chapter 2: Implementing Themes
      </Typography>
      <Typography variant="h4">
        Class 18: Introduction to Theming and Global Styles
      </Typography>

      <Typography mb={2}>
        In React Native, theming and global styles can be managed using various
        approaches, including context, custom hooks, or thirdparty libraries.
        Here's a basic guide on introducing theming and global styles in a React
        Native application:
      </Typography>
      <Box>
        <StepComp stepText="Step 1: Create Component Structure"></StepComp>

        <Typography my={2}>
          First, set up a context to manage the theme state and provide it
          throughout the component tree. You can use the createContext function
          from React to create a theme context:
        </Typography>
        <CodeBox codeSnippet={code1}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 2: Define Theme Values"></StepComp>

        <Typography my={2}>
          Define the theme values for light and dark modes. You can store theme
          values as objects and toggle between them based on the selected theme:
        </Typography>
        <CodeBox codeSnippet={code2}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 3: Implement Theme Switching"></StepComp>

        <Typography my={2}>
          Implement functionality to switch between light and dark themes. You
          can expose a function to toggle the theme within the context provider:
        </Typography>
        <CodeBox codeSnippet={code3}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 4: Use Theme Values in Components"></StepComp>

        <Typography my={2}>
          Use the theme values within your components by consuming the theme
          context. You can access the theme values using the useContext hook:
        </Typography>
        <CodeBox codeSnippet={code4}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 5: Extend Theme Usage"></StepComp>

        <Typography my={2}>
          Extend theme usage to other components in your application. You can
          access the theme values in any component wrapped in the ThemeProvider.
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassEighteen;
