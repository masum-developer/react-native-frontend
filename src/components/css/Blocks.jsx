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






const Blocks = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'block')
    //destructuring
    const { section1, section2, section3, section4, section5, section6,section7,section8,section9,section10,section11} = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2, codeTemplate2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { desc4, codeTemplate4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { title6,desc6 ,list6} = section6 || {};
    const { title7, desc7, codeTemplate7 } = section7 || {};
    const { desc8 } = section8 || {};
    const { desc9, codeTemplate9 } = section9 || {};
    const { desc10 } = section10 || {};
    const { title11, codeTemplate11 } = section11 || {};
  
    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='h3'>{title6}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Block list={list6}></Block>
                <Typography mt={3} variant='h3'>{title7}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                
                 {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                <Typography mt={3} variant='h3'>{title11}</Typography>
                 {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate11}></CodeBox>
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
export default Blocks;