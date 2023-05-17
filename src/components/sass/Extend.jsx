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
import ExtendOutput from '../global/ExtendOutput';














const Extend = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'extend');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1,desc1,desc1_1,desc1_2,codeTemplate1_1, } = section1 || {};
    const { title2,desc2,list2} = section2 || {};
    const {title3,desc3,desc3_1,codeTemplate3_1,codeTemplate3_2,desc3_2,desc3_3,desc3_4,desc3_5,codeTemplate3_3} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2,codeTemplate4_3,desc4_1,desc4_2,desc4_3} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                <CodeBox codeSnippet={codeTemplate1_1}></CodeBox>
                </Box> 
                
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
                 <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: It's important to note that @extend should be used with caution. When used excessively or incorrectly, it can generate bloated CSS output. It's recommended to use @extend judiciously and understand its implications on the resulting CSS.
                   </MuiAlert>
                </Box>

                
              
               

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                   <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: it's important to use @extend judiciously and understand its potential downsides. Overusing @extend or creating complex inheritance chains can result in bloated CSS output and selector specificity issues. It's recommended to strike a balance and carefully consider the implications of using @extend in each scenario.
                   </MuiAlert>
                </Box>
                
                

                <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
               
                   {/* Code Snippit 3 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box> 
                <Typography mt={3}
                    variant='subtitle1'>{desc3_2}</Typography>
               
                    {/* Code Snippit 4 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box> 
                <Typography mt={3}
                    variant='subtitle1'>{desc3_3}</Typography>
                
                
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>
                    {/* Code Snippit 4 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_3}></CodeBox>
                </Box> 
               
                <Typography mt={3} variant='subtitle1'>{desc3_5}</Typography>

                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Remember to include the appropriate file import or setup for Sass in your project to enable the compilation process and use the @extend directive effectively.
                   </MuiAlert>
                </Box>

                {/*example  */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_1}</Typography>
                  {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_1}></CodeBox>
                </Box> 
                   <Typography mt={3} variant='subtitle1'>{desc4_2}</Typography>
                  {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_2}></CodeBox>
                </Box> 
                   <Typography mt={3} variant='subtitle1'>{desc4_3}</Typography>
                  {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_3}></CodeBox>
                </Box>
                 {/* Output */}

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <ExtendOutput></ExtendOutput>

             


                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Extend  ;