import { Box, Typography } from '@mui/material';
import React from 'react';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "element is the HTML element to which the event listener is to be added.",
    "event is a string that specifies the event to listen for (e.g. 'click', 'mouseover', etc.).",
    "function is the function that is called when the event is fired.",
    "useCapture is an optional parameter that specifies whether the event should be captured during the bubbling phase (true) or during the target phase (false). The default is false."
]

const EventListener = () => {
    return (
        <Box pb={3}>

            <Typography variant='h3'>What is event listener?</Typography>
            <Typography variant='subtitle2'>
            In JavaScript, an event listener is a method or function that waits for and detects an event to occur, such as a user clicking a button or moving the mouse. The event listener listens for the event to occur and executes a specified function or code block in response. The event listener can be added to a specific HTML element, such as a button, using JavaScript to handle the event when it occurs.
            </Typography>

            <Typography variant='subtitle2'>
                Here's an example of using addEventListener to add a click event to a button:
            </Typography>
            <Typography variant='subtitle2'>HTML: </Typography>
            <CodeBox codeSnippet={`<button id="myButton">Click me</button>`}></CodeBox>

            <Typography variant='subtitle2'>JavaScript: </Typography>
            <CodeBox codeSnippet={`const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  console.log('Button was clicked!');
});
`}></CodeBox>

            <Typography variant='subtitle2'>In this example, addEventListener is used to add a click event listener to the myButton element. When the button is clicked, the anonymous function passed as the second argument will be executed and the message "Button was clicked!" will be logged to the console.</Typography>
            <Box mt={3}>
                <Typography variant='h3'>Syntax of event listener</Typography>

                <Typography variant='subtitle2'>The syntax for adding an event listener to an element using JavaScript is as follows:</Typography>

                <CodeBox codeSnippet={`element.addEventListener(event, function, useCapture);`}></CodeBox>

                <Box pl={3}>
                    <Typography variant='subtitle2'>
                        where:

                        <Block list={list}></Block>
                    </Typography>
                </Box>
            </Box>


        </Box>
    );
};

export default EventListener;