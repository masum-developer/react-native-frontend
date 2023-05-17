import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import MuiAlert from '@mui/material/Alert';
import SassData from '../../localDb/SASS'
import NestingOutput from '../global/NestingOutput';













const Nesting = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'nesting');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1,desc1,desc1_1,desc1_2,codeTemplate1_1,codeTemplate1_2,desc1_3  } = section1 || {};
    const { title2,desc2,list2 } = section2 || {};
    const {title3,desc3_1,codeTemplate3_1,codeTemplate3_2,desc3_2,desc3_3,desc3_4} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2,codeTemplate4_3,desc4_1,desc4_2,desc4_3} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                  {/* Code Snippit 1 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate1_1}></CodeBox>
                </Box> 
                
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
                  {/* Code Snippit 2 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate1_2}></CodeBox>
                </Box>
               
                <Typography mt={3} variant='subtitle1'>{desc1_3}</Typography>

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                   {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3_2}2</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_3}2</Typography>
                   {/* Code Snippit 4 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3_4}2</Typography>
                  <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Basically Nesting in Sass can be used to create more efficient and readable CSS code. You can nest any selector inside another selector, including pseudo-classes and media queries. By using nesting, you can create a clear structure for your stylesheets, making them easier to read and maintain over time.
                   </MuiAlert>
                </Box>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_1}</Typography>
                   {/* Code Snippit 4 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_1}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>{desc4_2}</Typography>
                   {/* Code Snippit 4 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_2}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>{desc4_3}</Typography>
                   {/* Code Snippit 4 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_3}></CodeBox>
                </Box>

                {/* Output */}
                <Typography mt={3} variant='subtitle1'>Output:</Typography>


                <NestingOutput></NestingOutput>


                
               
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Nesting   ;