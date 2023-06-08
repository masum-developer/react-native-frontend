import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';

const list = [
    "dist/: This directory contains the output of the production build. It will be generated automatically when you build your app.",

    "node_modules/: This is where the dependencies installed via npm or yarn are stored.",

    "public/: This directory contains static assets such as HTML files, favicon, and other assets. The index.html file in this directory is the main HTML template that is used by Vite to inject the built JavaScript and CSS files.",

    "src/: This is the main directory where your application's source code resides.",

    "assets/: This directory contains static assets such as images, fonts, etc., that are used within your application.",

    "components/: This directory is where you can place reusable React components that are used across multiple pages or views.",

    "pages/: This directory contains the application's pages or views. Each page typically corresponds to a specific route in your application.",

    'hooks/: The "hooks" folder is not a standard part of the project structure in a React.js app created with Vite. However, you can create a "hooks" folder within the "src" directory to organize your custom React hooks.',

    "App.css: This file is used for global CSS styles that are applied throughout the application.",

    "App.js: This is the main React component that serves as the entry point of your application.",

    "index.js: This is the entry point file that sets up the React application and renders the main App component.",

    ".gitignore: This file specifies the files and directories that should be ignored by Git version control.",

    "package.json: This file contains the project configuration, scripts, and dependencies for your React app.",

    "README.md: This file typically contains documentation and instructions for setting up and running the project.",

    "vite.config.js: This file contains the configuration options for Vite. You can customize Vite's behavior by modifying this file.",

    "package-lock.json: This file is generated by yarn and locks the exact versions of the installed dependencies."
];

const list2 = [
    "dist/: This directory contains the output of the production build. It will be generated automatically when you build your app.",

    "node_modules/: This is where the dependencies installed via npm or yarn are stored.",

    "public/: This directory contains static assets such as HTML files, favicon, and other assets. The index.html file in this directory is the main HTML template that is used by Vite to inject the built JavaScript and CSS files.",

    "src/: This is the main directory where your application's source code resides.",

    "assets/: This directory contains static assets such as images, fonts, etc., that are used within your application.",

    "components/: This directory is where you can place reusable React components that are used across multiple pages or views.",

    "pages/: This directory contains the application's pages or views. Each page typically corresponds to a specific route in your application.",

    'hooks/: The "hooks" folder is not a standard part of the project structure in a React.js app created with Vite. However, you can create a "hooks" folder within the "src" directory to organize your custom React hooks.',

    'pages/: The "pages" directory contains components that represent different pages or views of your application. Each page can have its own folder, such as "Home" and "About" in the example. Inside each page folder, you can have a JavaScript file (e.g., Home.js) for the page component and a CSS file (e.g., Home.css) for page-specific styles.',

    'data/: The "data" directory includes subdirectories for managing data-related functionality. The "api" directory can contain files for handling API communication and utilities, while the "models" directory can store data models or schemas. Additionally, the "stores" directory can be used for state management using libraries like Redux or MobX or for React context if using the Context API.',

    'utils/: The "utils" directory is intended for utility functions or helper modules that provide common functionality or reusable code snippets.',

    "App.css: This file is used for global CSS styles that are applied throughout the application.",

    "App.js: This is the main React component that serves as the entry point of your application.",

    "index.js: This is the entry point file that sets up the React application and renders the main App component.",

    ".gitignore: This file specifies the files and directories that should be ignored by Git version control.",

    "package.json: This file contains the project configuration, scripts, and dependencies for your React app.",

    "README.md: This file typically contains documentation and instructions for setting up and running the project.",

    "vite.config.js: This file contains the configuration options for Vite. You can customize Vite's behavior by modifying this file.",

    "package-lock.json: This file is generated by yarn and locks the exact versions of the installed dependencies."
];

const codeTemplate = `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked the button {count} times.</p>
      <button onClick={increment}>Click me!</button>
    </div>
  );
}

export default Counter;`
const ProjectStructure = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>Project Structure of a ReactJS application</Typography>
            <Typography variant='subtitle2'>
                When creating a React.js app using Vite, the project structure may vary depending on your preferences and requirements. However, Vite follows a convention that separates source code from the build output. Here's a typical project structure for a React.js app created with Vite:
            </Typography>

            <ImageComp image={"/react/project_structure.png"} imageTitle={"Screenshot 1: Project structure"}></ImageComp>

            <Box mt={3}>
                <Process list={list}></Process>
            </Box>



            <Typography mt={2} variant='subtitle2'>
                Keep in mind that this is a general project structure, and you can customize it based on your specific needs or project architecture preferences.
            </Typography>

            <Box mt={5}>
                <Typography variant='h3'>Structure of a Medium-sized Project</Typography>
                <Typography variant='subtitle2'>
                    A medium-scaled project structure can vary depending on the specific requirements and technologies used. However, here's an example of a project structure that can be suitable for a medium-sized web application:
                </Typography>

                <ImageComp image={"/react/medium_structure.png"} imageTitle={"Screenshot 1: Project structure"}></ImageComp>

                <Box mt={3}>
                    <Process list={list2}></Process>
                </Box>



                <Typography mt={2} variant='subtitle2'>
                    These additional directories help in organizing the codebase and separating concerns based on functionalities such as pages, data management, and utility functions. However, it's important to note that the project structure can be adjusted to fit your specific needs and preferences.
                </Typography>
            </Box>
        </Box>
    );
};

export default ProjectStructure;