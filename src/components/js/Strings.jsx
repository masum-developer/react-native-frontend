import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const Strings = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'strings');

    //destructuring
    const { title, desc, section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12 } = data || {};
    const { desc1, codeTemplate1 } = section1 || {};
    const { codeTemplate2 } = section2 || {};
    const { desc3, title3 } = section3 || {};
    const { desc4, codeTemplate4 } = section4 || {};
    const { desc5, codeTemplate5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {};
    const { desc7, codeTemplate7 } = section7 || {};
    const { desc8, codeTemplate8 } = section8 || {};
    const { desc9, codeTemplate9 } = section9 || {};
    const { desc10, codeTemplate10 } = section10 || {};
    const { desc11, codeTemplate11 } = section11 || {};
    const { desc12, codeTemplate12, desc12_2 } = section12 || {};

    return (
            <>{Object.keys(data).length > 0 ?
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                    <Typography variant='subtitle1'>{desc}</Typography>

                    <Box mt={3}>
                        <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                        <Typography variant='subtitle1'>{desc1}</Typography>
                    </Box>

                    <Box mt={1}>
                        <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='h3'>{title3}</Typography>
                        <Typography variant='subtitle1'>{desc3}</Typography>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc4}</Typography>
                        <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc5}</Typography>
                        <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                    </Box>

                    <Box mt={3} >
                        <Typography variant='subtitle1'>{desc6}</Typography>
                        <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                    </Box>

                    <Box mt={3} >
                        <Typography variant='subtitle1'>{desc7}</Typography>
                        <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                    </Box>

                    <Box mt={3} >
                        <Typography variant='subtitle1'>{desc8}</Typography>
                        <CodeBox codeSnippet={codeTemplate8}></CodeBox>
                    </Box>

                    <Box mt={3} >
                        <Typography variant='subtitle1'>{desc9}</Typography>
                        <CodeBox codeSnippet={codeTemplate9}></CodeBox>
                    </Box>

                    <Box mt={3} >
                        <Typography variant='subtitle1'>{desc10}</Typography>
                        <CodeBox codeSnippet={codeTemplate10}></CodeBox>
                    </Box>

                    <Box mt={3} >
                        <Typography variant='subtitle1'>{desc11}</Typography>
                        <CodeBox codeSnippet={codeTemplate11}></CodeBox>
                    </Box>

                    <Box mt={3} pb={2}>
                        <Typography variant='subtitle1'>{desc12}</Typography>
                        <CodeBox codeSnippet={codeTemplate12}></CodeBox>
                        <Typography variant='subtitle1'>{desc12_2}</Typography>
                    </Box>


                </Box> :
                <CircularIndeterminate></CircularIndeterminate>
            }
            </>

        );
};

export default Strings;