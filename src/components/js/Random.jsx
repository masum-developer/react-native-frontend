import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const Random = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'random');

    //destructuring
    const { title, desc, codeTemplate, section1, section2, section3 } = data || {};
    const { desc1, codeTemplate1, desc1_2 } = section1 || {};
    const { title2, list2 } = section2 || {};
    const { title3, desc3, codeTemplate3 } = section3 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                    <Typography mt={1} variant='subtitle1'>{desc1_2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title2}</Typography>
                    <Block list={list2}></Block>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title3}</Typography>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box>

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default Random;