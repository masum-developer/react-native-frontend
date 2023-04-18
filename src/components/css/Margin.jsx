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
import ListsOutput6 from '../global/Listsoutput6';
import CssMarginOutput from '../global/CssMarginoutput';

const Margin = () => {
     //fetching data from custom hooks
    const data = useFind(CssData, 'margin');

    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7} = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2 } = section2 || {};
    const { title3, desc3 } = section3 || {};
    const { desc4 ,codeTemplate4} = section4 || {}
    const { desc5 ,codeTemplate5} = section5 || {}
    const { desc6 ,codeTemplate6} = section6 || {}
    const { desc7,title7,codeTemplate7} = section7 || {}
    return (
         <Box >

            <Typography variant='h3'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
              <Typography mt={3}  variant='h3'>{title2}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
            <ListsOutput6></ListsOutput6>
            <Typography mt={3} variant='h3'>{title3}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
            {/* Code Snippit 1 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
            </Box>
              <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
            {/* Code Snippit 2 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
            {/* Code Snippit 3 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
            </Box>            
            <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
            
            {/* Code Snippit 4 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
            </Box>   
             <Typography variant='h3'>{title7}</Typography>
            
            {/* Code Snippit 4 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
            </Box>  

            {/* Output */}

                <Box>
                <Typography variant='h4'>Output: </Typography>
                <CssMarginOutput></CssMarginOutput>
                <br></br>

</Box>



            </Box>
    )
}
export default Margin;