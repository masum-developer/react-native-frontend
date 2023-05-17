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
import SassVariablesOutput from '../global/SassVariblesOutput';












const SassVariable = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'sassvariable');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1,desc1,desc1_1,desc1_2,codeTemplate1,desc1_3  } = section1 || {};
    const { desc2_1,desc2_2,desc2_3,desc2_4,desc2_5,desc2_6,title2,list2 } = section2 || {};
    const {title3,desc3_1,codeTemplate3_1,codeTemplate3_2,desc3_2,desc3_3,desc3_4} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2,codeTemplate4_3,desc4_1,desc4_2,desc4_3} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>

                  {/* Code Snippit 1 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                </Box> 
              

               
                <Typography mt={3} variant='subtitle1'>{desc1_3}</Typography>

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_6}</Typography>

                <Typography mt={3} variant='h3'>{title2}</Typography>

                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                   {/* Code Snippit 2 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>
                   {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>

                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Variables in Sass can be used anywhere a value is expected in CSS, such as property values, function arguments, and calculations. You can also use variables in combination with other Sass features, such as nesting and mixins, to create more powerful and efficient stylesheets.
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

               <SassVariablesOutput></SassVariablesOutput>


                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default SassVariable  ;