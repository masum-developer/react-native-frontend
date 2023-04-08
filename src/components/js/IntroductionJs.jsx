import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';

const IntroductionJs = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'introductionJs');

    //destructuring
    const { desc, section1, section2 } = data || {};
    const { title1, desc1, lists1 } =  section1 || {};
    const { title2, codeTemplate2, codeTemplate2desc } = section2 || {};

    return (
        <Box>
            <Typography variant='subtitle1'>{desc}</Typography>

            <Typography variant='h3' mt={3}>{title1}</Typography>
            <Typography variant='subtitle1'>{desc1}</Typography>

            <Box mt={1}>
                {
                    lists1?.map((item, i) => <List key={i} item={item}></List>)
                }
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>{title2}</Typography>
                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                <Typography mt={2} variant='subtitle1'>{codeTemplate2desc}</Typography>
            </Box>
        </Box>
        
    );
};

export default IntroductionJs;