import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const DoWhileLoop = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'dowhileloop');

    //destructuring
    const { section1, section2, section3, section4, section5,section6,section7,section8,section9,section10,section11 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2,desc2,codeTemplate2,desc,list2 } = section2 || {};
    const {  desc3,codeTemplate3 } = section3 || {};
    const { title4,desc4,codeTemplate4} = section4 || {};
    const { desc5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {}
    const { desc7,codeTemplate7 } = section7 || {};



    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title1}</Typography>
                <Typography variant='subtitle1'>{desc1}</Typography>
                
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                 {/* Code snippet 1 */}
                <CodeBox mt={3} codeSnippet={codeTemplate2}></CodeBox>
               
                <Typography mt={3} variant='subtitle1'>{desc}</Typography>
                 <Typography mt={3} variant='h3'>{title2}</Typography>
                <Block list={list2}></Block>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                   {/* Code snippet 2 */}
                <CodeBox mt={3} codeSnippet={codeTemplate3}></CodeBox>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                <Typography mt={3} variant='h3'>{title4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                    {/* Code snippet 3 */}
                <CodeBox mt={3} codeSnippet={codeTemplate4}></CodeBox>
                 <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                   {/* Code snippet 2 */}
                <CodeBox mt={3} codeSnippet={codeTemplate6}></CodeBox>
                 <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                   {/* Code snippet 2 */}
                <CodeBox mt={3} codeSnippet={codeTemplate7}></CodeBox>
                

                
                


                <br></br>

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default DoWhileLoop;