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
import PositionOutput from '../global/PositionOutput';





const Position = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'position');
    //destructuring
    const { section1,section2,section3,section4,section5,section6,section7,section8,section9,section10} = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, list2 } = section2 || {};
    const { title3, desc3, list3 } = section3 || {};
    const { title4, desc4 } = section4 || {};
    const { list5, codeTemplate5 } = section5 || {};
    const { list6, codeTemplate6 } = section6 || {};
    const { list7, codeTemplate7 } = section7 || {};
    const { list8, codeTemplate8 } = section8 || {};
    const { list9, codeTemplate9 } = section9 || {};
    const{title10,codeTemplate10}=section10||{}
    


   
    
   
    
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
                <Block list={list3}></Block>
                 <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Block list={list5}></Block>
                   {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box>
                <Block list={list6}></Block>
                 {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                </Box>
                <Block list={list7}></Block>
                 {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>
                <Block list={list8}></Block>
                 {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                </Box>
                <Block list={list9}></Block>
                 {/* Code Snippit 5 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title10}</Typography>
                 {/* Code Snippit 6 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate10}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>Output</Typography>
                <PositionOutput></PositionOutput>
                <br></br>
                <br></br>




                
              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Position;