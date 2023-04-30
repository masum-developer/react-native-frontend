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
import AlignOutput from '../global/AlignOutput';







const Align = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'align')
    //destructuring
    const { section1, section2, section3, section4, section5, section6,section7,section8,section9,section10,section11} = data || {};
    const { title1, desc1, list1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { title3, desc3, list3 } = section3 || {};
    const { title4, desc4, list4, codeTemplate4 } = section4 || {};
    const { list5, codeTemplate5 } = section5 || {};
    const { list6, codeTemplate6 } = section6 || {};
    const {title7, desc7,codeTemplate7 } = section7 || {};
   
  
    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Block list={list1}></Block>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3}    variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Block list={list3}></Block>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Block list={list4}></Block>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box>
                <Block list={list5}></Block>
                 {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box>
                 <Block list={list6}></Block>
                 {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>

                {/* Example */}
                <Typography mt={3} variant='h3'>{title7}</Typography>

                {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>

                {/* Output */}
                <Typography mt={3} variant='subtitle1'>Output</Typography>
                <AlignOutput></AlignOutput>

                 
                

                
                
                
               
                
                
                
                
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Align;