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

const Colors = () => {
     //fetching data from custom hooks
    const data = useFind(CssData, 'colors');

    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7,section8,section9} = data || {};
    const { title1, desc1 } = section1 || {}
    const {title2,desc, desc2, codeTemplate2 } = section2 || {}
    const { desc3, codeTemplate3 } = section3 || {}
    const { desc4, codeTemplate4 } = section4 || {}
    const { desc5, codeTemplate5 } = section5 || {}
    const { desc6 } = section6 || {}
    const { desc7 } = section7 || {}
    const { title8, desc8, codeTemplate8 } = section8 || {}
    const { desc9, codeTemplate9} = section9 || {}
    return (
         <Box >

            <Typography variant='h3'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
            <Typography mt={3} variant='h3'>{title2}</Typography>
             <Typography mt={3} variant='subtitle1'>{desc}</Typography>
            {/* point 1 */}
            <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
            <Box mt={3}>

                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
            </Box>
            {/* point 2 */}
              <Typography mt={3} variant='subtitle1'>{desc3}</Typography> <Box mt={3}>

                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
            </Box>
            {/* point 3 */}
              <Typography mt={3} variant='subtitle1'>{desc4}</Typography> <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
            </Box>
            {/* point 4 */}
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
            <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
            </Box>

            <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
            {/* Example of colors */}
             <Typography mt={3} variant='h3'>{title8}</Typography>
             <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
              {/* Codesnippet 1 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
            </Box>
               <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
              {/* Codesnippet 2 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
            </Box>
          
              {/* Output */}
             <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <CssOutput h1Color="Welcome to Ts4u website!" pColor='Here you will find all sorts of useful information' ></CssOutput>

</Box>


            </Box>
    )
}
export default Colors;