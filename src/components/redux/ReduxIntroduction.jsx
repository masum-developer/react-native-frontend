import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';


const ReduxIntroduction = () => {
    return (
        <Box>
            <Typography variant='h3'>What is Redux?</Typography>
            <Typography variant='subtitle2'>Redux is a state management library for JavaScript applications. It provides a predictable and centralized way to manage the state of an application, making it easier to track and update state changes. Redux follows a unidirectional data flow architecture, which means that the data flows in a single direction throughout the application.</Typography>

            <Typography mt={3} variant='h3'>How is Redux Used?</Typography>
            <Typography variant='subtitle2'>Redux is used in conjunction with frameworks like React to handle complex state management scenarios. It introduces concepts such as actions, reducers, and the store. Actions are plain JavaScript objects that describe events or user interactions, while reducers are pure functions that specify how the state should change in response to those actions. The store holds the application's entire state, and it acts as a single source of truth.</Typography>

            <Typography mt={3} variant='h3'>Why is Redux Needed?</Typography>
            <Typography variant='subtitle2'>The primary purpose of Redux is to address the challenges of managing state in large-scale applications. As applications grow in complexity, managing state becomes very difficult. Redux provides a solution by centralizing the state and enforcing predictable state changes. It allows developers to maintain a clear separation between state and UI components, making the codebase more maintainable and easier to understand.</Typography>
            <Typography mt={1} variant='subtitle2'>Redux is particularly useful in applications with complex data flow, multiple components sharing the same state, or the need for time-travel debugging and undo/redo functionality. It promotes code organization, modularity, and testability. By using Redux, developers can efficiently manage and update the application state, leading to improved performance and better user experience.</Typography>
        </Box>
    );
};

export default ReduxIntroduction;