import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const list = ["Customization: The Script component enables you to add your own custom JavaScript code to enhance the functionality of your Next.js application.",
            "Third-Party Library Integration: It allows you to easily include external JavaScript libraries or frameworks in your Next.js application.",
            "Modularity: By separating your JavaScript code into smaller, modular components using the Script component, you can maintain a clean and organized codebase."]

//const codesnippet1 = `import Script from 'next/script';`
//const codesnippet2 = `<Script src="/path/to/script.js" />`

const codesnippet3 =`import Script from 'next/script';

function MyComponent() {
  return (
    <div>
      <h2>NextJS Scripting</h2>

      <Script src="/path/to/script.js" />
    </div>
  );
}

export default MyComponent;`


const NextScript = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">Script Component in NextJS</Typography>
        
        <Typography mt={2} variant="subtitle2">
        The Script component in Next.js plays a crucial role in enabling advanced JavaScript functionality within your application. It provides a convenient and flexible way to seamlessly integrate custom JavaScript code, third-party libraries, and client-side scripts. This allows you to enhance the interactivity and dynamic nature of your Next.js application. Whether you need to handle user interactions, manipulate the DOM, fetch data from APIs, or leverage external libraries, the Script component empowers you to effortlessly incorporate these features into your project.       </Typography>

      </Box>

      <Box mt={2}>
        <Typography variant="h3">Implementing Script:</Typography>

        <Process list={["Import the Script component from the Next.js package:"]}></Process>
        
        <Process list={["Within your component's structure, include the Script component and provide the necessary props. For example, to include an external script file, use the src prop:"]}></Process>

        <Process list={["This is what your overall component should look like:"]}></Process>
        <CodeBox codeSnippet={codesnippet3}></CodeBox>
        
        <Typography mt={2} variant="subtitle2">You can also use other props like strategy, id, onLoad, or onError as needed, depending on your specific use case.</Typography>
        
      </Box>

    </Box>
  );
};

export default NextScript;
