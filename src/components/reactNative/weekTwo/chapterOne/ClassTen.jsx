import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const view = `
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/ Other components here /}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
  },
});

export default App;

`;

const text = `
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
  },
  text: {
    fontSize: 24,
    fontWeight: bold,
  },
});

export default App;

`;
const image = `
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: https://example.com/image.jpg }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default App;

`;
const list1 = [
  "1. Create a new file named HomePage.js.",
  "2. Copy the provided code into HomePage.js.",
  "3. Import and use the HomePage component in your main application file or any other component where you want to display the home page.",
];

const ClassTen = () => {
  return (
    <Box>
      <Typography variant="h3">
        Week 2: Basic Components and Navigation
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        Chapter 1: React Native Components Deep Dive
      </Typography>
      <Typography mt={1} fontWeight="bold">
        Class 10: Exploring Basic Components: View, Text, Image
      </Typography>
      <Typography my={1}>
        In React Native, the basic components like View, Text, and Image are
        fundamental building blocks for creating user interfaces. Here's a brief
        overview of each component and how to use them along with links to their
        official documentation:
      </Typography>

      <Box>
        <StepComp stepText="1. View:"></StepComp>
        <Typography my={1}>
          The View component is like a <span style={{ color: "red" }}>div</span>{" "}
          element in web development. It's a container that supports layout with
          flexbox, style, touch handling, and accessibility controls. It's used
          to structure and group other components. It can be styled using the
          style prop, similar to CSS.
        </Typography>
        <Typography>Example usage:</Typography>
        <CodeBox codeSnippet={view}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="2. Text:"></StepComp>
        <Typography my={1}>
          The Text component is used to display text. It supports nesting,
          styling, and accessibility options. It can be styled using the style
          prop similar to CSS.
        </Typography>
        <Typography>Example usage:</Typography>
        <CodeBox codeSnippet={text}></CodeBox>
      </Box>
      <br />
      <Box>
        <StepComp stepText="3. Image:"></StepComp>
        <Typography my={1}>
          The Image component is used to display images. It supports various
          sources like local images, network images, and static resources. It
          can be styled using the style prop similar to CSS.
        </Typography>
        <Typography>Example usage:</Typography>
        <CodeBox codeSnippet={image}></CodeBox>
      </Box>
      <Typography my={2}>
        These are the basic components in React Native for building user
        interfaces. You can explore more about them and their properties in the
        official documentation.
      </Typography>
    </Box>
  );
};

export default ClassTen;
