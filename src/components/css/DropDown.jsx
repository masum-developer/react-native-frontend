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
import DropdownOutput from '../global/DropdownOutput';

const Dropdown = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'dropdown')
    //destructuring
    const { section1, section2, section3, section4, section5, section6,section7,section8,section9,section10} = data || {};
    const { title1, desc1} = section1 || {};
    const { desc2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { title4, desc4, list4 } = section4 || {};
    const { title5, desc5, list5, codeTemplate5 } = section5 || {};
    const { codeTemplate6, desc6 } = section6 || {};
    const { codeTemplate7, list7 } = section7 || {};
    
    const { codeTemplate8 } = section8 || {};
    const { codeTemplate9, desc9 } = section9 || {};
    const { codeTemplate10, title10 } = section10 || {};
   
   
  
    
   
    
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
                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Block list={list5}></Block>
                <Typography mt={3} variant='subtitle1'>HTML CODE</Typography>
                   {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>CSS CODE</Typography>
                   {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Block list={list7}></Block>
                <Typography mt={3} variant='subtitle1'>HTML CODE</Typography>
                   {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>CSS CODE</Typography>
                   {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>Javascript CODE</Typography>
                   {/* Code Snippit 5 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: These are just two examples of how you can create dropdown menus using CSS.There are many other techniques and variations, depending on the specific design requirements.
                   </MuiAlert>
                </Box>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title10}</Typography>
                
                <Box>

                <CodeBox codeSnippet={codeTemplate10}></CodeBox>
                </Box>
                {/* output */}

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <DropdownOutput></DropdownOutput>
                
            
                 
                
                
                


                

             

                 
                

                
                
                
               
                
                
                
                
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Dropdown;