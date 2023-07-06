import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";


const list=["Performance Optimization: The automatic image optimization and lazy loading capabilities of `next/image` contribute to faster page load times, reduced bandwidth usage, and improved overall performance.", 
            "Responsive Design Support: By specifying image dimensions and using responsive layouts, the next/image component helps ensure that your images look great across different screen sizes and devices.",
            "Simplified Image Handling: The next/image component abstracts away the complexity of image optimization and provides an intuitive API, making it easy to work with images in your Next.js application."]

const codeSnippet = `import Image from 'next/image';

function MyComponent() {
  return (
    <div>
      <h1>Welcome to My Component</h1>
      <Image src="/path/to/image.jpg" alt="Description of the image" width={500} height={300} />
    </div>
  );
}

export default MyComponent;
`

const NextImageComponents = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">What is Image Component in NextJS?</Typography>
        <Typography mt={2} variant="subtitle2">
        Integrating images seamlessly and optimizing their performance is vital for creating engaging web applications. In Next.js, you can achieve this effortlessly using the built-in `next/image` component. The `next/image` component provides a streamlined way to handle and optimize images, resulting in faster loading times and an improved user experience.
        </Typography>

        <Typography mt={1} variant="subtitle2">
        In this section, we will explore how to leverage the `next/image` component in Next.js. Let's start off by looking at some of its benefits:
        </Typography>

        <Process list={list}></Process>

      </Box>

      <Box>
        <Typography mt={2} variant="h3">How to use Image Components?</Typography>
        <Process list={["Create a folder named public in the root directory of your Next.js project. This folder will serve as the storage location for your images."]}></Process>
        <Process list={["Place the image file you want to use within the public folder."]}></Process>
        <Process list={["In the component file you are using, import `next/image` and incorporate the `Image` component as follows:"]}></Process>
        <CodeBox codeSnippet={codeSnippet}></CodeBox>
        <Typography mt={1} variant="subtitle2">The width and height properties are optional. You can use them if you want to declare the dimensions of your image.</Typography>



      </Box>

  
    </Box>
  );
};

export default NextImageComponents;
