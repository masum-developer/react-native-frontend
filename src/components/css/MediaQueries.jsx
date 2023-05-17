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
import MediaQueriesOutput from '../global/MediaQueriesOutput';









const MediaQueries = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'mediaqueries');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1, desc1,desc1_1,desc1_2,codeTemplate1 } = section1 || {};
    const { desc2,title2,list2 } = section2 || {};
    const {title3,desc3,codeTemplate3,desc3_1,desc3_2,desc3_3,codeTemplate3_3,desc3_4} = section3 || {};
    const {title4,codeTemplate4} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                     {/* Code Snippit 1 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                </Box>
                
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
              

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>

                 <Typography mt={3} variant='h3'>{title3}</Typography>
               
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                     {/* Code Snippit 2 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box> 
               
                <Typography mt={3} variant='subtitle1'>{desc3_1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
               
                
                
                <Typography mt={3} variant='subtitle1'>{desc3_3}</Typography>
                     {/* Code Snippit 2 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate3_3}></CodeBox>
                </Box> 
                 <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>
                   
                
                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: It's important to keep in mind that media queries should be used judiciously and not be overused, as too many media queries can slow down the performance of your website. Also, it's important to test your website on different devices and screen sizes to ensure that the media queries are working as expected.
                   </MuiAlert>
                </Box>
             

                {/* example */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                  
                    {/* Code Snippit 6 */}

                <Box mt={3}>
                   

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>Output:</Typography>

                



              <MediaQueriesOutput></MediaQueriesOutput>
              
                

         


               
                  
               

               

             
                
                 
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default  MediaQueries;