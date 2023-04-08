import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const LoopIntro = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'loopIntro');

    //destructuring
    const { title, desc, desc_2, list, section1, section2, section3 } = data || {};
    const { desc1, codeTemplate1, desc1_2 } = section1 || {};
    const { title2, desc2 } = section2 || {};
    const { desc3, list3 } = section3 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <Typography variant='subtitle1'>{desc_2}</Typography>
                <Block list={list}></Block>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                    <Typography variant='subtitle1'>{desc1_2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title2}</Typography>
                    <Typography variant='subtitle1'>{desc2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <Block list={list3}></Block>

                </Box>

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default LoopIntro;