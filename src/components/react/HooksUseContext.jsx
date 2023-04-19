import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list2 = [
    "1) Context management: useContext allows you to manage context in functional components, which can make your code more concise and easier to read. Context is a way to share data between components without having to pass it explicitly through the component hierarchy.",
    "2) Reusability: By using useContext, you can create reusable context objects that can be used throughout your application. This can make your code more modular and easier to maintain, as you can encapsulate shared data into a single context object and reuse it across multiple components.",
    "3) Performance: useContext can improve the performance of your application by allowing you to optimize your code for rendering and re-rendering. By using useContext effectively, you can avoid unnecessary re-renders and make your application more responsive.",
    "4) Hooks: useContext is part of a family of hooks in React that allow you to use state and other features in functional components. By using hooks effectively, you can create complex and responsive web applications with ease."
]
const codeTemplate = `import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const context = useContext(MyContext);

  return <p>{context.message}</p>;
}

export default MyComponent;`
const HooksUseContext = () => {
    return (
        <Box>
            <Typography variant='h3'>What is useContext?</Typography>
            <Typography variant='subtitle2'>
            useContext is a built-in hook in React that allows you to use context in functional components. Context is a way to share data between components without having to pass it explicitly through the component hierarchy.Here's an example of how to use useContext in a functional component:
            </Typography>

            <Typography mt={2} variant='subtitle2'>
            Here's an example of how to use useContext in a functional component:
            </Typography>
            <CodeBox codeSnippet={codeTemplate}></CodeBox>

            <Typography variant='subtitle2'>
            In this example, we define a MyComponent component that uses the useContext hook to access a message property from a context object. The context object is defined elsewhere in our code, and is passed down to MyComponent using the MyContext.Provider component.

The useContext hook takes a context object as an argument and returns the current value of the context. In this example, we assume that MyContext is a context object that contains a message property.
            </Typography>

            <Typography mt={1} variant='subtitle2'>
            By using useContext, we can easily access context data in functional components without having to pass it down through props. This can make our code more modular and easier to maintain, as we can encapsulate context data into a single object and reuse it across multiple components.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why useContext is used?</Typography>

                <Typography variant='subtitle2'>
                useContext is used in React for several reasons:
                </Typography>

                <Block list={list2}></Block>

                <Typography variant='subtitle2'>
                Overall, useContext is a powerful tool in React that allows you to manage context in functional components, and can make your code more modular, reusable, and performant. By using useContext effectively, you can share data between components without having to pass it explicitly through the component hierarchy, and create dynamic and responsive components that respond to user input and update their state over time.
                </Typography>

                <Typography mt={3} variant='subtitle1'>
                We'll see in details implementation how to create and use this hook.
                </Typography>
            </Box>
        </Box>
    );
};

export default HooksUseContext;