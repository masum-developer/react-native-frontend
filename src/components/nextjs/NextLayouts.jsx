import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const list = [
  "Reusable Structure: A layout component allows you to define the overall structure and design of your application once and reuse it across multiple pages, instead of repeating the same structure and styling code in each individual page",
  "Consistent User Experience: By implementing a layout, you ensure that users have a consistent user experience when navigating through different pages of your application.",
  "Simplified Maintenance: When you make changes to the layout component, such as updating the header or footer, the changes are automatically reflected across all pages that use that layout."
];

const NavBar=`function NavBar(){
  return(
      <div className="layout-NavBar">
          NavBar
      </div>
  )
}
export default NavBar;`

const Home = `function Home() {
  return <div className="content">HomePage</div>;
}
export default Home;`

const about = `function About() {
  return <div className="content">About Page</div>;
}
export default About;`

const layout = `.layout-NavBar {
  background-color: grey;
  color: blue;
  font-size: 30px;
  text-align: center;
  padding: 10px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`

const _app = `import NavBar from '../components/NavBar'
import '../styles/globals.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  return(
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
  )
}
export default MyApp`


const NextLayouts = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">Layouts in NextJS</Typography>
        <Typography variant="subtitle2">
        In Next.js, a layout is a reusable component that wraps around other components to provide consistent structure and styling across multiple pages of your application. It helps you define a common layout structure, such as headers, footers, sidebars, or navigation menus, that remains consistent throughout your website.
        </Typography>

        <Typography mt={2}>
         Some key points to understand about Next.js layouts and their importance:
        </Typography>

        <Process list={list}></Process>

      </Box>

      <Box>
        <Typography mt={2} variant="h3">Setting up Layouts</Typography>
        <Typography >
         Let's look at how to create a simple navigation bar in our project:
        </Typography>
        <Process list={["Create a `components` directory; inside create a file named `NavBar.js`."]}></Process>
        <Process list={["Define the `NavBar` component in the file as follows:"]}></Process>
        <CodeBox codeSnippet={NavBar}></CodeBox>
        
        <Process list={["Remove the boilerplate code on `index.js` and replace it with as follows:"]}></Process>
        <CodeBox codeSnippet={Home}></CodeBox>
        
        <Process list={["Similar to the codesnippet above, in the `pages` directory create a file called `about.js` with the same className. This is the `/about` route."]}></Process>
        <CodeBox codeSnippet={about}></CodeBox>
        
        <Process list={["Customize the NavBar content according to your design and requirements by creating a file called `layout.css` in the `styles` directory."]}></Process>
        <CodeBox codeSnippet={layout}></CodeBox>
        
        <Process list={["In the `pages` directory click on the `_app.js` file; import the NavBar component, css files and place the `<NavBar />` component."]}></Process>
        <CodeBox codeSnippet={_app}></CodeBox>
        
        <Process list={["When you run the code you should see a Home Page like this:"]}></Process>
        <ImageComp image={"/nextjs/Screenshot_NavBar-homepage.png"} imageTitle={"HomePage navbar"}></ImageComp>
        <Process list={["Now, navigate to the `/about` route you created earlier. You should still see the NavBar component being rendered."]}></Process>

      </Box>

    </Box>
  );
};

export default NextLayouts;
