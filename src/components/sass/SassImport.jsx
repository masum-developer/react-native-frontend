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
import ImportOutput from '../global/ImportOutput';













const SassImport = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'import');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1,desc1,desc1_1,desc1_2,desc1_3  } = section1 || {};
    const { desc2_1,desc2_2,desc2_3,desc2_4,desc2_5,desc2_6,title2,list2 } = section2 || {};
    const {title3,desc3_1,codeTemplate3_1,codeTemplate3_2,desc3_2,desc3_3,desc3_4} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2,codeTemplate4_3,codeTemplate4_4,desc4_1,desc4_2,desc4_3,desc4_4} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_3}</Typography>

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_6}</Typography>

                <Typography mt={3} variant='h3'>{title3}</Typography>

                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
                   {/* Code Snippit 2 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box> 
                
                <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>
               
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>

                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: It's important to note that in newer versions of Sass, the @import directive has been deprecated in favor of the @use rule, which provides more robust features for managing and sharing variables, functions, and mixins across different Sass files. If you're using a newer version of Sass, you may want to consider using @use instead of @import.
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

                   <Typography mt={3} variant='subtitle1'>{desc4_4}</Typography>
                  {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_4}></CodeBox>
                </Box> 

                 {/* Output */}

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <ImportOutput></ImportOutput>

             


                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default SassImport  ;