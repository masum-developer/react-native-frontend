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
import SassStringOutput from '../global/SassStringOutput';







const SassString = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'sassstring');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1,desc1,desc1_1,codeTemplate1_1, } = section1 || {};
    const { title2,desc2,desc2_1,desc2_2,desc2_3,desc2_4,desc2_5,desc2_6} = section2 || {};
    const {title3,desc3,desc3_1,codeTemplate3_1,codeTemplate3_2,desc3_2,codeTemplate3_3,list3_1,list3_2,list3_3,list3_4,list3_5,codeTemplate3_4,codeTemplate3_5} = section3 || {};
    const {title4,codeTemplate4_1,codeTemplate4_2,codeTemplate4_3, codeTemplate4_4,codeTemplate4_5,desc4_1,desc4_2,desc4_3,desc4_4,desc4_5} = section4 || {};
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                    {/* Code Snippit1  */}

                <Box>
                    <CodeBox codeSnippet={codeTemplate1_1}></CodeBox>
                    

                </Box> 
            

                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>

                <Typography mt={3} variant='subtitle1'>{desc2_1}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc2_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_3}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc2_4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2_6}</Typography>
               
                   <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: While strings in Sass provide flexibility and functionality, it's important to use them judiciously. Overusing strings or excessively relying on dynamic values can make your code harder to maintain and understand. It's recommended to strike a balance and consider the specific needs of your project when deciding to use strings in Sass.
                   </MuiAlert>
                </Box>
                
                

                <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                 <Block list={list3_1}></Block>
               
                   {/* Code Snippit 1 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_1}></CodeBox>
                </Box> 
                 <Block list={list3_2}></Block>
            
                    {/* Code Snippit 2 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                </Box> 
                <Typography mt={3}
                    variant='subtitle1'>{desc3_1}</Typography>
                
                
                 <Block list={list3_3}></Block>
                    {/* Code Snippit 3 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_3}></CodeBox>
                </Box> 
               
                <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
                <Block list={list3_4}></Block>
                    {/* Code Snippit 4 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_4}></CodeBox>
                </Box> 
                <Block list={list3_5}></Block>
                    {/* Code Snippit 5 */}

                <Box>
                <CodeBox codeSnippet={codeTemplate3_5}></CodeBox>
                </Box> 

               

                {/*example  */}
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4_1}</Typography>
                  {/* Code Snippit 6 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_1}></CodeBox>
                </Box> 
                   <Typography mt={3} variant='subtitle1'>{desc4_2}</Typography>
                  {/* Code Snippit 7 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_2}></CodeBox>
                </Box> 
                   <Typography mt={3} variant='subtitle1'>{desc4_3}</Typography>
                  {/* Code Snippit 8 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_3}></CodeBox>
                </Box>
                  <Typography mt={3} variant='subtitle1'>{desc4_4}</Typography>
                  {/* Code Snippit 9*/}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_4}></CodeBox>
                </Box>
                  <Typography mt={3} variant='subtitle1'>{desc4_5}</Typography>
                  {/* Code Snippit 10 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate4_5}></CodeBox>
                </Box>
                 {/* Output */}

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <SassStringOutput></SassStringOutput>
              

             


                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default SassString  ;