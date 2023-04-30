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
    "1) Side effects: useEffect allows you to perform side effects in functional components, such as fetching data from a server or manipulating the DOM. Side effects are any operation that affects something outside the scope of the component, and are typically used to integrate external data sources or update the UI in response to user input.",
    "2) Reusability: By using useEffect, you can create reusable effects that can be used throughout your application. This can make your code more modular and easier to maintain, as you can encapsulate side effects into a single effect and reuse it across multiple components.",
    "3) Performance: useEffect can improve the performance of your application by allowing you to optimize your code for rendering and re-rendering. By using useEffect effectively, you can avoid unnecessary side effects and make your application more responsive.",
    "4) Hooks: useEffect is part of a family of hooks in React that allow you to use state and other features in functional components. By using hooks effectively, you can create complex and responsive web applications with ease."
]
const codeTemplate = `import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`
const HooksUseEffect = () => {
    return (
        <Box>
            <Typography variant='h3'>What is useEffect?</Typography>
            <Typography variant='subtitle2'>
                useEffect is a built-in hook in React that allows you to perform side effects in functional components. Side effects are any operation that affects something outside the scope of the component, such as fetching data from a server or manipulating the DOM.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here's an example of how to use useEffect in a functional component:
            </Typography>
            <CodeBox codeSnippet={codeTemplate}></CodeBox>

            <Typography variant='subtitle2'>
                In this example, we define a UserList component that uses the useState hook to manage a users state variable, initialized to an empty array. We then use the useEffect hook to fetch a list of users from a server and update the users state variable with the data.
            </Typography>

            <Typography mt={1} variant='subtitle2'>
                The useEffect hook takes two arguments: a function to perform the side effect, and an optional array of dependencies that determine when the effect should be re-run. In this example, we pass an empty array as the dependencies, which means the effect will only be run once when the component is mounted.

                By using useEffect, we can easily perform side effects in functional components and keep our code organized and modular. The useEffect hook is a powerful tool in React that allows you to integrate external data sources and manipulate the DOM in a safe and controlled way.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why useEffect is used?</Typography>

                <Typography variant='subtitle2'>
                    useEffect is used in React for several reasons:
                </Typography>

                <Block list={list2}></Block>

                <Typography variant='subtitle2'>
                    Overall, useEffect is a powerful tool in React that allows you to perform side effects in functional components, and can make your code more modular, reusable, and performant. By using useEffect effectively, you can integrate external data sources and manipulate the DOM in a safe and controlled way, and create dynamic and responsive components that respond to user input and update their state over time.
                </Typography>
            </Box>
        </Box>
    );
};

export default HooksUseEffect;