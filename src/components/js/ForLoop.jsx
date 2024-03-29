import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const ForLoop = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'forLoop');

    //destructuring
    const { desc, desc_2, title, codeTemplate, section1, section2, section3, section4, section5 } = data || {};
    const { desc1, list1 } = section1 || {};
    const { desc2, codeTemplate2, desc2_2 } = section2 || {};
    const { title3, desc3, desc3_2, codeTemplate3 } = section3 || {};
    const { desc4, codeTemplate4 } = section4 || {};
    const { desc5, codeTemplate5 } = section5 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <Typography variant='subtitle1'>{desc_2}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <Block list={list1}></Block>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc2}</Typography>
                    <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                    <Typography variant='subtitle1'>{desc2_2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title3}</Typography>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <Typography variant='subtitle1'>{desc3_2}</Typography>
                    <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc4}</Typography>
                    <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc5}</Typography>
                    <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                </Box>

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default ForLoop;