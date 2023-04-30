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
import ImportantOutput from '../global/ImportantOutput';

const Important = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'important');
    //destructuring
    const { section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12, section13, section14 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { desc3, codeTemplate3 } = section3 || {};
    const { desc4 } = section4 || {};
    const { title5, desc5, list5 } = section5 || {};
    const { title6, desc6, codeTemplate6 } = section6 || {};
    const { desc7 } = section7 || {};
    const { desc8 } = section8 || {};
    const { title9, codeTemplate9 } = section9 || {};
     
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                     <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: It's important to note that while !important can be useful in certain situations, it can also make CSS harder to maintain and debug. Overuse of !important can lead to specificity wars and make it difficult to override styles in the future. It's generally better to use more specific selectors and avoid using !important unless it's absolutely necessary.
                   </MuiAlert>
                </Box>
                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Block list={list5}></Block>
                <Typography mt={3} variant='h3'>{title6}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                  {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                  <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
               
                      <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Keep in mind that using !important can make it difficult to override styles in the future, especially if the styles are defined in an external stylesheet. Therefore, it's important to weigh the benefits and drawbacks of using !important carefully and use it only when necessary.
                   </MuiAlert>
                </Box>
                {/* example */}
                <Typography mt={3} variant='h3'>{title9}</Typography>
                  {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <ImportantOutput></ImportantOutput>



                
                

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Important;