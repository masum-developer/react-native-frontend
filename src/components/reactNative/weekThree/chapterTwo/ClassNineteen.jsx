import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const code1 = `

// themes.js
export const lightTheme = {
  backgroundColor: 'FFFFFF',
  textColor: '000000',
  buttonColor: '007BFF',
};

export const darkTheme = {
  backgroundColor: '1E1E1E',
  textColor: 'FFFFFF',
  buttonColor: '28A745',
};


`;

const code2 = `
// ThemeContext.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

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
const code3 = `
// HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'reactnative';
import { ThemeContext } from './ThemeContext';
import { lightTheme, darkTheme } from './themes';

const HomeScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <Text style={[styles.text, { color: currentTheme.textColor }]}>Welcome to My App</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: currentTheme.buttonColor }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'FFFFFF',
  },
});

export default HomeScreen;

`;

const code4 = `
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import HomeScreen from './HomeScreen';

const App = () => {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;


`;

const ClassNineteen = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Class 19: Applying Themes in Home page
      </Typography>

      <Typography mb={2}>
        To apply themes in a React Native home page, you can utilize context and
        global styles to manage the appearance of your components. Below is a
        guide on how to apply themes in your home page:
      </Typography>
      <Box>
        <StepComp stepText="Step 1: Define Themes"></StepComp>

        <Typography my={2}>
          First, define your themes with different styles for light and dark
          modes. You can organize your themes in a separate file, such as
          themes.js:
        </Typography>
        <CodeBox codeSnippet={code1}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 2: Create a Theme Context"></StepComp>

        <Typography my={2}>
          Set up a theme context to provide theme data to all components in your
          application. This context will hold the current theme and a function
          to toggle between themes:
        </Typography>
        <CodeBox codeSnippet={code2}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 3: Apply Theme in Home Page"></StepComp>

        <Typography my={2}>
          In your home page component, consume the theme context to apply the
          appropriate styles based on the current theme:
        </Typography>
        <CodeBox codeSnippet={code3}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 4: Wrap App with Theme Provider"></StepComp>

        <Typography my={2}>
          Wrap your application with the ThemeProvider at the top level to
          provide the theme context to all
        </Typography>
        <CodeBox codeSnippet={code4}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="Step 5: Testing"></StepComp>

        <Typography my={2}>
          Run your React Native application to test the functionality of theme
          switching. You should see the styles change according to the selected
          theme.
        </Typography>
      </Box>
      <br />
    </Box>
  );
};

export default ClassNineteen;
