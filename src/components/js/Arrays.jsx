import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const Arrays = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'array');

    //destructuring
    const { title, desc, codeTemplate, desc_1, desc_2, codeTemplate_1, section1, section2, section3, section4, section5, section6, section7, section8, section9 } = data || {};
    const { title1, desc1, list1, desc1_2 } = section1 || {};
    const { title2, desc2 } = section2 || {};
    const { desc3, codeTemplate3 } = section3 || {};
    const { desc4, codeTemplate4 } = section4 || {};
    const { title5, desc5, codeTemplate5 } = section5 || {};
    const { desc6, codeTemplate6 } = section6 || {};
    const { desc7, codeTemplate7 } = section7 || {};
    const { desc8, codeTemplate8 } = section8 || {};
    const { desc9, codeTemplate9, desc9_2 } = section9 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle1'>{desc_1}</Typography>
                <CodeBox codeSnippet={codeTemplate_1}></CodeBox>
                <Typography variant='subtitle1'>{desc_2}</Typography>

                <Box mt={3}>
                    <Typography variant='h3'>{title1}</Typography>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <Block list={list1} ></Block>
                    <Typography mt={1} variant='subtitle1'>{desc1_2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{title2}</Typography>
                    <Typography variant='subtitle1'>{desc2}</Typography>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc3}</Typography>
                    <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc4}</Typography>
                    <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                </Box>

                <Box mt={3}>
                <Typography mb={1} variant='h4'>{title5}</Typography>
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
                    <Typography variant='subtitle1'>{desc9_2}</Typography>
                </Box>


            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default Arrays;