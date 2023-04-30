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
import CssGridOutput1 from '../global/CssGridOuput1';
import CssGridOutput2 from '../global/CssGridOutput2';

const Grid = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'grid');
    //destructuring
    const { section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12, section13,section14,section15,section16,section17 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, list2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { title4, desc4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { desc6 } = section6 || {};
    const { desc7 } = section7 || {};
    const { desc8 } = section8 || {};
    const { desc9 } = section9 || {};
    const { title10, desc10 } = section10 || {};
    const { list11, codeTemplate11 } = section11 || {};
    const { list12, codeTemplate12, desc12 } = section12 || {};
    const { list13, codeTemplate13, desc13 } = section13 || {};
    const { list14 } = section14 || {};
    const { title15, desc15, codeTemplate15 } = section15 || {};
    const { desc16, codeTemplate16 } = section16 || {};
    


    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note:  Important properties of grid include grid-gap, which sets the space between rows and columns, and grid-auto-rows and grid-auto-columns, which define the size of rows and columns that are not explicitly defined
                   </MuiAlert>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                 <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                 <Typography mt={3} variant='subtitle1'>{desc5}</Typography> <Typography mt={3} variant='subtitle1'>{desc6}</Typography> <Typography mt={3} variant='subtitle1'>{desc7}</Typography> <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                 <Typography mt={3} variant='h3'>{title10}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                <Block list={list11}></Block>


                 {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate11}></CodeBox>
                </Box>
                   <Block list={list12}></Block>


                 {/* Code Snippit 2*/}

                <Box>

                <CodeBox codeSnippet={codeTemplate12}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
                    <Block list={list13}></Block>


                 {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate13}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc13}</Typography>
                <Block list={list14}></Block>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title15}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc15}</Typography>
                   {/* Code Snippit 4 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate15}></CodeBox>
                </Box>
                 <Typography mt={3} variant='subtitle1'>Output:</Typography>
                

                <CssGridOutput1></CssGridOutput1>
                <Typography mt={3} variant='subtitle1'>{desc16}</Typography>
                   {/* Code Snippit 5 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate16}></CodeBox>
                </Box>
                   <Typography mt={3} variant='subtitle1'>Output:</Typography>

                <CssGridOutput2></CssGridOutput2>
                


           



                

           


                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Grid;