import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const IfElse = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'if-else');

    //destructuring
    const { title, desc, codeTemplate, desc_2, codeTemplate_2, desc_3, section1, section2, section3, section4 } = data || {};
    const { title1, desc1, desc1_2, desc1_3, desc1_4, list1 } = section1 || {};
    const { title2, desc2, codeTemplate2 } = section2 || {};
    const { desc3, codeTemplate3, desc3_2 } = section3 || {};
    const { desc4, codeTemplate4, desc4_2 } = section4 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle1'>{desc_2}</Typography>
                <CodeBox codeSnippet={codeTemplate_2}></CodeBox>
                <Typography variant='subtitle1'>{desc_3}</Typography>

                <Box mt={3}>
                    <Typography variant='h3'>{title1}</Typography>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <Typography variant='subtitle1'>{desc1_2}</Typography>
                    <Typography variant='subtitle1'>{desc1_3}</Typography>
                    <Typography variant='subtitle1'>{desc1_4}</Typography>
                    <Block list={list1}></Block>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title2}</Typography>
                    <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                    <Typography variant='subtitle1'>{desc3_2}</Typography>
                </Box>
                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc4}</Typography>
                    <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                    <Typography variant='subtitle1'>{desc4_2}</Typography>
                </Box>

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default IfElse;