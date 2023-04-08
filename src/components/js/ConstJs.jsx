import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const ConstJs = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'constJs');

    //destructuring
    const { title, desc, section1, section2, section3, section4 } = data || {};
    const { desc1, codeTemplate1 } = section1 || {};
    const { desc2, codeTemplate2, desc2_2, codeTemplate2_2, desc2_3 } = section2 || {};
    const { title3, list3, desc3 } = section3 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc2}</Typography>
                    <CodeBox codeSnippet={codeTemplate2}></CodeBox>

                    <Box mt={1}>
                        <Typography variant='subtitle1'>{desc2_2}</Typography>
                        <CodeBox codeSnippet={codeTemplate2_2}></CodeBox>
                        <Typography variant='subtitle1'>{desc2_3}</Typography>
                    </Box>
                </Box>

                <Box mt={3} pb={2}>
                    <Typography variant='h3'>{title3}</Typography>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <Block list={list3}></Block>
                </Box>
            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default ConstJs;