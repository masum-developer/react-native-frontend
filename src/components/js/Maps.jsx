import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';

const Maps = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'map');

    //destructuring
    const { title, desc, desc_2, desc_3, codeTemplate, desc_4, desc_5, section1, section2, section3 } = data || {};
    const { desc1, list1 } = section1 || {};
    const { title2, desc2, codeTemplate2, desc2_2 } = section2 || {};
    const { title3, desc3, list3, codeTemplate3, desc3_2 } = section3 || {};

    return (
        <>{Object.keys(data).length > 0 ?
            <Box>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='subtitle1'>{desc}</Typography>
                <Typography variant='subtitle1'>{desc_2}</Typography>
                <Typography variant='subtitle1'>{desc_3}</Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle1'>{desc_4}</Typography>
                <Typography variant='subtitle1'>{desc_5}</Typography>

                <Box mt={3}>
                    <Typography variant='subtitle1'>{desc1}</Typography>
                    <Block list={list1}></Block>
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
                    <Block list={list3}></Block>
                    <Typography mt={3} variant='subtitle1'>{desc3_2}</Typography>
                    <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                </Box>

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        }
        </>

    );
};

export default Maps;