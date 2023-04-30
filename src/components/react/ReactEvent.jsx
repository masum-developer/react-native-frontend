import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "Event handlers are defined differently: In HTML, event handlers are defined using attributes in the HTML markup, such as onclick, onsubmit, or onchange. In React, event handlers are defined as methods on the component class, and are passed as props to child components.",
    "Event handling is done differently: In HTML, event handling is done using JavaScript code that is directly attached to the HTML element. In React, event handling is done using a SyntheticEvent system, which provides a cross-browser compatible way to handle events.",
    "Event propagation is handled differently: In HTML, events propagate through the DOM tree from the target element up to the root of the document. In React, event propagation is handled by the SyntheticEvent system, which provides a way to capture and stop the propagation of events.",
    "Event naming is different: In HTML, events are named using lowercase letters and hyphens, such as onclick and onchange. In React, events are named using camelCase, such as onClick and onChange.",
];

const codeblock = `class Button extends React.Component {
    handleClick() {
      console.log('Button clicked!');
    }
  
    render() {
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Button />,
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

const ReactEvent = () => {
    return (
        <Box>
            <Typography variant='h3'>What is event in ReactJs?</Typography>
            <Typography variant='subtitle2'>
            In web development, events are actions or occurrences that happen in the browser or on the web page, such as a button click, mouse movement, or form submission. Events are used to trigger a response or execute a function in JavaScript.

            In React, events work similarly to regular JavaScript events, but they are attached to components using special attributes called event handlers. Event handlers are functions that are executed in response to a particular event.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
            Here's an example of how to use an event handler in a React component:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography variant='subtitle2'>
            In this example, we define a Button component that includes an onClick event handler that executes the handleClick function when the button is clicked. The handleClick function simply logs a message to the console. Event handlers can be attached to any component that supports events, including buttons, forms, and input fields. They can also be used to pass data or execute functions in response to events.
            </Typography>

            <Box mt={3}>

                <Typography variant='h3'>Difference between HTML event and ReactJs event</Typography>

                <Typography variant='subtitle2'>
                Events in HTML and ReactJS are similar in many ways, but there are a few key differences:
                </Typography>
                <Block list={list}></Block>
            </Box>
        </Box>
    );
};

export default ReactEvent;