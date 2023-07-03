import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const list = ["Customization: The <script> component enables you to add your own custom JavaScript code to enhance the functionality of your Next.js application.",
            "Third-Party Library Integration: It allows you to easily include external JavaScript libraries or frameworks in your Next.js application.",
            "Modularity: By separating your JavaScript code into smaller, modular components using the <script> component, you can maintain a clean and organized codebase."]

const codesnippet1 = `import Script from 'next/script';`
const codesnippet2 = `<Script src="/path/to/script.js" />`


const NextScript = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">&lt;script&gt; Component in NextJS</Typography>
        
        <Typography mt={1} variant="subtitle2">
        The &lt;script&gt; component in Next.js allows you to include custom JavaScript code within your application. It provides a way to add client-side scripts, third-party libraries, or any other JavaScript code required for your application's functionality.
        </Typography>

        <Typography mt={1}>Benefits of using the &lt;script&gt; component in Next.js:</Typography>

        <Process mt={2} list={list}></Process>

      </Box>

      <Box mt={2}>
        <Typography variant="h3">Implementing &lt;script&gt;:</Typography>

        <Process list={["Import the <script> component from the Next.js package:"]}></Process>
        <CodeBox codeSnippet={codesnippet1}></CodeBox>
        <Process list={["Within your component's JSX structure, include the <Script> component and provide the necessary props. For example, to include an external script file, use the src prop:"]}></Process>
        <CodeBox codeSnippet={codesnippet2}></CodeBox>
        <Typography mt={2} variant="subtitle2">You can also use other props like strategy, id, onLoad, or onError as needed, depending on your specific use case.</Typography>
        



      </Box>

  
    </Box>
  );
};

export default NextScript;
