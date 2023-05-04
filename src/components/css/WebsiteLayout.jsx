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









const WebsiteLayout = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'websitelayout');
    //destructuring
    const { section1, section2, section3, section4, section5} = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2,title2,list2 } = section2 || {};
    const { desc3, title3,desc3_1,desc3_2,desc3_3,desc3_4,desc3_5 } = section3 || {};
    const {title4, desc4,desc4_1,desc4_2,desc4_3,desc4_4,desc4_5 } = section4 || {};
    const { title5, codeTemplate5 } = section5 || {};
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
              
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

                  <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_5}</Typography>
                   <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: By combining these techniques and properties, you can create a wide range of website layouts in CSS. To use website layout in CSS, you need to apply the appropriate CSS properties to the HTML elements on your webpage. You can do this either by writing the CSS code yourself or by using a CSS framework that provides pre-defined layout styles and classes. 
                   </MuiAlert>
                </Box>

               

                
                {/* Example */}
                 <Typography mt={3} variant='h3'>{title5}</Typography>
                
                    {/* Code Snippit 1*/}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box> 
                  <Typography mt={3} variant='subtitle1'>Output:</Typography>

             <WebsiteLayoutOutput></WebsiteLayoutOutput>
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default WebsiteLayout;