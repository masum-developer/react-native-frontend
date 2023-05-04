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









const NavigationBar = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'navigationbar');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1, desc1,desc1_1 } = section1 || {};
    const { desc2,title2,list2 } = section2 || {};
    const { desc3, title3,desc3_1,desc3_2,desc3_3,desc3_4,codeTemplate3_1,codeTemplate3_2} = section3 || {};
    const {title4,codeTemplate4} = section4 || {};
   
   
    
    

    
    
    return (
        <>
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>

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
                    {/* Code Snippit 2 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>
                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note:There are many other design options and variations you can use, such as creating a vertical navigation bar, using icons instead of text, or adding dropdown menus. The key is to create a navigation bar that is easy to use and helps users quickly find what they are looking for on your website. 
                   </MuiAlert>
                </Box>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                
                    {/* Code Snippit 3 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box> 

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                

                <NavigationbarOutput></NavigationbarOutput>


               
                  
               

               

             
                
                 
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box>
        </>
    );
};
export default NavigationBar;