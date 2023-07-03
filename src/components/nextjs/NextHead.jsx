import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const list = ["SEO Optimization: The `<Head>` component allows you to set important SEO-related elements like page title, meta description, keywords, and canonical URLs. This helps search engines understand and index your website properly.",
               "Custom Page Titles: You can set unique page titles for each page using the `<Head>` component. This is crucial for enhancing user experience and improving search engine visibility.",
               "Meta Tags: With the <Head> component, you can define custom meta tags, including Open Graph tags for social sharing, Twitter card metadata, viewport settings, and more. This allows you to control how your content appears when shared on various platforms.",
               "CSS and External Scripts: The <Head> component allows you to include custom CSS stylesheets or external JavaScript files specific to a particular page or component."]

const codeSnippet =`import Head from 'next/head';

function MyComponent() {
  return (
    <div>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="This is my page description." />
        <link rel="stylesheet" href="/path/to/styles.css" />
      </Head>

      {/* Rest of your content */}
    </div>
  );
}

export default MyComponent;`


const NextHead = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">Head Component in NextJS</Typography>
        
        <Typography mt={1} variant="subtitle2">
            In Next.js, the Head component is a powerful tool for managing the content of the HTML `&lt;head&gt;` section of your application. It enables you to control various aspects of the page, such as the title, meta tags, stylesheets, and other important elements.
        </Typography>

        <Typography mt={1}>Benefits of using the Head component in Next.js:</Typography>

        <Process mt={2} list={list}></Process>

      </Box>
        
    

      <Box mt={2}>
        <Typography variant="h3">How to implement Head component?:</Typography>

        <Process list={["Import the Head component from the `next/head` module."]}></Process>
        
        <Process list={["Place the Head component within your page/component, typically in the render or return method."]}></Process>

        <Process list={["Inside the Head component, add the desired metadata and elements using the available tags like `<title>`, `<meta>`, `<link>`, and so on."]}></Process>
        
      </Box>

      <Box mt={2}>
      <Typography variant="h3">Example:</Typography>

        <CodeBox codeSnippet={codeSnippet}></CodeBox>
        
        
      </Box>

  
    </Box>
  );
};

export default NextHead;
