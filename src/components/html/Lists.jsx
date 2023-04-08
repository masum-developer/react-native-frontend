import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import htmlData from '../../localDb/HTML';
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import HtmlOutput from '../global/HtmlOutput';
import ListsOutput1 from '../global/Listsoutput1';
import ListsOutput2 from '../global/Listsoutput2';
import ListsOutput3 from '../global/Listsoutput3';
import ListsOutput4 from '../global/Listsoutput4';
import ListsOutput5 from './Listsoutput5';



const Lists = () => {
    // //fetching data from custom hooks
    const data = useFind(htmlData, 'lists');

    // //destructuring
    const { section1,section2 ,section3,section4,section5,section6,section7,section8,section9,section10} = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2,desc2} = section2 || {};
    const { codeTemplate3,desc3 } = section3 || {};
    const { desc4,codeTemplate4 } = section4 || {};

    const { desc5, title5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {}
    const { desc7 } = section7 || {}
    const { desc8, codeTemplate8 } = section8 || {}
    const { desc9, title9 } = section9 || {}
    const { desc10,codeTemplate10,desc11 } = section10 || {}



    return (
        <Box mx={8}>


            <Typography variant='h1' mt={3}>{title1}</Typography>
           
            <Typography mt={2} variant='subtitle1'>{desc1}</Typography>
            
            <Typography variant='h3' mt={3}>{title2}</Typography>
            <Typography mt={2} variant='subtitle1'>{desc2}</Typography>
             <CodeBox mt={3} codeSnippet={codeTemplate3}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <ListsOutput1></ListsOutput1>
                
            </Box>
            <Typography mt={2} variant='subtitle1'>{desc3}</Typography>
            <Typography mt={2} variant='subtitle1'>{desc4}</Typography>
            <CodeBox mt={3} codeSnippet={codeTemplate4}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <ListsOutput2></ListsOutput2>
                
                
            </Box>
            <Typography mt={2} variant='subtitle1'>{desc5}</Typography>
            <Typography variant='h3' mt={3}>{title5}</Typography>
            <Typography mt={2} variant='subtitle1'>{desc6}</Typography>
            <CodeBox mt={3} codeSnippet={codeTemplate6}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <ListsOutput3></ListsOutput3>
            </Box>
             <Typography mt={2} variant='subtitle1'>{desc7}</Typography>
            <Typography mt={2} variant='subtitle1'>{desc8}</Typography>
             <CodeBox mt={3} codeSnippet={codeTemplate8}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <ListsOutput4></ListsOutput4>
            </Box>
            <Typography mt={2} variant='subtitle1'>{desc9}</Typography>
            <Typography variant='h3' mt={3}>{title9}</Typography>
            <Typography mt={2} variant='subtitle1'>{desc10}</Typography>
             <CodeBox mt={3} codeSnippet={codeTemplate10}></CodeBox>

            <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <ListsOutput5></ListsOutput5>
            </Box>
            <Typography mt={2} variant='subtitle1'>{desc11}</Typography>
            <br></br>




            

         
                
               
            
        </Box>

    );
};

export default Lists;
