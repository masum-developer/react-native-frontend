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
import NavigationbarOutput from '../global/NavigationBarOutput';

import OpacityOutput from '../global/OpacityOutput1';
import OpacityOutput1 from '../global/OpacityOutput1';
import ShadowOutput from '../global/ShadowOutput';









const CssShadows = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'shadows');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1, desc1,desc1_1,desc1_2 } = section1 || {};
    const { desc2,title2,list2 } = section2 || {};
    const { desc3, title3,desc3_1,desc3_2,desc3_3,desc3_4,desc3_5,codeTemplate3_1,codeTemplate3_2,codeTemplate3_3,desc3_6} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                <Typography variant='subtitle1'>{desc1_2}</Typography>
                
              

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>

                 <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                   {/* Code Snippit 1 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>

                <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc3_5}</Typography>
                     {/* Code Snippit 2 */}

                <Box>
                   

                    <CodeBox codeSnippet={codeTemplate3_3}></CodeBox>
                    
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc3_6}</Typography>
                 <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note:These are just a few examples of how you can use shadows in CSS. With a little experimentation, you can create a wide range of shadow effects to enhance the visual appeal and usability of your web pages and applications.
                   </MuiAlert>
                </Box>
                {/* Example1  */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                   {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_1}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <ShadowOutput></ShadowOutput>

                
              
                
                
              

               
            
                
                 

         


               
                  
               

               

             
                
                 
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default  CssShadows;