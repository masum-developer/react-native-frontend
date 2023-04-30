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
import UnitsOutput from '../global/UnitsOutput';

const Units = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'units');
    //destructuring
    const { section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12 ,section13,section14,section15,section16} = data || {};
    const { title1, desc1, list1 } = section1 || {};
    const { title2, desc2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { desc4 } = section4 || {};
    const { title5, desc5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {};
    const { desc7 } = section7 || {};
    const { desc8, codeTemplate8 } = section8 || {};
    const { desc9 } = section9 || {};
    const { desc10, codeTemplate10 } = section10 || {};
    const { desc11 } = section11 || {};
    const { desc12, codeTemplate12} = section12 || {};
    const { desc13 } = section13 || {};
    const { desc14, codeTemplate14 } = section14 || {};
    const { desc15 } = section15 || {};
    const { title16, codeTemplate16 } = section16 || {};

    

    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Block list={list1}></Block>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography><Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                
                    {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                     {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                </Box>
                <Typography mt={3}variant='subtitle1'>{desc9}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                      {/* Code Snippit 5 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate10}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
                       {/* Code Snippit 6 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate12}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc13}</Typography>
                   <Typography mt={3} variant='subtitle1'>{desc14}</Typography>
                       {/* Code Snippit 7 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate14}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc15}</Typography>
               
                 <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: These are just a few examples of how you can use units in CSS. There are many other units available, and you can use them to define the size and position of elements in a variety of ways to achieve the desired layout and design of your web page.
                   </MuiAlert>
                </Box>
                <Typography mt={3} variant='h3'>{title16}</Typography>
                      {/* Code Snippit 8 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate16}></CodeBox>
                </Box>
                <Typography mt={3} variant='h3'>Output:</Typography>
                

                <UnitsOutput></UnitsOutput>
                

             


                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Units;