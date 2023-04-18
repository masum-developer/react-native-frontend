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
import ListsOutput8 from '../global/Listsoutput8';
import ListsOutput9 from '../global/Listsoutput9';
import BoxModelOutput from '../global/BoxModelOutput';

const BoxModel = () => {

     //fetching data from custom hooks
    const data = useFind(CssData, 'boxmodel');
        //destructuring
    const { section1,section2,section3,section4,section5,section6,section7,section8,section9} = data || {};
    const { title1, desc1 } = section1 || {};
    const {title2,desc2}=section2 ||{}
    const { title3, desc3 } = section3 || {}
    const { desc4, codeTemplate4 } = section4 || {}
    const { desc5 } = section5 || {}
    const { desc6 } = section6 || {}
    const { title7, desc7, codeTemplate7 } = section7 || {}
    const { desc8 } = section8 || {}
    const { desc9 } = section9 || {}
    
    return (
         <Box >

            <Typography variant='h3'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
            <Typography mt={3} variant='h3'>{title2}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
            <ListsOutput8></ListsOutput8>
            <Typography mt={3} variant='h3'>{title3}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
            <ListsOutput9></ListsOutput9>
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
             {/* Code Snippit 1 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
            {/* Example */}
            <Typography mt={3} variant='h3'>{title7}</Typography>
            
             {/* Code Snippit 2 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
            </Box>

        
            <Typography variant='h4'>Output: </Typography>
                <BoxModelOutput></BoxModelOutput>
            <br></br>
            <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
            <br></br>

            </Box>
    )
}
export default BoxModel;