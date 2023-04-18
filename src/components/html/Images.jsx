import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import htmlData from '../../localDb/HTML';
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import HtmlOutput from '../global/HtmlOutput';

const Images = () => {
    //fetching data from custom hooks
    const data = useFind(htmlData, 'images');

    //destructuring
    const { section1,section2,section3,section4,section5 } = data || {};
    const { title1, desc } = section1 || {};
    const { codeTemplate2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { codeTemplate4 } = section4 || {};
    const { desc5 } = section5 || {};
    
    

    return (
        <Box >
           

            <Typography variant='h1' mt={3}>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc}</Typography>

            <CodeBox codeSnippet={codeTemplate2}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output1: </Typography>
                <HtmlOutput images1="logo.svg"></HtmlOutput>
            </Box>
            
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
             <CodeBox codeSnippet={codeTemplate4}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output2: </Typography>
                <HtmlOutput images2="/hero.png" ></HtmlOutput>
            </Box>
            
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
            <br></br>

        </Box>
        
    );
};

export default Images;