import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';

const list = [
    "Building dynamic user interfaces: React makes it easy to build complex user interfaces by breaking them down into smaller, reusable components. This makes it easier to manage and update the UI as the application grows in complexity.",
    "Declarative programming model: React uses a declarative programming model, which makes it easier to understand and debug the code. Developers can simply describe what they want the UI to look like, and React takes care of the rest.",
    "Virtual DOM: React uses a virtual DOM, which allows it to update the UI efficiently and minimize the number of actual changes made to the DOM. This makes the UI faster and more responsive.",
    "Large ecosystem: React has a large ecosystem of libraries and tools that can be used with it, making it easier to build complex applications quickly and efficiently.",
    "Cross-platform development: React can be used to build both web and mobile applications, using tools like React Native. This makes it easier to develop applications for multiple platforms using the same codebase."
];

const list1 = [
    "The developer creates a hierarchy of components that make up the UI, using React's declarative syntax.",
    "When the UI needs to be updated (for example, when a user interacts with it), React updates its internal representation of the UI (the virtual DOM) to reflect the changes.",
    "React then calculates the difference between the previous version of the virtual DOM and the new version, and determines the minimum set of changes needed to update the actual DOM.",
    "React updates the actual DOM with the changes, resulting in a faster and more efficient update process."
]

const ReactIntroduction = () => {
    return (
        <Box>
            <Typography variant='h3'>What is React?</Typography>
            <Typography variant='subtitle2'>ReactJS is an open-source JavaScript library used for building user interfaces (UIs) for web and mobile applications. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.

                React allows developers to build complex UIs using a declarative programming model, which makes it easier to reason about and debug. It uses a component-based architecture, where each UI element is defined as a reusable component that can be composed with other components to build more complex interfaces.</Typography>

            <Typography mt={2} variant='subtitle2'>React also uses a virtual DOM (Document Object Model) to manage changes to the UI. When a change is made to the UI, React updates the virtual DOM, calculates the difference between the new and old versions, and then updates the actual DOM with only the necessary changes. This makes the UI faster and more efficient.

                React can be used with other libraries and frameworks to create full-stack applications, and it is widely used by developers and companies around the world.</Typography>

                <Box mt={3}>
            <Typography variant='h3'>Why ReactJS is used?</Typography>

                    <Typography variant='subtitle2'>ReactJS is used for several reasons, including:</Typography>

                    <Block list={list}></Block>
                </Box>

                <Box mt={3}>
            <Typography variant='h3'>How does Reactjs work?</Typography>
                    <Typography variant='subtitle2'>ReactJS works by using a virtual DOM (Document Object Model) to manage changes to the UI. Here is a basic overview of how it works:</Typography>

                    <Block list={list1}></Block>
                </Box>
        </Box>
    );
};

export default ReactIntroduction;