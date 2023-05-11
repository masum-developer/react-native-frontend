import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const WhileLoop = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'whileloop');

    //destructuring
    const { section1, section2, section3, section4, section5,section6,section7,section8,section9,section10,section11 } = data || {};
    const { title1, desc, desc1, codeTemplate1 } = section1 || {};
    const { desc2 } = section2 || {};
    const { title3, desc3, list3 } = section3 || {};
    const { desc4, codeTemplate4 } = section4 || {};
    const { desc5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {}
    const { desc7 } = section7 || {};
    const { title8, desc8 } = section8 || {};
    const { desc9, codeTemplate9 } = section9 || {};
    const { desc10, codeTemplate10 } = section10 || {};
    const { desc11, codeTemplate11 } = section11 || {};


    return (
        <>
            <Box>
                <Typography variant='h3'>{title1}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                {/* Code snippet 1 */}
                <CodeBox mt={3} codeSnippet={codeTemplate1}></CodeBox>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Block list={list3}></Block>
                <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
                 {/* Code snippet 2 */}
                <CodeBox mt={3} codeSnippet={codeTemplate4}></CodeBox>
                <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
                   {/* Code snippet 3 */}
                <CodeBox mt={3} codeSnippet={codeTemplate6}></CodeBox>
                <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
                <Typography mt={3} variant='h3'>{title8}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc8}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
                   {/* Code snippet 4 */}
                <CodeBox mt={3} codeSnippet={codeTemplate9}></CodeBox>
                 <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
                   {/* Code snippet 4 */}
                <CodeBox mt={3} codeSnippet={codeTemplate10}></CodeBox>
                 <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
                   {/* Code snippet 4 */}
                <CodeBox mt={3} codeSnippet={codeTemplate11}></CodeBox>
                


                <br></br>

            </Box>
        </>

    );
};

export default WhileLoop;