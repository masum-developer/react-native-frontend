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
import FloatOutput from '../global/FloatOutput';






const Float = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'float');
    //destructuring
    const { section1, section2, section3, section4, section5, section6,section7,section8,section9,section10,section11,section12,section13,section14,section15,section16 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { title4, desc4, list4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { title6, desc6, list6 } = section6 || {};
    const { desc7 } = section7 || {};
    const { title8, desc8 } = section8 || {};
    const { desc9, codeTemplate9 } = section9 || {};
    const { desc10 } = section10 || {};
    const { desc11 } = section11 || {};
    const { desc12, codeTemplate12 } = section12 || {}
    const { desc13 } = section13 || {};
    const { desc14, codeTemplate14 } = section14 || {};
    const { desc15 ,title15,codeTemplate15} = section15 || {};
   
    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Block list={list4}></Block>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                 <Typography mt={3} variant='h3'>{title6}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Block list={list6}></Block>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                 <Typography mt={3} variant='h3'>{title8}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
                  {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate12}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc13}</Typography>
                 {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate14}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc14}</Typography>

                <Typography mt={3} variant='subtitle1'>{desc15}</Typography>
                <Typography mt={3} variant='h3'>{title15}</Typography>
                {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate15}></CodeBox>
                </Box>

                 <Typography mt={3} variant='subtitle1'>Output</Typography>

               <FloatOutput></FloatOutput>
        
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Float;