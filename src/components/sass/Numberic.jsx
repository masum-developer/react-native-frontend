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
import SassNumericOutput from '../global/SassNumericOutput';








const Numberic = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'numberic');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1,desc,desc1,desc1_1,codeTemplate1_1, desc1_2,codeTemplate1_2,desc1_3,codeTemplate1_3,desc1_4,codeTemplate1_4,desc1_5,codeTemplate1_5} = section1 || {};
    const { title2,desc2,list2} = section2 || {};
    const {title3,desc3,desc3_1,codeTemplate3_1,codeTemplate3_2,desc3_2,codeTemplate3_3, desc3_3,desc3_4,desc3_5,desc3_6} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2,codeTemplate4_3, codeTemplate4_4,codeTemplate4_5,desc4_1,desc4_2,desc4_3,desc4_4,desc4_5} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                    <CodeBox codeSnippet={codeTemplate1_1}></CodeBox>
                    

                </Box> 
                 <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                    <CodeBox codeSnippet={codeTemplate1_2}></CodeBox>
                    

                </Box> 
                 <Typography mt={3} variant='subtitle1'>{desc1_3}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                    <CodeBox codeSnippet={codeTemplate1_3}></CodeBox>
                    

                </Box> 
                 <Typography mt={3} variant='subtitle1'>{desc1_4}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                    <CodeBox codeSnippet={codeTemplate1_5}></CodeBox>
                    

                </Box> 
                 <Typography mt={3} variant='subtitle1'>{desc1_5}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                    <CodeBox codeSnippet={codeTemplate1_5}></CodeBox>
                    

                </Box> 
                 <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: These are just a few examples of number functions in Sass. There are additional functions available, such as trigonometric functions (sin(), cos(), tan()), square root function (sqrt()), and more. You can leverage these functions to perform calculations, create responsive layouts, generate dynamic values, and manipulate numeric data in your Sass code
                   </MuiAlert>
                </Box>

            

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>

                <Block list={list2}></Block>
               
                  
                
                

                <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
                
            
               
                   {/* Code Snippit 1 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box> 
                 <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>
               
                <Typography mt={3}
                    variant='subtitle1'>{desc3_4}</Typography>
                 
            
                    {/* Code Snippit 2 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box> 
                <Typography mt={3}
                    variant='subtitle1'>{desc3_5}</Typography>
                <Typography mt={3}
                    variant='subtitle1'>{desc3_6}</Typography>
        
                {/*example  */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_1}</Typography>
                  {/* Code Snippit 6 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_1}></CodeBox>
                </Box> 
                   <Typography mt={3} variant='subtitle1'>{desc4_2}</Typography>
                  {/* Code Snippit 7 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_2}></CodeBox>
                </Box> 
                   <Typography mt={3} variant='subtitle1'>{desc4_3}</Typography>
                  {/* Code Snippit 8 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_3}></CodeBox>
                </Box>
               
                
                 {/* Output */}

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <SassNumericOutput></SassNumericOutput>
             
              

             


                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Numberic  ;