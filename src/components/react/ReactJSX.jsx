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
    "Tags: JSX elements are defined using HTML-like tags. Tags can be self-closing (e.g. <img />) or have a closing tag (e.g. <div></div>).",
    "Components: JSX elements can also refer to user-defined components. Components can be defined as functions or classes that return JSX elements.",
    "Props: JSX elements can have attributes, called props, that are passed as an object to the component. Props are passed using the syntax propName={propValue}. For example, <img src={imageSource} alt={imageAlt} />.",
    "Children: JSX elements can also have children, which are nested elements or text content. Children are defined between the opening and closing tags of an element. For example, <div><p>Child element</p></div>.",
    "Expressions: JSX elements can include JavaScript expressions inside curly braces {}. For example, <div>{2 + 2}</div>.",
    "Fragments: JSX elements must have a single root element. To return multiple elements from a component, you can use a fragment. Fragments are defined using the <></> syntax or <React.Fragment></React.Fragment> syntax. For example, <><p>First element</p><p>Second element</p></>."
];

const codeblock = `import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Greeting name="John" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);`;

const codeblock2 = `import React from 'react';

function MyComponent(props) {
  return (
    <div className="my-class" id="my-id">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

const myProps = {
  title: 'My Title',
  description: 'My description',
  items: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]
};

const element = <MyComponent {...myProps} />;

ReactDOM.render(
  element,
  document.getElementById('root')
);`

const ReactJSX = () => {
    return (
        <Box>
            <Typography variant='h3'>What is JSX?</Typography>
            <Typography variant='subtitle2'>
                JSX (JavaScript XML) is a syntax extension for JavaScript, often used with React, that allows you to write HTML-like code in your JavaScript code. JSX is not a separate language, but rather a syntax extension that provides a more concise way to write code that creates and updates the user interface in a web application.

                With JSX, you can define user interface components as functions that return JSX elements, which are similar to HTML elements, but can include JavaScript expressions. JSX elements are then transpiled to plain JavaScript by a tool like Babel, which converts them into React.createElement() function calls.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here's an example of what JSX code might look like:
            </Typography>

            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography variant='subtitle2'>
                {`In this example, we define a component called Greeting that takes a name prop and returns a <h1> element with a greeting message. We then create an instance of the Greeting component with the name prop set to "John", and render it to the DOM using ReactDOM.render().`}
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>JSX syntax</Typography>

                <Typography variant='subtitle2'>JSX syntax is similar to HTML, but it allows you to write HTML-like code in your JavaScript code. Here's an overview of the JSX syntax:</Typography>

                <Block list={list}></Block>

                <CodeBox codeSnippet={codeblock2}></CodeBox>

                <Typography variant='subtitle2'>{`In this example, we define a component called MyComponent that takes a title, description, and items prop, and returns a <div> element with some nested elements. We use the className and id attributes to set some CSS classes and IDs. We also use an expression inside curly braces to map over the items prop and render a list of items.

We then create an instance of the MyComponent component with a spread operator to pass in the myProps object, and render it to the DOM using ReactDOM.render().`}</Typography>
            </Box>
        </Box>
    );
};

export default ReactJSX;