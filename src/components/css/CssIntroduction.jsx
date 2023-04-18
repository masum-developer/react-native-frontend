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

const CssIntroduction = () => {
    //fetching data from custom hooks
    const data = useFind(CssData, 'introductioncss');

    //destructuring
    const { section1,section2,section3} = data || {};
    const { title1, desc1 } = section1 || {};
    const { title,title2, desc2, desc3,title4, desc4, desc5, desc6, desc7, desc8, codeTemplate2 } = section2 || {};
    const { codeTemplate3 } = section3 || {}
   

    return (
        <Box>
            <Typography  variant='h3'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
            <Typography mt={3} variant='h3'>{title2}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc2}</Typography>

            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
            <Typography mt={3} variant='h3'>{title4}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
            <Typography mt={6} variant='subtitle1'>{desc6}</Typography>
            {/* Example */}
            <Typography mt={3}  variant='h3'>{title}</Typography>


            {/* Codesnippet 1 */}
             <Box mt={3}>
                <Typography variant='subtitle1'>{desc7}</Typography>
                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
            </Box>
            {/* Code snippet 3 */}
            <Box mt={3}>
                <Typography variant='subtitle1'>{desc8}</Typography>
                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
            </Box>
            {/* Output */}
             <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <CssOutput h1Color="Welcome to Ts4u webpage" ></CssOutput>
                
                
            </Box>
        </Box>
        
    );
};

export default CssIntroduction;