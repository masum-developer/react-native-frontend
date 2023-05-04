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
import WebsiteLayoutOutput from '../global/WebsiteLayoutOutput';
import AnimationOutput from '../global/AnimationOutput';









const CssAnimation = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'cssanimation');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1, desc1,desc1_1,desc1_2,desc1_3,desc1_4 } = section1 || {};
    const { desc2,title2,list2 } = section2 || {};
    const { desc3, title3,desc3_1,desc3_2,desc3_3,desc3_4,desc3_5 } = section3 || {};
    const {title4,codeTemplate4} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_4}</Typography>

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>

                <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_5}</Typography>
                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note:To use animation in CSS, you will need to use CSS properties such as animation, transition, transform, and @keyframes. These properties allow you to control the timing, duration, and appearance of animations on a web page. There are also many libraries and frameworks available that make it easier to create complex animations with CSS, such as Animate.css and GreenSock.
                   </MuiAlert>
                </Box>
                {/* Example */}
                 <Typography mt={3} variant='h3'>{title4}</Typography>

                
                {/* Code Snippit 1 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>Output:</Typography>


                <AnimationOutput></AnimationOutput>

               

             
                
                 
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default CssAnimation;