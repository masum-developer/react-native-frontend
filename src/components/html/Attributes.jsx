import { Box, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFind from '../../hooks/useFind';
import htmlData from '../../localDb/HTML';
import CodeBox from '../global/CodeBox';
import HtmlOutput from '../global/HtmlOutput';


function createData(parameters, elements, description) {
    return { parameters, elements, description };
}




const rows = [
   
    createData(1, <strong>{`class`}</strong> , 'Used to specify a CSS class for an element'),
    createData(2, <strong>{`id`}</strong>, " Used to uniquely identify an element on a web page"),
    createData(3, <strong>{`src`}</strong>, 'Used to specify the source of an image or other media element'),
    createData(4, <strong>{`href`}</strong>, 'Used to specify the URL of a hyperlink'),
    createData(5, <strong>{`alt`}</strong>, 'Used to provide alternative text for images for accessibility purposes'),
    createData(6, <strong>{`title`}</strong>, ' Used to provide additional information about an element when the user hovers over it'),
    createData(7, <strong>{`style`}</strong>, 'Used to specify inline CSS styles for an element'),
    createData(8, <strong>{`target`}</strong>, 'Used to specify where to open the linked document when the user clicks on a hyperlink.')
    
    
   
];

const Attributes = () => {
       //fetching data from custom hooks
    const data = useFind(htmlData, 'attributes');

    //destructuring
    const { section1, section2,section3,section4 } = data || {};
    const { title1, desc } = section1 || {};
    const { title2, codeTemplate2 } = section2 || {};
    const { codeTemplate3 } = section3 || {};
    const { codeTemplate4 } = section4 || {};
    
    return (
        <Box mx={8}>
            <Typography variant='h1'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc} </Typography>

            <Box mt={3} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Parameters</TableCell>
                                <TableCell align="right">Elements</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.parameters}
                                    </TableCell>
                                    <TableCell align="right">{row.elements}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Typography variant='h3' mt={3}>{title2}</Typography>
            {/* Example 1 */}
        
            <CodeBox codeSnippet={codeTemplate2}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output1: </Typography>
                <HtmlOutput underline='Welcome to TS4U'></HtmlOutput>
            </Box>
            {/* Example 2 */}
             <CodeBox codeSnippet={codeTemplate3}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <HtmlOutput title='Ts4u-Mern Stack Development Track' pText="Title Output is shown in the browser's title bar"></HtmlOutput>
            </Box>
            {/* Example 3 */}
            <CodeBox codeSnippet={codeTemplate4}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output4: </Typography>
                <HtmlOutput images1="logo.svg"></HtmlOutput>
               
            </Box>

        </Box>
    );
};

export default Attributes;