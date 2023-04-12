import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import MuiAlert from '@mui/material/Alert';

const ScopeComp = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'scope');

    //destructuring
    const { title, desc, codeTemplate, desc_2, section1, section2, section3, section4 } = data || {};
    const { title1, list1, desc1_2, desc1_3, desc1_4 } = section1 || {};
    const { title2, desc2, codeTemplate2, desc2_2 } = section2 || {};
    const { title3, desc3, codeTemplate3, desc3_2 } = section3 || {};
    const { title4, desc4, codeTemplate4, desc4_2 } = section4 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle1'>{desc_2}</Typography>

                <Box mt={3}>
                    <Typography variant='h3'>{title1}</Typography>
                    <Block list={list1}></Block>
                    <Typography variant='subtitle1'>{desc1_2}</Typography>
                    <Typography variant='subtitle1'>{desc1_3}</Typography>
                    <Typography variant='subtitle1'>{desc1_4}</Typography>
                </Box>
                    <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
                    ES6 introduced two important new JavaScript keywords: (let and const). These two keywords provide Block Scope in JavaScript.</MuiAlert>
                    </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title2}</Typography>
                    <Typography variant='subtitle1'>{desc2}</Typography>
                    <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                    <Typography variant='subtitle1'>{desc2_2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title3}</Typography>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                    <Typography variant='subtitle1'>{desc3_2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title4}</Typography>
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

export default ScopeComp;