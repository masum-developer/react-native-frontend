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
  }
  
  const element = <Greeting name="John" />;
  
  ReactDOM.render(
    element,
    document.getElementById('root')
);`;

const codeblock2 = `function Button(props) {
    return (
      <button onClick={props.onClick}>
        {props.label}
      </button>
    );
  }
  
  class Counter extends React.Component {
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
          <Button label="Increment" onClick={() => this.handleClick()} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
  `

const ReactProps = () => {
    return (
        <Box>
            <Typography variant='h3'>What is props?</Typography>
            <Typography variant='subtitle2'>
                Props (short for "properties") are a way to pass data and configuration information between React components. Props are similar to function arguments in regular JavaScript functions, and are used to customize the behavior and appearance of a component.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                In React, props are passed as an object to a component, and can be accessed using dot notation. Here's an example of how props can be used in a functional component:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography variant='subtitle2'>
            {`In this example, we define a component called Greeting that takes a name prop and returns a <h1> element with a greeting message. We then create an instance of the Greeting component with the name prop set to "John", and render it to the DOM using ReactDOM.render()`}
            </Typography>

            <Box mt={3}>

                <Typography variant='subtitle2'>
                Props can be used to pass any type of data, including strings, numbers, objects, and functions. They can also be used to pass event handlers and other callbacks between components. Here's an example of how to pass an event handler as a prop:
                </Typography>

                <CodeBox codeSnippet={codeblock2}></CodeBox>

                <Typography variant='subtitle2'>
                {`In this example, we define a Button component that takes an onClick prop and a label prop, and returns a <button> element with the label text and an event handler for the onClick prop. We then use the Button component inside a Counter component to handle a click event and update the count state.`}
                </Typography>
            </Box>
        </Box>
    );
};

export default ReactProps;