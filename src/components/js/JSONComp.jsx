import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import MuiAlert from '@mui/material/Alert';

const JSONComp = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'json');

    //destructuring
    const { title, desc, desc_2, codeTemplate, desc_3, section1, section2 } = data || {};
    const { title1, desc1, list1 } = section1 || {};
    const { desc2, codeTemplate2, desc2_2 } = section2 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <Typography variant='subtitle1'>{desc_2}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle1'>{desc_3}</Typography>

                <Box mt={3}>
                    <Typography variant='h3'>{title1}</Typography>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <Block list={list1}></Block>
                </Box>

                <Box mt={3}>
                    <Typography variant='h3'>{desc2}</Typography>
                    <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                    <Typography variant='subtitle1'>{desc2_2}</Typography>
                </Box>


            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default JSONComp;