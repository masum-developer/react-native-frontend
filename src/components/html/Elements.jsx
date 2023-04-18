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
import ListsOutput2 from '../global/Listsoutput2';
import ListsOutput3 from '../global/Listsoutput3';
import TableOutput2 from '../global/TableOutput2';

function createData(parameters, elements, description) {
    return { parameters, elements, description };
}

const rows = [
   
    createData(1, <strong>{`<h1>to<h6>`}</strong> , 'These elements represent six levels of headings, with <h1> being the most important and <h6> being the least important.'),
    createData(2, <strong>{`<p>`}</strong>, " This element represents a paragraph of text."),
    createData(3, <strong>{`<a>`}</strong>, 'This element creates a hyperlink to another web page or a specific location within the same page.'),
    createData(4, <strong>{`<img>`}</strong>, 'This element inserts an image into the HTML document.'),
    createData(5, <strong>{`<ul> and <li>`}</strong>, 'These elements are used to create unordered lists.'),
    createData(6, <strong>{`<ol> and <li>`}</strong>, 'These elements are used to create ordered lists.'),
    createData(7,<strong>{`<table>,<tr>,<th> and <td>`}</strong>, 'These elements are used to create ordered lists.')
   
];

const Elements = () => {
       //fetching data from custom hooks
    const data = useFind(htmlData, 'elements');

    //destructuring
    const { section1, section2,section3,section4,section5,section6,section7,section8 } = data || {};
    const { title1, desc } = section1 || {};
    const { title2, codeTemplate2 } = section2 || {}
    const { codeTemplate3 } = section3 || {}
    const { codeTemplate4 } = section4 || {}
    const { codeTemplate5 } = section5 || {}
    const { codeTemplate6 } = section6 || {}
    const { codeTemplate7 } = section7 || {}
    const { codeTemplate8 } = section8 || {}
    return (
        <Box >
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
            {/* Example 1 */}
             <Typography variant='h3' mt={3}>{title2}</Typography>
            <CodeBox codeSnippet={ codeTemplate2}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output1: </Typography>
                <HtmlOutput h1Text="Welcome to TS4U" ></HtmlOutput>
            </Box>
            {/*  Example2 */}
            <CodeBox codeSnippet={ codeTemplate3}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <HtmlOutput pText="Welcome to TS4U" ></HtmlOutput>
            </Box>
            {/* Example 3 */}
            <CodeBox codeSnippet={ codeTemplate4}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output3: </Typography>
                <HtmlOutput linkText="Visit TS4U Website" ></HtmlOutput>
            </Box>
            {/* Example 4 */}
             <CodeBox codeSnippet={codeTemplate5}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output4: </Typography>
                <HtmlOutput images1="logo.svg"></HtmlOutput>
               
            </Box>
            {/* Example 5 */}
              <CodeBox mt={3} codeSnippet={codeTemplate6}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output5: </Typography>
               <ListsOutput2></ListsOutput2>
                
            </Box>
            {/* Example 6 */}
              <CodeBox mt={3} codeSnippet={codeTemplate7}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output6: </Typography>
                <ListsOutput3></ListsOutput3>
                
            </Box>
            {/* Example 7 */}
             <CodeBox mt={3} codeSnippet={codeTemplate8}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output7: </Typography>
                <TableOutput2></TableOutput2>

            </Box>
            


        </Box>
    );
};

export default Elements;