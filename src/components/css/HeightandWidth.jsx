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
import HtmlOutput from '../global/HtmlOutput';


const HeightandWidth = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'heightandwidth');
    //destructuring
    const { section1, section2, section3, section4 ,section5,section6,section7,section8,section9,section10} = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { desc4, title4, list4 } = section4 || {};
    const { desc5, title5, list5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {};
    const { desc7, codeTemplate7 } = section7 || {};
    const { desc8, title8, codeTemplate8 } = section8 || {};
    const { desc9 } = section9 || {};
    const { desc10 } = section10 || {};
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box >

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Block list={list4}></Block>

                <Typography mt={3} variant='h3'>{title5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Block list={list5}></Block>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                 {/* Code Snippet 1 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                   {/* Code Snippet 2 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                <Typography mt={3} variant='h3'>{title8}</Typography>
                  {/* Code Snippet 3 */}

             <Box>

                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                </Box> 
                <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <HtmlOutput images2="hero.png" ></HtmlOutput>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                <br></br>

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default HeightandWidth;