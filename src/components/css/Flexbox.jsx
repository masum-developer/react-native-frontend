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
import MuiAlert from '@mui/material/Alert';
import FlexboxOutput1 from '../global/FlexboxOutput1';
import FlexboxOutput2 from '../global/FlexboxOutput2';







const Flexbox = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'flexbox');
    //destructuring
    const { section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12,section13 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, list2 } = section2 || {};
    const { title3, desc3 } = section3 || {};
    const { desc4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { desc6 } = section6 || {};
    const { desc7 } = section7 || {};
    const { desc8 } = section8 || {};
    const { title9, desc9, list9, codeTemplate9 } = section9 || {};
    const { list10, codeTemplate10 } = section10 || {};
    const { list11, codeTemplate11, desc11 } = section11 || {};
    const { title12, desc12, codeTemplate12 } = section12 || {};
    const { desc13, codeTemplate13 } = section13 || {};


    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                   <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Other important properties of flexbox include "flex-grow", "flex-shrink", and "flex-basis", which control the flexibility and size of "flex items", and order, which determines their display order within the "flex container".
                   </MuiAlert>
                </Box>
                 <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                <Typography mt={3} variant='h3'>{title9}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                <Block list={list9}></Block>
                   {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                <Block list={list10}></Block>
                  {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate10}></CodeBox>
                </Box>
                <Block list={list11}></Block>
                  {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate11}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc11}</Typography>

                <Typography mt={3} variant='h3'>{title12}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
                   {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate12}></CodeBox>
                </Box>

                 <Typography mt={3} variant='subtitle1'>Output:</Typography>

                {/* Output 1 */}
                
                <FlexboxOutput1></FlexboxOutput1>
                 <Typography mt={3} variant='subtitle1'>{desc13}</Typography>
                   {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate13}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>Output:</Typography>

                {/* Output 2 */}
                <FlexboxOutput2></FlexboxOutput2>



                

           


                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Flexbox;