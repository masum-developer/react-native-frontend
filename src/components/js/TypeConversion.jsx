import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import MuiAlert from '@mui/material/Alert';

const TypeConversion = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'typeConversion');

    //destructuring
    const { title, desc, title_2, desc_2, codeTemplate, desc_3, title_3, desc_4, codeTemplate_2, desc_5, section1 } = data || {};
    const { title1, desc1, list1 } = section1 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <Typography mt={2} variant='h3'>{title_2}</Typography>
                <Typography variant='subtitle1'>{desc_2}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle1'>{desc_3}</Typography>
                <Typography mt={2} variant='h3'>{title_3}</Typography>
                <Typography variant='subtitle1'>{desc_4}</Typography>
                <CodeBox codeSnippet={codeTemplate_2}></CodeBox>
                <Typography variant='subtitle1'>{desc_5}</Typography>

                <Box mt={3}>
                    <Typography variant='h3'>{title1}</Typography>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <Block list={list1}></Block>
                </Box>
            

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default TypeConversion;