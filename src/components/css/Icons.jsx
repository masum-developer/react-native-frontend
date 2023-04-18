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
import ListsOutput5 from '../global/Listsoutput5';
import ClassCssOutput from '../global/ClassCssOutput';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import IconOutput from '../global/IconOutput';




const Icons = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'icons');
    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { title4, desc4, list4, codeTemplate4 } = section4 || {};
    const { desc5, list5, codeTemplate5 } = section5 || {};
    const { desc6, list6, codeTemplate6 } = section6 || {};
    const { desc7,title7,codeTemplate7 } = section7 || {};
   
   
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box >

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
           
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                
                <Block list={list4}></Block>
                   {/* Code Snippit 1 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Block list={list5}></Block>
                     {/* Code Snippit 2 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Block list={list6}></Block>
                  {/* Code Snippit 3 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                <Typography mt={3} variant='h3'>{title7}</Typography>
                  {/* Code Snippit 4 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>
                              {/* Output */}
             <Box mt={3}>
                    <Typography variant='h4'>Output: </Typography>
                    
                    <IconOutput></IconOutput>

                    <br></br>

</Box>



          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Icons;