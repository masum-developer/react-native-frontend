import { Box, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(serial, tags, description) {
    return { serial, tags, description };
}

const rows = [
    createData(1, '<!DOCTYPE html>', 'This tag defines the document type and HTML version.'),
    createData(2, '<html>', 'This tag encloses the complete HTML document and mainly comprises of document header which is represented by <head>...</head> and document body which is represented by <body>...</body> tags.'),
    createData(3, '<head>', "This tag represents the document's header which can keep other HTML tags like <title>, <link> etc."),
    createData(4, '<title>', 'The <title> tag is used inside the <head> tag to mention the document title.'),
    createData(5, '<body>', "This tag represents the document's body which keeps other HTML tags like <h1>, <div>, <p> etc."),
    createData(6, '<h1>', 'This tag represents the heading.')
];

const BasicTags = () => {
    return (
        <Box>
            <Typography variant='h3'>Basic Tags</Typography>
            <Typography variant='subtitle1'>As told earlier, HTML is a markup language and makes use of various tags to format the content. These tags are enclosed within angle braces. Except few tags, most of the tags have their corresponding closing tags. For example, <strong>{`<html>`}</strong> has its closing tag <strong>{`</html>`}</strong> and <strong>{`<body>`}</strong> tag has its closing tag <strong>{`< /body>`}</strong> tag etc.</Typography>

            <Box mt={3}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Serial no</TableCell>
                                <TableCell align="right">Tags</TableCell>
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
                                        {row.serial}
                                    </TableCell>
                                    <TableCell align="right">{row.tags}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    );
};

export default BasicTags;