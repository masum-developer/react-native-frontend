import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import htmlData from '../../localDb/HTML';
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import HtmlOutput from '../global/HtmlOutput';

const TextLinks = () => {
   
//fetching data from custom hooks
   const data = useFind(htmlData, 'textlinks');
    // //destructuring
    const { section1,section2 ,section3,section4,section5,section6} = data || {};
    const { title1, desc1 } = section1 || {};
    const { codeTemplate2,desc2 } = section2 || {};
    const { desc3,codeTemplate3 } = section3 || {};
    const {  desc4} = section4 || {};

    const { desc5, codeTemplate5 } = section5 || {};
     const { desc6,codeTemplate6,desc7 } = section6 || {};



    return (
        <Box >


            <Typography variant='h1' mt={3}>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
            <CodeBox codeSnippet={codeTemplate2}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output1: </Typography>
                <HtmlOutput links="Follow Our TS4U WebPage "></HtmlOutput>

            </Box>
             <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
             <CodeBox codeSnippet={codeTemplate3}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <HtmlOutput aboutlink="About TS4U "></HtmlOutput>

            </Box>
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
            <CodeBox codeSnippet={codeTemplate5}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <HtmlOutput links="Welcome to TS4U Abroad "></HtmlOutput>
                

            </Box>
            <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
            <CodeBox codeSnippet={codeTemplate6}></CodeBox>
            <Box mt={3}>
                <Typography variant='h4'>Output3: </Typography>
                 <HtmlOutput images3="mern.png" ></HtmlOutput>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
            <br></br>

          

        </Box>

    );
};

export default TextLinks;
