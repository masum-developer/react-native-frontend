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
    "1) State management: useState allows you to manage state in functional components, which can make your code more concise and easier to read. State is a way to store and manage data in React, and is typically used to manage component-specific data that can change over time, such as user input or server responses.",
    "2) Reusability: By using useState, you can create reusable stateful components that can be used throughout your application. This can make your code more modular and easier to maintain, as you can encapsulate component-specific data into a single component.",
    "3) Performance: useState can improve the performance of your application by allowing you to optimize your code for rendering and re-rendering. By using useState effectively, you can avoid unnecessary re-renders and make your application more responsive.",
    "4) Hooks: useState is part of a family of hooks in React that allow you to use state and other features in functional components. By using hooks effectively, you can create complex and responsive web applications with ease."
]
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
const HooksUseState = () => {
    return (
        <Box>
            <Typography variant='h3'>What is useState?</Typography>
            <Typography variant='subtitle2'>
                useState is a built-in hook in React that allows you to use state in functional components. State is a way to store and manage data in React, and is typically used to manage component-specific data that can change over time, such as user input or server responses.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here's an example of how to use useState in a functional component:
            </Typography>
            <CodeBox codeSnippet={codeTemplate}></CodeBox>

            <Typography variant='subtitle2'>
                In this example, we define a Counter component that uses the useState hook to manage a count state variable, initialized to 0. We then define an increment function that updates the count state variable when the user clicks a button.
            </Typography>

            <Typography mt={1} variant='subtitle2'>
            The useState hook takes an initial value as an argument and returns an array with two elements: the current state value (count in this case), and a function to update the state (setCount in this case). We can use destructuring assignment to assign these two elements to separate variables.

            By using useState, we can easily create dynamic and responsive components in React that respond to user input and update their state over time.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why useState is used?</Typography>

                <Typography variant='subtitle2'>
                useState is used in React for several reasons:
                </Typography>

                <Block list={list2}></Block>

                <Typography variant='subtitle2'>
                Overall, useState is a powerful tool in React that allows you to manage state in functional components, and can make your code more modular, reusable, and performant. By using useState effectively, you can create dynamic and responsive components that respond to user input and update their state over time.
                </Typography>
            </Box>
        </Box>
    );
};

export default HooksUseState;