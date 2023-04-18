import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import htmlData from '../../localDb/HTML';
import { useState } from 'react';
import useFind from '../../hooks/useFind';

const Introduction = () => {
    //fetching data from custom hooks
    const data = useFind(htmlData, 'introduction');

    //destructuring
    const { desc, title, section1, section2 } = data || {};
    const { title1, desc1, lists1 } =  section1 || {};
    const { title2, codeTemplate2 } = section2 || {};

    return (
        <Box >
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='subtitle1'>{desc}</Typography>

            <Typography variant='h3' mt={3}>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>

            <Box mt={1}>
                {
                    lists1?.map((item, i) => <List key={i} item={item}></List>)
                }
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>{title2}</Typography>
                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
            </Box>
        </Box>
        
    );
};

export default Introduction;