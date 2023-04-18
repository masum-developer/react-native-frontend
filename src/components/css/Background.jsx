import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import CssData from '../../localDb/CSS'
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import cssData from '../../localDb/CSS';
import CssOutput from '../global/CssOutput';
import ListsOutput5 from '../global/Listsoutput5';
import ClassCssOutput from '../global/ClassCssOutput';

const Background = () => {
     //fetching data from custom hooks
    const data = useFind(CssData, 'background');

    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7,section8,section9, section10,section11,section12 } = data || {};
    const { title1,desc1} = section1 || {};
    const {title2, desc, desc2, codeTemplate2 } = section2 || {}
    const { desc3 } = section3 || {}
    const { desc4, codeTemplate4 } = section4 || {}
    const { desc5 } = section5 || {}
    const { desc6, codeTemplate6 } = section6 || {}
    const { desc7, codeTemplate7 } = section7 || {}
    const { desc8 } = section8 || {}
    const { desc9, codeTemplate9 } = section9 || {}
    const { desc10 } = section10 || {}
    const { title11,desc11,codeTemplate11 } = section11 || {}
    const { desc12,codeTemplate12 } = section12 || {}


 
    return (
         <Box >

            <Typography variant='h3'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
            <Typography mt={3} variant='h3'>{title2}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc}</Typography>
            
            <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
             {/* Codesnippet 1 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
             {/* Codesnippet 2 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
              <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
             {/* Codesnippet 3*/}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
            {/* Codesnippet 4*/}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
            {/* Codesnippet 5*/}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
            </Box>
             
            <Typography mt={3} variant='subtitle1'>{desc10}</Typography>

            {/* Example */}
             <Typography mt={3} variant='h3'>{title11}</Typography>
             <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
              {/* Codesnippet 1 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate11}></CodeBox>
            </Box>
               <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
              {/* Codesnippet 2 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate12}></CodeBox>
            </Box>
          
              {/* Output */}
             <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <CssOutput h1Background="Welcome to Ts4u website!" pBackground='Here you will find all sorts of useful information' ></CssOutput>

</Box>

            

</Box>


            
    )
}
export default Background;