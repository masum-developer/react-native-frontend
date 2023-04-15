import { Box, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageComp from './ImageComp';
import Process from './Process';
import StepComp from './StepComp';
import List from '../global/List';

function createData(Extensions, Description) {
    return { Extensions, Description };
}

const rows = [
    createData('Live Server:', 'This extension provides a local development server with live reload capability, making it easy to see changes as you make them.'),
    createData('Bracket Pair Colorizer', 'This extension helps you visually identify matching brackets, making it easier to write and debug code.'),
    createData('HTML CSS Support', "This extension provides autocompletion and syntax highlighting for HTML and CSS, making it easier to write and debug code."),
    createData('Prettier', 'This extension automatically formats your code according to a specified set of rules, helping to ensure consistency and readability.'),
    createData('ES Lint', "This extension provides linting and error-checking for JavaScript code, helping to catch common mistakes and improve code quality."),
    createData('Color Picker', 'This extension provides a color picker tool that you can use to easily select and insert colors in your code.'),
    createData('GitLens', 'This extension provides enhanced Git integration, making it easier to manage and track changes to your code.'),
    createData('IntelliSense for CSS, SCSS, and Less', 'This extension provides autocompletion and syntax highlighting for CSS, SCSS, and Less, making it easier to write and debug code.')
];

const list = [
    'In VS Code ther is a extensions icon to click from the left sidebar',
    "After clicking on the extensions icon you'll see installed extensions list",
    "You can also search on the input section.",
];

const list1 = [
    'Open Command Palette: Ctrl + Shift + P',
    'Quick Open File: Ctrl + P',
    'Switch between open files: Ctrl + Tab',
    'Close current file: Ctrl + W',
    'Open new window: Ctrl + Shift + N'
];

const list2 = [
    'Copy line/selection: Ctrl + C',
    'Cut line/selection: Ctrl + X',
    'Paste: Ctrl + V',
    'Undo: Ctrl + Z',
    'Redo: Ctrl + Shift + Z',
    'Move line(s) up or down: Alt + Up/Down Arrow'
]

const list3 = [
    'Find: Ctrl + F',
    'Replace: Ctrl + H',
    'Find in files: Ctrl + Shift + F'
]

const list4 = [
    'Format document: Shift + Alt + F',
    'Format selection: Ctrl + K Ctrl + F',
]

const list5 = [
    'Start debugging: F5',
    'Step over: F10',
    'Step into: F11',
    'Step out: Shift + F11',
    'Stop debugging: Shift + F5'
]


const VScodeExtensions = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>VS Code Extentions and Shortcuts</Typography>
            <Typography mt={1} variant='subtitle2'>Visual Studio Code (VS Code) is a popular open-source code editor that can be extended with a variety of extensions. VS Code extensions are essentially add-ons that can enhance the functionality of the code editor.

                Extensions can be used to add new features, such as new programming languages, debugging tools, or code snippets, to the editor. They can also be used to customize the editor's appearance and behavior, or to integrate with external tools and services.</Typography>

            <Typography mt={3} variant='subtitle2'>There are many popular VS Code extensions for web development. Here are some of them:</Typography>

            <Box mt={3}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Extensions</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{row.Extensions}</TableCell>
                                    <TableCell align="left">{row.Description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box mt={7}>
                <ImageComp image={"/vscode/extensions.png"} imageTitle={"Screenshot 3: Downloading VS Code"}></ImageComp>
                <Process list={list}></Process>
            </Box>

            <Box mt={7}>
                <Typography variant='h3'>VS Code Shortcuts</Typography>
                <Typography mt={1} variant='subtitle2'>
                    Visual Studio Code (VS Code) provides many keyboard shortcuts to improve your productivity and workflow. Here are some commonly used VS Code shortcuts:
                </Typography>

                <Typography mt={3} variant='subtitle2'>There are many popular VS Code extensions for web development. Here are some of them:</Typography>

                <Box mt={3}>
                    <StepComp stepText="Basic Navigation: "></StepComp>
                    <Process list={list1}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Text Editing: "></StepComp>
                    <Process list={list2}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Search and Replace:"></StepComp>
                    <Process list={list3}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Code Formatting:"></StepComp>
                    <Process list={list4}></Process>
                </Box>

                <Box mt={3}>
                    <StepComp stepText="Debugging:"></StepComp>
                    <Process list={list5}></Process>
                </Box>
            </Box>
        </Box>
    );
};

export default VScodeExtensions;