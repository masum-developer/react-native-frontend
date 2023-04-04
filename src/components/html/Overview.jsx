import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import HtmlOutput from '../global/HtmlOutput';

const HTMLDetails = [
    {
        title: 'Hypertext refers to the way in which Web pages (HTML documents) are linked together. Thus, the link available on a webpage is called Hypertext.'
    },
    {
        title: 'As its name suggests, HTML is a Markup Language which means you use HTML to simply "mark-up" a text document with tags that tell a Web browser how to structure it to display.'
    }
];

const codeSnippet =
    `<!DOCTYPE html>
<html>
    <head>
        <title>This is document title</title>
    </head>	
    <body>
        <h1>Learning HTML</h1>
        <p>Learn MERN stack development from TS4U</p>
    </body>	
</html>`;

const Overview = () => {
    return (
        <Box>
            <Typography variant='subtitle1'>HTML stands for Hypertext Markup Language, and it is the most widely used language to write Web Pages.</Typography>

            <Box mt={1}>
                {
                    HTMLDetails?.map((item, i) => <List key={i} item={item}></List>)
                }
            </Box>

            <Typography variant='h3' mt={3}>Basic HTML</Typography>
            <CodeBox codeSnippet={codeSnippet}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <HtmlOutput h1Text="Learning HTML" pText="Learn MERN stack development with
                 TS4U"></HtmlOutput>
            </Box>

        </Box>
    );
};

export default Overview;