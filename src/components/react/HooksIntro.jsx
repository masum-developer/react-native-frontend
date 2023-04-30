import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "1) useState: This hook allows you to use state in functional components. It takes an initial value as an argument and returns an array with two elements: the current state value, and a function to update the state.",
    "2) useEffect: This hook allows you to perform side effects, such as fetching data from a server, in functional components. It takes a function as an argument that is called after every render, and can optionally return a cleanup function.",
    "3) useContext: This hook allows you to use context in functional components. It takes a context object as an argument and returns the current value of the context.",
    "4) useRef: This hook allows you to create a mutable ref object in functional components. It takes an initial value as an argument and returns a ref object that can be used to reference a DOM element or a value.",
    "5) useReducer: This hook allows you to manage complex state in functional components using a reducer function. It takes a reducer function and an initial state as arguments, and returns the current state value and a dispatch function."
];

const list2 = [
    "Functional components: Prior to the introduction of hooks, state and other React features could only be used in class components. Hooks allow you to use state and other features in functional components, which can make your code more concise and easier to read.",
    "Reusability: Hooks allow you to create reusable logic that can be shared across multiple components. This can make your code more modular and easier to maintain, as you can encapsulate complex logic into a custom hook and reuse it throughout your application.",
    "Separation of concerns: Hooks can help you separate concerns in your code, by allowing you to separate state management, side effects, and other features into separate hooks. This can make your code easier to understand and debug, as each hook has a specific purpose and can be tested in isolation.",
    "Performance: Hooks can improve the performance of your application by allowing you to optimize your code for rendering and re-rendering. For example, the useMemo and useCallback hooks allow you to memoize expensive computations and event handlers, respectively, to avoid unnecessary re-renders."
]

const HooksIntro = () => {
    return (
        <Box>
            <Typography variant='h3'>What is hooks in ReactJs</Typography>
            <Typography variant='subtitle2'>
                In React, hooks are functions that allow you to use state and other React features in functional components. Prior to the introduction of hooks in React 16.8, state and other React features could only be used in class components.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Hooks allow you to create reusable logic that can be shared across multiple components, and can make your code more concise and easier to read. There are several built-in hooks in React, including:
            </Typography>
            <Block list={list}></Block>

            <Box mt={3}>
                <Typography variant='h3'>Why hooks is used?</Typography>

                <Typography variant='subtitle2'>
                    Hooks are used in React for several reasons:
                </Typography>

                <Block list={list2}></Block>

                <Typography variant='subtitle2'>
                    Overall, hooks are a powerful feature in React that allow you to use state and other features in functional components, and can make your code more modular, reusable, and performant. By using hooks effectively, you can create complex and responsive web applications with ease.
                </Typography>
            </Box>
        </Box>
    );
};

export default HooksIntro;