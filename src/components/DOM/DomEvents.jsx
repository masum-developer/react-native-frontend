import { Box, Typography } from '@mui/material';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "click",
    "mouseover",
    "mouseout",
    "submit",
    "focus",
    "blur",
    "keydown",
    "keyup",
    "load",
    "unload",
    "resize",
    "scroll",
    "change",
    "contextmenu",
    "dblclick",
    "dragstart",
    "dragend",
    "drop",
    "error",
    "input",
]

const DomEvents = () => {
    return (
        <Box pb={3}>

            <Typography variant='h3'>What is events in DOM?</Typography>
            <Typography variant='subtitle2'>
                DOM events are actions or occurrences that happen on a web page that trigger a response from the JavaScript code. These events could be user actions, such as clicking a button or scrolling the page, or they could be automatic events such as the page finishing loading or a timer expiring. In JavaScript, we can use event listeners to detect these events and execute specific code in response to them.
            </Typography>

            <Typography variant='subtitle2'>
                There are numerous DOM events in JavaScript that can be used to trigger functions and execute code. Some of the commonly used DOM events are:
            </Typography>
            <Block list={list}></Block>

            <Box mt={3}>
                <Typography mb={2} variant='subtitle1'>Here's an example of a DOM event in JavaScript:</Typography>
                <Typography variant='subtitle2'>Let's say you have an HTML button element with an id of "myButton" and you want to attach a click event to it that will display an alert message when the button is clicked. You can use the following code:</Typography>

                <Typography variant='subtitle2'>HTML:</Typography>
                <CodeBox codeSnippet={`<button id="myButton">Click me</button>`}></CodeBox>

                <Typography variant='subtitle2'>JavaScript:</Typography>
                <CodeBox codeSnippet={`// Get the button element
const myButton = document.getElementById("myButton");

// Attach a click event to the button
myButton.addEventListener("click", function() {
  alert("Button clicked!");
});`}></CodeBox>


                <Typography variant='subtitle2'>
                    In this example, we use the addEventListener() method to attach a click event to the button element. The first argument of addEventListener() is the event name, which in this case is "click". The second argument is a function that will be called when the event is triggered. In this case, the function simply displays an alert message.
                </Typography>

                <Typography mt={3} variant='subtitle1'>Here are a few more examples of DOM events:</Typography>

                <Box mt={2}>
                    <Typography variant='subtitle2'>1) Adding an event listener for the "click" event on a button element:</Typography>
                    <CodeBox codeSnippet={`const button = document.querySelector('button');

    button.addEventListener('click', () => {
    alert('Button clicked!');
    });`}></CodeBox>
                </Box>

                <Box mt={2}>
                    <Typography variant='subtitle2'>2) Changing the text color of a paragraph element when the mouse hovers over it:</Typography>
                    <CodeBox codeSnippet={`const paragraph = document.querySelector('p');

paragraph.addEventListener('mouseover', () => {
  paragraph.style.color = 'red';
});

paragraph.addEventListener('mouseout', () => {
  paragraph.style.color = 'black';
});`}></CodeBox>
                </Box>

                <Box mt={2}>
                    <Typography variant='subtitle2'>3) Logging the key that was pressed when a user types in an input field:</Typography>
                    <CodeBox codeSnippet={`const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
});`}></CodeBox>
                </Box>

                <Box mt={2}>
                    <Typography variant='subtitle2'>4) Preventing a form from submitting if a required field is empty:</Typography>
                    <CodeBox codeSnippet={`const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const requiredField = document.querySelector('#required-field');

  if (requiredField.value === '') {
    event.preventDefault();
    alert('Please fill out the required field.');
  }
});`}></CodeBox>
                </Box>
            </Box>


        </Box>
    );
};

export default DomEvents;