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
import CssTablesOutput from '../global/CSSTablesOutput';





const CssTables = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'css_table');
    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7,section8} = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, list2 } = section2 || {};
    const { desc3, codeTemplate3 } = section3 || {};
    const { desc4 } = section4 || {};
    const { title5, desc5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {};
    const { desc7, codeTemplate7 } = section7 || {};
    const { title8,desc8,codeTemplate8 } = section8 || {};
    
   
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box >

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                  {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                
                <Typography mt={3} variant='h3'>{title8}</Typography>
                {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'><b>Output</b></Typography>
                <CssTablesOutput></CssTablesOutput>
                <br></br>


           




                
                

                


          

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default CssTables;