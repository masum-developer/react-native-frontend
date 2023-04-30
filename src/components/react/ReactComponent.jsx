import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "Building dynamic user interfaces: React makes it easy to build complex user interfaces by breaking them down into smaller, reusable components. This makes it easier to manage and update the UI as the application grows in complexity.",
    "Declarative programming model: React uses a declarative programming model, which makes it easier to understand and debug the code. Developers can simply describe what they want the UI to look like, and React takes care of the rest.",
    "Virtual DOM: React uses a virtual DOM, which allows it to update the UI efficiently and minimize the number of actual changes made to the DOM. This makes the UI faster and more responsive.",
    "Large ecosystem: React has a large ecosystem of libraries and tools that can be used with it, making it easier to build complex applications quickly and efficiently.",
    "Cross-platform development: React can be used to build both web and mobile applications, using tools like React Native. This makes it easier to develop applications for multiple platforms using the same codebase."
];

const list1 = [
    "Reusability: Components are a modular, self-contained unit of code that can be easily reused throughout a web application. This helps to reduce the amount of code that needs to be written, and makes it easier to maintain and update the application over time.",
    "Separation of Concerns: Components help to separate the concerns of a web application, making it easier to manage and maintain the codebase. By breaking the application down into smaller, more manageable components, developers can focus on writing code that is specific to a particular task or feature.",
    "Composability: Components can be composed together to create more complex user interfaces. This allows developers to build larger, more complex applications out of smaller, more manageable components, which can help to improve code quality and reduce development time.",
];

const codeblock = `function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}`;

const codeblock2 = `class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.handleClick()}>Increment</button>
        </div>
      );
    }
  }`

const ReactComponent = () => {
    return (
        <Box>
            <Typography variant='h3'>What is component?</Typography>
            <Typography variant='subtitle2'>
                A component is a self-contained, reusable module that encapsulates a piece of functionality or user interface in a web application. Components are a fundamental building block of modern web development, and they help to make code more modular, reusable, and easier to maintain.

                In React, components are defined using either functions or classes, and they return JSX elements that define the user interface. Components can be composed together to create more complex user interfaces, and they can also be passed data and props to customize their behavior and appearance.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                There are two main types of components in React:
            </Typography>

            <Box mt={3}>

                <Typography variant='subtitle2'>
                    1) Functional Components: A functional component is a JavaScript function that takes props as an argument and returns a JSX element. Functional components are stateless, meaning they don't have their own state and rely solely on the props passed to them.
                </Typography>

                <CodeBox codeSnippet={codeblock}></CodeBox>
            </Box>

            <Box mt={3}>

                <Typography variant='subtitle2'>
                    2) Class Components: A class component is a JavaScript class that extends the React.Component class and overrides its render method to return a JSX element. Class components have their own state, which can be updated using setState().
                </Typography>

                <CodeBox codeSnippet={codeblock2}></CodeBox>
            </Box>


            <Box mt={3}>
                <Typography variant='h3'>Why components is used</Typography>

                <Block list={list}></Block>

                <Typography variant='subtitle2'>
                    Overall, components are a powerful tool that can help to improve the structure, maintainability, and scalability of a web application. By breaking the application down into smaller, more manageable components, developers can write code that is more modular, reusable, and easier to maintain over time.
                </Typography>
            </Box>
        </Box>
    );
};

export default ReactComponent;