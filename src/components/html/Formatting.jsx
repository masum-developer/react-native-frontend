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
function createData(formatting, description) {
    return { formatting, description };
}

const rows = [
   
    createData( <strong>{`<b>`}</strong> , "It's a physical tag, which is used to bold the text written between it."),
    createData( <strong>{`<Strong>`}</strong>, " 	It's a logical tag, which tells the browser that the text is important."),
    createData( <strong>{`<i>`}</strong>, "This is a physical tag which is used to make text italic."),
    createData( <strong>{`<em>`}</strong>, "This is a logical tag which is used to display content in italic."),
    createData( <strong>{`<mark>`}</strong>, "This tag is used to highlight text."),
    createData( <strong>{`<u>`}</strong>, "This tag is used to underline text written between it."),
    createData(<strong>{`<small>`}</strong>, "This tag is used to decrease the font size by one unit from base font size."),
    createData(<strong>{`<big>`}</strong>, "This tag is used to increase the font size by one conventional unit."),
    createData(<strong>{`<sub>`}</strong>, "It displays the content slightly below the normal line."),
   
];



const Formatting = () => { 

    const data = useFind(htmlData, 'formatting');

    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7} = data || {};
    const { title1, desc } = section1 || {};
    const { title2, codeTemplate2 } = section2 || {};
    const { codeTemplate3 } = section3 || {};
    const { codeTemplate4 } = section4 || {};
    const { codeTemplate5 } = section5 || {};
    const { codeTemplate6 } = section6 || {};
    const { codeTemplate7 } = section7 || {};
    
    return (
         <Box mx={8}>
            <Typography variant='h1'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc} </Typography>
                        <Box mt={3} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                
                                <TableCell align="right">Formatting Name</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    
                                    <TableCell align="right">{row.formatting}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
             {/* Example 1 */}
              <Typography variant='h3' mt={3}>{title2}</Typography>
              <CodeBox codeSnippet={codeTemplate2}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output1: </Typography>
                <HtmlOutput variant='subtitle2' strong="Learn MERN stack development with
                 TS4U"></HtmlOutput>
            </Box>

            {/* Example 2 */}
            <CodeBox mt={3} codeSnippet={codeTemplate3}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <HtmlOutput  variant='subtitle2' italic="Learn MERN stack development with
                 TS4U. Follow Us."></HtmlOutput>
            </Box>
            {/* Example 3 */}
            <CodeBox mt={3} codeSnippet={codeTemplate4}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output3: </Typography>
                <HtmlOutput h1Text="Welcome to TS4U" ></HtmlOutput>
            </Box>

            {/* Example 4 */}
            <CodeBox mt={3} codeSnippet={codeTemplate5}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output4: </Typography>
                <HtmlOutput underline=" MERN stack development "></HtmlOutput>
            </Box>
            {/* Example 5*/}
            <CodeBox mt={3} codeSnippet={codeTemplate6}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output5: </Typography>
                <HtmlOutput h1Text="Welcome to TS4U" mark="Learn MERN stack development with
                 TS4U"></HtmlOutput>
            </Box>
             {/* Example 6*/}
            <CodeBox mt={3} codeSnippet={codeTemplate7}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output6: </Typography>
                <HtmlOutput h1Text="Welcome to TS4U" small="Learn MERN stack development with
                 TS4U"></HtmlOutput>
            </Box>
        </Box>
        
    )


}
export default Formatting;