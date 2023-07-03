import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const list = [
  "Error Handling: When a user enters a URL that doesn't match any of the defined routes in your Next.js application, Next.js automatically triggers the 404 page.",
  "Enhanced User Experience: By customizing the 404 page to match the design and branding of your application, you can provide a consistent and seamless user experience.",
  "Customization: Next.js allows you to fully customize the 404 page to align with your application's design and styling.",
  "Dynamic 404 Pages: In certain cases, you may want to create dynamic 404 pages that display different content based on specific conditions or parameters.",
];


const errorPage = `function PageNotFound(){
  return (
      <h1>Sorry this Page does not exist</h1>
  )
}
export default PageNotFound;`


const NextErrorPage = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">404 page in NextJS</Typography>
        <Typography variant="subtitle2">
          The 404 page in Next.js is an essential component that handles routes
          that are not found or do not exist in your application. It serves as a
          way to inform users that the requested page or resource could not be
          located. Understanding the importance of the 404 page and knowing how
          to utilize it effectively is crucial for providing a good user
          experience.
        </Typography>

        <Typography mt={2} variant="subtitle2">
          Here's why the 404 page is important in Next.js and how you can use
          it:
        </Typography>

        <Process list={list}></Process>

        <Typography mt={2} variant="subtitle2">
          This is what the default 404 page looks in a Next.js application:
        </Typography>

        <ImageComp
          image={"/nextjs/Screenshot_404.png"}
          imageTitle={"screenshot 404"}
        ></ImageComp>
      </Box>

      <Box mt={2}>
        <Typography variant="h3">Custom 404 pages in NextJS</Typography>
        <Typography mt={2} variant="subtitle2">The custom 404 page in Next.js plays a crucial role in providing a positive user experience and improving the overall usability of your application. Let's go through the steps on how to achieve this:</Typography>
        
        <Process list={["Create a new file called `404.js` in the pages directory of your Next.js project."]}></Process>
        <Process list={["Define and export the component as necessary in the file."]}></Process>
        <CodeBox codeSnippet={errorPage}></CodeBox>
        
        <Process list={["Feel free to style your custom 404 page which ever way you like."]}></Process>
        <ImageComp image={"/nextjs/Screenshot_errorpage.png"} imageTitle={"error code snippet"}></ImageComp>
        <Typography mt={2} variant="subtitle2">Note that I do not have `/events` route defined in my project. This custom error page gets served automatically when I try to access this route.</Typography>


      </Box>

    </Box>
  );
};

export default NextErrorPage;
