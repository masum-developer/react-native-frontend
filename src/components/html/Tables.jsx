import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import htmlData from '../../localDb/HTML';
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import HtmlOutput from '../global/HtmlOutput';
import TableOutput1 from '../global/TableOutput1';
import TableOutput2 from '../global/TableOutput2';

const Tables = () => {
    //fetching data from custom hooks
    const data = useFind(htmlData, 'tables');

    //destructuring
    const { section1, section2, section3, section4 } = data || {};
    const { title1, desc } = section1 || {};
    const { codeTemplate2 } = section2 || {};
    const { desc3, desc4 } = section3 || {};
    const { codeTemplate4, desc5, desc6 } = section4 || {};

    // const { desc5 } = section5 || {};



    return (
        <Box >


            <Typography variant='h1' mt={3}>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc}</Typography>

            <CodeBox codeSnippet={codeTemplate2}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output1: </Typography>
                <TableOutput1></TableOutput1>
            </Box>
            
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
            
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
            
            <CodeBox mt={3} codeSnippet={codeTemplate4}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <TableOutput2></TableOutput2>

            </Box>
           
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
           
            <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
            <br></br>

        </Box>

    );
};

export default Tables;
