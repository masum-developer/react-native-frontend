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
import CssImagesOutput from '../global/CssImagesOutput';







const CssImages = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'cssimages');
    //destructuring
    const { section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { desc3 } = section3 || {};
    const { title4, desc4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { desc6 } = section6 || {};
    const { title7, desc7 } = section7 || {};
    const { list8, codeTemplate8 } = section8 || {};
    const { desc9, list9, codeTemplate9 } = section9 || {};
    const { desc10 } = section10 || {};
    const { title11, desc11, codeTemplate11 } = section11 || {};
    const { desc12, codeTemplate12 } = section12 || {};
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                <Typography mt={3} variant='h3'>{title7}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                <Block list={list8}></Block>
                    {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                <Block list={list9}></Block>
                     {/* Code Snippit 1 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                 <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: It's important to note that when using images in CSS, it's generally a good idea to optimize the images for web use by compressing and resizing them to reduce their file size and ensure faster loading times.
                   </MuiAlert>
                </Box>
                {/* Example */}
                <Typography mt={3} variant='h3'>{title11}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
                      {/* Code Snippit 2 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate11}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
                     {/* Code Snippit 3 */}

                <Box>

                <CodeBox codeSnippet={codeTemplate12}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>Output:</Typography>

                <CssImagesOutput></CssImagesOutput>
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default CssImages;