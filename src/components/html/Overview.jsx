import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import HtmlOutput from '../global/HtmlOutput';
import useFind from '../../hooks/useFind';
import htmlData from '../../localDb/HTML';



const Overview = () => {
        //fetching data from custom hooks
    const data = useFind(htmlData, 'overview');

    //destructuring
    const { section1,section2,section3 } = data || {};
    const { desc } =  section1 || {};
    const { lists2 } = section2 || {};
    const { title3,codeTemplate3} = section3 || {};
    return (
        <Box mx={8}>
            <Typography variant='subtitle1'>{desc}</Typography>

            <Box mt={1}>
                {
                    lists2?.map((item, i) => <List key={i} item={item}></List>)
                }
            </Box>

            <Typography variant='h3' mt={3}>{title3}</Typography>
            <CodeBox codeSnippet={ codeTemplate3}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <HtmlOutput h1Text="Welcome to TS4U" pText="Learn MERN stack development with
                 TS4U"></HtmlOutput>
            </Box>

        </Box>
    );
};

export default Overview;