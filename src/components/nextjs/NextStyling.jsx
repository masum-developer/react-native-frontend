import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const code = `import '../styles/globals.css';`

const styleCode = `.container {
  background-color: lightblue;
  padding: 20px;
}

.title {
  font-size: 24px;
  color: navy;
}

.subtitle {
  font-size: 18px;
  color: gray;
}

.button {
  background-color: darkblue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`

const componentCode = `import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Component Title</h1>
      <h2 className={styles.subtitle}>Component Subtitle</h2>
      <button className={styles.button}>Click Me</button>
    </div>
  );
}
`

const benefits = ["Local Scope: CSS modules provide local scoping for styles, ensuring that styles defined in one module do not interfere with styles in other modules.",
                    "Class Name Generation: CSS modules automatically generate unique class names for each module, eliminating the need to come up with unique class names manually. ",
                   "Improved Maintainability: With CSS modules, styles are scoped to the component or module they belong to. This makes it easier to understand and maintain the styles for each individual component.",
                    "Reusability: CSS modules promote the reusability of styles by allowing you to import and apply styles from different modules in your components."]
            
const NextStyling = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">How do you Style in NextJS?</Typography>
        <Typography variant="h4">What are Global Styles?</Typography>
        
        <Typography mt={1} variant="subtitle2">
            Before going in depth on how to style in Next.js, it is crucial to understand the importance of Global styles. Global styling plays a crucial role in web development as it allows you to define styles that are applied universally across your entire application. In Next.js, one way to implement global styling is by using the globals.css file.
        </Typography>

        <Typography mt={1} variant="subtitle2">
        The 'styles/globals.css' file serves as a central location to define CSS rules that will be applied to all pages and components in your Next.js application. By understanding and utilizing global styling effectively, you can achieve consistency in design, layout, and behavior throughout your application.
        </Typography>

        <Typography mt={1} variant="subtitle2">Inorder to use the default global stylesheet or a stylesheet of your own, navigate to `pages/_app.js` and import it at the top.</Typography>
        <CodeBox codeSnippet={code}></CodeBox>
      </Box>

      <Box pb={3}>
        <Typography mt={3} variant="h3">How to style Components?</Typography>
        <Typography variant="h4">Using Modules</Typography>

        <Typography mt={1} variant="subtitle2">
        CSS Modules is a popular approach for component level styling in Next.js. It allows you to write CSS stylesheets alongside your components and automatically generates unique class names to avoid style conflicts. CSS Modules provide local scoping of styles, ensuring that styles defined within a component are only applied to that component.
        </Typography>

        <Process list={["In the `styles` directory create a file names 'MyComponent.module.css'. This module will be used to style our `MyComponent` component."]}></Process>
        <CodeBox codeSnippet={styleCode}></CodeBox>

        <Process list={["In the `components` directory create a file names 'MyComponent.js'. At the top import 'MyComponent.module.css' and apply the styles to the elements as follows:"]}></Process>
        <CodeBox codeSnippet={componentCode}></CodeBox>

        <Typography mt={1} variant="subtitle2">You will see the styles being applied to each element accordingly.</Typography>

      </Box>

      <Box>
        <Typography variant="h3">Why do we use Modules?</Typography>
        <Typography>Lets look at some benefits of using Modules:</Typography>
        <Process list={benefits}></Process>
      </Box>

    </Box>
  );
};

export default NextStyling;
