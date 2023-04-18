import { Box, Typography } from '@mui/material';
import React from 'react';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const codeTemplate = `<!DOCTYPE html>
<html>
  <head>
    <title>Styling in DOM Example</title>
    <style>
      /* Initial styles */
      #myDiv {
        width: 200px;
        height: 100px;
        background-color: blue;
        color: white;
        text-align: center;
        font-size: 18px;
        padding-top: 40px;
      }
    </style>
  </head>
  <body>
    <div id="myDiv">Hello, World!</div>

    <script>
      // Select the element using its ID
      var myDiv = document.querySelector("#myDiv");

      // Change the background color and font size
      myDiv.style.backgroundColor = "red";
      myDiv.style.fontSize = "24px";
    </script>
  </body>
</html>`;

const DomStyles = () => {
    return (
        <Box pb={3}>

            <Typography variant='h3'>What is styling in DOM?</Typography>
            <Typography variant='subtitle2'>
                Styling in DOM refers to the process of changing the appearance of an HTML element by modifying its CSS properties using JavaScript. This can be achieved by manipulating the style property of an element in the DOM.
            </Typography>

            <Typography variant='subtitle2'>
                For example, to change the color of the text inside a paragraph element with an ID of "myParagraph" using JavaScript, we can write:
            </Typography>
            <CodeBox codeSnippet={`document.getElementById("myParagraph").style.color = "red";`}></CodeBox>

            <Typography variant='subtitle2'>This will change the color of the text inside the paragraph element to red. Similarly, we can change other CSS properties like background color, font size, margin, padding, etc. using JavaScript.</Typography>
            <Box mt={3}>
                <Typography variant='h3'>How to style in DOM?</Typography>

                <Typography variant='subtitle2'>Suppose we have an HTML document with a div element with the id of myDiv. We can use the following JavaScript code to change the background color and font size of the div:</Typography>

                <CodeBox codeSnippet={codeTemplate}></CodeBox>


                <Typography variant='subtitle2'>
                    In this example, we use the querySelector method to select the div element with the id of myDiv. We then use the style property to change the background-color and font-size of the div.
                </Typography>
            </Box>


        </Box>
    );
};

export default DomStyles;