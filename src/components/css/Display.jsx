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
import ClassCssOutput from '../global/ClassCssOutput';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import DisplayOutput from '../global/DisplayOutput';





const Display = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'display');
    //destructuring
    const { section1,section2,section3,section4,section5,section6 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, list2 } = section2 || {};
    const { title3, desc3, list3 } = section3 || {};
    const { title4, desc4, codeTemplate4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { title6, codeTemplate6 } = section6 || {};
    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                 <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Block list={list3}></Block>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title6}</Typography>
                 {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>Output</Typography>

                <DisplayOutput></DisplayOutput>
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Display;