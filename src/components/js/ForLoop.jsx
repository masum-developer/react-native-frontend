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
    const { desc, desc_2, title, codeTemplate, section1, section2, section3 } = data || {};
    const { desc1, list1 } = section1 || {};
    const { desc2, codeTemplate2, desc2_2 } = section2 || {};

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

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default ForLoop;