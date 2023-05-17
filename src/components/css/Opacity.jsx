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
import OpacityOutput from '../global/OpacityOutput1';
import OpacityOutput1 from '../global/OpacityOutput1';









const OpacityCSS = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'opacity');
    //destructuring
    const { section1, section2, section3, section4 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { desc2, title2, list2 } = section2 || {};
    const { desc3, title3, desc3_1, desc3_2, desc3_3, desc3_4, desc3_5, codeTemplate3_1, codeTemplate3_2, codeTemplate3_3, codeTemplate3_4 } = section3 || {};
    const { title4_1, codeTemplate4_1, codeTemplate4_2 } = section4 || {};







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
                {/* Code Snippit 3 */}

                <Box>


                    <CodeBox codeSnippet={codeTemplate3_3}></CodeBox>
                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3_4}</Typography>
                {/* Code Snippit 4 */}

                <Box>


                    <CodeBox codeSnippet={codeTemplate3_4}></CodeBox>

                </Box>
                <Typography mt={3} variant='subtitle1'>{desc3_5}</Typography>
                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note:These are just a few examples of how you can use opacity in CSS. There are many other ways to use opacity to achieve different effects, depending on your specific needs.
                    </MuiAlert>
                </Box>
                {/* Example1 */}
                <Typography mt={3} variant='h3'>{title4_1}</Typography>






                {/* Code Snippit 6 */}

                <Box mt={3}>


                    <CodeBox codeSnippet={codeTemplate4_2}></CodeBox>
                </Box>

                <Typography mt={3} variant='subtitle1'>Output:</Typography>
                <OpacityOutput1></OpacityOutput1>
































                <br></br>





















            </Box> :
            <CircularIndeterminate></CircularIndeterminate>

        }
        </>
    );
};
export default OpacityCSS;