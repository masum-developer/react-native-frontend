import { Box, Typography } from '@mui/material';
import React from 'react';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Block from '../global/Block';

const list = [
    "1. Accessing and changing the content of HTML elements.",
    "2. Manipulating the attributes of HTML elements.",
    "3. Changing the style and layout of HTML elements.",
    "4. Adding or removing HTML elements dynamically.",
    "5. Responding to user events like clicks, mouseovers, etc.",
    "6. Validating form data and displaying error messages.",
    "7. Creating animations and special effects.",
    "8. Implementing interactive web applications like games, chat applications, etc.",
    "9. Creating and manipulating XML documents.",
]

const DomIntroduction = () => {
    return (
        <Box pb={3}>

            <Typography variant='h3'>What is DOM?</Typography>
            <Typography variant='subtitle2'>
                The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects in a tree-like structure, where each object corresponds to a different part of the document (e.g., element, text, comment, etc.). Developers can use the DOM API to access and manipulate the document's content and structure.
            </Typography>

            <Typography variant='subtitle2'>
                The DOM is created when a web page is loaded into a web browser. The browser reads the HTML and CSS files, and then creates a DOM tree that represents the structure of the document. Each element in the HTML file is represented by a node in the DOM tree, and the CSS styles are also applied to the nodes in the tree. Once the DOM is constructed, it can be accessed and manipulated using JavaScript, allowing developers to create dynamic and interactive web pages.
            </Typography>

            <Typography mt={2} variant='subtitle1'>
                A image of DOM tree is given below:
            </Typography>

            <Box mt={5}>
                <ImageComp image={"/dom/dom.png"} imageTitle={"Document Object Model"}></ImageComp>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>What can be achieved by DOM?</Typography>

                <Typography variant='subtitle2'>The DOM provides a way for programs to access and manipulate the content, structure, and style of an HTML or XML document. Some of the things that can be achieved using the DOM are:</Typography>

                <Block list={list}></Block>

                <Typography variant='subtitle2'>
                In summary, the DOM provides a powerful toolset for web developers to create dynamic and interactive web pages and applications.
                </Typography>
            </Box>


        </Box>
    );
};

export default DomIntroduction;