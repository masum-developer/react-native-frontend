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
import SpecificityOutput from '../global/SpecificityOutput';








const Specificity = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'specificity');
    //destructuring
    const { section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12,section13,section14 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { desc3, list3 } = section3 || {};
    const { desc4 } = section4 || {};
    const { title5, desc5 } = section5 || {};
    const { desc6 } = section6 || {};
    const { desc7 } = section7 || {};
    const { desc8 } = section8 || {};
    const { desc9 } = section9 || {};
    const { title10, desc10 } = section10 || {};
    const { desc11 } = section11 || {};
    const { desc12 } = section12 || {};
    const { desc13 } = section13 || {};
    const { desc14,title14,codeTemplate14 } = section14 || {};
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Block list={list3}></Block>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography><Typography mt={3} variant='subtitle1'>{desc9}</Typography>

                <Typography mt={3} variant='h3'>{title10}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc13}</Typography><Typography mt={3} variant='subtitle1'>{desc14}</Typography>
                  <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: It's important to use specificity judiciously and avoid overly specific selectors, as they can make your CSS code harder to read and maintain. Instead, focus on creating selectors that are as specific as necessary to achieve the desired styling, while still remaining simple and easy to understand.
                   </MuiAlert>
                </Box>

                {/* Example */}
                <Typography mt={3} variant='h3'>{title14}</Typography>
                    {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate14}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>Output:</Typography>
               <SpecificityOutput></SpecificityOutput>

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Specificity;