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
import ZIndexOutput from '../global/Z-indexOutput';






const ZIndex = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'z-index');
    //destructuring
    const { section1,section2,section3,section4,section5} = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, codeTemplate2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { title4, desc4, list4 } = section4 || {};
    const{title5,desc5,codeTemplate5}=section5||{}
 
    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                 {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Block list={list4}></Block>
                   {/* Example */}
                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>

                 {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>Output</Typography>
              <ZIndexOutput></ZIndexOutput>
                <br></br>
                <br></br>


               

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default ZIndex;