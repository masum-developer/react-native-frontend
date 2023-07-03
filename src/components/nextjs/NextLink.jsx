import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const code = `import Link from 'next/link';

function MyComponent() {
  return (
    <div>
        <h1>Welcome to My Component</h1>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </div>
  );
}

export default MyComponent;
`

            
const NextLink = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">Link Component in NextJS</Typography>
        
        <Typography mt={1} variant="subtitle2">
        The Link component in Next.js is an essential feature that allows you to navigate between pages within your application without the need for a full page refresh. It improves the user experience by providing a seamless and fast navigation experience. By leveraging client-side rendering and preloading, Next.js optimizes the loading and rendering of linked pages. This results in faster page transitions and a better overall performance.
        </Typography>

        <Typography mt={1} variant="subtitle2">The Link component in Next.js generates HTML anchor tags (&lt;a&gt;) with proper href attributes. This ensures that search engines can index the linked pages correctly, improving the SEO of your application.</Typography>

      </Box>

      <Box mt={2}>
      <Typography variant="h3">How to use Link Components?</Typography>
        <Typography mt={1} variant="subtitle2">
        To use the Link component, follow these steps:
        </Typography>

        <Process list={["Import the Link component from the 'next/link' module."]}></Process>
        <Process list={["Wrap the element that should trigger the navigation with the Link component."]}></Process>
        <Process list={["Set the href prop of the Link component to the target URL or route path you want to navigate to."]}></Process>
        <Process list={["Set the href prop of the Link component to the target URL or route path you want to navigate to."]}></Process>
        
        <Typography mt={2} variant="h3">Example:</Typography>
        <CodeBox codeSnippet={code}></CodeBox>
        <Typography mt={2} variant="subtitle2">The code snippet above demonstrates that the elements `Home`, `About` and `Contact` are clickable elements as they are wrapped inside the Link components. The `href` attribute specifies the route the user will be navigated to once these elements are clicked.</Typography>

      </Box>

    </Box>
  );
};

export default NextLink;
